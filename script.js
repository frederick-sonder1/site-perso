document.addEventListener('DOMContentLoaded',(Event)=>
{
    let burger = document.getElementById('burger')
    let ulpt = document.getElementById('menupetit')
    ulpt.style.display= 'none'

    burger.addEventListener('click', function showHide()
    {
        if(ulpt.style.display == 'none')
        {
            ulpt.style.display = 'flex'
        }
        else
        {
            ulpt.style.display = 'none'
        }
    })
    ulpt.addEventListener('click', function hide()
    {
        ulpt.style.display= 'none'

    })

    //--------------------------- animation h1 [1]

    var element = document.getElementById("watchme");
    element.addEventListener("animationstart", listener, false);
    element.addEventListener("animationend", listener, false);
    element.addEventListener("animationiteration", listener, false);

    element.className = "slidein";

    function listener(event) {
        // var l = document.createElement("li");
        switch(event.type) {
          case "animationstart":
            // l.innerHTML = "Début : durée écoulée : " + event.elapsedTime;
            break;
          case "animationend":
            // l.innerHTML = "Fin : durée écoulée : " + event.elapsedTime;
            break;
          case "animationiteration":
            // l.innerHTML = "Nouvelle boucle démarrée à : " + event.elapsedTime;
            break;
        }
        // document.getElementById("output").appendChild(l);
      }

       //--------------------------- animation h1 [2]

       var element = document.getElementById("watchme2");
       element.addEventListener("animationstart", listener, false);
       element.addEventListener("animationend", listener, false);
       element.addEventListener("animationiteration", listener, false);
       
       element.className = "slidein";
       
           function listener(event) {
               // var l = document.createElement("li");
               switch(event.type) {
                 case "animationstart":
                   // l.innerHTML = "Début : durée écoulée : " + event.elapsedTime;
                   break;
                 case "animationend":
                   // l.innerHTML = "Fin : durée écoulée : " + event.elapsedTime;
                   break;
                 case "animationiteration":
                   // l.innerHTML = "Nouvelle boucle démarrée à : " + event.elapsedTime;
                   break;
               }
              //  document.getElementById("output").appendChild(l);
             }
        //--------------------------- animation h1 [3]

        var element = document.getElementById("watchme3");
        element.addEventListener("animationstart", listener, false);
        element.addEventListener("animationend", listener, false);
        element.addEventListener("animationiteration", listener, false);
        
        element.className = "slidein";
        
            function listener(event) {
                // var l = document.createElement("li");
                switch(event.type) {
                  case "animationstart":
                    // l.innerHTML = "Début : durée écoulée : " + event.elapsedTime;
                    break;
                  case "animationend":
                    // l.innerHTML = "Fin : durée écoulée : " + event.elapsedTime;
                    break;
                  case "animationiteration":
                    // l.innerHTML = "Nouvelle boucle démarrée à : " + event.elapsedTime;
                    break;
                }
                // document.getElementById("output").appendChild(l);
              }
         //--------------------------- animation h1 [4]

         var element = document.getElementById("watchme4");
         element.addEventListener("animationstart", listener, false);
        //  element.addEventListener("animationend", listener, false);
         element.addEventListener("animationiteration", listener, false);
         
         element.className = "slidein";
         
             function listener(event) {
                 // var l = document.createElement("li");
                 switch(event.type) {
                   case "animationstart":
                     // l.innerHTML = "Début : durée écoulée : " + event.elapsedTime;
                     break;
                   case "animationend":
                     // l.innerHTML = "Fin : durée écoulée : " + event.elapsedTime;
                     break;
                   case "animationiteration":
                     // l.innerHTML = "Nouvelle boucle démarrée à : " + event.elapsedTime;
                     break;
                 }
                //  document.getElementById("output").appendChild(l);
               }
})