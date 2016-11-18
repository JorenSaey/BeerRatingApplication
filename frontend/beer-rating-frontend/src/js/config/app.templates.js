angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("auth/auth.html","<div class=\"container\">\r\n  <div ng-show=\"$ctrl.error\" class=\"alert alert-danger\">{{$ctrl.error}}</div>\r\n  <h1>{{$ctrl.title}}</h1>\r\n  <div class=\"row\">\r\n  <form class=\"col-md-4\" ng-submit=\"$ctrl.submitForm()\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\"\r\n          placeholder=\"E-mail\"\r\n          class=\"form-control\"\r\n          ng-model=\"$ctrl.formData.username\"/>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"password\"\r\n          placeholder=\"Wachtwoord\"\r\n          class=\"form-control\"\r\n          ng-model=\"$ctrl.formData.password\"/>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"submit\"\r\n          value=\"{{$ctrl.title}}\"\r\n          class=\"btn btn-default\"\r\n          ng-disabled=\"$ctrl.isSubmitting\"/>\r\n      </div>\r\n  </form>\r\n  <div class=\"col-md-6\">\r\n    <img alt=\"login\" src=\"./resources/images/login_image.jpg\"/>\r\n  </div>\r\n</div>\r\n</div>\r\n");
$templateCache.put("create/create.html","<div class=\"container\">\r\n  <h1>{{$ctrl.title}}</h1>\r\n  <form class=\"create-beer-form\" ng-submit=\"$ctrl.addBeer()\">\r\n    <input\r\n    type=\"text\"\r\n    class=\"form-control\"\r\n    placeholder=\"Naam\"\r\n    ng-model=\"$ctrl.formData.name\"/>\r\n    <select class=\"form-control\" ng-model=\"$ctrl.formData.color\">\r\n      <option value=\"\" disabled selected>Kleur</option>\r\n      <option ng-repeat=\"color in $ctrl.colors\" value=\"{{color}}\">{{color}}</option>\r\n    </select>\r\n    <input\r\n    type=\"text\"\r\n    class=\"form-control\"\r\n    placeholder=\"Land\"\r\n    ng-model= \"$ctrl.formData.country\"/>\r\n    <input type=\"submit\" value=\"Maak bier\" class=\"btn btn-default\"/>\r\n  </form>\r\n</div>\r\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\r\n<div ui-view></div>\r\n<app-footer></app-footer>\r\n");
$templateCache.put("layout/footer.html","<footer class=\"text-center\">\r\n  &copy; Joren Saey\r\n</footer>\r\n");
$templateCache.put("layout/header.html","<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" ui-sref=\"app.overview\" ng-bind=\"::$ctrl.appName\"></a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\"\n        ng-show=\"$ctrl.isLoggedIn()\">\n      <li><a>{{$ctrl.currentUser()}}</a></li>\n      <li ng-click=\"$ctrl.logOut()\">\n        <a><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n");
$templateCache.put("overview/overview.html","<div class=\"container\">\r\n  <div ng-show=\"$ctrl.error\" class=\"alert alert-danger\">{{$ctrl.error}}</div>\r\n  <h1>{{$ctrl.title}}</h1>\r\n  <table class=\"table\">\r\n    <tr>\r\n      <th>Naam</th>\r\n      <th>Kleur</th>\r\n      <th>Land</th>\r\n      <th></th>\r\n    </tr>\r\n    <tr ng-repeat=\"beer in $ctrl.beers\">\r\n      <td>{{beer.name}}</td>\r\n      <td>{{beer.color}}</td>\r\n      <td>{{beer.country}}</td>\r\n      <td>\r\n        <button class=\"btn btn-default\">Rate!</button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <button class=\"btn btn-default\" ng-click=\"$ctrl.addBeer()\">Nieuw bier</button>\r\n</div>\r\n");}]);