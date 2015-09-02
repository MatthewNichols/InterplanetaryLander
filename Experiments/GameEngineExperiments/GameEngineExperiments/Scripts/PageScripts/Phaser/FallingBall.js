/// <reference path="../../typings/phaser/phaser.d.ts" />
require.config({
    baseUrl: '../..',
    paths: {
        'jquery': '/Scripts/jquery-2.1.4.min',
        'phaser': '/Scripts/phaser/phaser.min'
    }
});
require(["phaser", "jquery"], function (phaser, $) {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, render: render });
    var shipSprite;
    var velocityDisplay;
    var onGround = false;
    function preload() {
        console.log('preload');
        game.load.image('ship', '/Content/images/ship.png');
    }
    function create() {
        console.log("create");
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 100;
        shipSprite = game.add.sprite(game.world.centerX, 10, "ship");
        game.physics.enable([shipSprite], Phaser.Physics.ARCADE);
        //shipSprite.body.collideWorldBounds = true;
        shipSprite.checkWorldBounds = true;
        shipSprite.events.onOutOfBounds.add(function () {
            console.log('On ground');
            landed();
            onGround = true;
            game.physics.arcade["isPaused"] = true;
        });
        velocityDisplay = game.add.text(10, 10, "Velocity: 0", { font: '14px Arial', fill: '#ff0044', align: 'left' });
    }
    function render() {
        //console.log("render");
        if (!onGround) {
            velocityDisplay.setText('Velocity: ' + shipSprite.body.velocity.y);
        }
    }
    function landed() {
        if (shipSprite.body.velocity.y > 10) {
            var crashedText = game.add.text(game.world.centerX, game.world.centerY, "You Crashed!", { font: '50px Arial', fill: '#ff0044', align: 'center' });
            crashedText.anchor.set(0.5);
        }
    }
    $('#pause').click(function () { return game.physics.arcade["isPaused"] = true; });
    $('#resume').click(function () { return game.physics.arcade["isPaused"] = false; });
});
//# sourceMappingURL=FallingBall.js.map