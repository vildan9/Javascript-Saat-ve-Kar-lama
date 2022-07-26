let userName = prompt ("Kulanıcı Adi Giriniz :") 
let myname = document.querySelector("#myName") 
myname.innerHTML=userName

function time ()
{
     let moment = new Date();  

    let hours = moment.getHours(); 
   
    let minutes = moment.getMinutes(); 
    // saniye ekledik
    let seconds = moment.getSeconds(); 
    // güne ekstra zaman atamamızın sebebi aşağıdaki verdiğimiz değerler ile sorunsuz çalışa bilsin diye aksi takdirde çalışmaz
    var d = new Date(); 
    // günleri ekledik
    var days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
    // id tanımmladık
    let iceaktarma= document.querySelector("#myClock") 
    // burda oluşturduğumuz değerleri ekrana yazdırıyoruz
    iceaktarma.innerHTML= hours + ":" + minutes +":" + seconds + " " + days[d.getDay()]; 
}
let now = setInterval(time,100); 