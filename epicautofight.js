;(function (EAF, undefined) {
    "use strict";

    EAF.init = function() {
        console.log("EAF.init");
        var request = new XMLHttpRequest();
        var url = "https://raw.githubusercontent.com/goksiii/erepdata/master/all_campaigns.json";
        request.open("GET", url);
        request.responseType = "json";
        request.send();

        request.onreadystatechange = (e) => {
            if (request.readyState === 4 && request.status === 200) {
                var battles = request.response.battles;
                for (var battle in battles) {
                    var battle_data = battles[battle];
                    console.log(battle_data.id);
                }
            }
        }
    }

})(window.EAF = window.EAF || {});
EAF.init();