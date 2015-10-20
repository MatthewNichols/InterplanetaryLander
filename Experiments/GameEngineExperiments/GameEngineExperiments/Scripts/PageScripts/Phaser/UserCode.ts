export class UserCode
{
    userCode: Function;

    constructor(userCodeString: string)
    {
        this.prepUserCode(userCodeString);
    }

    /**
    * Converts the editor contents to a runnable function.  
    */
    prepUserCode(userCodeString: string) {

        var localFun;
        let functionString = `localFun = function() {
            ${userCodeString}
        }`;

        eval(functionString);

        this.userCode = localFun;
    }

    /**
     * Executes the user 
     */
    execute()
    {
        this.userCode();
    }
}