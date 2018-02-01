var app = angular.module("githubViewer");
app.directive('mySample',function($compile){
    return {
        restrict: 'E',
        link: function(scope,element,attrs,controller){
            var markup = "<input type='text' ng-model='SampleData'>{{sampleData}}<br>";
            angular.element(element).html($compile(markup)(scope));
        }
    };
});