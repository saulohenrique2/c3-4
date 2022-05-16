var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sofia = createSprite(20,25,18,18);
var p1 = createSprite(10,80,40,20);
var p2 = createSprite(90,10,20,110);
var p3 = createSprite(90,80,20,30);
var p4 = createSprite(100,150,90,20);
var p5 = createSprite(150,100,20,120);
var p6 = createSprite(80,200,80,20);
var p7 = createSprite(50,280,20,60);
var p8 = createSprite(110,250,20,80);
var p9 = createSprite(30,300,60,20);
var p10 = createSprite(80,350,80,20);
var p11 = createSprite(215,240,20,200);
var p12 = createSprite(180,200,50,20);
var p13 = createSprite(200,50,80,20);
var p14 = createSprite(250,50,20,100);
var p15 = createSprite(320,350,20,150);
var p16 = createSprite(250,330,50,20);
var p17 = createSprite(140,280,50,20);
var p18 = createSprite(110,315,20,50);
var p19 = createSprite(340,285,30,20);
var p20 = createSprite(320,180,20,120);
var p21 = createSprite(330,220,30,20);
var p22 = createSprite(320,60,20,40);
var p23 = createSprite(110,180,20,40);
var p24 = createSprite(320,260,20,40);
var p25 = createSprite(290,275,40,20);
var p26 = createSprite(270,180,100,20);
var p27 = createSprite(330,40,40,20);
var p28 = createSprite(360,130,20,200);
var p29 = createSprite(340,220,20,20);
var taça = createSprite(390,390,20,80);

sofia.shapeColor="red"
taça.shapeColor="yellow"



function draw() {
background("black");

sofia.velocityX=0;
sofia.velocityY=0;

if (keyDown("UP_ARROW")) {
 sofia.velocityX=0;
sofia.velocityY=-4;
  
}

if (keyDown("DOWN_ARROW")) {
 sofia.velocityX=0;
sofia.velocityY=4;
  
}

if (keyDown(LEFT_ARROW)) {
  sofia.velocityX=-4;
sofia.velocityY=0;
  
}
  
if (keyDown(RIGHT_ARROW)) {
  sofia.velocityX=4;
sofia.velocityY=0;
  
}

createEdgeSprites();
sofia.bounceOff(edges)  ;
sofia.bounceOff(p1);
sofia.bounceOff(p2);
sofia.bounceOff(p3);
sofia.bounceOff(p4);
sofia.bounceOff(p5);
sofia.bounceOff(p6);
sofia.bounceOff(p7);
sofia.bounceOff(p8);
sofia.bounceOff(p9);
sofia.bounceOff(p10);
sofia.bounceOff(p11);
sofia.bounceOff(p12);
sofia.bounceOff(p13);
sofia.bounceOff(p14);
sofia.bounceOff(p15);
sofia.bounceOff(p16);
sofia.bounceOff(p17);
sofia.bounceOff(p18);
sofia.bounceOff(p19);
sofia.bounceOff(p20);
sofia.bounceOff(p21);
sofia.bounceOff(p22);
sofia.bounceOff(p23);
sofia.bounceOff(p24);
sofia.bounceOff(p25);
sofia.bounceOff(p26);
sofia.bounceOff(p27);
sofia.bounceOff(p28);
sofia.bounceOff(p29);

  if (sofia.collide(taça)){
    background("red");
  }
  drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
