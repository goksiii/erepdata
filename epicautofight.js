;(function (EAF, undefined) {
    "use strict";

    EAF.init = function() {
        console.log("EAF.init");
        secondFunction();
    }

    function secondFunction() {
        console.log('secondFunction');
        thirdFunction();
    }

    function thirdFunction() {
        console.log('thirdFunction');
    }
})(window.EAF = window.EAF || {});
EAF.init();