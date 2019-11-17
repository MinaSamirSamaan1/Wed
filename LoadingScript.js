function AsIs()
{
  setTimeout(function(){

     document.getElementById("mina-img").classList.remove('to-be-retrieved');
     document.getElementById('mina-spinner').style.display="none";



},700)
};

function slide(){
    document.getElementById('mina-slide').className ='slide';
  };

  function page1(){
  window.location.href = "page1.html";
};
function homePage(){
window.location.href = "index.html";
};
