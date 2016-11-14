/**
 * Created by LucyQiao on 11/13/16.
 */
angular.module('myApp', ['productService'])
    .controller('myCtrl', function($scope,getDataService) {
        getDataService.all().success(function(data){
            $scope.myData=data["products"];
        });

        $scope.findValue=function(enteredValue){
            $scope.results = [];
            for(var index in $scope.myData){
                if(isMatch(enteredValue.toLowerCase(),$scope.myData[index])){
                    $scope.results.push($scope.myData[index]);
                }
            }
        }

        var isMatch=function(target,obj){
            for(var i in obj){
                if(strStr(obj[i].toLowerCase(),target)){
                    return true;
                }
            }
            return false;
        }

        var strStr = function(origin, target) {
            if(origin.length< target.length){
                return false;
            }

            var len1 = origin.length;
            var len2 = target.length;
            for(var m =0;m<=len1-len2;m++){
                var n;
                for(n=0;n<len2;n++){
                    if(origin.charAt(m+n)!=target.charAt(n)){
                        break;
                    }

                    if(n===len2-1){
                        return true;
                    }
                }
            }
            return false;
        };


        //reset search
        $scope.clear=function(){
            $scope.enteredValue='';
            $scope.results=[];
        }

    });



angular.module('myApp').directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});