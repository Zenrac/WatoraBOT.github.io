function loadScript (source, ensure_http = true) {
   var scr = document.createElement("script");
   if (ensure_http) {
     if (!source.includes('https')) {
       source = source.replace('http', 'https');
     }
   }
   scr.src = source;
   document.body.appendChild(scr);
}
