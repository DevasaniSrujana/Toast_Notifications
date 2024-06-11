let successMsg='<i class="fa-solid fa-check-to-slot"></i>Successfully Submited'
let errorMsg='<i class="fa-solid fa-circle-xmark"></i>There is an Error'
let invalidMsg='<i class="fa-solid fa-circle-exclamation"></i>Invalid,Check the Code'
let toastBox=document.getElementById("toastBox")

function showToast(msg){
    let toast=document.createElement('div')
   toast.classList.add('toast')
   toast.innerHTML=msg
    toastBox.appendChild(toast)

    if(msg.includes('Error')){
        toast.classList.add('error')
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid')
    }
    setTimeout(() => {
        toast.remove()
    },5000);
}