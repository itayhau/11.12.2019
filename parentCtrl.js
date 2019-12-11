
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope) {
    $scope.x = 10
    $scope.clickme = () => {
        alert('click!')
    }
}

module.directive('directiveName', function () {
    return {
        restrict: 'E',
        scope: {
            title: '@',
            y: '=',
            clickFunc: '&'
        },
        templateUrl: 'Page/dir',
        link: function (scope) {
            scope.clickit = () => {
                scope.clickFunc()()
            }
        }
    }
});

