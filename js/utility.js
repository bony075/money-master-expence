document.getElementById("btn-calculate").addEventListener("click", function () {
    const incomeAmountString = document.getElementById("income-amount").value;
    const incomeAmount = parseFloat(incomeAmountString);
    const foodAmountString = document.getElementById("food-amount").value;
    const foodAmount = parseFloat(foodAmountString);
    const rentAmountString = document.getElementById("rent-amount").value;
    const rentAmount = parseFloat(rentAmountString);
    const clothAmountString = document.getElementById("cloth-amount").value;
    const clothAmount = parseFloat(clothAmountString);
    const totalExpenses = foodAmount + rentAmount + clothAmount;
    // console.log(typeof totalExpenses);
    const totalBalance = incomeAmount - totalExpenses;
    // console.log(totalBalance);
    const totalExpensesString = document.getElementById("total-expenses");
    const totalExpensesValue = totalExpensesString.innerText;



    const totalBalanceString = document.getElementById("last-balance");
    const totalBalanceValue = totalBalanceString.innerText;
    totalBalanceString.innerText = totalBalance;
    // console.log(totalBalanceValue);



    totalExpensesString.innerText = totalExpenses;



    // console.log(typeof totalBalance);

})


document.getElementById("btn-save").addEventListener("click", function () {
    const incomeAmountString = document.getElementById("income-amount").value;
    const incomeAmount = parseFloat(incomeAmountString);
    const saveAmountString = document.getElementById("save-parcent").value;
    const saveAmount = parseFloat(saveAmountString);
    const saving = (incomeAmount / 100) * saveAmount;


    const savingAmountString = document.getElementById("save-amount");
    const savingAmountValue= savingAmountString.innerText;
    savingAmountString.innerText = saving;
    console.log(savingAmountValue); 
    
    // console.log(remainBalance);
    const totalBalanceString = document.getElementById("last-balance");
    const totalBalanceValue = totalBalanceString.innerText;
    // totalBalanceString.innerText = totalBalance;
    const remainBalanceOld = totalBalanceValue - parseFloat(saving);
    console.log(remainBalanceOld);
    const remainAmountString = document.getElementById("remain-balance");
    const remainAmountValue = remainAmountString.innerText;
    // const remainBalance = remainBalanceOld - savingAmountValue;
    remainAmountString.innerText = remainBalanceOld;
    

 });