function loadCss(css, callback) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = css;
    link.onreadystatechange = callback;
    link.onload = callback;
    head.appendChild(link);
}
loadScript('https://xebia-france.github.io/stackoverflow-job-advertisement/tinybox.js', function () {
    loadCss('https://xebia-france.github.io/stackoverflow-job-advertisement/style.css', function () {
        TINY.box.show({
            html: "<div><h1>Good Work !</h1> <p>Les défis ne vous font pas peur et c’est une des principales qualités de nos Xebians.</p> <p> Si vous désirez rejoindre nos équipes, continuer à exploiter vos talents et monter en compétences aux côtés de passionné(e)s… Just Do It and become a Xebian : recrutement@xebia.fr !Pour en savoir plus, consultez notre blog technique (http://blog.xebia.fr/) ou notre site consacré au front-end ( <a href='http://blog.xebia.fr/category/woa/'>http://blog.xebia.fr/category/woa/</a>), nos articles vous donneront un avant-gout des sujets qui nous passionnent ;).</p>Petit BONUS : une surprise rien que pour vous (lien du jeu).</div>",
            close: true
        });
    });
});