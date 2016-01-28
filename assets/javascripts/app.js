---
sitemap:
    exclude: "yes"
---

requirejs.config({
    "baseUrl": "{{ site.baseurl }}/assets/javascripts/lib",
    "paths": {
        "app": "../app",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min",
        "qtip": "//cdnjs.cloudflare.com/ajax/libs/qtip2/2.2.1/basic/jquery.qtip.min"
    },
    "shim": {
        "GW2.class": {
            deps: ["Ajax.class"],
            exports: "FW_GW2"
        },
        "Ajax.class": {
            exports: "FW_Ajax"
        },
        "jquery-dateFormat.min": {
            deps: ["jquery"]
        }
    }
});

requirejs(["app/main"]);
