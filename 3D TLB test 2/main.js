
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

//Scene
const scene = new THREE.Scene();

//Create a sphere aout of geometry and material
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83',

})
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

//Light
const light = new THREE.PointLight(0xffffff, 70, 100, 1.7);
light.position.set(0, 10, 10)
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600)
camera.position.z = 20
scene.add(camera)

//Render on the screen
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(800, 600)
renderer.render(scene, camera)
