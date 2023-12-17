const container = document.querySelector('.container')
let qrInput = document.getElementById('input')
let genereteBtn = document.getElementById('btn-gerar')
let qrImg = document.querySelector('.img')


genereteBtn.addEventListener('click',()=>{
   let inputValue = qrInput.value
   if(!inputValue){
      alert('Insira um texto para gerar um QR Code')
   }else{
      genereteBtn.innerText='Gerando QR Code...'
      qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue}`
      qrImg.addEventListener('load',()=>{
         genereteBtn.innerText='Gerar QR code'
          container.classList.add('active')
      })
     
   }
   if(!inputValue){
      container.classList.remove('active')
   }

})