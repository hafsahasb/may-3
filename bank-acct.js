const amountInput = document.getElementById('amountInput');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const message = document.getElementById('message');
const balanceDisplay = document.getElementById('balance');
const bankAccount = {
    balance: 0
};
  
// Deposit function
    function deposit(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
          return 'Invalid deposit amount. Must be a positive number.';
        } else {
          bankAccount.balance = Number((bankAccount.balance + amount).toFixed(2));
          return `Deposited: N${amount.toFixed(2)}. New balance: N${bankAccount.balance.toFixed(2)}`;
        }
      }
  
// Withdraw function
    function withdraw(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
          return 'Invalid withdrawal amount. Must be a positive number.';
        } else if (bankAccount.balance - amount < 0) {
          return 'Insufficient funds.';
        } else {
          bankAccount.balance = Number((bankAccount.balance - amount).toFixed(2));
          return `Withdrew: N${amount.toFixed(2)}. New balance: N${bankAccount.balance.toFixed(2)}`;
        }
      }
  
    function updateBalanceDisplay() {
        balanceDisplay.textContent = `Balance: N${bankAccount.balance.toFixed(2)}`;
      }
  
      function showMessage(text, isError = false) {
        message.textContent = text;
        message.style.color = isError ? 'red' : 'green';
      }
  
      // Event listener for Deposit button
      depositBtn.addEventListener('click', () => {
        let depositResult = deposit(parseFloat(amountInput.value));
        const amount = parseFloat(amountInput.value);
        console.log('amount', amount, 'amount input', amountInput, 'deposit result', depositResult)
        localStorage.setItem('deposit', depositResult); // Store the input amount in localStorage
        // const result = deposit(amount);
        if (depositResult.startsWith('Invalid')) {
          showMessage(depositResult, true);
        } else {
          showMessage(depositResult);
          updateBalanceDisplay();
        }
        amountInput.value = '';
      });
  
    withdrawBtn.addEventListener('click', () => {
        let withdrawResult = withdraw(parseFloat(amountInput.value));
        localStorage.setItem('withdraw', withdrawResult); // Store the input amount in localStorage6
        const amount = parseFloat(amountInput.value);
        //const result = withdraw(amount);
        if (withdrawResult.includes('Invalid') || withdrawResult.includes('Insufficient')) {
          showMessage(depositResult, true);
        } else {
          showMessage(withdrawResult);
          updateBalanceDisplay();
        }
        amountInput.value = '';
      });
      // loadStoredAmount();
      updateBalanceDisplay();
    