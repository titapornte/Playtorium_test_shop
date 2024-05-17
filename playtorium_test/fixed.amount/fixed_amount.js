const shirtid = 'T Shirt';
const hoodieid = 'Hoodie';
const bagid = 'Bag';
const walletid = 'Wallet';
const shirtprice = '500';
const hoodieprice = '800';
const bagprice = '1000';
const walletprice = '300';
let username;
let point;
let shirtidSelect = '';
let shirtpriceSelect = 0;
let hoodieidSelect = '';
let hoodiepriceSelect = 0;
let bagidSelect = '';
let bagpriceSelect = 0;
let walletidSelect = '';
let walletpriceSelect = 0;
let priceorder = 0;
let discount = 0;
let priceorderType;
let discountType;
let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;
let quantity4 = 0;
let tshirtQty = 0;
let hoodieQty = 0;
let bagQty = 0;
let walletQty = 0;
let tshirtPriceTotal = 0;
let hoodiePriceTotal = 0;
let bagTotalprice = 0;
let walletTotalPrice = 0;
let clothesCatagory = 0;
let bagCatagory = 0;
let accessoryCatagory = 0;

username = localStorage.getItem('user-name');
point = localStorage.getItem('point-user');

function plusBtn1() {
    quantity1++;
    document.getElementById("number1").innerHTML = quantity1;
    console.log(quantity1);
}

function minusBtn1() {
    if(quantity1>0){
        quantity1--;
        document.getElementById("number1").innerHTML = quantity1;
        console.log(quantity1);
    }
}

function plusBtn2() {
    quantity2++;
    document.getElementById("number2").innerHTML = quantity2;
    console.log(quantity2);
}

function minusBtn2() {
    if(quantity2>0){
        quantity1--;
        document.getElementById("number2").innerHTML = quantity2;
        console.log(quantity2);
    }
}

function plusBtn3() {
    quantity3++;
    document.getElementById("number3").innerHTML = quantity3;
    console.log(quantity3);
}

function minusBtn3() {
    if(quantity3>0){
        quantity3--;
        document.getElementById("number3").innerHTML = quantity3;
        console.log(quantity3);
    }
}

function plusBtn4() {
    quantity4++;
    document.getElementById("number4").innerHTML = quantity4;
    console.log(quantity4);
}

function minusBtn4() {
    if(quantity4>0){
        quantity4--;
        document.getElementById("number4").innerHTML = quantity4;
        console.log(quantity4);
    }
}

function buyShirt() {
    shirtidSelect = shirtid;
    tshirtQty = parseFloat(quantity1);
    tshirtPriceTotal = parseFloat(shirtprice) * parseFloat(tshirtQty);
    shirtpriceSelect = parseFloat(shirtprice);
    if(tshirtQty == '0'){
        alert('กรุณาเลือกจำนวนของ เสื้อ');
    } else {
        yourOrder();
        yourPriceOrder();
        ifUndefined();
        console.log('QTY : ' + tshirtQty, 'Total Shirt Price: ' + tshirtPriceTotal);
    }
}

function buyHoodie() {
    console.log(hoodieid, parseFloat(hoodieprice));
    hoodieidSelect = hoodieid;
    hoodieQty = parseFloat(quantity2);
    hoodiePriceTotal = parseFloat(hoodieprice) * parseFloat(hoodieQty);
    hoodiepriceSelect = parseFloat(hoodieprice);
    if(hoodieQty == '0'){
        alert('กรุณาเลือกจำนวนของ เสื้อฮู้ด');
    } else {
        yourOrder();
        yourPriceOrder();
        ifUndefined();
        console.log('QTY : ' + hoodieQty, 'Total Hoodie Price: ' + hoodiePriceTotal);
    }
}

function buyBag() {
    console.log(bagid, parseFloat(bagprice));
    bagidSelect = bagid;
    bagQty = parseFloat(quantity3);
    bagTotalprice = parseFloat(bagprice) * parseFloat(bagQty);
    bagpriceSelect = parseFloat(bagprice);
    if(bagQty == '0'){
        alert('กรุณาเลือกจำนวนของ กระเป๋า');
    } else {
        yourOrder();
        yourPriceOrder();
        ifUndefined();
        console.log('QTY : ' + bagQty, 'Total Bag Price: ' + bagTotalprice);
    }
}

function buyWallet() {
    console.log(walletid, parseFloat(walletprice));
    walletidSelect = walletid;
    walletQty = parseFloat(quantity4);
    walletTotalPrice = parseFloat(walletprice) * parseFloat(walletQty);
    walletpriceSelect = parseFloat(walletprice);
    if(walletQty == '0'){
        alert('กรุณาเลือกจำนวนของ กระเป๋าตัง');
    } else {
        yourOrder();
        yourPriceOrder();
        ifUndefined();
        console.log('QTY : ' + walletQty, 'Total Wallet Price: ' + walletTotalPrice)
    }
}

