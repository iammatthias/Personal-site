function feedwind_show_widget_iframe(e,i){function s(e){if("http://feed.mikle.com"===e.origin||"https://feed.mikle.com"===e.origin){var i=e.data.split("|");document.getElementById(i[0])&&(document.getElementById(i[0]).style.height=i[1])}}var t=e.rssmikle_frame_width,r=e.rssmikle_frame_height;"off"==e.rssmikle_border||e.rssmikle_css_url||(t=t.match(/^\d+%$/)?t:parseInt(e.rssmikle_frame_width)+2,r=r.match(/^\d+%$/)?r:parseInt(e.rssmikle_frame_height)+2),"on"==e.responsive&&(t="100%");var _="on_scrollbar"==e.rssmikle_item_description_tag?"auto":"no";_="on"==e.autoscroll?"no":_;var m=' height="'+r+'" ',l="";if("frame_height_by_article"in e&&"NaN"!=parseInt(e.frame_height_by_article)&&parseInt(e.frame_height_by_article)>0){var o=new Date,n="feedwind_"+Math.floor(1e3*Math.random())+o.getTime();e.iframe_id=n,l=' id="'+n+'" ',m="",window.addEventListener?window.addEventListener("message",s,!1):window.attachEvent&&window.attachEvent("onmessage",s,!1)}var a=("https:"==document.location.protocol?"https://":"http://")+"feed.mikle.com/widget/?";for(var k in e)e[k]&&(a+=k+"="+encodeURIComponent(e[k])+"&");var c="<iframe "+l+m+' width="'+t+'" src="'+a+'" scrolling="'+_+'" name="rssmikle_frame" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0"></iframe>';return i?c:(document.write(c),void("iframe_id"in e&&document.getElementById(e.iframe_id)&&(document.getElementById(e.iframe_id).contentWindow.location.href=a)))}!function(){function e(e){return e?e:""}function i(){var i={rssmikle_url:e(s.rssmikle_url),rssmikle_frame_width:e(s.rssmikle_frame_width),rssmikle_frame_height:e(s.rssmikle_frame_height),rssmikle_target:e(s.rssmikle_target),rssmikle_font:e(s.rssmikle_font),rssmikle_font_size:e(s.rssmikle_font_size),rssmikle_border:e(s.rssmikle_border),responsive:e(s.responsive),rssmikle_css_url:"http://"==s.rssmikle_css_url?"":e(s.rssmikle_css_url),text_align:e(s.text_align),corner:e(s.corner),autoscroll:e(s.autoscroll),scrolldirection:e(s.scrolldirection),scrollstep:e(s.scrollstep),mcspeed:e(s.mcspeed),sort:e(s.sort),rssmikle_title:e(s.rssmikle_title),rssmikle_title_sentence:e(s.rssmikle_title_sentence),rssmikle_title_link:"http://"==s.rssmikle_title_link?"":e(s.rssmikle_title_link),rssmikle_title_bgcolor:e(s.rssmikle_title_bgcolor),rssmikle_title_color:e(s.rssmikle_title_color),rssmikle_title_bgimage:"http://"==s.rssmikle_title_bgimage?"":e(s.rssmikle_title_bgimage),rssmikle_item_bgcolor:e(s.rssmikle_item_bgcolor),rssmikle_item_bgimage:"http://"==s.rssmikle_item_bgimage?"":e(s.rssmikle_item_bgimage),rssmikle_item_title_length:e(s.rssmikle_item_title_length),rssmikle_item_title_color:e(s.rssmikle_item_title_color),rssmikle_item_border_bottom:e(s.rssmikle_item_border_bottom),rssmikle_item_description:e(s.rssmikle_item_description),rssmikle_item_description_length:e(s.rssmikle_item_description_length),rssmikle_item_description_color:e(s.rssmikle_item_description_color),rssmikle_item_date:e(s.rssmikle_item_date),rssmikle_timezone:e(s.rssmikle_timezone),datetime_format:e(s.datetime_format),rssmikle_item_description_tag:e(s.rssmikle_item_description_tag),rssmikle_item_description_image_scaling:e(s.rssmikle_item_description_image_scaling),rssmikle_item_podcast:e(s.rssmikle_item_podcast)};feedwind_show_widget_iframe(i),s.rssmikle_url="",s.rssmikle_frame_width="",s.rssmikle_frame_height="",s.rssmikle_target="",s.rssmikle_font="",s.rssmikle_font_size="",s.rssmikle_border="",s.responsive="",s.rssmikle_css_url="",s.text_align="",s.corner="",s.scrollbar="",s.autoscroll="",s.scrolldirection="",s.scrollstep="",s.mcspeed="",s.sort="",s.rssmikle_title="",s.rssmikle_title_sentence="",s.rssmikle_title_link="",s.rssmikle_title_bgcolor="",s.rssmikle_title_color="",s.rssmikle_title_bgimage="",s.rssmikle_item_bgcolor="",s.rssmikle_item_bgimage="",s.rssmikle_item_title_length="",s.rssmikle_item_title_color="",s.rssmikle_item_border_bottom="",s.rssmikle_item_description="",s.rssmikle_item_description_length="",s.rssmikle_item_description_color="",s.rssmikle_item_date="",s.rssmikle_timezone="",s.datetime_format="",s.rssmikle_item_description_tag="",s.rssmikle_item_description_image_scaling="",s.rssmikle_item_podcast=""}var s=window;s.rssmikle_url&&"string"==typeof s.rssmikle_url&&i()}();
