(new Blinken({title: "Red Green", author: "ewust"})).run(function(lights) {
 
    // variable that keeps track of if we are red (true) or green (false)
    var strand_red = true;
 
    // Set the strand to full brightness
    for (i=0; i<100; i++) {
        lights[i].a = 1;
    }
 
    // Return our update function
    return function () {
 
        // Loop over all the lights 
        for (i=0; i<100; i++) {
            if (strand_red) {
                // Set red
                lights[i].rgb(1, 0, 0);
            } else {
                // Set green
                lights[i].rgb(0.55, 0.46, 0.0);
            }
        }
        strand_red = !strand_red;
 
        // Wait 500 ms until we get called again.
        return 500;
    };
});