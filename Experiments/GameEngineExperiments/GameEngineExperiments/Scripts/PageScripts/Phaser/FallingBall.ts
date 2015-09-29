﻿/// <reference path="../../typings/phaser/phaser.d.ts" />

require.config({
    baseUrl: '../..',

    paths: {
        'jquery': '/Scripts/jquery-2.1.4.min',
        'phaser': '/Scripts/phaser/phaser.min'
    }
});

require(["phaser", "jquery"], function (phaser, $) {

    var colors = {
        Red: '#ff0044', Green: '#069214', Yellow: '#e7f24a'
    };

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, render: render });

    var maxSafeVelocity = 20;
    var maxThrust = 300;

    var shipSprite: Phaser.Sprite;
    var groundColider: Phaser.TileSprite;
    var velocityDisplay: Phaser.Text;

    var onGround = false;
    var thrusting = false;
    var cursors: Phaser.CursorKeys;

    var explosionSound: Phaser.Sound;

    function preload() {
        console.log('preload');

        game.load.spritesheet('ship', '/Content/images/shipSpriteSheet.png', 30, 40, 11, 0, 1);
        game.load.image("ground", '/Content/images/ground.png');
        game.load.image("groundBlank", '/Content/images/groundBlank.png');

        game.load.audio('explosion', '/Content/sounds/explosion.mp3');
        //Attribution: http://soundbible.com/1986-Bomb-Exploding.html
    }

    function create() {
        console.log("create");

        var worldWidth = game.world.width;
        var worldHeight = game.world.height;

        explosionSound = game.add.audio('explosion');
        
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.gravity.y = 100;

        shipSprite = game.add.sprite(game.world.centerX, 30, "ship");
        shipSprite.animations.add("fireRocket", [1, 2, 3, 2], 3, true);
        shipSprite.animations.add("explodeShip", [4, 5, 6, 7, 8, 9, 10], 3, false);

        game.physics.enable(shipSprite, Phaser.Physics.P2JS);

        game.add.tileSprite(0, worldHeight - 18 , worldWidth, 18, 'ground');
        
        groundColider = game.add.tileSprite(worldWidth / 2, worldHeight, worldWidth, 11, 'groundBlank');
        game.physics.enable(groundColider, Phaser.Physics.P2JS);
        groundColider.body.static = true;

        shipSprite.body.onBeginContact.add((body, bodyB, shapeA, shapeB, equation) => {
            console.log('contact', shipSprite.body.velocity.y);
            landed();
        }, this);

        velocityDisplay = game.add.text(10, 10, "Velocity: 0", {
            font: '14px Arial',
            fill: '#ff0044',
            align: 'left'
        });

        cursors = game.input.keyboard.createCursorKeys();
    }

    function render() {
        //console.log("render");

        if (cursors.up.isDown) {
            thrust();
        } else if (thrusting) {
            stopThrust();
        }

        if (! onGround) {
            displayFlightData();
        }
    }

    function displayFlightData() {
        var speed = shipSprite.body.velocity.y;
        
        if (speed > maxSafeVelocity) {
            console.log(`greater than ${maxSafeVelocity}`);
            velocityDisplay.fill = colors.Red;
        } else if (speed < maxSafeVelocity && speed >= 0) {
            console.log(`less than ${maxSafeVelocity}`);
            velocityDisplay.fill = colors.Green;
        } else if (speed < 0) {
            velocityDisplay.fill = colors.Yellow;
        }
        
        velocityDisplay.setText(`Velocity: ${speed}`);    
    }

    function thrust() {
        shipSprite.body.thrust(maxThrust);
        shipSprite.animations.play("fireRocket");
        thrusting = true;
    }

    function stopThrust() {
        shipSprite.animations.stop("fireRocket");
        shipSprite.animations.frame = 0;
        thrusting = false;
    }

    function landed() {
        onGround = true;

        if (shipSprite.body.velocity.y > 10)
        {
            shipSprite.animations.play("explodeShip");
            explosionSound.play('', 5);

            var crashedText = game.add.text(game.world.centerX, game.world.centerY, "You Crashed!", { font: '50px Arial', fill: '#ff0044', align: 'center' });
            crashedText.anchor.set(0.5);
        }
    }

    $('#pause').click(() => game.physics.p2["isPaused"] = true);
    $('#resume').click(() => game.physics.p2["isPaused"] = false);

});