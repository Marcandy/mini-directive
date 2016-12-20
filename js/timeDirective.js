angular.module('timeApp')
  .directive('showTime', function () {

    return {
      restrict: 'EA',
      template: "<div> The current time: {{time | date:'short'}} </div>", //use date filter to format the time
      link: function (scope, element, attrs) {
        scope.time = new Date();
      }
    }
  })
