/*function loadXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            // Typical action to be performed when the document is ready:
            document.getElementById("output").innerHTML ="Description: "+myObj.description;

            //get image
            var images = [];
            images[0] = myObj.src;
            document.imageJSON.src = images[0];

        }
    };
    xhttp.open("GET", "../js/imgs.json", true);
    xhttp.send();
}*/
var actual_img=0;
var imgs={
    "photos":[
    {
        "photo1":"../imgs/json_gallery/img1.JPG",
        "description": "Východ slnka nad Bratislavou zachytený z vlaku"
    },
    {
        "photo1":"../imgs/json_gallery/img2.JPG",
        "description": "Východ slnka zachytený na stanici v Galante"
    },
    {
        "photo1":"../imgs/json_gallery/img3.JPG",
        "description": "Západ slnka nad sídliskom v Galante"
    },
    {
        "photo1":"../imgs/json_gallery/img4.JPG",
        "description": "Východ slnka a jeho odraz o vlak"
    },
    {
        "photo1":"../imgs/json_gallery/img5.JPG",
        "description": "Východ slnka zachytený nad Galantou"
    }]
};

function clearoutputdiv(){
    /*var imgarr= document.getElementsByClassName('photographs');
    var realimgarr = Array.from(imgarr);
    //realimgarr.shift();
    realimgarr.forEach(function (element) { element.style.display='none'; })*/
    document.getElementById("output").innerHTML = "<span id="+"span_id"+" onclick="+"clearoutputdiv()"+">&times;</span>"
    +"<span id="+"left_arr"+" onclick="+"img_onclick_l(actual_img)"+">&#10094;</span>"
    +"<span id="+"right_arr"+" onclick="+"img_onclick_r(actual_img)"+">&#10095;</span>"+"\t\t\t<button id=\"slideshow_button\" type=\"button\" onclick=\"slideshow_f(0)\">Slideshow</button>\n";
    document.getElementById('span_id').style.display='none';
    document.getElementById('left_arr').style.display='none';
    document.getElementById('right_arr').style.display='none';
    document.getElementById('frame1').style.display='none';
};

function onload123(){
    var id=0;
    imgs.photos.forEach( function(obj) {
        id++;
        var img = new Image();
        img.src = obj.photo1;
        img.setAttribute("class", "small_img");
        img.setAttribute("alt", "galeria_photo"+id);
        img.setAttribute("width1", "100px");
        img.setAttribute("height", "100px");
        img.setAttribute("class", "small_img");
        img.setAttribute("onclick", "loadimgs1("+id+")");

        document.getElementById("small_imgs").appendChild(img);
    });
};

