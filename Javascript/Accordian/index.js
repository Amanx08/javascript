// noob

// In this method we have to add onclick function in Html file --( every Icon )



let accordionIcon = document.querySelectorAll(".accordion-icon");

let accordionContent = document.querySelectorAll(".accordion__content");

let accodianData = false;

function OpenIcon(e) {

    if (accodianData == false) {

        accordionContent[e].style.height = "auto";

        accodianData = true;

    } else {

        accordionContent[e].style.height = "0";

        accodianData = false;

    }

}





// Pro
//pending

// let acc = document.querySelectorAll(".accordion-icon");

// // let accordionContent = document.querySelectorAll(".accordion__content");


// for (i = 0; i < acc.length; i++) {

//     acc[i].addEventListener("click", function() {
    
//         this.classList.toggle("active");
    
//         var accordionContent = this.nextElementSibling;
    
//         if (accordionContent.style.display == "block") {
    
//             accordionContent.style.display = "none";
    
//         } else {
    
//             accordionContent.style.display = "block";
    
//         }
  
//     });

// }
