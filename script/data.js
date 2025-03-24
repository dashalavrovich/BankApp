'use strict';

//USER: the first letters of firstname and lastname
//PIN: values in the PIN property of each object (account1, account2, account3, account4, account5)

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