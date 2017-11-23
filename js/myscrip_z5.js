function count_pn(){
    //width1=0;
    document.getElementById('output_box').innerHTML ="";

    document.getElementById("submit_btn").disabled=true;

    var top_b= document.getElementById("top_bound").value;
    var bottom_b = document.getElementById("bottom_bound").value;

    var w=new Worker('../js/zadanie5_prime_nmb.js');

    w.postMessage([top_b, bottom_b]);
    w.onmessage = function(e){
        var message = e.data;

        var elem = document.getElementById("progress_bar");

        //var tmp_var= parseInt(e.data[0]);
        if(message.messageType == "Progress"){
            console.log("AAA");
            elem.style.width = message.data + '%';
            elem.innerHTML = message.data * 1 + '%';
            if(message.data == 100){
                setTimeout(function (e){
                    elem.style.width = 0 + '%';
                    elem.innerHTML = 0 + '%';
                },2000);
            }
           //addToProgressBar();
        }
        if(message.messageType == "Output"){
            var arr_tmp = message.data;
            //addToProgressBar();
            for(var i = 0; i<arr_tmp.length; i++) {

                if(i==arr_tmp.length-1){
                    //addToProgressBar();
                    document.getElementById('output_box').innerHTML += arr_tmp[i];
                    document.getElementById("submit_btn").disabled=false;
                }
                else {
                   /* if(i==e.data[0].length/2>>0){
                        addToProgressBar();
                    }*/
                    //addToProgressBar();
                    document.getElementById('output_box').innerHTML += arr_tmp[i] + ", ";
                }
            }
        }
    };

//w.terminate();
};
var width1 = 0;
function addToProgressBar() {
    //console.log("abcd");
    var elem = document.getElementById("progress_bar");
        width1 += 1;
        elem.style.width = width1 + '%';
        elem.innerHTML = width1 * 1 + '%';
        /*if(width1==100){
            setTimeout(function () {
                width1=0;
                elem.style.width = width1 + '%';
                elem.innerHTML = width1 * 1 + '%';

            },1000)
        }*/

};