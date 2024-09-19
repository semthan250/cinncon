console.log("DCA Airdrops");


var links1 = document.getElementById("claim1");
var links2 = document.getElementById("claim2");
var links3 = document.getElementById("claim3");
var links4 = document.getElementById("claim4");
var links5 = document.getElementById("claim5");
var links6 = document.getElementById("claim6");
var links7 = document.getElementById("claim7");
var links8 = document.getElementById("claim8");
var links9 = document.getElementById("claim9");
var links10 = document.getElementById("claim10");
var links11 = document.getElementById("claim11");

var done1 = document.getElementById("done1");
var done2 = document.getElementById("done2");
var done3 = document.getElementById("done3");
var done4 = document.getElementById("done4");
var done5 = document.getElementById("done5");
var done6 = document.getElementById("done6");
var done7 = document.getElementById("done7");
var done8 = document.getElementById("done8");
var done9 = document.getElementById("done9");
var done10 = document.getElementById("done10");
var done11 = document.getElementById("done11");

let song = document.getElementById("music")
let song2 = document.getElementById("music2")
let song3 = document.getElementById("music3")

links1.addEventListener("click", function(){
    done1.style.backgroundColor = "lightgreen";
    done1.innerText = "Claimed"
    song2.play()

    done1.innerText = "Claimed" ;

    localStorage.setItem("color1",done1.style.backgroundColor);
localStorage.setItem("name1",done1.innerText);
})

