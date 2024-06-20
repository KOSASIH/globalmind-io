import * as AR from 'ar.js';

const scene = new AR.Scene({
  camera: new AR.Camera({
    fov: 60
  }),
  renderer: new AR.Renderer({
    canvas: document.getElementById('ar-canvas')
  })
});

const marker = new AR.Marker({
  type: 'hiro',
  url: 'https://example.com/hiro.patt'
});

scene.add(marker);

const model = new AR.Model({
  url: 'https://example.com/model.obj',
  scale: 0.1
});

marker.add(model);

scene.start();
