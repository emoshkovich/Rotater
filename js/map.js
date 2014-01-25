function rotate(game, tiles, i, j){
	// for (var k = 0; k < 6; k++) {
 //    	for (var n = 0; n < 6; n++){
 //    		if ()
 //    	}
	// }

	// if (i > 0){
	// 	tiles[i][j].img
	// }

	//player.angle += 1;
	tiles[2][2].img.angle += 90;
	render(game, tiles[2][2]);
}
function render(game, sprite) {
    game.debug.renderSpriteInfo(sprite, 32, 32);
    game.debug.renderText('angularVelocity: ' + sprite.body.angularVelocity, 32, 200);
    game.debug.renderText('angularAcceleration: ' + sprite.body.angularAcceleration, 32, 232);
    game.debug.renderText('angularDrag: ' + sprite.body.angularDrag, 32, 264);
    game.debug.renderText('deltaZ: ' + sprite.body.deltaZ(), 32, 296);

}