links2.addEventListener("click", function(){
        done2.style.backgroundColor = "lightgreen";
        done2.innerText = "Claimed"
        song3.play()

    localStorage.setItem("color2",done2.style.backgroundColor);
localStorage.setItem("name2",done2.innerText);
    })

    var storedcolor2 = localStorage.getItem("color2");
        var storedvalue2 = localStorage.getItem("name2");
        if(storedcolor2){
                done2.style.backgroundColor = storedcolor2;
                done2.innerText = storedvalue2;
            }

    links3.addEventListener("click", function(){
        done3.style.backgroundColor = "lightgreen";
        done3.innerText = "Claimed"
    song2.play()

    done3.innerText = "Claimed" ;

    localStorage.setItem("color3",done3.style.backgroundColor);
localStorage.setItem("name3",done3.innerText);
        })

        var storedcolor3 = localStorage.getItem("color3");
        var storedvalue3 = localStorage.getItem("name3");
        if(storedcolor3){
                done3.style.backgroundColor = storedcolor3;
                done3.innerText = storedvalue3;
            }

    links4.addEventListener("click", function(){
        done4.style.backgroundColor = "lightgreen";
        done4.innerText = "Claimed" ;

//     localStorage.setItem("color4",done4.style.backgroundColor);
// localStorage.setItem("name4",done4.innerText);

// gsap.from(".container #done4",{
//     delay:3,
//     duration:1.5,
//     rotate:360,
//     scale:1,
//     opacity:0,
//     innerText:"claimed"
// })
            })

            var storedcolor4 = localStorage.getItem("color4");
            var storedvalue4 = localStorage.getItem("name4");
            if(storedcolor4){
                done4.style.backgroundColor = storedcolor4;
                done4.innerText = storedvalue4;
            }       
            
            links5.addEventListener("click", function(){
                done5.style.backgroundColor = "lightgreen";
                done5.innerText = "Claimed" ;
                
                localStorage.setItem("color5",done5.style.backgroundColor);
                localStorage.setItem("name5",done5.innerText);
                
            })

            var storedcolor5 = localStorage.getItem("color5");
     var storedvalue5 = localStorage.getItem("name5");
     if(storedcolor5){
         done5.style.backgroundColor = storedcolor5;
         done5.innerText = storedvalue5;
        }        
        
        links6.addEventListener("click", function(){
            done6.style.backgroundColor = "lightgreen";
            done6.innerText = "Claimed" ;

            localStorage.setItem("color6",done6.style.backgroundColor);
            localStorage.setItem("name6",done6.innerText);
            
        })
        
        var storedcolor6 = localStorage.getItem("color6");
        var storedvalue6 = localStorage.getItem("name6");
        if(storedcolor6){
            done6.style.backgroundColor = storedcolor6;
            done6.innerText = storedvalue6;
        }        
        
                    links7.addEventListener("click", function(){
                        done7.style.backgroundColor = "lightgreen";
                        done7.innerText = "Claimed" ;
        
                        localStorage.setItem("color7",done7.style.backgroundColor);
                        localStorage.setItem("name7",done7.innerText);
                        
                        new Notification("See You Tommorow Srijan");
    })

       var storedcolor7 = localStorage.getItem("color7");
       var storedvalue7 = localStorage.getItem("name7");
       if(storedcolor7){
           done7.style.backgroundColor = storedcolor7;
           done7.innerText = storedvalue7;
        }                        
        
        links8.addEventListener("click", function(){
            done8.style.backgroundColor = "lightgreen";
            done8.innerText = "Claimed" ;
            
            localStorage.setItem("color8",done8.style.backgroundColor);
            localStorage.setItem("name8",done8.innerText);
        })
        var storedcolor8 = localStorage.getItem("color8");
        var storedvalue8 = localStorage.getItem("name8");
        if(storedcolor8){
       done8.style.backgroundColor = storedcolor8;
       done8.innerText = storedvalue8;
    }        
    
    links9.addEventListener("click", function(){
        done9.style.backgroundColor = "lightgreen";
        done9.innerText = "Claimed" ;
        
        localStorage.setItem("color9",done9.style.backgroundColor);
        localStorage.setItem("name9",done9.innerText);
         })
         var storedcolor9 = localStorage.getItem("color9");
         var storedvalue9 = localStorage.getItem("name9");
           if(storedcolor9){
             done9.style.backgroundColor = storedcolor9;
             done9.innerText = storedvalue9;
            } 
            
            links10.addEventListener("click", function(){
                done10.style.backgroundColor = "lightgreen";
                done10.innerText = "Claimed" ;
                
                localStorage.setItem("color10",done10.style.backgroundColor);
                localStorage.setItem("name10",done10.innerText);
            })
            
            var storedcolor1 = localStorage.getItem("color1");
            var storedvalue1 = localStorage.getItem("name1");
            if(storedcolor1){
                done1.style.backgroundColor = storedcolor1;
                done1.innerText = storedvalue1;
            }
            
            var storedcolor10 = localStorage.getItem("color10");
            var storedvalue10 = localStorage.getItem("name10");
            if(storedcolor10){
                done10.style.backgroundColor = storedcolor10;
                done10.innerText = storedvalue10;
            }

            
            links11.addEventListener("click", function(){
                event.preventDefault(); 
               var userHours = prompt("Enter the number of hours for the countdown:", "2");
    if (userHours !== null && !isNaN(userHours) && userHours > 0) {
        var hours = parseFloat(userHours);
                done11.style.backgroundColor = "lightgreen";
                
                song2.play();
                
                
                // localStorage.setItem("color11",done11.style.backgroundColor);
                var endTime = new Date(new Date().getTime() + hours * 60 * 60 * 1000);
                localStorage.setItem("endTime", endTime);
                localStorage.setItem("name11",done11.innerText);
                startTimer(endTime);
                localStorage.setItem("userHours", hours);

                window.open(links11.href, "_blank");
                  }   else {
                    alert("Please enter a valid number of hours.");
                }
            })
            
            var storedcolor = localStorage.getItem("color11");
           var storedEndTime = localStorage.getItem("endTime");
            if(storedcolor){
                done11.style.backgroundColor = storedcolor;
                // done11.innerText = storedvalue;
            }

