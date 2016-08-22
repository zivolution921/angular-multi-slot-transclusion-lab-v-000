function UserProfile() {
	return {
		transclude: {
			name: 'h4', 
			position: 'h6', 
			description: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<div>Name: <span ng-transclude="name"></span></div>',
				'<div>Position: <span ng-transclude="position">No position</span></div>',
				'<div>Description: <span ng-transclude="description">No description</span></div>',
				'<div ng-transclude></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);