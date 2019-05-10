// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerTwo {
  constructor(obj) {
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid2 = new CuboidMakerTwo({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class Cube extends CuboidMakerTwo {
  constructor(cubeObj) {
    super(cubeObj);
  }
  cubeVolume() {
    return Math.pow(this.height, 3);
  }
  cubeSurfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
}

const cube = new Cube({
  length: 4,
  height: 4,
  width: 4
});

console.log(`classes.js Stretch Goal:`);
console.log(cube.cubeVolume()); // 64
console.log(cube.cubeSurfaceArea()); // 96
