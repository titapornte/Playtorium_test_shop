let tshirtPriceTotal;
let hoodiePriceTotal;
let bagTotalprice;
let walletTotalPrice;
let shirtidSelect;
let hoodieidSelect;
let bagidSelect;
let walletidSelect;
let tshirtQty;
let hoodieQty;
let bagQty;
let walletQty;
let clothesCatagory;
let bagCatagory;
let accessoryCatagory;
let username;
let point;
let yourPoint;
let totalPrice;
let totalPriceS;
var totalPriceSentence;

tshirtPriceTotal = localStorage.getItem('tshirt-Price-Total');
hoodiePriceTotal = localStorage.getItem('hoodie-Price-Total'); 
bagTotalprice = localStorage.getItem('bag-Total-price');
walletTotalPrice = localStorage.getItem('wallet-Total-Price');
shirtidSelect = localStorage.getItem('shirt-id-Select');
hoodieidSelect = localStorage.getItem('hoodie-id-Select');
bagidSelect = localStorage.getItem('bag-id-Select');
walletidSelect = localStorage.getItem('wallet-id-Select');
tshirtQty = localStorage.getItem('tshirt-Qty');
hoodieQty = localStorage.getItem('hoodie-Qty');
bagQty = localStorage.getItem('bag-Qty');
walletQty = localStorage.getItem('wallet-Qty');
clothesCatagory = localStorage.getItem('clothes-Catagory');
bagCatagory = localStorage.getItem('bag-Catagory');
accessoryCatagory = localStorage.getItem('accessory-Catagory');
username = localStorage.getItem('user-name');
point = localStorage.getItem('point');
totalPrice = localStorage.getItem('price-order');

function totalPriceShow(){
    totalPriceS = 'Total Price ' + totalPrice + ' usd.'
    document.getElementById('total_price1').innerHTML = totalPriceS;
}

function itemList() {
    if (parseFloat(tshirtQty) > 0){
        document.getElementById('shirtList').innerHTML = 'Shirt : ' + shirtidSelect + 'QTY : ' + tshirtQty;
    } else {
        document.getElementById('shirtList').innerHTML = null;
    } if (parseFloat(hoodieQty) > 0){
        document.getElementById('hoodieList').innerHTML = 'Hoodie : ' + hoodieidSelect + 'QTY : ' + hoodieQty;
    } else {
        document.getElementById('hoodieList').innerHTML = null;
    } if (parseFloat(bagQty) > 0){
        document.getElementById('bagList').innerHTML = 'Bag : ' + bagidSelect + 'QTY : ' + bagQty;
    } else {
        document.getElementById('bagList').innerHTML = null;
    } if (parseFloat(walletQty) > 0){
        document.getElementById('walletList').innerHTML = 'Wallet : ' + walletidSelect + 'QTY : ' + walletQty;
    } else {
        document.getElementById('walletList').innerHTML = null;
    }
}

console.log(totalPrice);

function yourpointShow(){
    yourPoint = 'Discount with Your Points (' + point + ')';
    document.getElementById("pointdis").innerHTML = yourPoint;
}

function ifcouple1isCheck() {
    var couple1checkBox = document.getElementById("couple1");
    var couple2checkBox = document.getElementById("couple2");

    if (couple1checkBox.checked==true){
        couple2checkBox.disabled=true;
    } else {
        couple2checkBox.disabled=false;
    }
}

function ifcouple2isCheck() {
    var couple1checkBox = document.getElementById("couple1");
    var couple2checkBox = document.getElementById("couple2");

    if (couple2checkBox.checked==true){
        couple1checkBox.disabled=true;
    } else {
        couple1checkBox.disabled=false;
    }
}

function ifontop1isCheck() {
    var ontop1checkBox = document.getElementById("ontop1");
    var ontop2checkBox = document.getElementById("ontop2");

    if (ontop1checkBox.checked==true){
        ontop2checkBox.disabled=true;
    } else {
        ontop2checkBox.disabled=false;
    }
}

