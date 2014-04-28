// JavaScript Document
var spriteObject =
{
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 32,
  sourceHeight: 32,
  width: 32,
  height: 32,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  visible: true,
  
  //Physics properties
  accelerationX: 0, 
  accelerationY: 0, 
  speedLimit: 5, 
  friction: 0.96,
  bounce: -0.7,
  gravity: 0.3,
    
  //Platform game properties   
  isOnGround: true,
  jumpForce: -10,

  //Getters
  centerX: function()
  {
    return this.x + (this.width / 2);
  },
  centerY: function()
  {
    return this.y + (this.height / 2);
  },
  halfWidth: function()
  {
    return this.width / 2;
  },
  halfHeight: function()
  {
    return this.height / 2;
  }
};

var spriteObject2 =
{
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 150,
  sourceHeight: 267,
  width:150,
  height: 267,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  visible: true,
  
  //Physics properties
  accelerationX: 0, 
  accelerationY: 0, 
  speedLimit: 5, 
  friction: 0.96,
  bounce: -0.7,
  gravity: 0.3,
    
  //Platform game properties   
  isOnGround: true,
  jumpForce: -10,

  //Getters
  centerX: function()
  {
    return this.x + (this.width / 2);
  },
  centerY: function()
  {
    return this.y + (this.height / 2);
  },
  halfWidth: function()
  {
    return this.width / 2;
  },
  halfHeight: function()
  {
    return this.height / 2;
  }
};