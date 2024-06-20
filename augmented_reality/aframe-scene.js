import * as AFRAME from 'aframe';

const scene = document.getElementById('ar-scene');

AFRAME.registerComponent('hiro-marker', {
  schema: {
    type: 'marker',
    url: { default: 'https://example.com/hiro.patt' }
  },

  init: function () {
    const marker = this.el.getObject3D('mesh');
    marker.visible = false;
  }
});

AFRAME.registerComponent('model-loader', {
  schema: {
    type: 'model',
    url: { default: 'https://example.com/model.obj' }
  },

  init: function () {
    const model = this.el.getObject3D('mesh');
    model.scale.set(0.1, 0.1, 0.1);
  }
});

scene.addEventListener('loaded', () => {
  console.log('Scene loaded');
});
