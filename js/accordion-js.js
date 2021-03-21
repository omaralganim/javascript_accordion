//var heading=document.getElementsByClassName('accordion');
//
//var i;
//for(i=0; i < heading.length; i++){
//    heading[i].addEventListener('click', function(){
//   n
//        
//        
//    });
//         
//}

var heading = document.getElementsByClassName('accordion');


var i;

for(i=0; i < heading.length; i++){
    heading[i].addEventListener('click', function(){
        this.classList.toggle('active');
        
        var desc=this.nextElementSibling;
        if( desc.style.display=='block'){
            desc.style.display='none';
           
           }else {
               desc.style.display='block';
           }
        
    });

}