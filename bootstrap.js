(window.loadScript = function (url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = script.onreadystatechange = callback;
    document.getElementsByTagName('head')[0].appendChild(script);
})('stack.js');