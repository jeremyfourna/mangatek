Template.header.helpers({
	homeActive() {
		if (Router.current().route._path === '/ownedMangas') {
			return 'active';
		} else {
			return false;
		}
	},
	missingActive() {
		if (Router.current().route._path === '/missingMangas') {
			return 'active';
		} else {
			return false;
		}
	},
	adminActive() {
		if (Router.current().route._path.match('admin')) {
			return 'active';
		} else {
			return false;
		}
	},
	admin() {
		if (Meteor.user().profile.admin) {
			return true;
		} else {
			return false;
		}
	}
});