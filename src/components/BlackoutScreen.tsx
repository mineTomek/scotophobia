import { useEffect, useState } from "react";

function BlackoutScreen() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const blackOut = () => {
      setShown(true);
    };

    const blackoutTime = (Math.random() * 10 + 10) * 1000;

    console.log("Blackout time", blackoutTime);

    const blackoutTimeout = setTimeout(() => {
      blackOut();
    }, blackoutTime);

    return () => {
      clearTimeout(blackoutTimeout);
    };
  }, []);

  return (
    <div
      style={{
        opacity: shown ? 1 : 0,
      }}
      className={
        "transition-opacity duration-1000 ease-in-out bg-black. -backdrop-hue-rotate-30 backdrop-brightness-2 backdrop-blur-xs. backdrop-contrast-90 backdrop-grayscale-25 z-50 fixed inset-0"
      }
    />
  );
}

export default BlackoutScreen;
