var spFlg = false;
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 ||navigator.userAgent.indexOf('Android') > 0) {
  spFlg = true;
  /*�ǥե���Ȥ�ipad�ˤ�ɽ���ʤ��Ǥ���ɽ�������������ϡ� && navigator.userAgent.indexOf('iPad') == -1)����ʬ��|| navigator.userAgent.indexOf('iPad') > 0) �����ꤷ�Ƥ���������
  ���ޡ��ȥե����javascript,css��if(spFlg){}���document.write('<�����˵���>');�Ȥ��ơ������˵��ܤ��Ƥ���������
  PC��javascript,css��else{}���document.write('<�����˵���>');�Ȥ��ơ������˵��ܤ��Ƥ���������
  javascript�ϡ�script��scr' + 'ipt�ȵ��ܤ��Ʋ�������
  */
}
if(spFlg){
	document.write('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">\n');
	document.write('<link rel="stylesheet" href="http://event.rakuten.co.jp/incentive/common/css/smp/smp.css" type="text/css">\n');
	document.write('<link rel="stylesheet" href="http://event.rakuten.co.jp/incentive/common/css/smp/smp_common.css" type="text/css">\n');
	document.write('<scr' + 'ipt charset="EUC-JP" src="http://event.rakuten.co.jp/incentive/common/js/jquery-1.7.2.min.js">\n');
	document.write('</scr' + 'ipt>\n');
}else{
	document.write('<link rel="stylesheet" href="http://event.rakuten.co.jp/incentive/common/css/base.css">\n');
	document.write('<link rel="stylesheet" href="http://event.rakuten.co.jp/incentive/common/css/layout.css">\n');
	document.write('<scr' + 'ipt charset="EUC-JP" src="http://event.rakuten.co.jp/incentive/common/js/jquery-1.7.2.min.js">\n');
	document.write('</scr' + 'ipt>\n');
	//document.write('<style>#contentsWrapper {margin:0 auto;width: 950px;}</style>\n');
}

