'use strict';

// Bank App

// USER: the first letters of firstname and lastname
// PIN: in property PIN

const account1 = {
  userName: 'Cecil Ireland', //login (ci)
  transactions: [500, 250, -300, 5000, -850.56, -110, -170.87, 1100],
  interest: 1.5,
  pin: 1111, //password
  transactionsDates: [
    '2023-10-02T14:43:31.074Z',
    '2023-10-29T11:24:19.761Z',
    '2023-11-15T10:45:23.907Z',
    '2024-01-22T12:17:46.255Z',
    '2024-02-12T15:14:06.486Z',
    '2024-08-05T11:42:26.371Z',
    '2024-08-09T07:43:59.331Z',
    '2024-08-10T15:21:20.814Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  userName: 'Amani Salt', //login (as)
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222, //password
  transactionsDates: [
    '2023-10-02T14:43:31.074Z',
    '2023-10-29T11:24:19.761Z',
    '2023-11-15T10:45:23.907Z',
    '2024-01-22T12:17:46.255Z',
    '2024-02-12T15:14:06.486Z',
    '2024-08-05T11:42:26.371Z',
    '2024-08-09T07:43:59.331Z',
    '2024-08-10T15:21:20.814Z',
  ],
  currency: 'UAH',
  locale: 'uk-UA',
};

const account3 = {
  userName: 'Corey Martinez', //login (cm)
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333, //password
  transactionsDates: [
    '2023-10-02T14:43:31.074Z',
    '2023-10-29T11:24:19.761Z',
    '2023-11-15T10:45:23.907Z',
    '2024-01-22T12:17:46.255Z',
    '2024-02-12T15:14:06.486Z',
    '2024-08-05T11:42:26.371Z',
    '2024-08-09T07:43:59.331Z',
    '2024-08-10T15:21:20.814Z',
  ],
  currency: 'RUB',
  locale: 'ru-RU',
};

const account4 = {
  userName: 'Kamile Searle', //login (ks)
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444, //password
  transactionsDates: [
    '2023-10-02T14:43:31.074Z',
    '2023-10-29T11:24:19.761Z',
    '2023-11-15T10:45:23.907Z',
    '2024-01-22T12:17:46.255Z',
    '2024-02-12T15:14:06.486Z',
  ],
  currency: 'EUR',
  locale: 'fr-CA',
};

const account5 = {
  userName: 'Oliver Avila', //login (oa)
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555, //password
  transactionsDates: [
    '2023-10-02T14:43:31.074Z',
    '2023-10-29T11:24:19.761Z',
    '2023-11-15T10:45:23.907Z',
    '2024-01-22T12:17:46.255Z',
    '2024-02-12T15:14:06.486Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseNickname = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatTransactionDate = function (date, locale) {
  const getDaysBetween2Dates = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = getDaysBetween2Dates(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Сегодня';
  if (daysPassed === 1) return 'Вчера';
  if (daysPassed <= 7) return `${daysPassed} дней назад`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayTransactions = function (account, sort = false) {
  containerTransactions.innerHTML = '';

  //create copy array
  const transacs = sort
    ? account.transactions.slice().sort((x, y) => x - y)
    : account.transactions;

  transacs.forEach(function (trans, index) {
    const transType = trans > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.transactionsDates[index]);
    const transDate = formatTransactionDate(date, account.locale);

    const formattedTrans = formatCurrency(
      trans,
      account.locale,
      account.currency
    );

    const transactionRow = `
<div class="transactions__row">
<div class="transactions__type transactions__type--${transType}">
  ${index + 1} ${transType}
</div>
<div class="transactions__date">${transDate}</div>
<div class="transactions__value">${formattedTrans}</div>
</div>`;
    containerTransactions.insertAdjacentHTML('afterbegin', transactionRow);
  });
};

const createNicknames = function (accs) {
  accs.forEach(function (acc) {
    acc.nickname = acc.userName
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createNicknames(accounts);

const displayBalance = function (account) {
  const balance = account.transactions.reduce((acc, trans) => acc + trans, 0);
  account.balance = balance;

  labelBalance.textContent = formatCurrency(
    balance,
    account.locale,
    account.currency
  );
};

const displayTotal = function (account) {
  const depositesTotal = account.transactions
    .filter(trans => trans > 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumIn.textContent = formatCurrency(
    depositesTotal,
    account.locale,
    account.currency
  );

  const withdrawalsTotal = account.transactions
    .filter(trans => trans < 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumOut.textContent = formatCurrency(
    withdrawalsTotal,
    account.locale,
    account.currency
  );

  const interestTotal = account.transactions
    .filter(trans => trans > 0)
    .map(depos => (depos * account.interest) / 100)
    .filter((interest, index, arr) => {
      console.log(arr);
      return interest >= 5;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = formatCurrency(
    interestTotal,
    account.locale,
    account.currency
  );
};

const updateUi = function (account) {
  //Display transactions
  displayTransactions(account);

  //Display balance
  displayBalance(currentAccount);

  //Display total
  displayTotal(currentAccount);
};

let currentAccount, currentLogOutTimer;

const startLogoutTimer = function () {
  const logOutTimerCallback = function () {
    const minutes = String(Math.trunc(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');

    //при каждом вызове показывать оставшееся время в UI
    labelTimer.textContent = `${minutes}:${seconds}`;

    //по истечению времени остановить таймер и выйти из приложения
    if (time === 0) {
      clearInterval(logOutTimer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Войдите в свой аккаунт`;
    }

    time--;
  };
  //установка времени выхода через 5 минут
  let time = 300;

  //вызов таймера каждую секунду
  logOutTimerCallback();
  const logOutTimer = setInterval(logOutTimerCallback, 1000);
  return logOutTimer;
};

// Event Handlers

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //the default action is cancelled (reloading the page)
  currentAccount = accounts.find(
    account => account.nickname === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    //Display UI and welcome message
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Рады, что вы снова с нами ${
      currentAccount.userName.split(' ')[0]
    }!`;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    //Clear inputs
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur(); //cursor is removed

    //Check if the timer exists
    if (currentLogOutTimer) {
      clearInterval(currentLogOutTimer);
    }
    currentLogOutTimer = startLogoutTimer();

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAmount = +inputTransferAmount.value;
  const recipientNickname = inputTransferTo.value;
  const recipientAccount = accounts.find(
    account => account.nickname === recipientNickname
  );

  inputTransferTo.value = '';
  inputTransferAmount.value = '';

  if (
    transferAmount > 0 &&
    currentAccount.balance >= transferAmount &&
    recipientAccount &&
    currentAccount.nickname !== recipientAccount.nickname
  ) {
    //Add transaction
    currentAccount.transactions.push(-transferAmount);
    recipientAccount.transactions.push(transferAmount);

    //Add transaction date
    currentAccount.transactionsDates.push(new Date().toISOString());
    recipientAccount.transactionsDates.push(new Date().toISOString());

    //Reset the timer
    clearInterval(currentLogOutTimer);
    currentLogOutTimer = startLogoutTimer();

    updateUi(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseNickname.value === currentAccount.nickname &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const currentAccountIndex = accounts.findIndex(
      account => account.nickname === currentAccount.nickname
    );

    accounts.splice(currentAccountIndex, 1);

    containerApp.style.opacity = 0;

    inputCloseNickname.value = '';
    inputClosePin.value = '';
    labelWelcome.textContent = 'Войдите в свой аккаунт';
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.transactions.some(trans => trans >= (loanAmount * 10) / 100)
  ) {
    setTimeout(function () {
      currentAccount.transactions.push(loanAmount);
      currentAccount.transactionsDates.push(new Date().toISOString());

      updateUi(currentAccount);
    }, 5000);
  }
  inputLoanAmount.value = '';

  //Reset the timer
  clearInterval(currentLogOutTimer);
  currentLogOutTimer = startLogoutTimer();
});

let transactionsSorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayTransactions(currentAccount, !transactionsSorted);
  transactionsSorted = !transactionsSorted;
});

const logoImage = document.querySelector('.logo');
logoImage.addEventListener('click', function () {
  const transactionsUi = document.querySelectorAll('.transactions__value');
  console.log(transactionsUi);
  const transactionsUiArray = Array.from(transactionsUi);
  console.log(transactionsUiArray);
});

logoImage.addEventListener('click', function () {
  [...document.querySelectorAll('.transactions__row')].forEach((row, i) => {
    if (i % 3 == 0) {
      //каждая третья строка окрашивается
      row.style.background = 'grey';
    }
  });
});
