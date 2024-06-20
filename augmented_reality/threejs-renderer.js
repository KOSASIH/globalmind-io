import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('ar-canvas'),
  antialias: true
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);

renderer.setSize(640, 480);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
