function showMessage(message, location, color) {
    document.getElementById(location).innerHTML = message;
    document.getElementById(location).style.color = color;
}

function validname() {
    var name = document.getElementById("uname").value;
    // console.log(name);
    if (name.length == 0) {
        showMessage('Name field cannot be empty', 'errorname', 'red');
    }
    else if (name.length < 5) {
        showMessage('Not enough characters', 'errorname', 'red');
    }
    else if (!name.match(/^[a-zA-Z]{5,30}\s[a-zA-Z]{3,30}$/)) {
        showMessage('Enter first name and last name with space', 'errorname', 'red');
    }
    else {
        showMessage('Valid name', 'errorname', 'green');
    }
}
function validpass() {
    var pass = document.getElementById('upass').value;
    // if (pass.length < 8) {
    //     showMessage('Password cannot be less than 8 characters', 'errorpass', 'red');
    // }
    //  if (!pass.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/))
    if (!pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-_])[A-Za-z\d#?!@$%^&*-_]{8,}$/))
        showMessage('password must be atleast 8 characters and must contain atleast one Uppercase letter, one digit, one lowercase letter and one symbol', 'errorpass', 'red');
    else
        showMessage('valid password', 'errorpass', 'green');

}
function validemail() {
    var email = document.getElementById('uemail').value;
    if (email.length == 0)
        showMessage('Enter your mail', 'errmail', 'red');
    else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/))
        showMessage('Enter valid mail', 'errmail', 'red');
    else
        showMessage('Valid email address', 'errmail', 'green');

}
function validphone() {
    var phone = document.getElementById('uphone').value;
    if (phone.length == 0)
        showMessage('Field cannot be empty', 'errphone', 'red');
    else if (!phone.match(/^[0-9]*$/))
        showMessage('Enter numbers only', 'errphone', 'red');
    else if (phone.substr(0, 2) != '98')
        showMessage('Number must start with 98', 'errphone', 'blue');
    else if (phone.length != 10)
        showMessage('Enter 10 digit phone number', 'errphone', 'red');
    else
        showMessage('Valid phone number', 'errphone', 'green');
}

function validradio() {
    var radio = document.getElementById('radio').checked;
    if (radio == true) {
        showMessage('thank you', 'errradio', 'green');
    }
    else {
        showMessage('you cannot proceed', 'errradio', 'red');
    }

}

function validcomment() {
    var comment = document.getElementById('comment').value;
    var error = document.getElementById('errorcmnt');
    if (comment.length >= 10) {
        error.innerHTML = 'valid comment';
        error.style.color = 'green';
    }

}