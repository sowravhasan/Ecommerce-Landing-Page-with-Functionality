let total = 0;
function handleClick(target){
    const productName = target.parentNode.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    const selectedItem = document.getElementById('selected-product');
    selectedItem.appendChild(li);
    const prize = target.parentNode.childNodes[7].innerText.split(' ')[0];
    total = parseInt(total) + parseInt(prize);
    const totalPrize = document.getElementById('total-prize');
    totalPrize.innerText = total;
    const disableBtn = document.getElementById('purchaseBtn');
    if (total > 0){
       purchaseBtn.removeAttribute('disabled');
       purchaseBtn.style.color = 'white';
    }
    const applyBtn = document.getElementById('apply-btn');
    if (total >= 200){
        applyBtn.removeAttribute('disabled');
        applyBtn.style.color = 'white';
     }
     const couponInput = document.getElementById('coupon-input');
     applyBtn.addEventListener('click', function(){
      const finalTotal = document.getElementById('final-total');
      const totalDiscount = document.getElementById('discount-ammount')
      const couponCode = couponInput.value;
      const discountPercent = 20;
      if (couponCode === 'SELL20'){
         const discountAmount = (discountPercent / 100) * total;
         const finalAmount = total - discountAmount;
         totalDiscount.innerText = discountAmount.toFixed(2);
         finalTotal.innerText = finalAmount;
         couponInput.value = ' ';
      }
     })
     const homeBtn = document.getElementById('home-btn').addEventListener('click', function(){
      window.location.href = 'index.html';
     })
}
