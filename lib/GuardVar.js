/*!
 * Javascript GuardVar library v0.01
 * https://github.com/CindyLinz/JS-GuardVar
 *
 * Copyright 2012, Cindy Wang (CindyLinz)
 * Licensed under the MIT or GPL Version 2 or GPL Version 3 licenses.
 *
 * Date: 2012.10.26
 */
(function(window, undefined, ori){
    var GuardVar = function(open){
        if( open )
            this.queue = undefined;
        else
            this.queue = [];
    };

    GuardVar.prototype.open = function(q, i, j){
        if( this.queue ){
            q = this.queue;
            this.queue = undefined;

            for(i=0, j=q.length; i<j; ++i)
                q[i][0].apply(window, q[i][1]);
        }
        else
            this.queue = undefined;
    };

    GuardVar.prototype.stop = function(){
        this.queue = null;
    };

    GuardVar.prototype.pause = function(){
        if( !this.queue )
            this.queue = [];
    };

    GuardVar.prototype.guard = function(action){
        var guard = this;
        return function(){
            if( guard.queue === null )
                return;

            if( guard.queue )
                guard.queue.push([action, arguments]);
            else
                action.apply(window, arguments);
        };
    };

    if( typeof define === 'function' )
        define([], function(){ return GuardVar });
    else{
        ori = window.GuardVar;
        window.GuardVar = GuardVar;
        GuardVar.noConflict = function(){
            window.GuardVar = ori;
            return GuardVar;
        };
    }
})(window)
