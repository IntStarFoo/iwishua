// Generated by CoffeeScript 1.7.1
(function() {
  define('./controllers/WishController', function(require, exports, module) {
    return module.exports = function($scope, logger, entityManager, $routeParams, $location) {
      var perPage, spinner;
      perPage = 5;
      if ($routeParams.skip == null) {
        $routeParams.skip = 0;
      }
      $scope.navLeft = function($event) {
        return $location.path("/list/" + (parseInt($routeParams.skip, 10) + perPage));
      };
      $scope.navRight = function($event) {
        return $location.path("/list/" + (Math.max(parseInt($routeParams.skip, 10) - perPage, 0)));
      };
      spinner = new Spinner({
        radius: 30,
        width: 8,
        length: 16
      });
      spinner.spin(document.getElementById('wish-spinner'));
      return entityManager.getProducts($routeParams.skip).then(function(data) {
        var masonry;
        $(".wish-splash").hide();
        spinner.stop();
        $scope.skip = parseInt($routeParams.skip, 10) + perPage;
        entityManager.parseProducts($scope, data);
        return (masonry = $(".js-masonry")).imagesLoaded(function() {
          return masonry.masonry();
        });
      });
    };
  });

}).call(this);
