let currValue= "X"
let count=0;
function display(id){
      let div=document.getElementById(id);

      if(currValue=="O"){
        currValue="X";
        div.innerHTML="X";
       count=count+1;
      }
      else{
        currValue="O";
        div.innerHTML="O";
        count=count+1;
      }
      if(count>=5){
      let box=document.getElementsByClassName("box");
        
      if(box[0].innerHTML==box[1].innerHTML==box[2].innerHTML || box[0].innerHTML==box[3].innerHTML==box[6].innerHTML||box[0].innerHTML==box[4].innerHTML==box[8].innerHTML)
       {
        
         if(box[0].innerText=="O")
         {  
          // alert("win first")
            
            Swal.fire({
          title: "Win player first !",
          icon: "success",
          draggable: true
         
        });
        
    }
    else {
      // alert("win second")
       
        Swal.fire({
        title: "Win player second !",
        icon: "success",
        draggable: true
       
      });
    }
}
      else if(box[8].innerHTML==box[7].innerHTML==box[6].innerHTML ||box[8].innerHTML==box[5].innerHTML==box[2].innerHTML ||box[8].innerHTML==box[4].innerHTML==box[0].innerHTML )
      {  
        if(box[8]=="O"){
          // alert("win first")

         Swal.fire({
            title: "Win player first!",
            icon: "success",
            draggable: true
          });
        }
        else{
          // alert("win second")

            Swal.fire({
                title: "Win player second!",
                icon: "success",
                draggable: true
              });
        }

      }
      else if(box[3].innerHTML==box[4].innerHTML==box[5].innerHTML )
       {
        if(box[3]=="O"){
          // alert("win first")
            Swal.fire({
               title: "Win player first!",
               icon: "success",
               draggable: true
             });
           }
           else{
          // alert("win second")

               Swal.fire({
                   title: "Win player second!",
                   icon: "success",
                   draggable: true
                 });
           }
       }
       else if(count==8){
        // alert("win no player")

        Swal.fire({
          title: "NO player win!",
          // icon: "success",
          draggable: true
        });
       }
      
}
}


