

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '01703599002' && pinNumber === '1234'){
        console.log('login successfully');
        window.location.href = '/home.html';
    }
    else{
        alert('wrong phone number or pin');
    }
})