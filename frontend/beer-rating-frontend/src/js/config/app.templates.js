angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("auth/auth.html","<div class=\"container\">\r\n  <h1>Het werkt</h1>\r\n</div>\r\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\r\n<div ui-view></div>\r\n<app-footer></app-footer>\r\n");
$templateCache.put("layout/footer.html","<footer>\r\n  footer werkt ook\r\n</footer>\r\n");
$templateCache.put("layout/header.html","<nav>Header werkt</nav>\n");}]);