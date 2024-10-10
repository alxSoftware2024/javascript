const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e)=> {
    // Validate username
      const usernameInput = document.getElementById('username');
      const usernameError = document.getElementById('usernameError');
      if (usernameInput.value.length < 3) {
        e.preventDefault(); 
        usernameError.textContent = 'Username must be at least 3 characters long.';
        
      } 
      else {
        usernameError.textContent = '';
      }

     //validate email
     const email = document.getElementById('email');
     const emailerror = document.getElementById('emailError');
     const validatemail='/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/';
     if(!email.value.match(validatemail))
     {
        e.preventDefault(); 
        emailerror.textContent = 'Email Requred.';
     }
     else {
        emailerror.textContent = '';
      }
      //count text in textArea
const message=document.getElementById('message').value;
const countword=message.trim().split(/\s+/).length;
if(countword<3)
{
    e.preventDefault(); 
    messagerror.textContent = 'Message not less than 3 word.'; 
}
else{
    messagerror.textContent = ""; 
}
     });
