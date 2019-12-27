let userMail = 'user@gmail.com',
	adminMail = 'admin@gmail.com',
	userPass = 'UserPass',
	adminPass = 'AdminPass',
	askMail = '',
	askPass = '',
	oldPass = '',
	changePassResult = true,
	newPassRepeat = '',
	newPass = '';

askMail = prompt('Enter your email please');

if (askMail === null || !!askMail === false) {
	alert('Canceled');
} else if (askMail.length < 5) {
	alert('I don`t know any emails having name length less than 5 symbols');
} else if (askMail === userMail || askMail === adminMail) {
	askPass = prompt('Enter your password');

	if (askPass === null || !!askPass === false) {
		alert('Canceled');
	} else if (askMail === userMail && askPass === userPass || askMail === adminMail && askPass === adminPass) {
		changePassResult = confirm('Do you want to change your password?');

		if (changePassResult) {
		oldPass = prompt('To change your actual password enter it again');

		if (oldPass === null || !!oldPass === false) {
			alert('Cancelled');
		} else if (oldPass === askPass) {
			newPass = prompt('Enter your NEW password');

			if (newPass.length < 6) {
				alert('It’s too short password. Sorry.');
			} else {
				newPassRepeat = prompt('Please repeat your new password');

				if (newPassRepeat !== newPass) {
					alert('You wrote the wrong password');
					throw 'Stop!';
				} else if (newPassRepeat === newPass) {
					alert('You have successfully changed your password');
				}
			}
			} else {
				alert('Canceled');
			}
		}
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don`t know you');
}
