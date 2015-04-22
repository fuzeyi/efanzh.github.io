---
---

document.addEventListener("DOMContentLoaded", function (e)
{
    function $(q)
    {
        return document.querySelector(q);
    }

    $("#search-form").onsubmit = function (e)
    {
        var content = /\S/.test($("#search-textbox").value) ? encodeURIComponent($("#search-textbox").value.trim() + " ") : "";

        window.location = "https://www.google.com/search?q=" + content + "site:{{ site.domain }}{{ site.baseurl }}";

        return false;
    };
});
