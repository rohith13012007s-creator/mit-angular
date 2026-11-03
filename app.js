var app = angular.module('myApp', []);

//parent controller

app.controller('CollegeController', function($scope) {
    $scope.collegeName = "abc college";
});

//child controller

app.controller(
    "StudentController", function($scope) {
        $scope.name = "ROHITH";
        $scope.department = "INFORMATION SCIENCE";
        $scope.semester = 3;

        //aray
        $scope.students =[
            "ROSHAN",
            "SACHIN",
            "SHARATH",
            "RAVI",
        ];
    }
);