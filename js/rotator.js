window.onload = function() {

  var game = new Phaser.Game(600, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
  var player;
  var keys;

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
    });
  }

  function update() {
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
    $.getJSON('data/tiles.json', function(data) {
      $.each(data, function(key, value) {
        game.load.image(key, value);
      });
    });
    callback();
  }

  function createImages(callback) {
    $.getJSON('data/tiles.json', function(data) {
      var x = 0;
      var y = 0;
      $.each(data, function(key, value) {
        game.add.sprite(x, y, key);
        x += 100;
        if (x % 600 === 0) {
          y +=100;
          x = 0;
        }
      });
    });
    callback();
  }
};
