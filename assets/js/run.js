var toggle= document.getElementById('a-toggle');
function shownav(){
    var x = document.getElementById('responsive-nav');
    if(x.className==='responsive-nav'){  // check if there is already a class name
      x.className+=" unfold"; //add a clas unfold
    }else{
      x.className='responsive-nav'; // set the only one class
    }
}
toggle.addEventListener('click',function(e){
    e.preventDefault();
  shownav();
},'false');
// // Prevent All ancor to folow the link============================
// var ancors= document.querySelectorAll('a');
// for(var i =0;i<ancors.length;i++){
//     ancors[i].addEventListener('click',function(e){
//     e.preventDefault();},
//     'false');
// }

// ================================================================
