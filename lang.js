// Send the visitor to the page in their language (French by default).
// A language link the visitor clicks wins over the browser setting.
(function () {
  var KEY = 'lang';
  var current = document.documentElement.lang.slice(0, 2);

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function fromBrowser() {
    var langs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      var l = langs[i].slice(0, 2).toLowerCase();
      if (l === 'fr' || l === 'en') return l;
    }
    return 'fr';
  }

  var wanted = saved() || fromBrowser();
  if (wanted !== current) {
    var alt = document.querySelector('link[rel="alternate"][hreflang^="' + wanted + '"]');
    if (alt) location.replace(alt.href + location.hash);
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[hreflang]');
    if (!a) return;
    try { localStorage.setItem(KEY, a.hreflang.slice(0, 2)); } catch (err) {}
  });
})();
