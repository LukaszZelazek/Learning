import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
//import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js' //test
//import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js' //test

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
    this._camera.position.set(75, 60, -60); // zoom, height, angle

    this._scene = new THREE.Scene();

    let light = new THREE.DirectionalLight(0xFFFFFF, 0.65);
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

    light = new THREE.AmbientLight(0xFFFFFF, 0.6);
    this._scene.add(light);

    const controls = new OrbitControls(
      this._camera, this._threejs.domElement);
    controls.target.set(50, 20, 0);
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
        new THREE.PlaneGeometry(80, 23, 0, 10),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
          }));
    plane.castShadow = false;
    plane.receiveShadow = true;
    plane.rotation.x = -Math.PI / 2;
    plane.position.set(40, -0.2, 8.5);
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
      color: 0xffffff,
      transparent:true,
      opacity:0.93,
      wireframe:false,
  }));
box1.position.set(5, 5, 5);
box1.castShadow = true;
box1.receiveShadow = true;
this._scene.add(box1);
  const geometry1 = new THREE.BoxGeometry(10, 10, 10); const edges1 = new
  THREE.EdgesGeometry( geometry1 ); const line1 = new THREE.LineSegments(edges1, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  line1.position.set(5, 5, 5);
this._scene.add( line1 );



//new THREE.TextGeometry( text, parameters );


const box2 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x001433,
      transparent:true,
      opacity:0.93,
      wireframe:false,
  }));
box2.position.set(15, 5, 5);
box2.castShadow = true;
box2.receiveShadow = true;
this._scene.add(box2);
  const geometry2 = new THREE.BoxGeometry(10, 10, 10); const edges2 = new
  THREE.EdgesGeometry( geometry2 ); const line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  line2.position.set(15, 5, 5);
this._scene.add( line2 );
const box3 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x001433,
      transparent:true,
      opacity:0.93,
      wireframe:false,
  }));
box3.position.set(15, 5, 15);
box3.castShadow = true;
box3.receiveShadow = true;
this._scene.add(box3);
  const geometry3 = new THREE.BoxGeometry(10, 10, 10); const edges3 = new
  THREE.EdgesGeometry( geometry3 ); const line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  line3.position.set(15, 5, 15);
this._scene.add( line3 );
const box4 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x001433,
      transparent:true,
      opacity:0.93,
      wireframe:false,
  }));
box4.position.set(25, 5, 5);
box4.castShadow = true;
box4.receiveShadow = true;
this._scene.add(box4);
  const geometry4 = new THREE.BoxGeometry(10, 10, 10); const edges4 = new
  THREE.EdgesGeometry( geometry4 ); const line4 = new THREE.LineSegments(edges4, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  line4.position.set(25, 5, 5);
this._scene.add( line4 );
const box5 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x001433,
      transparent:true,
      opacity:0.93,
      wireframe:false,
  }));
box5.position.set(25, 5, 15);
box5.castShadow = true;
box5.receiveShadow = true;
this._scene.add(box5);
  const geometry5 = new THREE.BoxGeometry(10, 10, 10); const edges5 = new
  THREE.EdgesGeometry( geometry5 ); const line5 = new THREE.LineSegments(edges5, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  line5.position.set(25, 5, 15);
this._scene.add( line5 );
const box6 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x001433,
      transparent:true,
      opacity:0.93,
      wireframe:false,
  }));
box6.position.set(35, 5, 5);
box6.castShadow = true;
box6.receiveShadow = true;
this._scene.add(box6);
  const geometry6 = new THREE.BoxGeometry(10, 10, 10); const edges6 = new
  THREE.EdgesGeometry( geometry6 ); const line6 = new THREE.LineSegments(edges6, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  line6.position.set(35, 5, 5);
this._scene.add( line6 );
const box7 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x001433,
      transparent:true,
      opacity:0.93,
      wireframe:false,
  }));
box7.position.set(35, 5, 15);
box7.castShadow = true;
box7.receiveShadow = true;
this._scene.add(box7);
  const geometry7 = new THREE.BoxGeometry(10, 10, 10); const edges7 = new
  THREE.EdgesGeometry( geometry7 ); const line7 = new THREE.LineSegments(edges7, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  line7.position.set(35, 5, 15);
this._scene.add( line7 );
const box8 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x001433,
      transparent:true,
      opacity:0.93,
      wireframe:false,
  }));
box8.position.set(45, 5, 5);
box8.castShadow = true;
box8.receiveShadow = true;
this._scene.add(box8);
  const geometry8 = new THREE.BoxGeometry(10, 10, 10); const edges8 = new
  THREE.EdgesGeometry( geometry8 ); const line8 = new THREE.LineSegments(edges8, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  line8.position.set(45, 5, 5);
this._scene.add( line8 );
const box9 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x001433,
      transparent:true,
      opacity:0.93,
      wireframe:false,
  }));
box9.position.set(45, 5, 15);
box9.castShadow = true;
box9.receiveShadow = true;
this._scene.add(box9);
  const geometry9 = new THREE.BoxGeometry(10, 10, 10); const edges9 = new
  THREE.EdgesGeometry( geometry9 ); const line9 = new THREE.LineSegments(edges9, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  line9.position.set(45, 5, 15);
this._scene.add( line9 );
const box10 = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), //depth, height, lenght
  new THREE.MeshLambertMaterial({
      color: 0x001433,
      transparent:true,
      opacity:0.93,
      wireframe:false,
  }));
box10.position.set(55, 5, 5);
box10.castShadow = true;
box10.receiveShadow = true;
this._scene.add(box10);
  const geometry10 = new THREE.BoxGeometry(10, 10, 10); const edges10 = new
  THREE.EdgesGeometry( geometry10 ); const line10 = new THREE.LineSegments(edges10, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  line10.position.set(55, 5, 5);
this._scene.add( line10 );
























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