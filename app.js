/**
 * Created by jrawal on 11/25/2014.
 */
(function() {
    var jit = angular.module("jit", []);

    var ctrl = jit.controller("ctrl",function(){
        var ct = this;

ct.show = function () {
    alert(ct.fn);
}

    })

})();