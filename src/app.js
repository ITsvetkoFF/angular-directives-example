angular.module("itsvDirectiveExample", [])
    .controller("AppController", function () {
        var vm = this;
        vm.firstName = "Jakob";
        vm.sayFirstName = sayFirstName;
        vm.namesObjectsArray = [{name: "Ihor", job: "fireman", say:sayName}, {name: "Vasyl'", job: "actor", say:sayName}];
        vm.namesArray = ["Ihor", "Vasyl'", "Gannusya", "Gogi"];

        function sayName() {
            alert(this.name + ' is working as ' + this.job);
        }
        function sayFirstName() {
            alert(this.firstName + ' is talking!');
        }

        function get_directives(name) {
            var result = [],
                invokes = angular.module(name)._invokeQueue;

            for (var i = 0; i < invokes.length; ++i) {
                if (invokes[i][1] == "directive") {
                    result.push(invokes[i][2]["0"]);
                }
            }

            return result;
        }

        vm.directives = get_directives('itsvDirectiveExample');

    });