import React, { useRef, useEffect } from 'react';

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 18;
    const columns = Math.floor(width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.random() * height / fontSize);
    const speed = 0.2; // 数字流速度，越小越慢

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(11, 15, 25, 0.15)'; // 轻微透明黑色背景
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = '#00FF99'; // 绿色
      for (let i = 0; i < columns; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speed;
      }
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ opacity: 0.25 }}
    />
  );
} 