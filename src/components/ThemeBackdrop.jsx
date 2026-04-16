import React from 'react';

const ThemeBackdrop = ({ pattern = 'mesh', motion = 'drift' }) => {
  const motionClass =
    motion === 'orbit' ? 'theme-motion-orbit' : motion === 'pulse' ? 'theme-motion-pulse' : 'theme-motion-drift';

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={`absolute inset-0 theme-pattern-layer theme-pattern-${pattern}`} />
      <div className="absolute inset-0 theme-gradient-overlay" />

      <div className="theme-glow theme-glow-one" />
      <div className="theme-glow theme-glow-two" />
      <div className="theme-glow theme-glow-three" />

      <div className={`theme-particle particle-one ${motionClass}`} style={{ '--particle-color': 'var(--theme-particle-a)' }} />
      <div className={`theme-particle particle-two ${motionClass}`} style={{ '--particle-color': 'var(--theme-particle-b)' }} />
      <div className={`theme-particle particle-three ${motionClass}`} style={{ '--particle-color': 'var(--theme-particle-c)' }} />
    </div>
  );
};

export default ThemeBackdrop;
