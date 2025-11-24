const boxFBT = document.querySelectorAll('.front, .back, .tools');
const bar = document.querySelectorAll('.tSkill');
const boxBar = document.querySelector('.blockSkill');

bar.forEach((bart, index) => {
    bart.addEventListener('click', () => {
        bar.forEach(item => item.classList.remove('active'));

        boxFBT.forEach(fbt => fbt.style.display = 'none');
        
        bart.classList.add('active');

        if (index === 0) {
            boxFBT[0].style.display = 'flex';
            boxBar.style.borderRadius = '0 2rem 2rem 2rem';
        } else if (index === 1) {
            boxFBT[1].style.display = 'flex';
            boxBar.style.borderRadius = '2rem';
        } else if (index === 2) {
            boxFBT[2].style.display = 'flex';
            boxBar.style.borderRadius = '2rem 0 2rem 2rem';
        }
    })
}) 

document.addEventListener('DOMContentLoaded', function() {
    boxFBT.forEach(fbt => fbt.style.display = 'none');
    boxFBT[0].style.display = 'flex';
});

var names = document.querySelector('.name');
var email = document.querySelector('.email');
var tg = document.querySelector('.social');
var messages = document.querySelector('.message');
let isSending = false;

const button = document.querySelector('.button-message');
const secty = document.querySelectorAll('.name, .email, .social, .message');

button.addEventListener('click', () => {
  if (isSending) return;

  if (names.value === '' || email.value === '' || tg.value === '' || messages.value === '') {
    if (names.value.trim() === '') {
      names.classList.add('error');
      document.querySelector('.name-text').classList.add('show-before');
      names.addEventListener('focus', () => {
        names.classList.remove('error');
        document.querySelector('.name-text').classList.remove('show-before');
      });
    }

    if (email.value.trim() === '') {
      email.classList.add('error');
      document.querySelector('.email-text').classList.add('show-before');
      email.addEventListener('focus', () => {
        email.classList.remove('error');
        document.querySelector('.email-text').classList.remove('show-before');
      });
    }

    if (tg.value.trim() === '') {
      tg.classList.add('error');
      document.querySelector('.social-text').classList.add('show-before');
      tg.addEventListener('focus', () => {
        tg.classList.remove('error');
        document.querySelector('.social-text').classList.remove('show-before');
      });
    }

    if (messages.value.trim() === '') {
      messages.classList.add('error');
      document.querySelector('.message-text').classList.add('show-before');
      messages.addEventListener('focus', () => {
        messages.classList.remove('error');
        document.querySelector('.message-text').classList.remove('show-before');
      });
    }

    return;
  }
  isSending = true;
  button.disabled = true;
  button.classList.add('clicked');
  secty.forEach(sect => sect.disabled = true);

    
  const token = '8208042909:AAFgDYa-1pOHNWeedNDuuVwD7gEXV33ZXDo';
  const chatId = '943182514';
  
  
  const text =
    'Новое сообщение:\n\n' +
    'Имя: ' + names.value + '\n\n' +
    'Email: ' + email.value + '\n\n' +
    'Telegram/Вк: ' + tg.value + '\n\n' +
    'Сообщение: ' + messages.value;

  button.disabled = true;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text })
  })
});