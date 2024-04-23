let img_box = document.getElementById('img_box');
let qr_image = document.getElementById('qr_image');
let qr_text = document.getElementById('qr_text');

function generate_qr(){
    if(qr_text.value.length > 0){
    qr_image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr_text.value;
    img_box.classList.add('show-img')
    }else{
        qr_text.classList.add('error');
        setTimeout(() =>{qr_text.classList.remove('error');},1000);
    }
}