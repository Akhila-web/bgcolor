let a=document.getElementById("color")
let b=document.getElementById("bRadius")
let img=document.querySelector("img")

function colorchange(z){
    console.log(z);
    

    if(z.key==="Enter"){
        document.body.style.background=a.value
    }

}
function Radiuschange(z){
    console.log(z);
    if(z.key==="Enter"){
        img.style.borderRadius=`${b.value}px`
    }
}