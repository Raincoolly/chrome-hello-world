setInterval(function() {
	var notification = webkitNotifications.createNotification(
		'./icon.png',
		'The Message',
		'Here comes message text');
	notification.show();

	notification.onclick = function() {
		notification.cancel();
	};

	setTimeout(function() {
		notification.cancel();
	}, 3000);
}, 5000);