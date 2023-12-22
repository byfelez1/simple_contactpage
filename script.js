document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    var nameRegex = /^[a-zA-ZğüşöçıĞÜŞİÖÇ\s]+$/;

    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');

    if (nameRegex.test(name) && message && phone.length === 10 && !isNaN(phone)) {
      errorMessage.style.display = 'none';
      successMessage.style.display = 'block';
    } else {
      errorMessage.textContent = 'Lütfen geçerli bir ad, telefon numarası ve mesaj girin.';
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
    }
  });