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
