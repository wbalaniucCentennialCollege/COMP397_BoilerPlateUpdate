/*
    Game over scene. This scene is shown when the player dies
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Gameover = (function (_super) {
        __extends(Gameover, _super);
        // CONSTRUCTOR
        function Gameover() {
            _super.call(this);
        }
        // Run when the scene is started
        Gameover.prototype.start = function () {
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            this._marioButton = new objects.Button("Mario", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._marioButton);
            this._marioButton.on("click", this._marioClick, this);
            stage.addChild(this);
        };
        // Run on every tick
        Gameover.prototype.update = function () {
        };
        Gameover.prototype._marioClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Gameover;
    }(objects.Scene));
    scenes.Gameover = Gameover;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map