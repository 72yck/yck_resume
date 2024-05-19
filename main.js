console.log("hello2");

const bt=document.querySelector(".prof button");
const inp=document.querySelector(".prof input");

bt.addEventListener("click",()=>{
    console.log(inp.value);
    document.getElementById("job2").innerHTML = inp.value;
})
