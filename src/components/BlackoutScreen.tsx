import { useEffect, useState, useRef } from "react";

const setCookie = (name: string, value: string, minutes: number) => {
  const expires = new Date(Date.now() + minutes * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const getCookie = (name: string) => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((c) => c.startsWith(`${name}=`));
  return cookie ? cookie.split("=")[1] : null;
};

function BlackoutScreen() {
  const [shown, setShown] = useState(false);
  const [flashlightActive, setFlashlightActive] = useState(false);
  const [transitionBlackout, setTransitionBlackout] = useState(false);

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
  const smoothingFactor = 0.4;

  // Blackout & flashlight
  useEffect(() => {
    const savedBlackoutState = getCookie("blackoutActive");
    console.log("Saved blackout state:", savedBlackoutState);

    if (savedBlackoutState === "true") {
      setShown(true);
      setFlashlightActive(true);

      return;
    }

    setTransitionBlackout(true);

    let flashlightActivationTimeout: number | undefined = undefined;

    const blackoutTimeout = setTimeout(() => {
      setShown(true);

      setCookie("blackoutActive", "true", 0.5);

      flashlightActivationTimeout = setTimeout(() => {
        setFlashlightActive(true);
      }, (Math.random() * 1 + 1) * 1000); // 1-2
    }, (Math.random() * 5 + 2) * 1000); // 2-7

    return () => {
      clearTimeout(blackoutTimeout);
      clearTimeout(flashlightActivationTimeout);
    };
  }, []);

  // Mouse position
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      targetPosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  // Smooth movement
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
          circle 600px at ${
            flashlightActive ? mousePosition.x : -flashlightSize
          } ${flashlightActive ? mousePosition.y : -flashlightSize},
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
        "pointer-events-none -backdrop-hue-rotate-30 backdrop-brightness-2 backdrop-contrast-90 backdrop-grayscale-25 z-50 fixed inset-0" +
        (transitionBlackout
          ? " transition-opacity duration-1000 ease-in-out"
          : "")
      }
    />
  );
}

export default BlackoutScreen;
