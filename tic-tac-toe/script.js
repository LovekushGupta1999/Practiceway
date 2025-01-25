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
        console.log(box[0].innerHTML)
        console.log(box[1].innerHTML)
        console.log(box[2].innerHTML)
        console.log(box[3].innerHTML)
        console.log(box[4].innerHTML)
        console.log(box[5].innerHTML)
        console.log(box[6].innerHTML)
        console.log(box[7].innerHTML)
        // console.log(box[4].innerHTML)
        console.log(box[8].innerHTML)
      if(box[0].innerHTML==box[1].innerHTML==box[2].innerHTML ||box[0].innerHTML==box[3].innerHTML==box[6].innerHTML||box[0].innerHTML==box[4].innerHTML==box[8].innerHTML)
       {
        
         if(box[0].innerText=="0")
         {  
            alert("1st player")
            Swal.fire({
          title: "Win player first !",
          icon: "success",
          draggable: true
         
        });
    }
    else{
        alert("2nd")
        Swal.fire({
        title: "Win player second !",
        icon: "success",
        draggable: true
       
      });
    }
}
    //   else if(box[9].innerHTML==box[8].innerHTML==box[7].innerHTML ||box[9].innerHTML==box[6].innerHTML==box[3].innerHTML )
    //   {  
    //     if(box[9]=="x"){
    //      Swal.fire({
    //         title: "Win player first!",
    //         icon: "success",
    //         draggable: true
    //       });
    //     }
    //     else{
    //         Swal.fire({
    //             title: "Win player second!",
    //             icon: "success",
    //             draggable: true
    //           });
    //     }

    //   }
    //   else if(box[3].innerHTML==box[5].innerHTML==box[7].innerHTML)
    //    {
    //     if(box[3]=="x"){
    //         Swal.fire({
    //            title: "Win player first!",
    //            icon: "success",
    //            draggable: true
    //          });
    //        }
    //        else{
    //            Swal.fire({
    //                title: "Win player second!",
    //                icon: "success",
    //                draggable: true
    //              });
    //        }
    //    }
      
}
}


