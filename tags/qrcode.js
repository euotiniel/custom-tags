  document.addEventListener("DOMContentLoaded", function() {
    var qrcodes = document.querySelectorAll('qrcode');

    qrcodes.forEach(function(qr) {
      var link = qr.getAttribute('src');
      var qrCode = new QRCode(qr, {
        text: link,
        width: 128,
        height: 128
      });
    });
  });