function loadimgs1(x){
    clearoutputdiv();
    var id=0;
    document.getElementById('span_id').style.display='inline';
    document.getElementById('left_arr').style.display='inline';
    document.getElementById('right_arr').style.display='inline';
    document.getElementById('frame1').style.display='inline';
    document.getElementById("slideshow_button").style.display="inline";
    document.getElementById('output').style.display='block';
   // document.getElementById('output').style.opacity=1;
    imgs.photos.forEach( function(obj) {
        id++;

        var img = new Image();
        img.src = obj.photo1;
        img.setAttribute("class", "photographs");
        img.setAttribute("id", "photograph"+id);
        if(id==3 || id==5){
            img.setAttribute("height", "400px");
        }
        else {
            img.setAttribute("width1", "400px");
        }
        // img.setAttribute("height", "20%");
        img.setAttribute("onclick", "img_onclick_r("+id+")");
        img.setAttribute("alt", "gallery_photo"+id);
        document.getElementById("output").appendChild(img);
        //document.getElementById("output_p").innerHTML = obj.description;
        var p=  document.createElement("p");
        p.setAttribute("id", "output_p"+id);
        var node = document.createTextNode(obj.description);
        p.appendChild(node);
        document.getElementById("output").appendChild(p);
        //console.log(obj.description)
        //document.getElementById('output_p').innerHTML = obj.description;

    });
        if(x==1){
            actual_img=1;
            document.getElementById('output_p2').style.display='none';
            document.getElementById('output_p3').style.display='none';
            document.getElementById('output_p4').style.display='none';
            document.getElementById('output_p5').style.display='none';

            document.getElementById('photograph2').style.display='none';
            document.getElementById('photograph3').style.display='none';
            document.getElementById('photograph4').style.display='none';
            document.getElementById('photograph5').style.display='none';
        }
        if(x==2){
            actual_img=2;
            document.getElementById('output_p1').style.display='none';
            document.getElementById('output_p3').style.display='none';
            document.getElementById('output_p4').style.display='none';
            document.getElementById('output_p5').style.display='none';

            document.getElementById('photograph1').style.display='none';
            document.getElementById('photograph3').style.display='none';
            document.getElementById('photograph4').style.display='none';
            document.getElementById('photograph5').style.display='none';
        }
        if(x==3){
            actual_img=3;
            document.getElementById('output_p2').style.display='none';
            document.getElementById('output_p1').style.display='none';
            document.getElementById('output_p4').style.display='none';
            document.getElementById('output_p5').style.display='none';

            document.getElementById('photograph2').style.display='none';
            document.getElementById('photograph1').style.display='none';
            document.getElementById('photograph4').style.display='none';
            document.getElementById('photograph5').style.display='none';
        }
        if(x==4){
            actual_img=4;
            document.getElementById('output_p2').style.display='none';
            document.getElementById('output_p3').style.display='none';
            document.getElementById('output_p1').style.display='none';
            document.getElementById('output_p5').style.display='none';

            document.getElementById('photograph2').style.display='none';
            document.getElementById('photograph3').style.display='none';
            document.getElementById('photograph1').style.display='none';
            document.getElementById('photograph5').style.display='none';
        }

        if(x==5){
            actual_img=5;
            document.getElementById('output_p2').style.display='none';
            document.getElementById('output_p3').style.display='none';
            document.getElementById('output_p4').style.display='none';
            document.getElementById('output_p1').style.display='none';

            document.getElementById('photograph2').style.display='none';
            document.getElementById('photograph3').style.display='none';
            document.getElementById('photograph4').style.display='none';
            document.getElementById('photograph1').style.display='none';
        }
};

function img_onclick_r(x) {
    if(x==1){
        actual_img=2;
        console.log(x);
        document.getElementById('output_p2').style.display='block';
        document.getElementById('output_p1').style.display='none';
        document.getElementById('output_p3').style.display='none';
        document.getElementById('output_p4').style.display='none';
        document.getElementById('output_p5').style.display='none';

        document.getElementById('photograph1').style.display='none';
        document.getElementById('photograph2').style.display='block';
        document.getElementById('photograph3').style.display='none';
        document.getElementById('photograph4').style.display='none';
        document.getElementById('photograph5').style.display='none';
    }
    if(x==2){
        console.log(x);
        actual_img=3;
        document.getElementById('output_p3').style.display='block';
        document.getElementById('output_p2').style.display='none';
        document.getElementById('output_p1').style.display='none';
        document.getElementById('output_p4').style.display='none';
        document.getElementById('output_p5').style.display='none';

        document.getElementById('photograph1').style.display='none';
        document.getElementById('photograph3').style.display='block';
        document.getElementById('photograph2').style.display='none';
        document.getElementById('photograph4').style.display='none';
        document.getElementById('photograph5').style.display='none';
    }
    if(x==3){
        console.log(x);
        actual_img=4;
        document.getElementById('output_p4').style.display='block';
        document.getElementById('output_p2').style.display='none';
        document.getElementById('output_p3').style.display='none';
        document.getElementById('output_p1').style.display='none';
        document.getElementById('output_p5').style.display='none';

        document.getElementById('photograph1').style.display='none';
        document.getElementById('photograph4').style.display='block';
        document.getElementById('photograph2').style.display='none';
        document.getElementById('photograph3').style.display='none';
        document.getElementById('photograph5').style.display='none';
    }
    if(x==4){
        console.log(x);
        actual_img=5;
        document.getElementById('output_p5').style.display='block';
        document.getElementById('output_p2').style.display='none';
        document.getElementById('output_p3').style.display='none';
        document.getElementById('output_p4').style.display='none';
        document.getElementById('output_p1').style.display='none';

        document.getElementById('photograph1').style.display='none';
        document.getElementById('photograph5').style.display='block';
        document.getElementById('photograph3').style.display='none';
        document.getElementById('photograph4').style.display='none';
        document.getElementById('photograph2').style.display='none';
    }
    if(x==5){
        console.log(x);
        actual_img=1;
        document.getElementById('output_p1').style.display='block';
        document.getElementById('output_p2').style.display='none';
        document.getElementById('output_p3').style.display='none';
        document.getElementById('output_p4').style.display='none';
        document.getElementById('output_p5').style.display='none';

        document.getElementById('photograph2').style.display='none';
        document.getElementById('photograph1').style.display='block';
        document.getElementById('photograph3').style.display='none';
        document.getElementById('photograph4').style.display='none';
        document.getElementById('photograph5').style.display='none';
    }
};

