var toggle= document.getElementById('a-toggle');
function shownav(){

    var x = document.getElementById('responsive-nav');
    if(x.className==='responsive-nav'){
      x.className+=" unfold";
    }else{
      x.className='responsive-nav';
    }

}
toggle.addEventListener('click',function(e){
e.preventDefault();
  shownav();
  });
