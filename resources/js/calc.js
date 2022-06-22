function basic() {
    const loanamount = document.getElementById("loan").value;
    const years = document.getElementById("term").value; 
    const percent = document.getElementById("interest").value;
    /*Calculations*/
    const rate = percent / 100;
    const monthlyrate = rate / 12;
    const months = years * 12;
    /*1+c*/
    const d = monthlyrate +1;
    /*d to the n-th power*/
    const m = Math.pow(d, months);
    const first = m * monthlyrate;
    const second = m - 1;
    const bracket = first / second;
    const total = loanamount * bracket;
    const Payment = total.toFixed(2);


    const result = 'Your monthly payment will be about $' + Payment + ' per month.';

    document.getElementById('FixedResult').textContent = result;
     
}

function extras() {
    const propvalue = document.getElementById("price").value;
    const downpayment = document.getElementById("down").value;
    const years = document.getElementById("term").value; 
    const percent = document.getElementById("interest").value;
    const propertytax = document.getElementById("proptax").value;
    const hoinsyear = document.getElementById("hoinsann").value;
    const yearhoa = document.getElementById("hoayear").value;
    /*Calculations*/
    const loanamount = propvalue - downpayment;
    const rate = percent / 100;
    const monthlyrate = rate / 12;
    const months = years * 12;
    const proptaxpct = propertytax / 100;
    const proptaxann = propvalue * proptaxpct;
    const proptaxmon = proptaxann / 12;
    const hoinsmonth = hoinsyear / 12;
    const hoamonth = yearhoa / 12;
     /*1+c*/
    const d = monthlyrate +1;
    /*d to the n-th power*/
    const m = Math.pow(d, months);
    const first = m * monthlyrate;
    const second = m - 1;
    const bracket = first / second;
    const subtotal = loanamount * bracket;
    const total = subtotal + proptaxmon + hoinsmonth +hoamonth;
    const Payment = total.toFixed(2);


    const result = 'Your monthly payment will be about $' + Payment + ' per month.';

    document.getElementById('ExtrasResult').textContent = result;
     
}