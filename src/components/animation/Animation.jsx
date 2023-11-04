import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Pattern } from './BouncingBall';


const rightHandPosition = 1;
const leftHandPosition = -1;

function Animation() {
  const mountRef = useRef(null); // Using useRef hook to create a ref for mounting the scene

  useEffect(() => {
    // Ensure the mount point is available
    if (!mountRef.current) return;

    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 6;
    camera.position.y = 2;
    camera.position.x = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement); // Mounting the renderer.domElement to the ref
    
    const patternString = "333";
    const pattern = new Pattern(patternString, scene, rightHandPosition, leftHandPosition);
    pattern.initialize();

    const animate = function () {
      requestAnimationFrame(animate);
      pattern.animate();

      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // [TODO] Cleanup function to remove the renderer from the DOM and perform any additional cleanup
    return () => {

    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100%' }}>
      
    </div>
  );
}

export default Animation;
