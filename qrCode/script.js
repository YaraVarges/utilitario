function gerarQRcode() {
    var QRCode = document.getElementById('QRCode').value;
	document.getElementById('qrcodeImg').src = `https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${QRCode}`;
}