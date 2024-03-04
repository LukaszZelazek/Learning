//npm i three gsap install packages THREE and GSAP then npm run dev

import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

//Create a sphere aout of geometry and material
const geometry = new THREE.SphereGeometry(3, 64, 64); //radius, width,height of segments in a mesh
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83',
})
const mesh = new THREE.Mesh(geometry, material); //mesh is combination of geometry and material
scene.add(mesh)

//Light
const light = new THREE.PointLight(0xffffff, 70, 20, 1.7);
light.position.set(0, 10, 10)
scene.add(light);
//AmbientLight
const lightAmbient = new THREE.AmbientLight(0xffffff, 0.1);
lightAmbient.position.set(0, 100)
scene.add(lightAmbient);

//Camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600)
camera.position.z = 20
scene.add(camera)

//Render on the screen
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(800, 600)
renderer.render(scene, camera)
