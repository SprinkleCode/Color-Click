    
    


    var points = 0;
    var cost = 10;
    var timesColorChange = 0;
    var shapeColor;
    
    

    //count the clicks
    function shapeClick(number){
        points += number;
        document.getElementById("gamepoints").innerHTML = points;
    }
    
    
    
 
    //when button is clicked, function runs to buy a color
    function buyColor(){
        
        //if points are = or > cost, increment by 10
        if(points >= cost){
        
            //pay for color
            points = points - cost;
            
            //update new cost for next color
            cost = cost + 10;
            document.getElementById("colorCost").innerHTML = cost;
            
            //update color change number
            timesColorChange++;
            document.getElementById("timesColorChange").innerHTML = timesColorChange;
            
            //update points
            document.getElementById("gamepoints").innerHTML = points;
            
            //change to new color
            shapeColor = document.getElementById("cir").style.fill = getRandomColor();
            
            //create loop to change color
            function getRandomColor() {
            
                //letters that make up hex color
                var letters = "0123456789ABCDEF";
                var color = "#";
                
                //for loop -- i = counter start at 0, create a combination less than 6 characters, update i by 1
                for (var i = 0; i < 6; i++ ) {
                    
                    //color = #random combination of letters array [round to nearest integer (random method x 16 characters in the string)]
                    color = color + letters[Math.floor(Math.random() * 16)];
                }
                
                //save new color value from loop
                return color;
                
            }
           
        }
        
        else{
                alert("You don't have enough points");
            }
        
       
    }
    
    function save(){
        localStorage.setItem("points",points);
        localStorage.setItem("timesColorChange",timesColorChange);
        localStorage.setItem("cost",cost);
        localStorage.setItem("shapeColor",shapeColor);
    }
    
    function load(){
        points = 0;
        document.getElementById("gamepoints").innerHTML = points;
        cost = 10;
        document.getElementById("colorCost").innerHTML = cost;
        timesColorChange = 0;
        timesColorChange = localStorage.getItem("timesColorChange");
        
        
        //load points, translate string to number, print stored points
        points = localStorage.getItem("points");
        points = parseInt(points);
        document.getElementById("gamepoints").innerHTML = points;
        
        //load timesColorChange, translate string to number, print saved timesColorChange
        timesColorChange = localStorage.getItem("timesColorChange");
        timesColorChange = parseInt(timesColorChange);
        document.getElementById("timesColorChange").innerHTML = timesColorChange;
        
        //load cost, translate string to number, print saved cost
        cost = localStorage.getItem("cost");
        cost = parseInt(cost);
        document.getElementById("colorCost").innerHTML = cost;
        
        //load saved color
        shapeColor = localStorage.getItem("shapeColor");
        document.getElementById("cir").style.fill = shapeColor;
    }
    
    function startOver(){
        //remove, reset, display points
        localStorage.removeItem("points");
        points = 0;
        document.getElementById("gamepoints").innerHTML = points;
       
        //remove, reset, display color changes
        localStorage.removeItem("timesColorChange");
        timesColorChange = 0;
        document.getElementById("timesColorChange").innerHTML = timesColorChange;
        
        //remove, reset, display color cost
        localStorage.removeItem("cost");
        cost = 10;
        document.getElementById("colorCost").innerHTML = cost;
        
        //reset color
        document.getElementById("cir").style.fill = "yellow";
        
    }
    
    function play_pause() {
        var myAudio = document.getElementById("sound");
        if (myAudio.paused) {
            myAudio.play();
        } else {
        myAudio.pause();
        }
    }
  
    
