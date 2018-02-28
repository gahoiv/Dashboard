'use strict';


angular.module('myApp.dashboard', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/testReport', {
      templateUrl: 'testReport/testReport.html',
      controller: 'TestReportCtrl'
    });
  }])

  .controller('TestReportCtrl', function ($scope, DataProvider) {
    this.tab = this;
    $scope.tabId = '';
    $scope.testcaseid='';

    $scope.data = {
      name: 'Test Case1',
      testArray: [{
        name: 'Test1',
        id: '1',
        status: 'Pass'
      }, {
        name: 'Test2',
        id: '2',
        status: 'Pass'
      }, {
        name: 'Test3',
        id: '3',
        status: 'Skip'
      }, {
        name: 'Test4',
        id: '4',
        status: 'Fail'
      }, {
        name: 'Test5',
        id: '5',
        status: 'Fail'
      }, ]
    };

    $scope.setTab = function (tabId) {
      $scope.tabId = tabId;
    };

    $scope.setTestId = function (testCaseId) {
      $scope.testcaseid = testCaseId;
    }
  });