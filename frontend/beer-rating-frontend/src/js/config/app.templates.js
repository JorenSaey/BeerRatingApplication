angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("auth/auth.html","<div class=\"container\">\r\n  <div ng-show=\"$ctrl.error\" class=\"alert alert-danger\">{{$ctrl.error}}</div>\r\n  <h1>{{$ctrl.title}}</h1>\r\n  <div class=\"row\">\r\n  <form class=\"col-md-4\" ng-submit=\"$ctrl.submitForm()\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\"\r\n          placeholder=\"E-mail\"\r\n          class=\"form-control\"\r\n          ng-model=\"$ctrl.formData.username\"/>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"password\"\r\n          placeholder=\"Wachtwoord\"\r\n          class=\"form-control\"\r\n          ng-model=\"$ctrl.formData.password\"/>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"submit\"\r\n          value=\"{{$ctrl.title}}\"\r\n          class=\"btn btn-default\"\r\n          ng-disabled=\"$ctrl.isSubmitting\"/>\r\n      </div>\r\n  </form>\r\n  <div class=\"col-md-6\">\r\n    <img alt=\"login\" src=\"http://localhost:3000/images/login_image.jpg\"/>\r\n  </div>\r\n</div>\r\n</div>\r\n");
$templateCache.put("create/create.html","<div class=\"container\">\r\n  <div ng-show=\"$ctrl.error\" class=\"alert alert-danger\">{{$ctrl.error}}</div>\r\n  <h1>{{$ctrl.title}}</h1>\r\n  <form class=\"create-beer-form\" ng-submit=\"$ctrl.create()\">\r\n    <div ngf-drop ng-model=\"$ctrl.formData.picture\" class=\"drop-box text-center\">\r\n      <p ng-hide=\"$ctrl.formData.picture\">Sleep foto hier</p>\r\n      <img class=\"picture\" ng-show=\"$ctrl.formData.picture\"\r\n        ngf-thumbnail=\"$ctrl.formData.picture\"\r\n        alt=\"Bier\"/>\r\n    </div>\r\n    <input\r\n    type=\"text\"\r\n    class=\"form-control\"\r\n    placeholder=\"Naam\"\r\n    ng-model=\"$ctrl.formData.name\"/>\r\n    <select class=\"form-control\" ng-model=\"$ctrl.formData.color\">\r\n      <option value=\"\" disabled selected>Kleur</option>\r\n      <option ng-repeat=\"color in $ctrl.colors\" value=\"{{color}}\">{{color}}</option>\r\n    </select>\r\n    <input\r\n    type=\"text\"\r\n    class=\"form-control\"\r\n    placeholder=\"Land\"\r\n    ng-model= \"$ctrl.formData.country\"/>\r\n    <input type=\"submit\" value=\"Maak bier\" class=\"btn btn-default\" ng-disabled=\"$ctrl.isSubmitting\"/>\r\n  </form>\r\n</div>\r\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\r\n<div ui-view></div>\r\n<app-footer></app-footer>\r\n");
$templateCache.put("layout/footer.html","<footer class=\"text-center\">\r\n  &copy; Joren Saey\r\n</footer>\r\n");
$templateCache.put("layout/header.html","<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" ui-sref=\"app.overview\" ng-bind=\"::$ctrl.appName\"></a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\"\n        ng-show=\"$ctrl.isLoggedIn()\">\n      <li><a>{{$ctrl.currentUser()}}</a></li>\n      <li ng-click=\"$ctrl.logOut()\">\n        <a><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n");
$templateCache.put("overview/detail.html","<div class=\"beer-detail\">\r\n  <table class=\"table\">\r\n    <thead><tr><th>Details</th><th></th></tr></thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>\r\n          <img\r\n            width=\"100\"\r\n            height=\"100\"\r\n            alt=\"{{$ctrl.selectedBeer.name}}\"\r\n            src=\"http://localhost:3000/{{$ctrl.selectedBeer.image}}\"/>\r\n          </td>\r\n          <td>\r\n          </td>\r\n        </tr>\r\n      <tr><th>Naam</th><td>{{$ctrl.selectedBeer.name}}</td></tr>\r\n      <tr><th>Kleur</th><td>{{$ctrl.selectedBeer.color}}</td></tr>\r\n      <tr><th>Land</th><td>{{$ctrl.selectedBeer.country}}</td></tr>\r\n      <tr><th>Rating voor</th><td>Nog in te vullen</td></tr>\r\n      <tr><th>Rating smaak</th><td>Nog in te vullen</td></tr>\r\n    </tbody>\r\n  </table>\r\n  <button ng-click=\"$ctrl.rate()\" class=\"btn btn-default\">Rate!</button>\r\n  <button ng-click=\"$ctrl.showAllRatings()\" class=\"btn btn-default\">Toon alle ratings</button>\r\n</div>\r\n");
$templateCache.put("overview/overview.html","<div class=\"container\">\r\n  <div ng-show=\"$ctrl.error\" class=\"alert alert-danger\">{{$ctrl.error}}</div>\r\n  <div ng-show=\"$ctrl.noResult\" class=\"alert alert-info\">{{$ctrl.noResult}}</div>\r\n      <h1>{{$ctrl.title}}</h1>\r\n      <input type=\"text\"\r\n        placeholder=\"Zoek op naam\"\r\n        ng-model=\"$ctrl.keyword\"\r\n        ng-change=\"$ctrl.filter()\"\r\n        class=\"form-control keyword\"/>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <table class=\"table header-fixed\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Naam</th>\r\n                  <th>Kleur</th>\r\n                  <th>Land</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr ng-repeat=\"beer in $ctrl.filteredBeers | orderBy:\'name\'\">\r\n                  <td>\r\n                    <a ng-click=\"$ctrl.showDetails(beer)\">\r\n                      {{beer.name}}\r\n                    </a>\r\n                  </td>\r\n                  <td>{{beer.color}}</td>\r\n                  <td>{{beer.country}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <beer-detail></beer-detail>\r\n          </div>\r\n        </div>\r\n      <button class=\"btn btn-default\" ng-click=\"$ctrl.addBeer()\">Nieuw bier</button>\r\n</div>\r\n");
$templateCache.put("rate/rate.html","<div class=\"container\">\r\n  <div ng-show=\"$ctrl.error\" class=\"alert alert-danger\">{{$ctrl.error}}</div>\r\n  <h1>{{$ctrl.title}} {{$ctrl.beer.name}}</h1>\r\n  <img\r\n    width=\"100\"\r\n    height=\"100\"\r\n    alt=\"{{$ctrl.beer.name}}\"\r\n    src=\"http://localhost:3000/{{$ctrl.beer.image}}\"/>\r\n  <form ng-submit=\"$ctrl.rate()\">\r\n    <table>\r\n      <tr>\r\n        <td>\r\n          <label>Rating voor</label>\r\n        </td>\r\n        <td>\r\n          <slider\r\n            floor=\"0\"\r\n            ceiling=\"10\"\r\n            step=\"0.5\"\r\n            precision=\"1\"\r\n            ng-model=\"$ctrl.formData.ratingBefore\"\r\n            class=\"rate-form-control\">\r\n          </slider>\r\n        </td>\r\n        <td ng-bind=\"$ctrl.formData.ratingBefore\"></td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <label>Rating smaak<label>\r\n        </td>\r\n        <td>\r\n          <slider\r\n            floor=\"0\"\r\n            ceiling=\"10\"\r\n            step=\"0.5\"\r\n            precision=\"1\"\r\n            ng-model=\"$ctrl.formData.ratingTaste\"\r\n            class=\"rate-form-control\">\r\n          </slider>\r\n        </td>\r\n        <td ng-bind=\"$ctrl.formData.ratingTaste\"></td>\r\n      </tr>\r\n    </table>\r\n    <input type=\"submit\" value=\"Rate!\" class=\"btn btn-default\"/>\r\n  </form>\r\n</div>\r\n");
$templateCache.put("rate/ratings.html","<div class=\"container\">\r\n  <h1>{{$ctrl.title}}</h1>\r\n</div>\r\n");}]);