// src/components/ParticlesBackground.jsx
import { useCallback } from 'react'
import { loadSlim } from 'tsparticles-slim'
import Particles from 'react-tsparticles'

const particlesOptions = {
  fullScreen: { enable: true, zIndex: 0 },
  background: { color: '#000000' },
  particles: {
    number: { value: 100, density: { enable: true, area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    size: { value: { min: 0.5, max: 2 } },
    opacity: {
      value: { min: 0.3, max: 0.8 },
      animation: { enable: true, speed: 0.5, minimumValue: 0.3, sync: false },
    },
    move: {
      enable: true,
      speed: 0.9,
      direction: 'none',
      random: true,
      straight: false,
      outModes: 'out',
    },
  },
  detectRetina: true,
}

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    // slim build only
    await loadSlim(engine)
  }, [])

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
}
