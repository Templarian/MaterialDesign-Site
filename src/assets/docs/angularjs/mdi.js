angular.module('mdi', [])
.service('mdiService', function () {
  var service = {
    icons: {
      error: 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z'
    }
  };
  service.add = function (name, data) {
    service.icons[name] = data;
  };
  service.get = function (name) {
    return service.icons[name] || service.icons.error;
  };
  return service;
})
.directive('mdi', [
  'mdiService',
  function(mdiService) {
    var controller = [
      '$scope',
      function ($scope) {
        $scope.data = $scope.data || mdiService.get($scope.name);
        if (!($scope.data)) {
          throw 'mdi requires name or data attribute.';
        }
      }
    ];
    return {
      scope: {
        data: "=?",
        name: "=?",
      },
      controller: controller,
      template: '<svg viewBox="0 0 24 24"><path ng-attr-d="data"></path></svg>'
    };
  }
]);