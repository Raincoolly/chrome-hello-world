setInterval(function() {
	var notification = webkitNotifications.createNotification(
		'./icon.png',
		'The Message',
		'Here comes message text');
	notification.show();

	setTimeout(function() {
		notification.cancel();
	}, 1000);
}, 2000);