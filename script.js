function convert() {
	var result = "#";
	var text = document.form.input.value;
	text = text.replace(/[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~ 。、＃　「」＿（）～＾！？♪\n\r]/g, "_");
	text = text.replace(/_+/g, "_");
	var result = "#" + text;
	document.form.output.value = result;
	document.form.output.focus();
	document.form.output.select();
}

function tweet(){
	convert();
	var uri = document.form.output.value;
	uri = uri.replace(/#/,"");
	document.location = "https://twitter.com/intent/tweet?hashtags=" + encodeURI(uri);
}