function yourOrder() {
    let order;
    order = 'Order : ' + shirtidSelect + ' [ ' + tshirtQty + ' ] ' 
            + ' , ' + hoodieidSelect + ' [ ' + hoodieQty + ' ] ' 
            + ' , ' + bagidSelect + ' [ ' + bagQty + ' ] ' 
            +  ' , ' + walletidSelect + ' [ ' + walletQty + ' ] ' ;
    document.getElementById("orderid").innerHTML = order;
    console.log(order);
}

function yourPriceOrder() {
    priceorder = parseFloat(tshirtPriceTotal) + parseFloat(hoodiePriceTotal) + parseFloat(bagTotalprice) + parseFloat(walletTotalPrice);
    priceorderType = 'Total Price : ' + priceorder + ' usd';
    document.getElementById("orderprice").innerHTML = priceorderType;
    console.log(priceorderType);
}

function ifUndefined() {
    if (shirtidSelect === undefined){
        shirtidSelect = '...';
        console.log('Shirt is undefined');
    } else if (hoodieidSelect === undefined){
        hoodieidSelect = '...';
        console.log('Hoodie is undefined');
    } else if (bagidSelect === undefined){
        bagidSelect = '...';
        console.log('Bag is undefined');
    } else if (walletidSelect === undefined){
        walletidSelect = '...';
        console.log('Wallet is undefined');
    }
}

function clothesCatagoryFunction() {
    clothesCatagory = tshirtPriceTotal + hoodiePriceTotal;
}

function bagCatagoryFunction() {
    bagCatagory = bagTotalprice;
}


function accessoryCatagoryFunction() {
    accessoryCatagory = walletTotalPrice;
}

function ifOrderis0() {
    if (tshirtQty == '0' && hoodieQty == '0' && bagQty == '0' && walletQty == '0'){
        alert('กรุณาเลือกซื้อสินค้า');
    }
}

function order() {
    if (tshirtQty == '0' && hoodieQty == '0' && bagQty == '0' && walletQty == '0'){
        alert('กรุณาเลือกซื้อสินค้า');
    } else {
        clothesCatagoryFunction();
        bagCatagoryFunction();
        accessoryCatagoryFunction();
        localStorage.setItem('tshirt-Price-Total', tshirtPriceTotal);
        localStorage.setItem('hoodie-Price-Total', hoodiePriceTotal);
        localStorage.setItem('bag-Total-price', bagTotalprice);
        localStorage.setItem('wallet-Total-Price', walletTotalPrice);
        localStorage.setItem('shirt-id-Select', shirtidSelect);
        localStorage.setItem('hoodie-id-Select', hoodieidSelect);
        localStorage.setItem('bag-id-Select', bagidSelect);
        localStorage.setItem('wallet-id-Select', walletidSelect);
        localStorage.setItem('tshirt-Qty', tshirtQty);
        localStorage.setItem('hoodie-Qty', hoodieQty);
        localStorage.setItem('bag-Qty', bagQty);
        localStorage.setItem('wallet-Qty', walletQty);
        localStorage.setItem('clothes-Catagory', clothesCatagory);
        localStorage.setItem('bag-Catagory', bagCatagory);
        localStorage.setItem('accessory-Catagory', accessoryCatagory);
        localStorage.setItem('user-name', username);
        localStorage.setItem('point', point);
        localStorage.setItem('price-order', priceorder);
        window.location.href = '/fixed.amount/order.html';
    }
}

function resetBtn() {
    document.getElementById("orderid").innerHTML = 'Order : ';
    document.getElementById("orderprice").innerHTML = 'Total price : ___ usd.';
    document.getElementById("number1").innerHTML = '0';
    document.getElementById("number2").innerHTML = '0';
    document.getElementById("number3").innerHTML = '0';
    document.getElementById("number4").innerHTML = '0';
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
    priceorderType;
    discountType;
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
}

function logoutBtn() {
    username = '';
    point = '';
    document.getElementById("orderid").innerHTML = 'Order : ';
    document.getElementById("orderprice").innerHTML = 'Total price : ___ usd.';
    document.getElementById("number1").innerHTML = '0';
    document.getElementById("number2").innerHTML = '0';
    document.getElementById("number3").innerHTML = '0';
    document.getElementById("number4").innerHTML = '0';
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
    priceorderType;
    discountType;
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