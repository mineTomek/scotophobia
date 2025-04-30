import { useEffect, useState, useRef } from "react";

function BlackoutScreen() {
  const [shown, setShown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });
  const targetPosition = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const currentPosition = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const flashlightSize = 150;
  const mousePosScale = 1.7;
  const smoothingFactor = 0.4;
  const posBarrierFactor = 0.6;

  useEffect(() => {
    const blackoutTimeout = setTimeout(() => {
      setShown(true);
    }, (Math.random() * 10 + 10) * 1000);

    return () => clearTimeout(blackoutTimeout);
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      targetPosition.current = {
        x: Math.max(
          Math.min(
            (e.clientX - window.innerWidth / 2) * mousePosScale +
              window.innerWidth / 2,
            window.innerWidth + flashlightSize * posBarrierFactor
          ),
          -flashlightSize * posBarrierFactor
        ),
        y: Math.max(
          Math.min(
            (e.clientY - window.innerHeight / 2) * mousePosScale +
              window.innerHeight / 2,
            window.innerHeight + flashlightSize * posBarrierFactor
          ),
          -flashlightSize * posBarrierFactor
        ),
      };
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  useEffect(() => {
    const smoothMovement = () => {
      currentPosition.current.x +=
        (targetPosition.current.x - currentPosition.current.x) *
        smoothingFactor;
      currentPosition.current.y +=
        (targetPosition.current.y - currentPosition.current.y) *
        smoothingFactor;

      setMousePosition({
        x: `${currentPosition.current.x}px`,
        y: `${currentPosition.current.y}px`,
      });

      requestAnimationFrame(smoothMovement);
    };

    const animationFrame = requestAnimationFrame(smoothMovement);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const flashlightGradient = `radial-gradient(
          circle 600px at ${mousePosition.x} ${mousePosition.y},
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.1)  ${flashlightSize - 30}px,
          rgba(0, 0, 0, 0.05) ${flashlightSize - 20}px,
          rgba(0, 0, 0, 0.2)  ${flashlightSize}px,
          rgba(0, 0, 0, 0.97) ${flashlightSize + 15}px,
          rgba(0, 0, 0, 1) 100%
        )`;

  return (
    <div
      style={{
        opacity: shown ? 1 : 0,
        WebkitMaskImage: flashlightGradient,
        maskImage: flashlightGradient,
      }}
      className={
        "transition-opacity pointer-events-none duration-1000 ease-in-out -backdrop-hue-rotate-30 backdrop-brightness-2 backdrop-contrast-90 backdrop-grayscale-25 z-50 fixed inset-0"
      }
    />
  );
}

export default BlackoutScreen;
