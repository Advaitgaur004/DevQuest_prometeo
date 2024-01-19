import React, { useRef, useEffect } from 'react';
import VANTA from 'vanta';
import * as THREE from 'three';

const HaloEffect = () => {
  const haloRef = useRef(null);

  useEffect(() => {
    const vantaEffect = VANTA.WAVES({
      el: haloRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={haloRef} />;
};

export default HaloEffect;
