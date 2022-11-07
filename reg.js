let elementRef11 = document.getElementById('username');
let elementRef12 = document.getElementById('password');
let elementRef13 = document.getElementById('passwordconfirm');

function showMessage() {
    axios.post('https://man-backend-2.onrender.com/exercise/register', {username: elementRef11.value, password: elementRef12.value, passwordсonfirm: elementRef13.value})
    window.location.href= 'zxc_resh.html';
}