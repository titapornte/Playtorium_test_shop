let username = '';
let point = '';

function getUsernameandPointBtn() {
    var UnameInput = document.getElementById('Uname').value;
    var PointInput = document.getElementById('Point').value;
    if (UnameInput == null || UnameInput == "" || PointInput === null || PointInput == "" ) {
        alert('กรุณากรอกข้อมูลในช่องให้ครบ');
    } else {
        if(parseIntCheck(PointInput) == true) {
            getUsernameandPoint(Uname.value, Point.value);
            localStorage.setItem('user-name', username);
            localStorage.setItem('point-user', point);
            window.location.href = '/fixed.amount/fixed_amount.html';
        } else {
            alert('กรุณากรอกเป็นตัวเลขเท่านั้น');
        }
    }
    console.log(UnameInput + ', ' + PointInput);
}

function getUsernameandPoint(uname, po) {
    username = uname;
    point = po;
}

function parseIntCheck(string) {
    if (parseInt(string)) {
        return true;
    }
    return false;
}