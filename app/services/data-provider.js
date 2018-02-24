'use strict';

const urlMap = {
  executionInfoUrl: 'http://localhost:8080/ExecutionInfo.json',
  featureStatsUrl: 'http://localhost:8080/FeatureStats.json',
  topPassedUrl: 'http://localhost:8080/TopPassed.json'
};

angular.module('myApp.dashboard')
  .service('DataProvider', function ($http) {
    this.getExecutionInfo = function getExecutionInfo() {
      return $http.get(`${urlMap.executionInfoUrl}?${Math.random()}`);
    };
    this.getFeatureInfo = function getFeatureInfo() {
      return $http.get(`${urlMap.featureStatsUrl}?${Math.random()}`);
    };
    this.getTopPassed = function getTopPassed() {
      return $http.get(`${urlMap.topPassedUrl}?${Math.random()}`);
    };
    this.getTopFailed = function getTopFailed() {
      return $http.get(`${urlMap.topPassedUrl}?${Math.random()}`);
    };
    this.getTopSkipped = function getTopSkipped() {
      return $http.get(`${urlMap.topPassedUrl}?${Math.random()}`);
    };
  });