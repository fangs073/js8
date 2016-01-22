angular.module('app', ['ngAnimate'])
	.controller('carouselController', ['$scope', function($scope){

		$scope.images = [
			{
				src: './img/salami.jpg',
				caption: 'go hang a salami'
			},
			{
				src: './img/lasagna.jpg',
				caption: "i'm a lasagna hog"
			}

		]

		$scope.active = 1;

		$scope.logVal = function(index) {
			console.log("active: "+$scope.active+" $index: "+index)
		}



	}]);

angular.module('app')
	.controller('navController', ['$scope', function($scope) {

		$scope.navTemplate = [
			{
				name: 'Main',
				link: '#'
			},
			{
				name: 'Try It',
				link: '#'
			},
			{
				name: 'How It Works',
				link: '#'
			},
			{
				name: 'Hamburger',
				link: '#'
			},
		];

	}]);

angular.module('app')
	.controller('paragraphController', ['$scope', function($scope){
		$scope.paragraphTemplate = [
			{
				header: 'Hipsters',
				img:  'http://placehold.it/300x150',
				content: "Beard bespoke meggings tote bag, you probably haven't heard of them jean shorts church-key butcher biodiesel dreamcatcher banjo migas. VHS disrupt taxidermy, cronut flannel tote bag messenger bag chicharrones. Green juice pitchfork williamsburg synth, locavore fixie dreamcatcher skateboard actually biodiesel irony. Bicycle rights scenester kickstarter actually crucifix, freegan locavore health goth cliche etsy. Pour-over cardigan literally letterpress twee stumptown. Listicle sriracha pinterest roof party skateboard, trust fund mixtape migas helvetica brunch hoodie VHS. Etsy quinoa lumbersexual, migas chambray seitan neutra man bun.",
				paraNum: 0
			},
			{
				header: 'Pirates',
				img:  'http://placehold.it/300x150',
				content: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
				paraNum: 1
			},
			{
				header: 'Bacon',
				img:  'http://placehold.it/300x150',
				content: 'Venison salami jerky turkey turducken cupim sirloin pork belly beef porchetta tongue landjaeger. Picanha pork loin ball tip kevin turducken capicola. Kevin pork belly tongue, strip steak jowl biltong alcatra short loin ham sausage turkey. Pork belly biltong meatball bresaola shankle ball tip, pig shank flank beef ribs spare ribs. Strip steak tri-tip kielbasa leberkas salami chicken andouille sirloin short ribs chuck.',
				paraNum: 2
			},
		]
	}]);