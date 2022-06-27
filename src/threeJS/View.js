import * as THREE from "three";

class View {
  constructor(canvasRef, speed) {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvasRef,
      antialias: false,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    this.camera.position.z = 1;
    this.speed = speed;
    
    // create meshes, materials, etc.
    this.normalMaterial = new THREE.MeshNormalMaterial();

    this.cube = this.createBox(0.2, this.normalMaterial);
    this.scene.add(this.cube);

    this.update();
  }

  createBox(sideLength, material) {
    const geometry = new THREE.BoxGeometry(sideLength, sideLength, sideLength);
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
  }

  updateSpeed(speed) {
    this.speed = speed;
  }

  update(t) {
    this.cube.rotation.x = t * this.speed / 20000;
    this.cube.rotation.y = t * this.speed / 10000;

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.update.bind(this));
  }
}

export default View;