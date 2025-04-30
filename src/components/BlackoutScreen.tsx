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

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        opacity: shown ? 1 : 0,
        WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x} ${mousePosition.y}, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 1) 100%)`,
        maskImage: `radial-gradient(circle 250px at ${mousePosition.x} ${mousePosition.y}, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 1) 100%)`,
      }}
      className={
        "transition-opacity duration-1000 ease-in-out -backdrop-hue-rotate-30 backdrop-brightness-2 backdrop-blur-xs. backdrop-contrast-90 backdrop-grayscale-25 z-50 fixed inset-0"
      }
    />
  );
}

export default BlackoutScreen;
