import { render } from "@testing-library/react";
import * as THREE from "three";
import { Camera } from "three";
import {OrbitControls} from'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

var scene ,camera,renderer;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xcccccc);

camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight);
camera.position.set(0,100,1000);
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);



var controls = new THREE.OrbitControls(camera,renderer.domElement);
controls.update();
var abint = new THREE.AmbientLight(0xcccccc);
scene.add(abint);

var loader = new THREE.GLTFLoader();
loader.load('//dog-baked.glb',function (gltf){
    gltf.scene.scale(1.5,1.5,1.5,1.5);
    scene.add(gltf.scene);

})



window.addEventListener('resize',function(){
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;

})

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);


}
