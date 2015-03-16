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
        window.location = "https://www.google.com/search?q=" + encodeURIComponent($("#search-textbox").value) + " site:{{ site.baseurl }}";

        return false;
    };
});
