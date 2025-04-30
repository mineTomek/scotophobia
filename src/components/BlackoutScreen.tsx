import { useEffect, useState } from "react";

function BlackoutScreen() {
  const [shown, setShown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const blackoutTimeout = setTimeout(() => {
      setShown(true);
    }, (Math.random() * 10 + 10) * 1000); // Random time between 10-20 seconds

    return () => clearTimeout(blackoutTimeout);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const mousePosScale = 1.5;

    const offsetX = e.clientX - window.innerWidth / 2;
    const offsetY = e.clientY - window.innerHeight / 2;

    const scaledX = offsetX * mousePosScale + window.innerWidth / 2;
    const scaledY = offsetY * mousePosScale + window.innerHeight / 2;

    // Update the state with the new position
    setMousePosition({
      x: `${scaledX}px`,
      y: `${scaledY}px`,
    });
  };

  const flashlightSize = 150;

  const flashlightGradient = `radial-gradient(
          circle 600px at ${mousePosition.x} ${mousePosition.y},
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.1)  ${flashlightSize - 30}px,
          rgba(0, 0, 0, 0.05) ${flashlightSize - 20}px,
          rgba(0, 0, 0, 0.2)  ${flashlightSize}px,
          rgba(0, 0, 0, 0.97) ${flashlightSize + 15}px,
          /*
          rgba(0, 0, 0, 0.98) ${flashlightSize + 45}px,
          rgba(0, 0, 0, 0.9)  ${flashlightSize + 50}px,
          rgba(0, 0, 0, 0.9)  ${flashlightSize + 52}px,
          rgba(0, 0, 0, 0.98) ${flashlightSize + 57}px,
          */
          rgba(0, 0, 0, 1) 100%
        )`;

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        opacity: shown ? 1 : 0,
        WebkitMaskImage: flashlightGradient,
        maskImage: flashlightGradient,
      }}
      className={
        "transition-opacity duration-1000 ease-in-out -backdrop-hue-rotate-30 backdrop-brightness-2 backdrop-blur-xs. backdrop-contrast-90 backdrop-grayscale-25 z-50 fixed inset-0"
      }
    />
  );
}

export default BlackoutScreen;