if(storedEndTime){
                var endTime = new Date(storedEndTime);
                startTimer(endTime);
            }

            function startTimer(endTime) {
                var x = setInterval(() => {
                    var now = new Date().getTime();
                    var distance = endTime - now;
            
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
                    done11.innerText = `${hours}:${minutes}:${seconds}`;
            
                    if (distance < 0) {
                        clearInterval(x);
                        done11.innerText = "Claim";
                        localStorage.removeItem("endTime", endTime)
                        localStorage.removeItem("name11",done11.innerText);
                        localStorage.removeItem("userHours", hours);
                    }
                }, 1000);
            }

            
            // function nday(){
            //     // var lelo = new Date().setUTCHours(23,58,0);
            //     // var now = new Date().setHours(new Date().getHours()+ 24 )
            //     var now = new Date();
            //     now.setHours(20,25,0);
            //     // console.log(new Date(now));
            //     // console.log()
            //     return now.getTime();
            //     // return now;
            // }
            // var now = new Date();
            // now.setHours(23,55,0);

            // var deadline = new Date(new Date());
            
            // console.log("Claim Timing " + now);
            // // console.log("Deadline Ka Waqt " + new Date(new Date()));
            // console.log("Deadline Ka Waqt " + deadline);
            
            // // var timeDiff = nday() - Date.now();
            
            
            //     var see = nday();
                // console.log(timeDiff);
                // console.log(now.getTime());
            
            //     var currentTime = new Date();
            //     var timeDifference = see.getTime() - currentTime.getTime();
            
            //     console.log(timeDifference);
            
            // if(deadline > now){
            //     console.log("Dekha bhai hogya na")
            //     localStorage.removeItem("color11");
            //     localStorage.removeItem("name11");

            //     localStorage.removeItem("color1");
            //     localStorage.removeItem("name1");
            //     localStorage.removeItem("color2");
            //     localStorage.removeItem("name2");
            //     localStorage.removeItem("color3");
            //     localStorage.removeItem("name3");
            //     localStorage.removeItem("color4");
            //     localStorage.removeItem("name4");
            //     localStorage.removeItem("color5");
            //     localStorage.removeItem("name5");
            //     localStorage.removeItem("color6");
            //     localStorage.removeItem("name6");
            //     localStorage.removeItem("color7");
            //     localStorage.removeItem("name7");
            //     localStorage.removeItem("color8");
            //     localStorage.removeItem("name8");
            //     localStorage.removeItem("color9");
            //     localStorage.removeItem("name9");
            //     localStorage.removeItem("color10");
            //     localStorage.removeItem("name10");

            // }
      
            // setTimeout(function() {
            //     localStorage.removeItem("color11");
            //     localStorage.removeItem("name11");
            //     localStorage.removeItem("color1");
            //     localStorage.removeItem("name1");
            //     localStorage.removeItem("color2");
            //     localStorage.removeItem("name2");
            //     localStorage.removeItem("color3");
            //     localStorage.removeItem("name3");
            //     localStorage.removeItem("color4");
            //     localStorage.removeItem("name4");
            //     localStorage.removeItem("color5");
            //     localStorage.removeItem("name5");
            //     localStorage.removeItem("color6");
            //     localStorage.removeItem("name6");
            //     localStorage.removeItem("color7");
            //     localStorage.removeItem("name7");
            //     localStorage.removeItem("color8");
            //     localStorage.removeItem("name8");
            //     localStorage.removeItem("color9");
            //     localStorage.removeItem("name9");
            //     localStorage.removeItem("color10");
            //     localStorage.removeItem("name10");
            //     done11.style.backgroundColor = "white";
            //     done11.innerText = "Claim";
            //     done1.style.backgroundColor = "white";
            //     done1.innerText = "Claim";
            //     done2.style.backgroundColor = "white";
            //     done2.innerText = "Claim";
            //     done3.style.backgroundColor = "white";
            //     done3.innerText = "Claim";
            // }, );

            
            
//ANOTHER SHORTCUT WAY ( Problem:All Buttons get green at same time )

// const dekhte = [links1,links2,links3,links4,links5,links6,links7,links8,links9,links10,links11];
// const butten = [done1,done2,done3,done4,done5,done6,done7,done8,done9,done10,done11];

// dekhte.forEach((link) => {
    //     addEventListener("click", function(){
        //             butten.forEach((bts) => {
            //                 bts.style.backgroundColor = "lightgreen";
            //             })
//         });
// });

// gsap.from(".container li",{
//     delay:1,
//     duration:2,
//     y:-280,
//     opacity:0,
//     stagger:1,
//     // scrollTrigger:{
//         //     trigger:".container li",
//         //     scroller:"body",
//         //     markers:true,
//         //     start:"top 20%",
//         // }
//     })
    
     Notification.requestPermission()
    
    
