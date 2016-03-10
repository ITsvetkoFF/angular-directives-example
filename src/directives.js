angular.module("itsvDirectiveExample")
    
    .directive('myOuter', function () {
        var directive = {};

        directive.restrict = 'EA';
        directive.priority = 100;
        directive.template =    '<div class="outer-dir">' +
                                    '<my-inner name="first"></my-inner>' +
                                    '<my-inner name="second"></my-inner>' +
                                '</div>';
        directive.compile = function compile() {
            alert("I am outer compile");
            return function postLink() {
                alert("I am outer link");
            }
        };
        return directive;
    })
    
    .directive('myInner', function () {
        var directive = {};

        directive.restrict = 'EA';
        directive.priority = 90;

        directive.controller = function ($scope) {
            $scope.vmApp.firstName = "Not Jakob";
        };
        directive.template = '<ul class = "inner-dir"><li>hi</li></ul>';
        directive.compile = function compile(tElement, tAttrs) {
            alert("I am inner compile");
            angular.element(tElement[0]).find('li').text("hi, " + tAttrs.name);
            return function postLink(scope, iElement, iAttrs, controller) {
                alert("I am inner link, my name is: " + iAttrs.name);
            }
        };
        return directive;
    })

    .directive('myScopes', function () {
        var directive = {};

        directive.restrict = 'E';
        directive.scope = {names: '=', name:'<', changeName:'&', foo:'=?'};
        directive.template =    'hi, <input type="text" ng-model="name">' +
                                '<pre>{{names|json}}</pre>' +
                                'ihor is: <input type="text" ng-model="names[0].job"><br>' +
                                '<button ng-click="changeName({newName: name})">Poor Jakob!</button>';
        return directive;
    })

    .directive('myTransclude', function () {
        var directive = {};
    
        directive.restrict = 'E';
        directive.transclude = true;
        directive.template =    '<div>' +
                                    '<div>' +
                                        '<span ng-transclude></span> ' +
                                        '<br>' +
                                        '<span ng-transclude></span>' +
                                    '</div>' +
                                '</div>';
    
        return directive;
    });