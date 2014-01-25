window.onload = function() {

  var game = new Phaser.Game(600, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
  var logo;
  var keys;
  function preload () {

    game.load.image('logo', 'placeholder.png');

  }

  function create () {

    logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
    keys = game.input.keyboard.createCursorKeys();
  }
function update () {
logo.body.velocity.setTo(0, 0);
    if (keys.right.isDown){
    logo.body.velocity.x = 200;
	}
	else if (keys.left.isDown){
	 logo.body.velocity.x = -200;
	 }
	 else if( keys.up.isDown){
	 logo.body.velocity.y = -200;
	 }
	 else if ( keys.down.isDown){
	 logo.body.velocity.y = 200;
	 }
		
	}
};