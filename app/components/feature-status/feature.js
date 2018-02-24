
function FeatureStatusCtrl($scope, DataProvider) {

    $scope.options = {
        chart: {
            type: 'multiBarChart',
            height: 400,
            margin: {
                top: 20,
                right: 20,
                bottom: 45,
                left: 45
            },
            clipEdge: true,
            //staggerLabels: true,
            duration: 500,
            color: ['#6EBA8C', '#005562', '#0E8174'],
            stacked: false,
            xAxis: {
                axisLabel: 'Feature Names',
                axisLabelDistance: 30,
                showMaxMin: false
            },
            yAxis: {
                axisLabel: 'Test case count',
                axisLabelDistance: -20,
                tickFormat: function (d) {
                    return d3.format(',.1f')(d);
                }
            }
        }
    };

    DataProvider.getFeatureInfo().then(function (response) {
        $scope.data = convertChartData(response.data);
    });

    function convertChartData(featureData) {
        return [{
                key: 'Test Passed',
                values: getAxisData(featureData, 'Total Passed')
            },
            {
                key: 'Test Failed',
                values: getAxisData(featureData, 'Total Failed')
            },
            {
                key: 'Test Skipped',
                values: getAxisData(featureData, 'Total Skipped')
            }
        ];
    }

    function getAxisData(featureData, key) {
        return featureData.map(function (feature) {
            return {
                x: feature['Feature Name'],
                y: feature[key]
            };
        });
    }
}

angular.module('myApp.dashboard').component('feature', {
    templateUrl: 'components/feature-status/feature.html',
    controller: FeatureStatusCtrl
});