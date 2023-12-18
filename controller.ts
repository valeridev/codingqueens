import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

export const useHomeController = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['-45deg', '45deg']);

  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-45deg', '45deg']);

  const handleMouse = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setIsAnimating(true);
  };

  return {
    x,
    y,
    mouseXSpring,
    mouseYSpring,
    handleMouse,
    handleMouseLeave,
    rotateX,
    rotateY,
    handleFlip,
    isFlipped,
    setIsAnimating,
    isAnimating,
  };
};
