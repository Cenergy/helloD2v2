function hello() {
  console.log('Go: hello', 11111111111111);
}

function loadJsScript(url) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  const head = document.getElementsByTagName('body')[0];
  head.appendChild(script);
}

export default function() {
  loadJsScript('./static/js/jquery-1.10.2.js');
  loadJsScript('./static/js/bootstrap.js');
  loadJsScript('./static/js/owl.carousel.js');
  loadJsScript('./static/js/wow.min.js');

  loadJsScript('./static/js/stickUp.min.js');
  // 测试

  loadJsScript('./static/js/modernizr-2.6.2.min.js');
  loadJsScript('./static/js/jquery.corner.js');

  loadJsScript('./static/js/classie.js');
  loadJsScript('./static/js/uiMorphingButton_inflow.js');
  loadJsScript('./static/js/jquery.magnific-popup.js');
  loadJsScript('./static/js/script.js');
  //   console.log($, '------------------');
}
