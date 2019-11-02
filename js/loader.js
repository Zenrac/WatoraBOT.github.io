function loadScript (source, ensure_http = true, element = document.body) {
   var scr = document.createElement("script");
   if (ensure_http) {
     if (!source.includes('https')) {
       source = source.replace('http', 'https');
     }
   }
   scr.src = source;
   element.appendChild(scr);
}
