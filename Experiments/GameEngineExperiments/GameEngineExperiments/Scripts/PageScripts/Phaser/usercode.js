define(["require", "exports"], function (require, exports) {
    var UserCode = (function () {
        function UserCode(userCodeString) {
            this.prepUserCode(userCodeString);
        }
        /**
        * Converts the editor contents to a runnable function.
        */
        UserCode.prototype.prepUserCode = function (userCodeString) {
            var localFun;
            var functionString = "localFun = function(ship) {\n            " + userCodeString + "\n        }";
            eval(functionString);
            this.userCode = localFun;
        };
        /**
         * Executes the user
         */
        UserCode.prototype.execute = function (ship) {
            this.userCode(ship);
        };
        return UserCode;
    })();
    exports.UserCode = UserCode;
});
//# sourceMappingURL=UserCode.js.map