function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<div ng-transclude></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);