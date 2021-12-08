gsap.fromTo(".title-text", {opacity: 0, y:-25, scale:0}, 
    {opacity: 1, y:0, scale:1, duration: 2.5});

gsap.fromTo(".weather-container", {opacity: 0, y:0, scale:0}, 
   {opacity: 1, y:0, scale:1, duration: 2});

gsap.fromTo(".button-group", {opacity: 0, y:100, scale:0}, 
    {opacity: 1, y:0, scale:1, duration: 2.8});