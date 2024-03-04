import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';


class BasicWorldDemo {
  constructor() {
    this._Initialize();
  }

  _Initialize() {
    this._threejs = new THREE.WebGLRenderer({
      antialias: true,
    });
    this._threejs.shadowMap.enabled = true;
    this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
    this._threejs.setPixelRatio(window.devicePixelRatio);
    this._threejs.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this._threejs.domElement);

    window.addEventListener('resize', () => {
      this._OnWindowResize();
    }, false);

    const fov = 60;
    const aspect = 1920 / 1080;
    const near = 1.0;
    const far = 1000.0;
    this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this._camera.position.set(75, 20, 0); // zoom, height, angle

    this._scene = new THREE.Scene();

    let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    light.position.set(20, 40, 10);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.left = 100;
    light.shadow.camera.right = -100;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
    this._scene.add(light);

    light = new THREE.AmbientLight(0xFFFFFF, 0.2);
    this._scene.add(light);

    const controls = new OrbitControls(
      this._camera, this._threejs.domElement);
    controls.target.set(0, 20, 0);
    controls.update();

    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
        './resources/posx.jpg',
        './resources/negx.jpg',
        './resources/posy.jpg',
        './resources/negy.jpg',
        './resources/posz.jpg',
        './resources/negz.jpg',
    ]);
    this._scene.background = texture;


//floor plane
    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 3, 0, 10),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
          }));
    plane.castShadow = false;
    plane.receiveShadow = true;
    plane.rotation.x = -Math.PI / 2;
    this._scene.add(plane);
//vertical plane
    const plane2 = new THREE.Mesh(
      new THREE.PlaneGeometry(5, 10, 0, 10),
      new THREE.MeshStandardMaterial({
          color: 0xFFFFFF,
        }));
  plane2.castShadow = false;
  plane2.receiveShadow = true;
  plane2.rotation.z = -Math.PI / 2;
  plane2.position.set(0, 2.5, -1.5);
  this._scene.add(plane2);



