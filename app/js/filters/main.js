'use strict';

/* Filters */

var ffFilters = angular.module('ffFilters', []);

ffFilters.filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
