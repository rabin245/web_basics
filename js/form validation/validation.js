function showMessage(message, location, color) {
    document.getElementById(location).innerHTML = message;
    document.getElementById(location).style.color = color;
}
function valname() {
    var uname = document.getElementById('uname').value;
    if (uname.length == 0) {
        showMessage('Name field cannot be empty', 'errname', 'red');
    }
    else if (uname.length < 5)
        showMessage('Not enough characters', 'errname', 'red');
    else if (!uname.match(/^[a-zA-Z]{5,30}\s{1}[a-zA-Z]{3,30}$/))
        showMessage('Enter first and last name with space', 'errname', 'red');
    else
        showMessage('Valid name', 'errname', 'green');
}
function valphone() {
    var phone = document.getElementById('pnum').value;
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
function valmail() {
    var email = document.getElementById('email').value;
    if (email.length == 0)
        showMessage('Enter your mail', 'errmail', 'red');
    else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/))
        showMessage('Enter valid mail', 'errmail', 'red');
    else
        showMessage('Valid email address', 'errmail', 'green');

}