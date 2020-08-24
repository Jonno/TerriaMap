<script>
  (function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident/');
  var edge = ua.indexOf('Edge/');
  if (msie > 0) {
    // IE 10 or older
    return true;
  }
  else if (trident > 0) {
    // IE 11
    return true;
  }
  else if (edge > 0) {
    // Edge
    return false;
  }
  else
    // other browser
    return false;
}

if(!detectIE()) {
  alert('IE Detected');
};

)();

</script>
