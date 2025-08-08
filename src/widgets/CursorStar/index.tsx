import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Logo from '../../shared/ui/Logo';

type CursorStarProps = {
  size?: number; // px
  lag?: number; // 0..1 (чем больше, тем быстрее догоняет)
  baseRotationSpeedDegPerSec?: number; // базовая скорость вращения
  extraRotationFromVelocity?: number; // множитель скорости от движения курсора
  opacity?: number;
  offsetX?: number; // смещение вправо от курсора
  offsetY?: number; // смещение вниз от курсора
};

const StarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 50;
  will-change: transform;
`;

function CursorStar({
  size = 14,
  lag = 0.14,
  baseRotationSpeedDegPerSec = 18,
  extraRotationFromVelocity = 0.06,
  opacity = 0.85,
  offsetX = 10,
  offsetY = 12,
}: CursorStarProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const angle = useRef(0);
  const lastTs = useRef<number | null>(null);
  const enabled = useRef<boolean>(matchMedia('(pointer: fine)').matches);

  useEffect(() => {
    if (!enabled.current) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    let rafId = 0;
    const tick = (ts: number) => {
      const element = ref.current;
      if (!element) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      // dt в секундах
      const dt = lastTs.current == null ? 0 : (ts - lastTs.current) / 1000;
      lastTs.current = ts;

      // Линейная интерполяция к цели
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      pos.current.x += dx * lag;
      pos.current.y += dy * lag;

      // Оценка скорости
      const velocity = Math.hypot(dx, dy);
      angle.current += (baseRotationSpeedDegPerSec + velocity * extraRotationFromVelocity) * dt;

      const x = pos.current.x + offsetX - size / 2;
      const y = pos.current.y + offsetY - size / 2;
      element.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${angle.current}deg)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, [lag, baseRotationSpeedDegPerSec, extraRotationFromVelocity, size, offsetX, offsetY]);

  if (!enabled.current) return null;

  return (
    <StarWrapper ref={ref} style={{ opacity }}>
      <Logo size={size} color="#fff" />
    </StarWrapper>
  );
}

export default CursorStar;


