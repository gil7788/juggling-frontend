import * as THREE from 'three';

const gravity = -9.81;
const rightHandPosition = 1;
const leftHandPosition = -1;
const max_height = 4;

class Ball {
    constructor(scene, startPosition, throwIndex, nextThrowTime) {
      this.throwIndex = throwIndex;
      this.nextThrowTime = nextThrowTime;
      this.geometry = new THREE.SphereGeometry(0.1, 32, 32);
      this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.mesh.position.x = startPosition;
      scene.add(this.mesh);
  
      this.time = -1;
      
      this.startPosition = startPosition;
      this.endPosition = startPosition === rightHandPosition ? leftHandPosition : rightHandPosition;
      this.velocity = Math.sqrt(-2 * gravity * max_height);
      this.isThrown = false;
    }
  
    throw() {
      this.time = 0;
      this.isThrown = true;
    }
  
    update(dt) {
      if (!this.isThrown) return;
  
      this.time += dt;
  
      const newY = this.velocity * this.time + 0.5 * gravity * this.time * this.time;

      if (newY <= 0) {
        // Ball has reached the other hand, stop it.
        this.isThrown = false;
        this.togglePosition();
        
        return true;
      }
      
      this.mesh.position.y = newY;
      this.mesh.position.x = THREE.MathUtils.lerp(this.startPosition, this.endPosition, this.time / (2 * this.velocity / Math.abs(gravity)));
      return false;
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

  export default Ball;