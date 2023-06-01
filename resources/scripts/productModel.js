// import * as THREE from '/node_modules/three/build/three.module.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

import * as THREE from 'https://unpkg.com/three@0.152.2/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.152.2/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.152.2/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'https://unpkg.com/three@0.152.2/examples/jsm/loaders/OBJLoader.js';



// Set up the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 150;
camera.position.y = 150;


// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
const container = document.getElementById('model-container');
function resizeRenderer() {
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  renderer.setSize(width, height);
}

resizeRenderer(); // Initial resize


renderer.setClearColor(0x000000, 0); // Set the clear color to transparent
container.appendChild(renderer.domElement);


let economizer;

// Create a loading message element
const loadingMessage = document.createElement('div');
loadingMessage.textContent = 'LOADING...';
loadingMessage.style.fontSize = '24px'; // Update the font size here
loadingMessage.style.position = 'absolute';
loadingMessage.style.top = '50%';
loadingMessage.style.left = '50%';
loadingMessage.style.transform = 'translate(-50%, -50%)';
container.appendChild(loadingMessage);

// Create a progress bar element
const progressBar = document.createElement('div');
progressBar.style.width = '0%';
progressBar.style.height = '20px';
progressBar.style.backgroundColor = '#F07B05';
progressBar.style.position = 'absolute';
progressBar.style.top = '60%';
progressBar.style.left = '50%';
progressBar.style.transform = 'translate(-50%, -50%)';
container.appendChild(progressBar);



// Load the Economizer model (OBJ format)
const loader = new OBJLoader();
loader.load('/resources/fbx/EconomizerV3.obj', function (obj) {
  economizer = obj;
  scene.add(economizer);
  console.log('Economizer Loaded')

      // Remove loading message and progress bar
      container.removeChild(loadingMessage);
      container.removeChild(progressBar);

  // Scale down the economizer
  const scale = 2; // Adjust the scale factor as needed
  economizer.scale.set(scale, scale, scale);

  // Create a metallic material
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.8, // Adjust metalness value for metallic appearance
    roughness: 0.2, // Adjust roughness value for desired reflection properties
  });

  // Assign the material to the economizer's mesh
  economizer.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
},
function (xhr) {
    // Calculate loading progress
    const progress = xhr.loaded / xhr.total;
    const progressPercent = Math.round(progress * 100);

    // Update progress bar width
    progressBar.style.width = `${progressPercent}%`;
  },
undefined, function (error) {
  console.error(error);
});


// Lighting
// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Increase ambient light intensity
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 10, 10);
directionalLight.castShadow = true;
scene.add(directionalLight);

const skyLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.5); // Increase sky light intensity
scene.add(skyLight);

// Set up shadow properties for the directional light
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 50;
directionalLight.shadow.camera.left = -10;
directionalLight.shadow.camera.right = 10;
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.bottom = -10;

// Enable shadows in the renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Animation loop
function animate() {
  requestAnimationFrame(animate);

//   // Rotate the avocado
  if (economizer) {
    economizer.rotation.y += 0.01;
  }

  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation loop
animate();

// Resize renderer on window resize
window.addEventListener('resize', resizeRenderer);
