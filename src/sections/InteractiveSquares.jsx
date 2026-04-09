// components/InteractiveSquares.js
import React, { useRef, useEffect } from "react";
import { Box, useTheme } from "@mui/material";

const InteractiveSquares = ({
  direction = "diagonal",
  speed = 0.4,
  borderColor,
  hoverFillColor,
  squareSize = 40,
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const theme = useTheme();
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef(null);

  // Use theme-aware default colors based on your theme palette
  const effectiveBorderColor = borderColor || (theme.palette.mode === 'dark' 
    ? 'rgba(203, 167, 124, 0.2)' // Warm sand color from dark theme secondary with low opacity
    : 'rgba(45, 48, 71, 0.1)'); // Deep indigo-gray from light theme primary with low opacity
  
  const effectiveHoverFillColor = hoverFillColor || (theme.palette.mode === 'dark'
    ? 'rgba(203, 167, 124, 0.15)' // Warm sand with slightly higher opacity on hover
    : 'rgba(45, 48, 71, 0.08)'); // Deep indigo-gray on hover

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // eslint-disable-next-line no-unused-vars
    let numSquaresX;
    // eslint-disable-next-line no-unused-vars
    let numSquaresY;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      numSquaresX = Math.ceil(canvas.width / squareSize) + 2;
      numSquaresY = Math.ceil(canvas.height / squareSize) + 2;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX =
        Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY =
        Math.floor(gridOffset.current.y / squareSize) * squareSize;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (
          let y = startY;
          y < canvas.height + squareSize;
          y += squareSize
        ) {
          const squareX =
            x - (gridOffset.current.x % squareSize);
          const squareY =
            y - (gridOffset.current.y % squareSize);

          const squareIndexX = Math.floor(
            (x - startX) / squareSize
          );

          const squareIndexY = Math.floor(
            (y - startY) / squareSize
          );

          // Hover fill
          if (
            hoveredSquare.current &&
            hoveredSquare.current.x === squareIndexX &&
            hoveredSquare.current.y === squareIndexY
          ) {
            ctx.fillStyle = effectiveHoverFillColor;
            ctx.fillRect(
              squareX,
              squareY,
              squareSize,
              squareSize
            );
          }

          // Border
          ctx.strokeStyle = effectiveBorderColor;
          ctx.strokeRect(
            squareX,
            squareY,
            squareSize,
            squareSize
          );
        }
      }

      // Gradient fade center - make it theme aware
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 1.5
      );

      if (theme.palette.mode === 'dark') {
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(0.7, "rgba(0,0,0,0.5)");
        gradient.addColorStop(1, "rgba(0,0,0,0.95)");
      } else {
        gradient.addColorStop(0, "rgba(255,255,255,0)");
        gradient.addColorStop(0.7, "rgba(255,255,255,0.3)");
        gradient.addColorStop(1, "rgba(255,255,255,0.95)");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      const effectiveSpeed = Math.max(speed, 0.1);

      switch (direction) {
        case "right":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) %
            squareSize;
          break;

        case "left":
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed) %
            squareSize;
          break;

        case "up":
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed) %
            squareSize;
          break;

        case "down":
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) %
            squareSize;
          break;

        case "diagonal":
        default:
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) %
            squareSize;

          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) %
            squareSize;
      }

      drawGrid();

      animationRef.current =
        requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const startX =
        Math.floor(gridOffset.current.x / squareSize) *
        squareSize;

      const startY =
        Math.floor(gridOffset.current.y / squareSize) *
        squareSize;

      hoveredSquare.current = {
        x: Math.floor(
          (mouseX + gridOffset.current.x - startX) /
            squareSize
        ),
        y: Math.floor(
          (mouseY + gridOffset.current.y - startY) /
            squareSize
        ),
      };
    };

    const handleLeave = () => {
      hoveredSquare.current = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);

      canvas.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      canvas.removeEventListener(
        "mouseleave",
        handleLeave
      );
    };
  }, [direction, speed, effectiveBorderColor, effectiveHoverFillColor, squareSize, theme.palette.mode]);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      sx={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default InteractiveSquares;