function ifontop2isCheck() {
    var ontop1checkBox = document.getElementById("ontop1");
    var ontop2checkBox = document.getElementById("ontop2");

    if (ontop2checkBox.checked==true){
        ontop1checkBox.disabled=true;
    } else {
        ontop1checkBox.disabled=false;
    }
}

function viewProduct(){
    totalPriceShow();
    yourpointShow();
    itemList();
}

function calculator() {
    var couple1checkBox = document.getElementById("couple1");
    var couple2checkBox = document.getElementById("couple2");
    var ontop1checkBox = document.getElementById("ontop1");
    var ontop2checkBox = document.getElementById("ontop2");
    var seasonalCheckbox = document.getElementById("seasonal");
    if (couple1checkBox.checked==false && couple2checkBox.checked==false && ontop1checkBox.checked==false && ontop2checkBox.checked==false && seasonalCheckbox.checked==false) {
        document.getElementById("discount_price").innerHTML = 'Discount :  0 usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - 0) + ' usd.';
    } else if (couple1checkBox.checked==true && couple2checkBox.checked==false && ontop1checkBox.checked==false && ontop2checkBox.checked==false && seasonalCheckbox.checked==false) {
        document.getElementById("discount_price").innerHTML = 'Discount : 100 usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - 100) + ' usd.';
    } else if (couple1checkBox.checked==false && couple2checkBox.checked==true && ontop1checkBox.checked==false && ontop2checkBox.checked==false && seasonalCheckbox.checked==false) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + ((10/100) * parseFloat(totalPrice)) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - ((10/100) * parseFloat(totalPrice))) + ' usd.';
    } else if (couple1checkBox.checked==false && couple2checkBox.checked==false && ontop1checkBox.checked==true && ontop2checkBox.checked==false && seasonalCheckbox.checked==false) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + ((15/100) * parseFloat(clothesCatagory)) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(bagCatagory) + (parseFloat(clothesCatagory) - (((15/100) * parseFloat(clothesCatagory)))) + parseFloat(accessoryCatagory)) + ' usd.';
    } else if (couple1checkBox.checked==false && couple2checkBox.checked==false && ontop1checkBox.checked==false && ontop2checkBox.checked==true && seasonalCheckbox.checked==false) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + point + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - parseFloat(point)) + ' usd.';
    } else if (couple1checkBox.checked==false && couple2checkBox.checked==false && ontop1checkBox.checked==false && ontop2checkBox.checked==false && seasonalCheckbox.checked==true) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (Math.floor(parseFloat(totalPrice) / 1000)) * 100 + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + ((parseFloat(totalPrice) - ((Math.floor(parseFloat(totalPrice) / 1000)) * 100))) + ' usd.';
    } else if (couple1checkBox.checked==true && couple2checkBox.checked==false && ontop1checkBox.checked==true && ontop2checkBox.checked==false && seasonalCheckbox.checked==false) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (((15/100) * parseFloat(clothesCatagory)) + 100) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - (((15/100) * parseFloat(clothesCatagory)) + 100)) + ' usd.';
    } else if (couple1checkBox.checked==true && couple2checkBox.checked==false && ontop1checkBox.checked==false && ontop2checkBox.checked==true && seasonalCheckbox.checked==false) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (100 + parseFloat(point)) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - (100 + parseFloat(point))) + ' usd.';
    } else if (couple1checkBox.checked==true && couple2checkBox.checked==false && ontop1checkBox.checked==false && ontop2checkBox.checked==false && seasonalCheckbox.checked==true) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (((Math.floor(parseFloat(totalPrice) / 1000)) * 100) + 100) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - (((Math.floor(parseFloat(totalPrice) / 1000)) * 100) + 100)) + ' usd.';
    } else if (couple1checkBox.checked==false && couple2checkBox.checked==true && ontop1checkBox.checked==true && ontop2checkBox.checked==false && seasonalCheckbox.checked==false) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (((15/100) * parseFloat(clothesCatagory)) + ((10/100) * parseFloat(totalPrice))) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - (((15/100) * parseFloat(clothesCatagory)) + ((10/100) * parseFloat(totalPrice)))) + ' usd.';
    } else if (couple1checkBox.checked==false && couple2checkBox.checked==true && ontop1checkBox.checked==false && ontop2checkBox.checked==true && seasonalCheckbox.checked==false) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (((10/100) * parseFloat(totalPrice)) + parseFloat(point)) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - (((10/100) * parseFloat(totalPrice)) + parseFloat(point))) + ' usd.';
    } else if (couple1checkBox.checked==false && couple2checkBox.checked==true && ontop1checkBox.checked==false && ontop2checkBox.checked==false && seasonalCheckbox.checked==true) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (((10/100) * parseFloat(totalPrice)) + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100)) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - (((10/100) * parseFloat(totalPrice)) + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100))) + ' usd.';
    } else if (couple1checkBox.checked==false && couple2checkBox.checked==false && ontop1checkBox.checked==true && ontop2checkBox.checked==false && seasonalCheckbox.checked==true) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (((15/100) * parseFloat(clothesCatagory)) + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100)) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - (((15/100) * parseFloat(clothesCatagory)) + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100))) + ' usd.';
    } else if (couple1checkBox.checked==false && couple2checkBox.checked==false && ontop1checkBox.checked==false && ontop2checkBox.checked==true && seasonalCheckbox.checked==true) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (parseFloat(point) + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100)) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - (parseFloat(point) + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100))) + ' usd.';
    } else if (couple1checkBox.checked==true && couple2checkBox.checked==false && ontop1checkBox.checked==true && ontop2checkBox.checked==false && seasonalCheckbox.checked==true) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (((15/100) * parseFloat(clothesCatagory)) + 100 + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100)) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - ((((15/100) * parseFloat(clothesCatagory)) + 100 + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100)))) + ' usd.';
    } else if (couple1checkBox.checked==true && couple2checkBox.checked==false && ontop1checkBox.checked==false && ontop2checkBox.checked==true && seasonalCheckbox.checked==true) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (parseFloat(point) + 100 + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100)) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - ((parseFloat(point) + 100 + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100)))) + ' usd.';
    } else if (couple1checkBox.checked==false && couple2checkBox.checked==true && ontop1checkBox.checked==true && ontop2checkBox.checked==false && seasonalCheckbox.checked==true) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (((15/100) * parseFloat(clothesCatagory)) + ((10/100) * parseFloat(totalPrice)) + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100)) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - ((((15/100) * parseFloat(clothesCatagory)) + ((10/100) * parseFloat(totalPrice)) + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100)))) + ' usd.';
    } else if (couple1checkBox.checked==false && couple2checkBox.checked==true && ontop1checkBox.checked==false && ontop2checkBox.checked==true && seasonalCheckbox.checked==true) {
        document.getElementById("discount_price").innerHTML = 'Discount : ' + (parseFloat(point) + ((10/100) * parseFloat(totalPrice)) + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100)) + ' usd';
        document.getElementById("total_price_discount").innerHTML = 'Total Price when Discount : ' + (parseFloat(totalPrice) - ((parseFloat(point) + ((10/100) * parseFloat(totalPrice)) + ((Math.floor(parseFloat(totalPrice) / 1000)) * 100)))) + ' usd.';
    } 

}

function logoutBtn() {
    username = '';
    point = '';
    shirtidSelect = '';
    shirtpriceSelect = 0;
    hoodieidSelect = '';
    hoodiepriceSelect = 0;
    bagidSelect = '';
    bagpriceSelect = 0;
    walletidSelect = '';
    walletpriceSelect = 0;
    priceorder = 0;
    discount = 0;
    quantity1 = 0;
    quantity2 = 0;
    quantity3 = 0;
    quantity4 = 0;
    tshirtQty = 0;
    hoodieQty = 0;
    bagQty = 0;
    walletQty = 0;
    tshirtPriceTotal = 0;
    hoodiePriceTotal = 0;
    bagTotalprice = 0;
    walletTotalPrice = 0;
    clothesCatagory = 0;
    bagCatagory = 0;
    accessoryCatagory = 0;
    window.location.href = '/fixed.amount/login.html';
}

function backBtn() {
    window.location.href = '/fixed.amount/fixed_amount.html';
}

function confirmOrder() {
    alert('การสั่งซื้อสำเร็จ');
}
