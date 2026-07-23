// Oromiyaa Digital Script

// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


if(menuBtn){

    menuBtn.addEventListener("click", ()=>{

        nav.classList.toggle("active");

    });

}


// Navigation keessaa link cuqaasuun menu cufa

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link=>{

    link.addEventListener("click", ()=>{

        nav.classList.remove("active");

    });

});




// Button Jalqabi

const startButton = document.querySelector(".hero button");


if(startButton){

    startButton.addEventListener("click", ()=>{

        document
        .querySelector("#hojii")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

}




// AI box demo

const aiButton = document.querySelector(".ai-box button");
const aiInput = document.querySelector(".ai-box input");


if(aiButton){

    aiButton.addEventListener("click", ()=>{


        if(aiInput.value.trim()===""){

            alert("Maal gaafachuu akka barbaaddu barreessi.");

        }

        else{

            alert(
            "Galatoomi! Oromiyaa AI gara fuulduraatti siif deebii kennuuf qophaa'a."
            );


            aiInput.value="";

        }


    });

}




// Card animation yeroo banamu

const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";


}


});


},{
threshold:0.2
});



cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(30px)";
card.style.transition="0.6s";


observer.observe(card);


});




// Waggaan footer ofumaan jijjiiramu

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p:last-child");


if(footerText){

footerText.innerHTML =
`© ${year} Oromiyaa Digital. Mirgi hundi eegamaadha.`;

}
