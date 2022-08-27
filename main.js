import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const sphereGeometry = new THREE.SphereGeometry( 1, 32, 16 );
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

let sphereReachedTop = false;
function animate() {
	requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    sphere.position.x = 2;

    if (sphereReachedTop === false){
        sphere.position.y += (((3-sphere.position.y)/50) + 0.01);
    } else {
        sphere.position.y -= (((3-sphere.position.y)/50) + 0.01);
    }

    if (sphere.position.y >= 3){
        sphereReachedTop = true
    }
    if (sphere.position.y <= -3){
        sphereReachedTop = false
    }

    sphere.rotation.z += 0.01;

	renderer.render( scene, camera );
}
animate();