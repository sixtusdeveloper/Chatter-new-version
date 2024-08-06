// /components/Script.tsx
'use client';
import React from 'react';
import { useEffect } from 'react';

interface ScriptProps {
  src: string;
  charset?: string;
  async?: boolean;
  crossorigin?: string;
}

const Script: React.FC<ScriptProps> = ({ src, charset = 'UTF-8', async = true, crossorigin }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.charset = charset;
    script.async = async;
    if (crossorigin) {
      script.setAttribute('crossorigin', crossorigin);
    }
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src, charset, async, crossorigin]);

  return null;
};

export default Script;
