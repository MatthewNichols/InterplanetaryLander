var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FallingShipRunningState;
(function (FallingShipRunningState) {
    var maxSafeVelocity = 20;
    var maxThrust = 300;
    var colors = {
        Red: '#ff0044', Green: '#069214', Yellow: '#e7f24a'
    };
    var GameRunningState = (function (_super) {
        __extends(GameRunningState, _super);
        function GameRunningState() {
            _super.call(this);
            this.onGround = false;
            this.thrusting = false;
        }
        GameRunningState.prototype.preload = function () {
            this.game.load.spritesheet('ship', '/Content/images/shipSpriteSheet.png', 30, 40, 11, 0, 1);
            this.game.load.image("ground", '/Content/images/ground.png');
            this.game.load.image("groundBlank", '/Content/images/groundBlank.png');
            this.game.load.audio('explosion', '/Content/sounds/explosion.mp3');
            //Attribution: http://soundbible.com/1986-Bomb-Exploding.html
        };
        GameRunningState.prototype.create = function () {
            var _this = this;
            var worldWidth = this.game.world.width;
            var worldHeight = this.game.world.height;
            this.explosionSound = this.game.add.audio('explosion');
            this.game.physics.startSystem(Phaser.Physics.P2JS);
            this.game.physics.p2.gravity.y = 100;
            this.shipSprite = this.game.add.sprite(this.game.world.centerX, 30, "ship");
            this.shipSprite.animations.add("fireRocket", [1, 2, 3, 2], 3, true);
            this.shipSprite.animations.add("explodeShip", [4, 5, 6, 7, 8, 9, 10], 3, false);
            this.game.physics.enable(this.shipSprite, Phaser.Physics.P2JS);
            this.game.add.tileSprite(0, worldHeight - 18, worldWidth, 18, 'ground');
            this.groundColider = this.game.add.tileSprite(worldWidth / 2, worldHeight, worldWidth, 11, 'groundBlank');
            this.game.physics.enable(this.groundColider, Phaser.Physics.P2JS);
            this.groundColider.body.static = true;
            this.shipSprite.body.onBeginContact.add(function (body, bodyB, shapeA, shapeB, equation) {
                //console.log('contact', shipSprite.body.velocity.y);
                _this.landed();
            }, this);
            this.velocityDisplay = this.game.add.text(10, 10, "Velocity: 0", {
                font: '14px Arial',
                fill: '#ff0044',
                align: 'left'
            });
            this.cursors = this.game.input.keyboard.createCursorKeys();
        };
        //update() {
        //}
        GameRunningState.prototype.render = function () {
            if (this.cursors.up.isDown) {
                this.thrust();
            }
            else if (this.thrusting) {
                this.stopThrust();
            }
            if (!this.onGround) {
                this.displayFlightData();
            }
        };
        GameRunningState.prototype.displayFlightData = function () {
            var speed = this.shipSprite.body.velocity.y;
            if (speed > maxSafeVelocity) {
                console.log("greater than " + maxSafeVelocity);
                this.velocityDisplay.fill = colors.Red;
            }
            else if (speed < maxSafeVelocity && speed >= 0) {
                console.log("less than " + maxSafeVelocity);
                this.velocityDisplay.fill = colors.Green;
            }
            else if (speed < 0) {
                this.velocityDisplay.fill = colors.Yellow;
            }
            this.velocityDisplay.setText("Velocity: " + speed);
        };
        GameRunningState.prototype.thrust = function () {
            this.shipSprite.body.thrust(maxThrust);
            this.shipSprite.animations.play("fireRocket");
            this.thrusting = true;
        };
        GameRunningState.prototype.stopThrust = function () {
            this.shipSprite.animations.stop("fireRocket");
            this.shipSprite.animations.frame = 0;
            this.thrusting = false;
        };
        GameRunningState.prototype.landed = function () {
            this.onGround = true;
            if (this.shipSprite.body.velocity.y > 10) {
                this.shipSprite.animations.play("explodeShip");
                this.explosionSound.play();
                var crashedText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "You Crashed!", { font: '50px Arial', fill: '#ff0044', align: 'center' });
                crashedText.anchor.set(0.5);
            }
        };
        return GameRunningState;
    })(Phaser.State);
    FallingShipRunningState.GameRunningState = GameRunningState;
})(FallingShipRunningState || (FallingShipRunningState = {}));
//# sourceMappingURL=fallingshiprunningstate.js.map