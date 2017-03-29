/* 
    ./client/loading.js
*/
import $ from 'jquery'
import 'bootstrap';
import '../node_modules/font-awesome/css/font-awesome.css';
import './css/loading.css';

let loading = {};

loading.v_selector = 'body';
loading.v_progressBar = null;
loading.v_show = true;
loading.v_txt = 'Loading...';
loading.v_progressBar = false;
loading.v_progressVal = 0;
loading.v_container = null;

let container = '<div class="loading" id="loading"><div class="back"></div><div class="logo"><i class="fa fa-spinner fa-spin fa-lg"></i><span class="text">' + loading.v_txt + '</span><div class="progressBar" style="display:none"><div class="progressBefore"></div><span class="progressVal"></span></div></div></div>';
loading.v_container = container;

loading.selector = function(value)
{
	if(!arguments.length) return loading.v_selector;
	loading.v_selector = value;
	$(loading.v_selector).append(loading.v_container);
	loading.update();
	return loading;
}

loading.show = function(value)
{
	if(!arguments.length) return loading.v_show;
	if(value === true || value === 'true')
	{
		loading.v_show = true;
	}
	else if(value === false || value === 'false')
	{
		loading.v_show = false;
	}
	return loading;
}

loading.text = function(value)
{
	if(!arguments.length) return loading.v_txt;
	loading.v_txt = value;
	return loading;
}

loading.progressVal = function(value)
{
	if(!arguments.length) return loading.v_progressVal;
	if(!isNaN(parseFloat(value)))
	{
		loading.v_progressVal = parseFloat(value);
	}
	return loading;
}

loading.progressBar = function(value)
{
	if(!arguments.length) return loading.v_progressBar;
	if(value === true || value === 'true') loading.v_progressBar = true;
	else if(value === false || value === 'false') loading.v_progressBar = false;

	return loading;
}

loading.update = function()
{
	if(loading.v_show === true)
	{
		$(loading.v_selector + ' .loading').show();
	}
	else
	{
		$(loading.v_selector + ' .loading').hide();
	}

	if(loading.v_progressBar === true)
	{
		$(loading.v_selector + ' .loading .progressBar').show();
	}
	else
	{
		$(loading.v_selector + ' .loading .progressBar').hide();
	}
	$(loading.v_selector + ' .loading .progressBefore').css('width', parseFloat(loading.v_progressVal) * 100 + '%');
	$(loading.v_selector + ' .loading .progressVal').html(parseFloat(loading.v_progressVal) * 100 + '%');
	$(loading.v_selector + ' .loading .text').html(loading.v_txt);
	return loading;
}

var loadingFunc = function(){
	return loading;
};

export default loadingFunc;

