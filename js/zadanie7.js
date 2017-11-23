var source;
var control=0;
function onload_f() {
    if (typeof (EventSource) !== undefined) {
        source = new EventSource("http://vmzakova.fei.stuba.sk/sse/sse.php");


        source.addEventListener("message", function (e) {
            var data = JSON.parse(e.data);
            //document.getElementById("graph_div").innerHTML += e.data+"<br>";
            console.log(data.x + "__" + data.y1 + "__" + data.y2 + "___");

            Plotly.extendTraces('graph_div', {
                y: [[data.y1], [data.y2]]
            }, [0, 1]);

        }, false);

        Plotly.plot('graph_div', [{
            y: [],
            mode: 'lines',
            name: "sinus",
            line: {color: '#71f186'}
        }, {
            y: [],
            mode: 'lines',
            name: "cosinus",
            line: {color: '#f14b45'}
        }]);

        document.getElementById("stop_btn").addEventListener("click", function(){
            source.close();
        });
        document.getElementById("chcekbox1").addEventListener("click", function(){
            if(document.getElementById("chcekbox1").checked != true && document.getElementById("chcekbox2").checked == true){
                var update = {
                    visible: ['legendonly', true]
                };
                Plotly.restyle('graph_div', update, [0, 1])
            }
            if(document.getElementById("chcekbox1").checked == true && document.getElementById("chcekbox2").checked != true){
                var update = {
                    visible: [true, 'legendonly']
                };
                Plotly.restyle('graph_div', update, [0, 1])
            }
            if(document.getElementById("chcekbox1").checked == true && document.getElementById("chcekbox2").checked == true) {
                var update = {
                    visible: [true, true]
                };
                Plotly.restyle('graph_div', update, [0, 1])
            }
            if(document.getElementById("chcekbox1").checked != true && document.getElementById("chcekbox2").checked != true){
                var update = {
                    visible: ['legendonly', 'legendonly']
                };
                Plotly.restyle('graph_div', update, [0, 1])
            }

        });

        document.getElementById("chcekbox2").addEventListener("click", function(){
            if(document.getElementById("chcekbox2").checked != true && document.getElementById("chcekbox1").checked == true){
                var update = {
                    visible: [true, 'legendonly']
                };
                Plotly.restyle('graph_div', update, [0, 1])
            }
            if(document.getElementById("chcekbox2").checked == true && document.getElementById("chcekbox1").checked != true){
                var update = {
                    visible: ['legendonly', true]
                };
                Plotly.restyle('graph_div', update, [0, 1])
            }
            if(document.getElementById("chcekbox2").checked == true && document.getElementById("chcekbox1").checked == true) {
                var update = {
                    visible: [true, true]
                };
                Plotly.restyle('graph_div', update, [0, 1])
            }
            if(document.getElementById("chcekbox2").checked != true && document.getElementById("chcekbox1").checked != true){
                var update = {
                    visible: ['legendonly', 'legendonly']
                };
                Plotly.restyle('graph_div', update, [0, 1])
            }
        });

    }
    else {
        document.getElementById("graph_div").innerHTML = "ehm, sorry boi";
    }
}
