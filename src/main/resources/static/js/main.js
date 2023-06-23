
/*--------------------------------------------get in touch popup----------------------------------- */
function closepop(){
  document.getElementById("popup").setAttribute("style",
  "display:none;");
 }
 
 /*---------------------------------------------slider code----------------------------------- */
 
 var span= document.getElementsByClassName('slideItem');
    var boxx= document.getElementsByClassName('boxx');
    var l=0;
    span[1].onclick=()=>{
        l++;
        for(var i of boxx)
        {
            if (l==0){i.style.left="0px";}
            if (l==1){i.style.left="-320px";}
            if (l==2){i.style.left="-640px";}
            // if (l==3){i.style.left="-950px";}
            // if (l==4){i.style.left="-1240px";}
            if (l>4){l=4;}
        }
    }

    span[0].onclick=()=>{
        l--;
        for(var i of boxx){
            if (l==0){i.style.left="0px";}
            if (l==1){i.style.left="-320px";}
            if (l==2){i.style.left="-640px";}
            // if (l==3){i.style.left="-950px";}
            if (l<0){l=0;}
        }
    }   