function img_onclick_l(x) {
    if(x==1){
        actual_img=5;
        console.log(x);
        document.getElementById('output_p5').style.display='block';
        document.getElementById('output_p1').style.display='none';
        document.getElementById('output_p3').style.display='none';
        document.getElementById('output_p4').style.display='none';
        document.getElementById('output_p2').style.display='none';

        document.getElementById('photograph1').style.display='none';
        document.getElementById('photograph5').style.display='block';
        document.getElementById('photograph3').style.display='none';
        document.getElementById('photograph4').style.display='none';
        document.getElementById('photograph2').style.display='none';
    }
    if(x==2){
        console.log(x);
        actual_img=1;
        document.getElementById('output_p1').style.display='block';
        document.getElementById('output_p2').style.display='none';
        document.getElementById('output_p3').style.display='none';
        document.getElementById('output_p4').style.display='none';
        document.getElementById('output_p5').style.display='none';

        document.getElementById('photograph3').style.display='none';
        document.getElementById('photograph1').style.display='block';
        document.getElementById('photograph2').style.display='none';
        document.getElementById('photograph4').style.display='none';
        document.getElementById('photograph5').style.display='none';
    }
    if(x==3){
        console.log(x);
        actual_img=2;
        document.getElementById('output_p2').style.display='block';
        document.getElementById('output_p4').style.display='none';
        document.getElementById('output_p3').style.display='none';
        document.getElementById('output_p1').style.display='none';
        document.getElementById('output_p5').style.display='none';

        document.getElementById('photograph1').style.display='none';
        document.getElementById('photograph2').style.display='block';
        document.getElementById('photograph4').style.display='none';
        document.getElementById('photograph3').style.display='none';
        document.getElementById('photograph5').style.display='none';
    }
    if(x==4){
        console.log(x);
        actual_img=3;
        document.getElementById('output_p3').style.display='block';
        document.getElementById('output_p2').style.display='none';
        document.getElementById('output_p5').style.display='none';
        document.getElementById('output_p4').style.display='none';
        document.getElementById('output_p1').style.display='none';

        document.getElementById('photograph1').style.display='none';
        document.getElementById('photograph3').style.display='block';
        document.getElementById('photograph5').style.display='none';
        document.getElementById('photograph4').style.display='none';
        document.getElementById('photograph2').style.display='none';
    }
    if(x==5){
        console.log(x);
        actual_img=4;
        document.getElementById('output_p4').style.display='block';
        document.getElementById('output_p2').style.display='none';
        document.getElementById('output_p3').style.display='none';
        document.getElementById('output_p1').style.display='none';
        document.getElementById('output_p5').style.display='none';

        document.getElementById('photograph2').style.display='none';
        document.getElementById('photograph4').style.display='block';
        document.getElementById('photograph3').style.display='none';
        document.getElementById('photograph1').style.display='none';
        document.getElementById('photograph5').style.display='none';
    }
};
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.getElementById('output').style.display='none';
        clearoutputdiv();
    }
    //left
    if (evt.keyCode == 37) {
        img_onclick_l(actual_img);
    }
    //right
    if (evt.keyCode == 39) {
        img_onclick_r(actual_img);
    }


};
function slideshow_f(x) {
    if (x == 0) {
        clearoutputdiv();
        var id = 0;
        document.getElementById('span_id').style.display = 'inline';
        document.getElementById('left_arr').style.display = 'inline';
        document.getElementById('right_arr').style.display = 'inline';
        document.getElementById('frame1').style.display = 'inline';

        document.getElementById('output').style.display = 'block';
        // document.getElementById('output').style.opacity=1;
        imgs.photos.forEach(function (obj) {
            id++;
            var img = new Image();
            img.src = obj.photo1;
            img.setAttribute("class", "photographs");
            img.setAttribute("id", "photograph" + id);
            if (id == 3 || id == 5) {
                img.setAttribute("height", "400px");
            }
            else {
                img.setAttribute("width1", "400px");
            }
            // img.setAttribute("height", "20%");
            img.setAttribute("onclick", "img_onclick_r(" + id + ")");
            img.setAttribute("alt", "gallery_photo" + id);
            document.getElementById("output").appendChild(img);
            //document.getElementById("output_p").innerHTML = obj.description;
            var p = document.createElement("p");
            p.setAttribute("id", "output_p" + id);
            var node = document.createTextNode(obj.description);
            p.appendChild(node);
            document.getElementById("output").appendChild(p);
            //console.log(obj.description)
            //document.getElementById('output_p').innerHTML = obj.description;

        });
        document.getElementById('output_p2').style.display = 'none';
        document.getElementById('output_p1').style.display = 'block';
        document.getElementById('output_p3').style.display = 'none';
        document.getElementById('output_p4').style.display = 'none';
        document.getElementById('output_p5').style.display = 'none';

        document.getElementById('photograph1').style.display = 'block';
        document.getElementById('photograph2').style.display = 'none';
        document.getElementById('photograph3').style.display = 'none';
        document.getElementById('photograph4').style.display = 'none';
        document.getElementById('photograph5').style.display = 'none';


            //setTimeout(function(){slideshow_f1(1);}, 20000);

            setTimeout(function(){slideshow_f1(2);}, 3000);

            setTimeout(function(){slideshow_f1(3);}, 6000);

            setTimeout(function(){slideshow_f1(4);}, 9000);

            setTimeout(function(){slideshow_f1(5);}, 12000);

            setTimeout(function(){clearoutputdiv();}, 15000);

    }
};
function slideshow_f1(x) {

        if(x==2){
            actual_img=2;
            console.log(x);
            document.getElementById('output_p2').style.display='block';
            document.getElementById('output_p1').style.display='none';
            document.getElementById('output_p3').style.display='none';
            document.getElementById('output_p4').style.display='none';
            document.getElementById('output_p5').style.display='none';

            document.getElementById('photograph1').style.display='none';
            document.getElementById('photograph2').style.display='block';
            document.getElementById('photograph3').style.display='none';
            document.getElementById('photograph4').style.display='none';
            document.getElementById('photograph5').style.display='none';
            return;
        }
        if(x==3){
            console.log(x);
            actual_img=3;
            document.getElementById('output_p3').style.display='block';
            document.getElementById('output_p2').style.display='none';
            document.getElementById('output_p1').style.display='none';
            document.getElementById('output_p4').style.display='none';
            document.getElementById('output_p5').style.display='none';

            document.getElementById('photograph1').style.display='none';
            document.getElementById('photograph3').style.display='block';
            document.getElementById('photograph2').style.display='none';
            document.getElementById('photograph4').style.display='none';
            document.getElementById('photograph5').style.display='none';
            return;
        }
        if(x==4){
            console.log(x);
            actual_img=4;
            document.getElementById('output_p4').style.display='block';
            document.getElementById('output_p2').style.display='none';
            document.getElementById('output_p3').style.display='none';
            document.getElementById('output_p1').style.display='none';
            document.getElementById('output_p5').style.display='none';

            document.getElementById('photograph1').style.display='none';
            document.getElementById('photograph4').style.display='block';
            document.getElementById('photograph2').style.display='none';
            document.getElementById('photograph3').style.display='none';
            document.getElementById('photograph5').style.display='none';
            return;
        }
        if(x==5){
            console.log(x);
            actual_img=5;
            document.getElementById('output_p5').style.display='block';
            document.getElementById('output_p2').style.display='none';
            document.getElementById('output_p3').style.display='none';
            document.getElementById('output_p4').style.display='none';
            document.getElementById('output_p1').style.display='none';

            document.getElementById('photograph1').style.display='none';
            document.getElementById('photograph5').style.display='block';
            document.getElementById('photograph3').style.display='none';
            document.getElementById('photograph4').style.display='none';
            document.getElementById('photograph2').style.display='none';
            return;
        }
        if(x==1){
            console.log(x);
            actual_img=1;
            document.getElementById('output_p1').style.display='block';
            document.getElementById('output_p2').style.display='none';
            document.getElementById('output_p3').style.display='none';
            document.getElementById('output_p4').style.display='none';
            document.getElementById('output_p5').style.display='none';

            document.getElementById('photograph2').style.display='none';
            document.getElementById('photograph1').style.display='block';
            document.getElementById('photograph3').style.display='none';
            document.getElementById('photograph4').style.display='none';
            document.getElementById('photograph5').style.display='none';
            return;
        }
    };
