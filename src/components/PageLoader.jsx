import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 800);
    const t2 = setTimeout(() => setHidden(true), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  return (
    <div id="page-loader" className={`page-loader ${fadeOut ? 'hidden' : ''}`}>
      <img src="/images/logo.jpeg" alt="VK" />
      <div className="loader-bar"><div className="loader-bar-inner"></div></div>
    </div>
  );
}
