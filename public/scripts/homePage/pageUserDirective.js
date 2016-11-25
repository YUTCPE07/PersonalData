
App.directive('showFormData', function () {
    return {
        restrict: 'E',
        templateUrl: 'view/template-showData.html',
        link: function (scope, element, attrib) {

            scope.propertyName = 'id';
            scope.reverse = true;
            var glyphiconup = 'glyphicon glyphicon-triangle';
            var thisUp = '-top';
            var thisDown = '-bottom';
            scope.orderByMe = function(x) {
                scope.myOrderBy = x;
                scope.reverse = (scope.propertyName === x) ? !scope.reverse : false;
                scope.propertyName = x;
                console.log(scope.reverse)
                if(scope.reverse === false ){
                    scope.myClassSelect = glyphiconup+thisDown;
                }else {
                    scope.myClassSelect = glyphiconup+thisUp;
                }
            }
        }
    };
});

App.directive('formAdd', function () {
    return {
        restrict: 'E',
        templateUrl: 'view/template-formAdd.html'
    };
});

App.directive('componentPagination', function () {
    return {
        templateUrl: "view/template-Pagination.html",
        restrict: "E",
        scope: { pages: '=',newpagination:'=' },
        link: function (scope, element, attrib) {
            scope.selectPage = 1;
            scope.gotopage = function(no) {
                scope.selectPage = no;
                scope.newpagination(no);
            }
            scope.backpage = function() {
                scope.selectPage = scope.selectPage-1;
                scope.newpagination(scope.selectPage);
            }
            scope.nextpage = function() {
                scope.selectPage = scope.selectPage+1;
                scope.newpagination(scope.selectPage);
            }
        }
    }
});