//boxes
const box1 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box1.position.set(5, 5, 5);
box1.castShadow = true;
box1.receiveShadow = true;
this._scene.add(box1);const box2 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box2.position.set(5, 5, 15);
box2.castShadow = true;
box2.receiveShadow = true;
this._scene.add(box2);const box3 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box3.position.set(15, 5, 5);
box3.castShadow = true;
box3.receiveShadow = true;
this._scene.add(box3);const box4 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 5, 7), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box4.position.set(16.5, 12.5, 6.5);
box4.castShadow = true;
box4.receiveShadow = true;
this._scene.add(box4);const box5 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box5.position.set(15, 5, 15);
box5.castShadow = true;
box5.receiveShadow = true;
this._scene.add(box5);const box6 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 5, 7), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box6.position.set(16.5, 12.5, 16.5);
box6.castShadow = true;
box6.receiveShadow = true;
this._scene.add(box6);const box7 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box7.position.set(25, 5, 5);
box7.castShadow = true;
box7.receiveShadow = true;
this._scene.add(box7);const box8 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box8.position.set(25, 15, 5);
box8.castShadow = true;
box8.receiveShadow = true;
this._scene.add(box8);const box9 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box9.position.set(25, 5, 15);
box9.castShadow = true;
box9.receiveShadow = true;
this._scene.add(box9);const box10 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box10.position.set(25, 15, 15);
box10.castShadow = true;
box10.receiveShadow = true;
this._scene.add(box10);const box11 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box11.position.set(35, 5, 5);
box11.castShadow = true;
box11.receiveShadow = true;
this._scene.add(box11);const box12 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box12.position.set(35, 15, 5);
box12.castShadow = true;
box12.receiveShadow = true;
this._scene.add(box12);const box13 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 5, 7), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box13.position.set(36.5, 22.5, 6.5);
box13.castShadow = true;
box13.receiveShadow = true;
this._scene.add(box13);const box14 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box14.position.set(35, 5, 15);
box14.castShadow = true;
box14.receiveShadow = true;
this._scene.add(box14);const box15 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box15.position.set(35, 15, 15);
box15.castShadow = true;
box15.receiveShadow = true;
this._scene.add(box15);const box16 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 5, 7), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box16.position.set(36.5, 22.5, 16.5);
box16.castShadow = true;
box16.receiveShadow = true;
this._scene.add(box16);const box17 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box17.position.set(45, 5, 5);
box17.castShadow = true;
box17.receiveShadow = true;
this._scene.add(box17);const box18 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box18.position.set(45, 15, 5);
box18.castShadow = true;
box18.receiveShadow = true;
this._scene.add(box18);const box19 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 5, 7), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box19.position.set(46.5, 22.5, 6.5);
box19.castShadow = true;
box19.receiveShadow = true;
this._scene.add(box19);const box20 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box20.position.set(45, 5, 15);
box20.castShadow = true;
box20.receiveShadow = true;
this._scene.add(box20);const box21 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box21.position.set(45, 15, 15);
box21.castShadow = true;
box21.receiveShadow = true;
this._scene.add(box21);const box22 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 5, 7), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box22.position.set(46.5, 22.5, 16.5);
box22.castShadow = true;
box22.receiveShadow = true;
this._scene.add(box22);const box23 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box23.position.set(55, 5, 5);
box23.castShadow = true;
box23.receiveShadow = true;
this._scene.add(box23);const box24 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box24.position.set(55, 15, 5);
box24.castShadow = true;
box24.receiveShadow = true;
this._scene.add(box24);const box25 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box25.position.set(55, 5, 15);
box25.castShadow = true;
box25.receiveShadow = true;
this._scene.add(box25);const box26 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box26.position.set(55, 15, 15);
box26.castShadow = true;
box26.receiveShadow = true;
this._scene.add(box26);const box27 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box27.position.set(65, 5, 5);
box27.castShadow = true;
box27.receiveShadow = true;
this._scene.add(box27);const box28 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 5, 7), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box28.position.set(66.5, 12.5, 6.5);
box28.castShadow = true;
box28.receiveShadow = true;
this._scene.add(box28);const box29 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box29.position.set(65, 5, 15);
box29.castShadow = true;
box29.receiveShadow = true;
this._scene.add(box29);const box30 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 5, 7), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box30.position.set(66.5, 12.5, 16.5);
box30.castShadow = true;
box30.receiveShadow = true;
this._scene.add(box30);const box31 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box31.position.set(75, 5, 5);
box31.castShadow = true;
box31.receiveShadow = true;
this._scene.add(box31);const box32 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x0066ff,
  }));
box32.position.set(75, 5, 15);
box32.castShadow = true;
box32.receiveShadow = true;
this._scene.add(box32);




    //randomizacja mnóstwa sześcian 
    // for (let x = -8; x < 8; x++) {
    //   for (let y = -8; y < 8; y++) {
    //     const box = new THREE.Mesh(
    //       new THREE.BoxGeometry(2, 2, 2),
    //       new THREE.MeshStandardMaterial({
    //           color: 0x808080,
    //       }));
    //     box.position.set(Math.random() + x * 5, Math.random() * 4.0 + 2.0, Math.random() + y * 5);
    //     box.castShadow = true;
    //     box.receiveShadow = true;
    //     this._scene.add(box);
    //   }
    // }

    // const box = new THREE.Mesh(
    //   new THREE.SphereGeometry(2, 32, 32),
    //   new THREE.MeshStandardMaterial({
    //       color: 0xFFFFFF,
    //       wireframe: true,
    //       wireframeLinewidth: 4,
    //   }));
    // box.position.set(0, 0, 0);
    // box.castShadow = true;
    // box.receiveShadow = true;
    // this._scene.add(box);

    this._RAF();
  }

  _OnWindowResize() {
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
    this._threejs.setSize(window.innerWidth, window.innerHeight);
  }

  _RAF() {
    requestAnimationFrame(() => {
      this._threejs.render(this._scene, this._camera);
      this._RAF();
    });
  }
}


let _APP = null;

window.addEventListener('DOMContentLoaded', () => {
  _APP = new BasicWorldDemo();
});