---
sitemap:
    exclude: "yes"
---

requirejs.config({
    "baseUrl": "{{ site.baseurl }}/assets/javascripts/lib",
    "paths": {
        "app": "../app",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min"
    },
    "shim": {
        "GW2.class": {
            deps: ["Ajax.class"],
            exports: "FW_GW2"
        },
        "Ajax.class": {
            exports: "FW_Ajax"
        }
    }
});

requirejs(["app/main"]);
