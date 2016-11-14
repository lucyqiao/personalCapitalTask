/**
 * Created by LucyQiao on 11/13/16.
 */
angular.module('productService', []).factory('getDataService', function($http) {
    var myFactory ={};
    myFactory.all=function(){
        return $http.get('products.json');
    };

    return myFactory;
});