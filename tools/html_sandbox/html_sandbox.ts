(d =>
{
    "use strict";

    var main: HTMLElement;
    var sourceContainer: HTMLElement;
    var source: HTMLTextAreaElement;
    var splitter: HTMLDivElement;
    var result: HTMLIFrameElement;

    function $(id: string)
    {
        return d.querySelector(id);
    }

    d.addEventListener("DOMContentLoaded", () =>
    {
        main = $(".main");
        sourceContainer = $(".source-container");
        source = <HTMLTextAreaElement>$(".source");
        splitter = <HTMLDivElement>$(".splitter");
        result = <HTMLIFrameElement>$(".result");

        splitter.onmousedown = (e: MouseEvent) =>
        {
            result.style.pointerEvents = "none";
            var w0 = sourceContainer.offsetWidth;
            var x0 = e.x;
            var totalWidth = main.clientWidth - splitter.offsetWidth;

            d.onmousemove = (e: MouseEvent) =>
            {
                var newSourceContainerWidth = w0 + e.x - x0;

                sourceContainer.style.flex = (newSourceContainerWidth / (totalWidth - newSourceContainerWidth)).toString();
            };

            d.onmouseup = (e: MouseEvent) =>
            {
                result.style.pointerEvents = "";
                d.onmousemove = null;
                d.onmouseup = null;
            };

            return false;
        };

        source.oninput = () =>
        {
            result.contentDocument.open();
            result.contentDocument.write(source.value);
            result.contentDocument.close();
        };
    });
})(document);
