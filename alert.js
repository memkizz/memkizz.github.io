window.onload = function ()
{
var x = new XMLHttpRequest();
x.open("GET", "/endpoint/@scrypted/core/engine.io/api/?EIO=4&transport=polling&t=0hz5BbI", false);
x.send(null);
alert(x.responseText);
};
