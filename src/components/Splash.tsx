import { useEffect, useState } from 'react';

interface SplashProps {
  onComplete?: () => void;
  replayKey?: number;
}

export default function Splash({ onComplete, replayKey = 0 }: SplashProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 1650);

    return () => clearTimeout(timer);
  }, [replayKey, onComplete]);

  if (!visible) return null;

  return (
    <div className="splash" id="splash" key={replayKey} aria-hidden="true">
      <div className="splash-row splash-row-top">
        <div className="splash-box" />
        <div className="splash-box" />
        <div className="splash-box" />
        <div className="splash-box" />
        <div className="splash-box" />
      </div>
      <div className="splash-row splash-row-bottom">
        <div className="splash-box" />
        <div className="splash-box" />
        <div className="splash-box" />
        <div className="splash-box" />
        <div className="splash-box" />
      </div>
    </div>
  );
}
