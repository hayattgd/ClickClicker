let title = document.getElementById("web_title")
let isLocal = false

if (location.protocol == "file:")
{
    isLocal = true
    console.log("now Local mode enabled")
    title.innerHTML = title.innerHTML + " - Local"
}else
{
    console.log("now Local mode disabled")
}