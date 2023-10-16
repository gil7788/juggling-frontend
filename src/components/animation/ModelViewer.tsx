import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const ModelViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      containerRef.current.appendChild(renderer.domElement);
    }

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const loader = new FBXLoader();

    loader.load('Jog Forward.fbx', (fbx) => {
      const object = fbx;
      scene.add(object);

      object.scale.set(0.01, 0.01, 0.01);
      object.position.set(0, 0, 0); 
      object.rotation.x = 0;
    }, undefined, (error) => {
      console.error(error);
    });

    camera.position.set(-1, 3, 3);
    camera.lookAt(0, 0, 0);
    
    const animate = () => {
      requestAnimationFrame(animate);

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={containerRef}></div>;
};

export default ModelViewer;
