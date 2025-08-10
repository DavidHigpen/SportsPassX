'use client'

import React, { useEffect, useState } from 'react';

type SplitHeaderProps = {
  pageTitle: string;
  children: React.ReactNode;
};

const SplitHeader: React.FC<SplitHeaderProps> = ({ pageTitle, children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-row" style={{ height: 'calc(100vh - 4rem)' }}>
      <div className="flex-1 basis-1/3 text-center mt-26 text-6xl font-bold">
        {pageTitle}
      </div>
      <div className="flex-1 basis-2/3 m-10">
        {children}
      </div>
    </div>
  );
};

export default SplitHeader;