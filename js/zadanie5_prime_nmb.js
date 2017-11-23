onmessage = function (e) {

    var top = parseInt(e.data[0]);
    var bottom = parseInt(e.data[1]);
    var array = [], upperLimit = Math.sqrt(top), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < top; i++) {
        array.push(true);

    }
    //var previousProgress;
    var progress;
   // postMessage([1]);
    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i =2 ; i <= upperLimit; i++) {
        progress = Math.round(i /upperLimit * 100);
            postMessage(
                {messageType: "Progress", data: progress}
            );
        if (array[i]) {
            for (var j = i * i; j < top; j += i) {
                array[j] = false;

            }

        }

    }

   /* for(var x=0; x<6; x++) {
        postMessage([1]);
    }*/
    for (var i = 2; i < top; i++) {
        if(i>bottom) {
            if (array[i]) {
                output.push(i);
            }
        }

    }
    progress = 100;
    postMessage(
        {messageType: "Progress", data: progress}
    );
    postMessage(
        {messageType: "Output", data: output}
    );

   //postMessage([1]);
    //close();
};
