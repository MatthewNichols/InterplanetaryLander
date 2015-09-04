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
    var groundSprite: Phaser.TileSprite;
    var velocityDisplay: Phaser.Text;
    var onGround = false;
    var thrusting = false;
    var cursors: Phaser.CursorKeys;

    function preload() {
        console.log('preload');

        game.load.spritesheet('ship', '/Content/images/shipSpriteSheet.png', 30, 40, 4, 0, 1);
        game.load.image("ground", '/Content/images/ground.png');
    }

    function create() {
        console.log("create");

        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.gravity.y = 100;

        shipSprite = game.add.sprite(game.world.centerX, 10, "ship");
        shipSprite.animations.add("fireRocket", [1, 2, 3, 2], 3, true);

        groundSprite = game.add.tileSprite(0, 780, 600, 20, 'ground');

        game.physics.enable([shipSprite], Phaser.Physics.P2JS);
        //game.physics.enable([groundSprite], Phaser.Physics.P2JS);
        //shipSprite.body.collideWorldBounds = true;

        //shipSprite.checkWorldBounds = true;
        //shipSprite.events.onOutOfBounds.add(() => {
        //    console.log('On ground');
        //    landed();
        //    onGround = true;
        //    game.physics.p2["isPaused"] = true;
        //});

        velocityDisplay = game.add.text(10, 10, "Velocity: 0", { font: '14px Arial', fill: '#ff0044', align: 'left' });

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
            velocityDisplay.setText('Velocity: ' + shipSprite.body.velocity.y);    
        }
    }

    function thrust() {
        console.log('thurst');
        shipSprite.body.thrust(200);
        shipSprite.animations.play("fireRocket");
        thrusting = true;
    }

    function stopThrust() {
        console.log('stop thrust');
        shipSprite.animations.stop("fireRocket");
        shipSprite.animations.frame = 0;
        thrusting = false;
    }

    function landed() {
        if (shipSprite.body.velocity.y > 10) {
            const crashedText = game.add.text(game.world.centerX, game.world.centerY, "You Crashed!", { font: '50px Arial', fill: '#ff0044', align: 'center' });
            crashedText.anchor.set(0.5);
        }
    }

    $('#pause').click(() => game.physics.p2["isPaused"] = true);
    $('#resume').click(() => game.physics.p2["isPaused"] = false);

});