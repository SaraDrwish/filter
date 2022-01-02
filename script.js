
let filterBtn = document.querySelectorAll(".filterBtn li");
let items = document.querySelectorAll(".containerItems .items");

//not right
// for(let i = 0 ; i< filterBtn.length ; i++){
//     filterBtn[i].onclick
// }


filterBtn.forEach(function(el){
    
    el.addEventListener("click" , function(){
        // alert("this is a right step >>>>>> ^_^ ")
        document.querySelector("ul li.active").classList.remove("active");
        el.classList.add("active");

        let target = el.dataset.target;

          items.forEach(function(elmnt){

            elmnt.classList.add("hiddin");
            elmnt.classList.remove("visble");

             
            if(elmnt.dataset.id == target  || target== "all"){
                elmnt.classList.add("visble");
                elmnt.classList.remove("hiddin");
            }

        })

    })
} )

function load(){
    let loader = document.querySelector(".laoder");
    loader.classList.add("fadOut");
}

function fade(){
    setInterval(load , 3000);
}
fade()

  
