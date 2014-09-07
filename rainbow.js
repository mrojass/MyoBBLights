
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

