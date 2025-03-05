'use strict';

let user = JSON.parse(localStorage.getItem('user'));

document.querySelector('#joinToChannel')?.addEventListener('click', () => {
  window.location.href = 'https://t.me/+jcN0N7kRX0ljMWIy';
})

if (user && user?.name && user?.phone && user?.time) {
  const formData = new FormData();
  formData.append('Ismi', user?.name);
  formData.append('Telefon raqami', user?.phone);
  formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);
  fetch('https://script.google.com/macros/s/AKfycbxRE4sCEGe2lGLnDPXg4vJYJ0C6YfK2unf87Z20y_RuxXgSazCZUhYMKWjKZ-c5eERl/exec', {
    method: 'POST',
    body: formData
  })
    .then()
    .then(() => {
      localStorage.clear();
    })
} else {
  localStorage.clear();
}
