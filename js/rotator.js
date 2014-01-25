window.onload = function() {

  var game = new Phaser.Game(600, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
  var player;
  var keys;
  var json = { "ps1": "img/Ps1.png", "ps2": "img/Ps2.png", "ps3": "img/Ps3.png", "ps4": "img/Ps4.png", "ps5": "img/Ps1.png", "ps6": "img/Ps2.png", "ps7": "img/Ps3.png", "ps8": "img/Ps4.png", "ps9": "img/Ps1.png", "ps10": "img/Ps2.png", "ps11": "img/Ps3.png", "ps12": "img/Ps4.png", "ps13": "img/Ps1.png", "ps14": "img/Ps2.png", "ps15": "img/Ps3.png", "ps16": "img/Ps4.png", "ps17": "img/Ps1.png", "ps18": "img/Ps2.png", "ps19": "img/Ps3.png", "ps20": "img/Ps4.png", "ps21": "img/Ps1.png", "ps22": "img/Ps2.png", "ps23": "img/Ps3.png", "ps24": "img/Ps4.png", "ps25": "img/Ps1.png", "ps26": "img/Ps2.png", "ps27": "img/Ps3.png", "ps28": "img/Ps4.png", "ps29": "img/Ps1.png", "ps30": "img/Ps2.png", "ps31": "img/Ps3.png", "ps32": "img/Ps4.png", "ps33": "img/Ps1.png", "ps34": "img/Ps2.png", "ps35": "img/Ps3.png", "ps36": "img/Ps4.png" };
  var tiles = new Array(6);
  for (var i = 0; i<6; i++){
  	tiles[i] = new Array(6);
  }
  
  function preload () {
    loadImages(function() {
      game.load.image('player', 'img/Phero.png');
      keys = game.input.keyboard.createCursorKeys();
    });
  }

  function create () {
    createImages(function() {
      player = game.add.sprite(5, 5, 'player');
      player.bringToTop();
      player.body.setSize(100, 100, 0, 0);
    });
  }

  function update() {
  //game.physics.collide(player, sprite2, collisionHandler, null, this);
  
    player.body.velocity.setTo(0, 0);
    if (keys.right.isDown){
      player.body.velocity.x = 200;
    }
    else if (keys.left.isDown) {
      player.body.velocity.x = -200;
    }
    else if( keys.up.isDown) {
      player.body.velocity.y = -200;
    }
    else if ( keys.down.isDown) {
      player.body.velocity.y = 200;
    }
  }

  function loadImages(callback) {
    $.each(json, function(key, value) {
      game.load.image(key, value);
    });
    callback();
  }

  function createImages(callback) {
    var x = 0;
    var y = 0;
    var i =0;
    var j=0;
    $.each(json, function(key, value) {
      var temp = game.add.sprite(x, y, key);
      var obj;
      if(value.indexOf("1") !== -1){
      	obj={n:false, e:true, s:false, w:true, img: temp};
      }
      else if(value.indexOf("2") !== -1){
      	obj={n:true, e:false, s:false, w:true, img: temp};
      }
      else if(value.indexOf("3") !== -1){
      	obj={n:true, e:true, s:false, w:true, img: temp};
      }
      else if(value.indexOf("4") !== -1){
      	obj={n:false, e:false, s:false, w:true, img: temp};
      }
      else{
      	obj={n:true, e:true, s:true, w:true, img: temp};
      }
     //console.log(i + " " + j + "\n");
      tiles[i][j] = obj;
      x += 100;
      if (x % 600 === 0) {
        y +=100;
        x = 0;
      }
      if (j!==0 && j%5 === 0){
      	i++;
      	j = -1;
      }
      j++;
    });
    console.log(tiles[5][5].n);
    callback();
  }
}
