'use strict';

const env = 'prod'
const noOfRecords = 10;
const prodUrlMap = {
  executionInfoUrl: 'http://localhost:8080/ExecutionInfo.json',
  featureStatsUrl: `http://localhost:8080/topFeatures?number=${noOfRecords}`,
  topPassedUrl: `http://localhost:8080/topTestCases?number=${noOfRecords}`,
  latestBuildsInfo: `http://localhost:8080/latestBuildsInfo?number=${noOfRecords}`
};

const testUrlMap = {
  executionInfoUrl: 'http://localhost:8001/ExecutionInfo.json',
  featureStatsUrl: `http://localhost:8001/FeatureStats.json?number=${noOfRecords}`,
  topPassedUrl: `http://localhost:8001/TopPassed.json?number=${noOfRecords}`
};

const urlMap = (env==='prod') ? prodUrlMap : testUrlMap;

angular.module('myApp.dashboard')
  .service('DataProvider', function ($http) {
    this.getExecutionInfo = function getExecutionInfo() {
      return $http.get(`${urlMap.executionInfoUrl}?${Math.random()}`);
    };
    this.getFeatureInfo = function getFeatureInfo() {
      return $http.get(urlMap.featureStatsUrl);
    };
    this.getTopPassed = function getTopPassed() {
      return $http.get(urlMap.topPassedUrl);
    };
    this.getTopFailed = function getTopFailed() {
      return $http.get(`${urlMap.topPassedUrl}&executionResult=Fail`);
    };
    this.getTopSkipped = function getTopSkipped() {
      return $http.get(`${urlMap.topPassedUrl}&executionResult=Skip`);
    };
    this.getLongDurationPerSession = function getLongDurationPerSession() {
      return $http.get(`${urlMap.topPassedUrl}&executionTime=max&lastSession=true`);
    };
    this.getAvgLongDuration = function getAvgLongDuration() {
      return $http.get(`${urlMap.topPassedUrl}&executionTime=max`);
    };
    this.getLatestBuildInfo = function getLatestBuildInfo() {
      return $http.get(urlMap.latestBuildsInfo);
    };
  });