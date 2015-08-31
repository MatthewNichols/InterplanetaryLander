/// <reference path="../../typings/phaser/phaser.d.ts" />

require.config({
    baseUrl: '../..',

    paths: {
        'jquery': '/Scripts/jquery-2.1.4.min',
        'phaser': '/Scripts/phaser/phaser.min'
    }
});

require(["phaser", "jquery"], function (phaser, $) {
    
    let game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, render: render });
    var shipSprite: Phaser.Sprite;
    var velocityDisplay: Phaser.Text;
    var landed = false;

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
        shipSprite.events.onOutOfBounds.add(() => {
            console.log('landed');
            landed = true;
        });
        velocityDisplay = game.add.text(10, 10, "Velocity: 0", { font: '14px Arial', fill: '#ff0044', align: 'left'});
    }

    function render() {
        //console.log("render");
        //console.log(shipSprite.body.velocity.y);
        if (! landed) {
            velocityDisplay.setText('Velocity: ' + shipSprite.body.velocity.y);    
        }
    }

});