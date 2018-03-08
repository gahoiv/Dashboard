function CardsController($scope, DataProvider, $timeout) {
  var ctrl = this;

  function loadPieCharts() {
    $('.chart').each(function () {
      var chart = $(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          $(this.el).find('.percent').text(`${Math.round(percent)}%`);
        },
        barColor: chart.attr('rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 12,
        lineCap: 'round',
      });
    });
  }

  function convertCardData(data) {
    return {
      toatlTests: data['Total Test Cases'],
      totalFeature: data['Total Features'],
      totalManual: data['Total Manual Run'],
      totalAutomated: data['Total Automated Run'],
      totalSessionTime: new Date(data['Session Duration in sec'] * 1000).toISOString().substr(11, 8),
      passedTest: {
        count: data['Total Passed'],
        percent: Math.round(data['Total Passed'] / data['Total Test Cases'] * 100)
      },
      failedTest: {
        count: data['Total Failed'],
        percent: Math.round(data['Total Failed'] / data['Total Test Cases'] * 100)
      },
      skippedTest: {
        count: data['Total Skipped'],
        percent: Math.round(data['Total Skipped'] / data['Total Test Cases'] * 100)
      },
    };
  }
  DataProvider.getExecutionInfo().then(function (response) {
      $scope.exeInfo = convertCardData(response.data);
      $timeout(function () {
        loadPieCharts();
      }, 500);
    });

 
}

angular.module('myApp.dashboard').component('cards', {
  templateUrl: 'components/cards/cards.html',
  controller: CardsController
});