'use strict';

/* App Module */

var ffApp = angular.module('ffApp', [
  'ngRoute',
  'ngResource',

  'LocalStorageModule',

  'ffControllers',
  'ffFilters',
  'ffServices',
  'ffResources'
]);
