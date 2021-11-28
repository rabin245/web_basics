function showMessage(message, location, color) {
    document.getElementById(location).innerHTML = message;
    document.getElementById(location).style.color = color;
}
function validcom() {
    var comment = document.getElementById('comment').value;
    var required = 40;
    var remaining = required - comment.length;

    if (remaining > 0) {
        showMessage(remaining + ' characters left', 'errcomment', 'red');
    } else {
        showMessage('Valid comment', 'errcomment', 'green');
    }
}
function validRadio() {
    var radio = document.getElementById('radio').checked;
    if(radio ==true){
        showMessage('thank you', 'errradio', 'green');
    }
    else{
        showMessage('you cannot proceed', 'errradio', 'red');
    }
    
}