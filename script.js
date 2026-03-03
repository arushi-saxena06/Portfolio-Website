let cards=document.querySelectorAll(".card");
let overlay = document.querySelector(".overlay");

cards.forEach(card => { 
	card.addEventListener("click",function(){ 
		card.classList.toggle("active");
		overlay.classList.toggle("active"); 
	});
});

overlay.addEventListener("click",function(){
	overlay.classList.remove("active");
	cards.forEach(card => {card.classList.remove("active")});
});


