// config.js
export default {
  // AR.js configuration
  arjs: {
    debug: true,
    detectionMode: 'ono',
    maxDetectionRate: 60,
    cameraParams: {
      fov: 60,
      aspect: 1.333,
      near: 0.1,
      far: 1000
    }
  },

  // A-Frame configuration
  aframe: {
    version: '1.2.0',
    renderer: 'webgl',
    antialias: true,
    fog: false,
    physics: {
      engine: 'cannon',
      gravity: { x: 0, y: -9.81, z: 0 }
    }
  },

  // Scene configuration
  scene: {
    name: 'AR Scene',
    description: 'GlobalMind.io AR Scene'
  }
};
