(new Blinken({title: "MyoBlinken", author: "Michelle, Bianca, Neely"})).run(function(lights) {
 
    // variable that keeps track of if we are red (true) or green (false)
    var strand_red = true;
    var x = 0;
    var d = 1;
    var n = 10;
 
    // Set the strand to full brightness
    for (i=0; i<100; i++) {
        lights[i].a = 1;
    }
 
    // Return our update function
    return function () {
      for (i = 0; i < lights.length; i++)
        if (i > x - n && i < x + n) {
                if (strand_red) {
                    // Set red
                    lights[i].rgb(1, 0, 0);
                } else {
                    // Set gold
                    lights[i].rgb(0.55, 0.46, 0.0);
                }
            strand_red = !strand_red;
          
          } else {
                lights[i].rgb(0, 0, 0);
         }
         x += d;
      
      if (x == lights.length+n || x == -n) {
            d *= -1;
        }

        return 50;
    };
});

(new Blinken()).run(function (lights) {

   var i = 0;
       for (i = 0; i <14; i++) {
          lights[i].rgb((1 - i/13),1,1);
       }
       for (i = 14; i < 29; i++) {
          lights[i].rgb(0,(1 - (i-14)/14),1);
       }
       for (i = 29; i < 43; i++) {
          lights[i].rgb(((i-29)/13),0,1);
       }
       for (i = 43; i < 58; i++) {
          lights[i].rgb(1,0,(1 - (i-43)/14));
       }
       for (i = 58; i < 72; i++) {
          lights[i].rgb(1,((i-58)/13),0);
       }
       for (i = 72; i < 86; i++) {
          lights[i].rgb((1-(i-72)/13),1,0);
       }
       for (i = 86; i < 100; i++) {
          lights[i].rgb(((i-86)/14),1,((i-86)/14));
       }

    return function () {
       lights[99].r = lights[0].r;
       lights[99].g = lights[0].g;
       lights[99].b = lights[0].b;
       for (i=0; i<99; i++) {
          lights[i].r = lights[i+1].r;
          lights[i].g = lights[i+1].g;
          lights[i].b = lights[i+1].b;
       }
        return 100; // ms until called again
    };
});

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