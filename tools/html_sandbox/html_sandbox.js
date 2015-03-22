(function (d) {
    "use strict";

    var main;
    var sourceContainer;
    var source;
    var splitter;
    var result;

    function $(id) {
        return d.querySelector(id);
    }

    d.addEventListener("DOMContentLoaded", function () {
        main = $(".main");
        sourceContainer = $(".source-container");
        source = $(".source");
        splitter = $(".splitter");
        result = $(".result");

        splitter.onmousedown = function (e) {
            document.body.style.cursor = "col-resize";
            result.style.pointerEvents = "none";

            var w0 = sourceContainer.offsetWidth;
            var x0 = e.x;
            var totalWidth = main.clientWidth - splitter.offsetWidth;

            d.onmousemove = function (e) {
                var newSourceContainerWidth = w0 + e.x - x0;

                sourceContainer.style.flex = (newSourceContainerWidth / (totalWidth - newSourceContainerWidth)).toString();
            };

            d.onmouseup = function (e) {
                result.style.pointerEvents = "";
                document.body.style.cursor = "";
                d.onmousemove = null;
                d.onmouseup = null;
            };

            return false;
        };

        source.oninput = function () {
            result.contentDocument.open();
            result.contentDocument.write(source.value);
            result.contentDocument.close();
        };
    });
})(document);
