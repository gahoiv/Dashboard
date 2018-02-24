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
      passedTest: {
        count: data['Total Passed'],
        percent: data['Total Passed'] / data['Total Test Cases'] * 100
      },
      failedTest: {
        count: data['Total Failed'],
        percent: data['Total Failed'] / data['Total Test Cases'] * 100
      },
      skippedTest: {
        count: data['Total Skipped'],
        percent: data['Total Skipped'] / data['Total Test Cases'] * 100
      },
    };
  }
  DataProvider.getExecutionInfo().then(function (response) {
      $scope.exeInfo = convertCardData(response.data);
    });

  $timeout(function () {
    loadPieCharts();
  }, 1000);
}

angular.module('myApp.dashboard').component('cards', {
  templateUrl: 'components/cards/cards.html',
  controller: CardsController
});