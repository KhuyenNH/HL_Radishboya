var spFlg = false;
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 ||navigator.userAgent.indexOf('Android') > 0) {
  spFlg = true;

}
if(spFlg){
	// らでぃっしゅSP用要素
	document.write('<link rel="stylesheet" href="css0301/style_sp.css" type="text/css">\n');
	document.write('<scr' + 'ipt src="js/script_sp.js">\n');
	document.write('</scr' + 'ipt>\n');
	
}else{
	// らでぃっしゅPC用要素
	document.write('<link rel="stylesheet" href="css0301/style_pc.css" type="text/css">\n');
	document.write('<scr' + 'ipt src="js/jquery.rollover.js">\n');
	document.write('</scr' + 'ipt>\n');
	document.write('<scr' + 'ipt src="js/script_pc.js">\n');
	document.write('</scr' + 'ipt>\n');
}

