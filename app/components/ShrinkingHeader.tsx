'use client'

import React, { useEffect, useState } from 'react';

type ShrinkingHeaderProps = {
  shrinkingTitle: string;
  children: React.ReactNode;
};

const ShrinkingHeader: React.FC<ShrinkingHeaderProps> = ({ shrinkingTitle, children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 999,
          transition: 'all 0.3s ease',
          height: scrolled ? '60px' : '160px',
          display: 'flex',
          alignItems: scrolled ? 'center' : 'flex-end',
          padding: scrolled ? '10px 20px' : '40px 20px',
          boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <h1
          style={{
            fontSize: scrolled ? '24px' : '48px',
            transition: 'font-size 0.3s ease',
            margin: 0,
          }}
        >
          {shrinkingTitle}
        </h1>
      </div>

      <div style={{ padding: '20px' }}>{children}</div>
    </div>
  );
};

export default ShrinkingHeader;