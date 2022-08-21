// For Deposit
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Update deposit history
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseInt(depositField.value);
    const depositHistoryField = document.getElementById('deposit-history');
    const depositValue = parseInt(depositHistoryField.innerText);
    depositHistoryField.innerText = depositAmount + depositValue;

    // Update balance after deposit
    const balance = document.getElementById('balance');
    const totalBalance = parseInt(balance.innerText);
    balance.innerText = depositAmount + totalBalance;
});

// For withdrawal
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseInt(withdrawField.value);
    if (withdrawAmount < 10) {
        alert('You must withdraw at least Tk.10');
    }
    else {
        const withdrawHistoryField = document.getElementById('withdraw-history');
        const withdrawValue = parseInt(withdrawHistoryField.innerText);

        // Update withdraw history and total balance after withdrawal
        const balance = document.getElementById('balance');
        const totalBalance = parseInt(balance.innerText);
        if (totalBalance - withdrawAmount < 0)
            alert('You do not have sufficient amount of money');
        else {
            withdrawHistoryField.innerText = withdrawAmount + withdrawValue;
            balance.innerText = totalBalance - withdrawAmount;
        }
    }
});