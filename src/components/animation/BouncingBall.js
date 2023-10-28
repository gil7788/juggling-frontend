import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const right_hand_position = 1;
const left_hand_position = -1;
const max_height = 4;

class Ball {
  constructor(scene, startPosition) {
    this.geometry = new THREE.SphereGeometry(0.1, 32, 32);
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.x = startPosition;
    scene.add(this.mesh);

    this.time = -1;
    this.gravity = -9.8;
    this.startPosition = startPosition;
    this.endPosition = startPosition === right_hand_position ? left_hand_position : right_hand_position;
    this.velocity = Math.sqrt(-2 * this.gravity * max_height);
    this.isThrown = false;
  }

  throw() {
    this.time = 0;
    this.isThrown = true;
  }

  update(dt) {
    if (!this.isThrown) return;

    this.time += dt;

    const newY = this.velocity * this.time + 0.5 * this.gravity * this.time * this.time;
    if (newY < 0) {
      // Ball has reached the other hand, stop it.
      this.isThrown = false;
      this.mesh.position.y = 0;
      this.mesh.position.x = this.endPosition;
      return;
    }
    
    this.mesh.position.y = newY;
    this.mesh.position.x = THREE.MathUtils.lerp(this.startPosition, this.endPosition, this.time / (2 * this.velocity / Math.abs(this.gravity)));
  }

  togglePosition() {
    this.isThrown = false;
    this.time = 0;
    
    // Swap start and end positions
    const temp = this.startPosition;
    this.startPosition = this.endPosition;
    this.endPosition = temp;

    this.mesh.position.x = this.startPosition;
    this.mesh.position.y = 0;
}
}

const BouncingBalls = () => {
    const mountRef = useRef(null);
  
    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 6;
      camera.position.y = 2;
      camera.position.x = 2;
  
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
  
      const balls = [
        new Ball(scene, right_hand_position),
        new Ball(scene, left_hand_position),
        new Ball(scene, right_hand_position)
      ];
  
      // Initialize the ball queue with balls
      const ballQueue = [...balls];
  
      let lastTime = Date.now();
  
      const animate = () => {
        requestAnimationFrame(animate);
  
        let currentTime = Date.now();
        let deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
        lastTime = currentTime;
  
        for (let ball of balls) {
          ball.update(deltaTime);
        }
  
        let currentBall = ballQueue[0]; // Peek the first ball from the queue
        
        // Calculate the time at which the ball is at mid-air based on the motion equation
        let timeAtMidAir = currentBall.velocity / Math.abs(currentBall.gravity);
  
        if (!currentBall.isThrown) {
          // Current ball has landed
          ballQueue.shift(); // Dequeue
          currentBall.togglePosition();
          ballQueue.push(currentBall); // Enqueue at the end
        } else if (currentBall.time >= timeAtMidAir && !ballQueue[1].isThrown) {
          // The next ball should be thrown when the current ball reaches mid-air
          ballQueue[1].throw();
        }
  
        renderer.render(scene, camera);
      };
      
      ballQueue[0].throw(); // Start by throwing the first ball in the queue
      animate();
  
      return () => {};
    }, []);
  
    return <div ref={mountRef} className="h-screen w-full" />;
  };
  
  export default BouncingBalls;