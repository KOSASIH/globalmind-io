// click-handler.js
AFRAME.registerComponent('click-handler', {
  schema: {},

  init: function() {
    this.el.addEventListener('click', () => {
      console.log('Interactive element clicked!');
      // Perform action on click
    });
  }
});
