Bank Application

I developed an application for managing financial transactions. When a user logs in, the app checks their credentials, calculates their balance, shows their transactions, and updates the interface. 
For money transfers, the app deducts the amount from the sender and adds it to the recipient’s account. If a user applies for a loan, the system checks if they have a deposit covering at least 10% of the requested amount—if they do, the loan is approved.
When closing an account, the app verifies the credentials, removes the user from the system, and hides the interface. The app also sorts transactions when needed and logs the user out if they are inactive for too long.
Application logic is shown in the picture flowchart.png (images), which provides more detailed information.

USER: the first letters of firstname and lastname
PIN: values in the PIN property of each object (account1, account2, account3, account4, account5):

	account1
	USER: ci
	PIN: 1111

	account2
	USER: as
	PIN: 2222

	account3
	USER: cm
	PIN: 3333

	account4
	USER: ks
	PIN: 4444

	account5
	USER: oa
	PIN: 5555



