// src/components/ParticlesBackground.jsx
import { useCallback } from 'react'
import { loadSlim } from 'tsparticles-slim'
import Particles from 'react-tsparticles'

const particlesOptions = {
  fullScreen: { enable: true, zIndex: 0 },
  background: { color: '#000001ff' },
  particles: {
    number: { value: 160, density: { enable: true, area: 1200 } },
    color: { value: ["#ff5b4d", "#fff"] },
    shape: { type: "circle" },
    size: {
      value: { min: 3, max: 5 },
      animation: { enable: true, speed: 2, minimumValue: 1, sync: false },
    },
    opacity: {
      value: { min: 0.08, max: 1 },
      animation: { enable: true, speed: 1, minimumValue: 0.08, sync: false },
    },
    move: {
      enable: true,
      speed: { min: 1.8, max: 2.5 },
      direction: "center",
      random: false,
      straight: false,
      outModes: { default: "out" },
      angle: { value: 0, offset: 0 },
      attract: { enable: false },
      trail: { enable: false },
    },
    zIndex: { value: { min: 0, max: 100 } },
    links: {
      enable: true,
      distance: 180,
      color: "#fff",
      opacity: 0.08,
      width: 1,
      triangles: { enable: false }
    },
    shadow: {
      enable: true,
      color: "#000",
      blur: 8
    },
  },
  interactivity: {
    events: {
      resize: true
    }
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
