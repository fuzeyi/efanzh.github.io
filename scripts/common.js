---
---

document.addEventListener("DOMContentLoaded", function (e)
{
    function $(id)
    {
        return document.getElementById(id);
    }

    $("search-form").onsubmit = function (e)
    {
        window.location = "https://www.google.com/search?q=" + encodeURIComponent($("search-textbox").value) + " site:{{ site.baseurl }}";

        return false;
    };
});
