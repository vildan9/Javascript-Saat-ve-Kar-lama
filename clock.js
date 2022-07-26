let userName = prompt ("Kulanıcı Adi Giriniz :") 
let myname = document.querySelector("#myName") 
myname.innerHTML=userName

function time ()
{
     let moment = new Date();  

    let hours = moment.getHours(); 
   
    let minutes = moment.getMinutes(); 
  
    let seconds = moment.getSeconds(); 

    var d = new Date(); 
 
    var days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
    
    let iceaktarma= document.querySelector("#myClock") 
   
    iceaktarma.innerHTML= hours + ":" + minutes +":" + seconds + " " + days[d.getDay()]; 
}
let now = setInterval(time,100); 
