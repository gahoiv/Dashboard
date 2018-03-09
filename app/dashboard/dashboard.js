'use strict';


angular.module('myApp.dashboard', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'Dashboard2Ctrl'
    });
  }])

  .controller('Dashboard2Ctrl', function ($scope, DataProvider) {
    $scope.columnDefs = [ 
      { name: 'TestCasesId', width: '15%', displayName: 'ID' },
      { name: 'TestCasesName', width: '25%', displayName: 'NAME' },
      { name: 'PassedExecution', width: '20%', displayName: 'PASS COUNT' },
      { name: 'FailedExecution', width: '20%', displayName: 'FAIL COUNT' },
      { name: 'SkippedExecution', width: '20%', displayName: 'SKIP COUNT' }
    ];
    $scope.columnDefsDuration = [ 
      { name: 'TestCasesId', width: '15%', displayName: 'ID' },
      { name: 'TestCasesName', width: '25%', displayName: 'NAME' },
      { name: 'Status', width: '20%', displayName: 'STATUS' },
      { name: 'SessionId', width: '20%', displayName: 'SESSION ID' },
      { name: 'SubSessionId', width: '20%', displayName: 'SUB SESSSION ID' }
    ];
    DataProvider.getTopPassed().then(function(response) {
      $scope.topPassedData = response.data;
    });
    DataProvider.getTopFailed().then(function(response) {
      $scope.topFailedData = response.data;
    });
    DataProvider.getTopSkipped().then(function(response) {
      $scope.topSkippedData = response.data;
    });
    DataProvider.getAvgLongDuration().then(function(response) {
      $scope.topAvgLongDuration = response.data;
    });
  });