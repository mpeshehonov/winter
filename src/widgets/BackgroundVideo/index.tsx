import styled from '@emotion/styled';

const FixedVideoBackground = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: #000; /* запасной цвет по краям */
  pointer-events: none; /* чтобы не мешать кликам по контенту */
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0;

  /* Масштабируем 16:9 так, чтобы покрывать весь вьюпорт */
  width: 177.78vh; /* 100 * (16/9) vh */
  height: 100vh;
  min-width: 100vw;
  min-height: 56.25vw; /* 100 * (9/16) vw */
`;

function BackgroundVideo() {
  return (
    <FixedVideoBackground aria-hidden>
      <Iframe
        src="https://kinescope.io/embed/84EcYdn6t1suuNobaGfw3e"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
        allowFullScreen
        loading="lazy"
        title="Background video"
      />
    </FixedVideoBackground>
  );
}

export default BackgroundVideo;


