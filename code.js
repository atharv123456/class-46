var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["29aad922-b8ec-4268-bb90-ba6979c85038","72372a31-80ca-4deb-9253-a718154fd989","e2f78971-fa74-4fd9-9f63-71b40f59d415","1a9ca7bf-0144-4c95-b28f-2b2b29f24b40","c5b3110b-e595-4701-a4f0-cad2160afd3e","35774216-a011-4884-bb5b-95df91aed65a","59eaef68-094d-42e3-a6dd-dd1cd00cdd7c"],"propsByKey":{"29aad922-b8ec-4268-bb90-ba6979c85038":{"name":"goodplayer","sourceUrl":"assets/api/v1/animation-library/gamelab/xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk/category_people/black_haori.png","frameSize":{"x":150,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk/category_people/black_haori.png"},"72372a31-80ca-4deb-9253-a718154fd989":{"name":"santa1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"},"e2f78971-fa74-4fd9-9f63-71b40f59d415":{"name":"burger1","sourceUrl":null,"frameSize":{"x":300,"y":262},"frameCount":1,"looping":true,"frameDelay":12,"version":"GuqPJEbNiG9UGwQAyIKR3l4l1k_STKBy","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":262},"rootRelativePath":"assets/e2f78971-fa74-4fd9-9f63-71b40f59d415.png"},"1a9ca7bf-0144-4c95-b28f-2b2b29f24b40":{"name":"virus1","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"},"c5b3110b-e595-4701-a4f0-cad2160afd3e":{"name":"pizza1","categories":["food"],"frameCount":1,"frameSize":{"x":378,"y":374},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 17:40:57 UTC","pngLastModified":"2021-01-05 17:41:38 UTC","version":"2XLgtp13LxzzFdqWStgaBH15LGgvaKpS","sourceUrl":"assets/api/v1/animation-library/gamelab/2XLgtp13LxzzFdqWStgaBH15LGgvaKpS/category_food/american_pizza.png","sourceSize":{"x":378,"y":374},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/2XLgtp13LxzzFdqWStgaBH15LGgvaKpS/category_food/american_pizza.png"},"35774216-a011-4884-bb5b-95df91aed65a":{"name":"water","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":399},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:39:36 UTC","pngLastModified":"2021-01-05 18:39:27 UTC","version":"liip36Uzd.UEskze8YUtuWMvk3veS2QD","sourceUrl":"assets/api/v1/animation-library/gamelab/liip36Uzd.UEskze8YUtuWMvk3veS2QD/category_backgrounds/background_underwater_11.png","sourceSize":{"x":400,"y":399},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/liip36Uzd.UEskze8YUtuWMvk3veS2QD/category_backgrounds/background_underwater_11.png"},"59eaef68-094d-42e3-a6dd-dd1cd00cdd7c":{"name":"shell","categories":["aquatic_objects"],"frameCount":1,"frameSize":{"x":400,"y":345},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 18:34:03 UTC","pngLastModified":"2021-01-05 18:34:17 UTC","version":"yqVLDcFzdwEqs7QFYfgVNmZMG2Vg4RZD","sourceUrl":null,"sourceSize":{"x":400,"y":345},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/59eaef68-094d-42e3-a6dd-dd1cd00cdd7c.png"}}};
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

var player1;
var backGround;
var food,pizza;
var shell1;
var virus;
var rand;
var rand1;
var score=0;
var burgerGroup,coronaGroup,pizzaGroup;
var gameState="PLAY";


playSound("assets/category_whoosh/alien_ship_flyby_whoosh_3_slow.mp3",true);

//making background
backGround=createSprite(200,200,200,200);
backGround.setAnimation("santa1");

//making the player
player1=createSprite(55,200,5,5) ;
player1.setAnimation("goodplayer");
player1.scale=0.3;

shell1=createSprite(410,200);
shell1.setAnimation("shell") ;
shell1.visible=false;


burgerGroup = new Group();
coronaGroup = new Group();
pizzaGroup = new Group();





function draw() {


if(gameState==="PLAY"){
spawnfood();
spawndeath();
spawntasty();
player1.y=World.mouseY;



if(burgerGroup.isTouching(player1)){
score=score+1;
burgerGroup.destroyEach();
}

if(pizzaGroup.isTouching(player1)){
score=score+1;
pizzaGroup.destroyEach();
}
drawSprites();

if(coronaGroup.isTouching(player1)){
gameState="END";
coronaGroup.destroyEach();
textSize(30);
fill("red");
text("GameOver,Well Played",70,365);
burgerGroup.destroyEach();
}

if(score===10){

backGround.setAnimation("water");

shell1.visible=true;

shell1.velocityX=5;
shell1.velocityY=3;
shell1.scale=0.1;
}

}
else if(gameState==="END"){
burgerGroup.setVelocityXEach(0);
coronaGroup.setVelocityXEach(0);
textSize(16);
fill("yellow");
text("Press space key to restart",100,30);
stopSound();
playSound("assets/category_explosion/air_explode_bonus_5.mp3", false);

}

if(keyDown("space")){
reset();

}




if(shell1.isTouching(player1)){
console.log("msg");
score=score-5;
}


textSize(20);
fill("white");
text("score=" +score,300,20);


}

function spawnfood(){
rand=Math.round(random(50,420));

if(frameCount%10==0){
food=createSprite(410,rand,100,100);
//food.x=rand;
food.setAnimation("burger1");
food.scale=0.13;
food.velocityX=-12;
burgerGroup.add(food);
}
}

function spawntasty(){
rand=Math.round(random(50,420));

if(frameCount%10==0){
pizza=createSprite(410,rand,100,100);
//food.x=rand;
pizza.setAnimation("pizza1");
pizza.scale=0.11;
pizza.velocityX=-10;
pizzaGroup.add(pizza);
}
}


function spawndeath(){
rand1=Math.round(random(50,420));

if(frameCount%25==0){
virus=createSprite(410,rand,100,100);
//food.x=rand;
virus.setAnimation("virus1");
virus.scale=0.1;
virus.velocityX=-6;
coronaGroup.add(virus);
}
}

function reset(){
gameState="PLAY";
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_3_slow.mp3",true);
score=0;
backGround.setAnimation("santa1");
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
