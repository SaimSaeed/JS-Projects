const endDate = "6 April 2023 08:46 PM"
document.getElementById("end-date").innerText= endDate;
const inputs = document.querySelectorAll("input");


const clock = ()=>{
    const end = new Date (endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if(diff<0) return;
    inputs[0].value = Math.ceil(diff/3600/24);
    inputs[1].value = Math.ceil(diff/3600%24);
      inputs[2].value = Math.ceil(diff/60)%60;
       inputs[3].value = Math.ceil(diff)%60;
}



clock()


setInterval(() => {
    clock()
}, 1000);