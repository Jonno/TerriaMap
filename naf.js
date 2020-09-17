<script>
  function detectIE(){
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    var edge = ua.indexOf('Edge/');

    if (msie > 0){
      // IE 10 or older
      return true;
    }
    else if (trident > 0){
      return true;
    }
    else if (edge > 0){
      return false;
    }
    else {
      return false;
    }
  }

if(!detectIE()) {
  alert('IE Detected');
};

</script>
