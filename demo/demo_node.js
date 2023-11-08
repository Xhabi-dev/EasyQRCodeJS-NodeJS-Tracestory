const QRCode = require('../index');


var config = {
    text: `http://localhost:8082/9a923b9d-2347-4460-a10e-d5655f5db05d?language=en`,
    width: 350,
    height: 350,
    logo: `https://tracestory-prod.s3.sa-east-1.amazonaws.com/33b62d0e-b6a6-4957-b8fe-4a7a55950f86/Logo%20Mani%20Olega%20Solo.jpg`
  };

// ================================ PNG Test

var qrcode = new QRCode(config);

qrcode.saveImage({
    path: 'q.png'
});
qrcode.toDataURL().then(data => {
    console.info('======QRCode PNG DataURL======')
    console.info(data)
    console.info('')
});

// ================================ JPG Test

qrcode.toSVGText().then(data => {
    console.info('======QRCode SVG Data Text======')
    console.info(data)
    console.info('')
});

qrcode.saveSVG({
    path: 'qrcode.svg'
})