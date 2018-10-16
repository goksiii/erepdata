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
                    if (battle_data.type !== "tanks") {
                        continue;
                    }
                    var epic_division = getEpicDivision(battle_data); 
                    if (epic_division === 0) {
                        continue;
                    }
                    console.log(battle_data.id);
                    console.log(epic_division);
                }
            }
        }
    }

    /**
    *   Returns 0 if there is no epic battle, otherwise, method returns epic division.
    */
    function getEpicDivision(battle_data) {
        var epic_division = 0;
        var is_epic_battle = false;
        for (var division in battle_data.div) {
            // var division_data = battle_data.div.division;
            if (division.intensity_scale === "epic_battle") {
                epic_division = division_data.div;
                break;
            }
        }
        return epic_division;
    }

})(window.EAF = window.EAF || {});
EAF.init();