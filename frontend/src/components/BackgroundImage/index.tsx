// BackgroundImage.tsx
import React from 'react';
import './styles.css';

interface BackgroundImageProps {
  children: React.ReactNode;
}

export default function BackgroundImage({ children }: BackgroundImageProps) {
  return (
    <div className="background-container">
      {children}
    </div>
  );
}
