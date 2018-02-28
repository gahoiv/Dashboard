function DetailsController($scope, DataProvider, $timeout) {
    var ctrl = this;
    $scope.test = {
        name: 'Test Case',
        testName: 'Test Case 11'
    };

    $scope.regression = [{
        timestamp: '10:34:32',
        details: 'Extent report has been started for UserJourney-02',
        icon: 'mail'
    }, {
        timestamp: '10:34:32',
        details: 'Extent report has been started for UserJourney-02',
        icon: 'mail'
    }, {
        timestamp: '10:34:32',
        details: 'Extent report has been started for UserJourney-02',
        icon: 'mail'
    }, {
        timestamp: '10:34:32',
        details: 'Extent report has been started for UserJourney-02',
        icon: 'mail'
    }, {
        timestamp: '10:34:32',
        details: 'Extent report has been started for UserJourney-02',
        icon: 'mail'
    }];

    $scope.logs = [{
        timestamp:  '10:34:32',
        details: 'Extent report has been started for UserJourney-02Extent report has been started for UserJourney-02Extent report has been started for UserJourney-02Extent report has been started for UserJourney-02Extent report has been started for UserJourney-02'
    }];

    $scope.video = [{
        timestamp:  '10:34:32',
        details: 'Extent report has been started for UserJourney-02Extent report has been started for UserJourney-02Extent report has been started for UserJourney-02Extent report has been started for UserJourney-02Extent report has been started for UserJourney-02'
    }];
}

angular.module('myApp.dashboard').component('testdetails', {
    templateUrl: 'components/test-details/testdetails.html',
    bindings: {
        testcaseid: '='
    },
    controller: DetailsController
});