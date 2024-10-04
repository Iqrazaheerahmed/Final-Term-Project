
         // single product js

         var centerimg = document.getElementById("centerimg");
         var smallimg = document.getElementsByClassName("smallimg");
         
         smallimg[0].onclick =function(){
             centerimg.src = smallimg[0].src;
         }
         smallimg[1].onclick =function(){
             centerimg.src = smallimg[1].src;
         }
         smallimg[2].onclick =function(){
             centerimg.src = smallimg[2].src;
         }
         smallimg[3].onclick =function(){
             centerimg.src = smallimg[3].src;
         }
         
         var form = document.getElementById('form')
         form.addEventListener('submit',function(event){
             event.preventDefault()
             var select = document.getElementById("select").value;
      var review = document.getElementById("review").value;
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
             
         })
