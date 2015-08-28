/// <reference path="../../typings/phaser/phaser.d.ts" />
require.config({
    baseUrl: '../..',
    paths: {
        'jquery': '/Scripts/jquery-2.1.4.min',
        'phaser': '/Scripts/phaser/phaser.min'
    }
});
require(["phaser", "jquery"], function (phaser, $) {
    console.log("Hi");
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, render: render });
    function preload() {
        console.log('preload');
        game.load.image('ship', '/Content/images/ship.png');
    }
    function create() {
        console.log("create");
        game.add.sprite(game.world.centerX, game.world.centerY, "ship");
    }
    function render() {
        //console.log("render");
    }
});
//# sourceMappingURL=FallingBall.js.map