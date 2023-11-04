import Ball from './Ball';

// Define time-related constants for better code clarity and to avoid magic numbers
const MILLISECONDS_PER_SECOND = 1000;
const BEATS_PER_SECOND = 3; // Defines the juggling tempo, can be adjusted as needed

class Pattern {
  constructor(pattern, scene, rightHandPosition, leftHandPosition) {
    if (!this.isValidPattern(pattern)) {
      throw new Error('Invalid pattern. Pattern might contain NaN, or average of the pattern is not an integer.');
    }
    this.pattern = pattern;
    this.scene = scene;
    this.currentHand = rightHandPosition;
    this.rightHandPosition = rightHandPosition;
    this.leftHandPosition = leftHandPosition;
    this.balls = [];
    this.ballQueue = [];
    this.currentTime = Date.now();
    this.deltaTime = 0;
    this.animate = this.animate.bind(this); // Bind this to the class instance
  }

  isValidPattern(pattern) {
    const average = this.getNumberOfBalls(pattern);
    return Number.isInteger(average);
  }

  getNumberOfBalls(pattern) {
    const patternArray = pattern.split('').map(Number);
    const sum = patternArray.reduce((acc, val) => acc + val, 0);
    return sum / patternArray.length;
  }

  initialize() {
    const numberOfBalls = this.getNumberOfBalls(this.pattern);
    for (let i = 0; i < numberOfBalls; i++) {
      const ball = new Ball(this.scene, this.getNextSourcePosition(), i, this.currentTime + MILLISECONDS_PER_SECOND * i);
      this.balls.push(ball);
    }
    requestAnimationFrame(this.animate); 
  }

  setNextThrowTime(ball, beatsUntilNextThrow) {
    const deltaTime = beatsUntilNextThrow * (MILLISECONDS_PER_SECOND / BEATS_PER_SECOND);
    ball.nextThrowTime = this.currentTime + deltaTime;
  }
  
  animate() {
    requestAnimationFrame(this.animate);

    const newTime = Date.now();
    this.deltaTime = (newTime - this.currentTime) / MILLISECONDS_PER_SECOND; // Convert deltaTime to seconds
    this.currentTime = newTime;

    for (let ball of this.balls) {
      if (this.currentTime >= ball.nextThrowTime && !ball.isThrown) {
        ball.throw();
        this.setNextThrowTime(ball, this.pattern[ball.throwIndex % this.pattern.length]);
        ball.throwIndex++;
      }
      if (ball.update(this.deltaTime)) {
        this.setNextThrowTime(ball, this.pattern[ball.throwIndex % this.pattern.length]);
        ball.throwIndex++;
      }
    }
  }

  getNextSourcePosition() {
    this.currentHand = this.currentHand === this.rightHandPosition ? this.leftHandPosition : this.rightHandPosition;
    return this.currentHand;
  }
}

export { Pattern };
