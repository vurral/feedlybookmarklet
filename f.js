var d=document,w=d.getElementById("__F_WIDGET"),l=d.getElementsByTagName("link"),o,c,f={main:null,comments:null,category:null,tag:null,author:null,post:null},a="http://www.feedly.com/home#subscription/feed/",u=[],s='<style type="text/css">#__F_OVERLAY{position:fixed;top:-100px;left:0;width:100%;height:85px;-webkit-box-shadow:0 0 20px rgba(0,0,0,.4);-moz-box-shadow:0 0 20px rgba(0,0,0,.4);-o-box-shadow:0 0 20px rgba(0,0,0,.4);box-shadow:0 0 20px rgba(0,0,0,.4);z-index:999999999;background:#efefef;background:-moz-linear-gradient(top,rgba(239,239,239,.98) 0,rgba(253,253,253,.98) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(239,239,239,.98)),color-stop(100%,rgba(253,253,253,.98)));background:-webkit-linear-gradient(top,rgba(239,239,239,.98) 0,rgba(253,253,253,.98) 100%);background:-o-linear-gradient(top,rgba(239,239,239,.98) 0,rgba(253,253,253,.98) 100%);background:-ms-linear-gradient(top,rgba(239,239,239,.98) 0,rgba(253,253,253,.98) 100%);background:linear-gradient(top,rgba(239,239,239,.98) 0,rgba(253,253,253,.98) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#efefef", endColorstr="#fdfdfd", GradientType=0);border-bottom:1px solid #fff;font-family:HelveticaNeue,Helvetica,Arial!important;text-align:left;color:#4b4b4b!important;-webkit-transform:translate3d(0px,0,0);-webkit-transition:all .5s ease-out;-moz-transition:all .5s ease-out;-ms-transition:all .5s ease-out;-o-transition:all .5s ease-out;transition:all .5s ease-out}#__F_OVERLAY.open{top:0}#__F_GREEN{width:100%;height:5px;background-color:#41B520}#__F_CONTENT{line-height:80px!important;height:80px}#__F_CONTENT a{border:1px solid rgba(0,0,0,.2);font-size:14px;line-height:17px!important;padding:7px 20px;margin:24px 0;margin-left:5px;margin-right:5px;box-shadow:0 1px 2px rgba(0,0,0,.2),inset 0 0 1px rgba(255,255,255,1);text-decoration:none;border-radius:3px;-webkit-appearance:none;cursor:pointer;display:block}#__F_FEEDS,#__F_FEEDS span,#__F_FEEDS_LIST{float:left}#__F_FEEDS_LIST{margin-left:20px}#__F_FEEDS a{background-color:#41B520;color:#fff;float:left}#__F_CLOSE_WRAP a{background-color:#ccc;color:#111}#__F_LOGO{float:left}#__F_LOGO img{display:block;padding:20px 0 0 20px}#__F_FEEDS{float:left;margin-left:60px}#__F_CLOSE_WRAP{float:right;margin-right:60px}</style>',h='<div id="__F_OVERLAY"><div id="__F_GREEN"></div><div id="__F_CONTENT"><div id="__F_LOGO"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAmCAYAAADtPEQsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDY3MzVBNzUyM0EzMTFFM0E5NTdENjhDMTQ0MUNEQ0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDY3MzVBNzYyM0EzMTFFM0E5NTdENjhDMTQ0MUNEQ0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NjczNUE3MzIzQTMxMUUzQTk1N0Q2OEMxNDQxQ0RDRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NjczNUE3NDIzQTMxMUUzQTk1N0Q2OEMxNDQxQ0RDRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrGafqUAABeESURBVHja7FsJWFVV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"/></div><div id="__F_FEEDS"><span>Select feed to add</span><div id="__F_FEEDS_LIST"><a target="_blank" style="display:none" href="#" id="__F_FEED_main">Main Feed</a><a target="_blank" style="display:none" href="#" id="__F_FEED_comments">Comments Feed</a><a target="_blank" style="display:none" href="#" id="__F_FEED_category">Category Feed</a><a target="_blank" style="display:none" href="#" id="__F_FEED_tag">Tag Feed</a><a target="_blank" style="display:none" href="#" id="__F_FEED_author">Author Feed</a><a target="_blank" style="display:none" href="#" id="__F_FEED_post">Post Comments Feed</a></div></div><div id="__F_CLOSE_WRAP"><a id="__F_CLOSE" href="#">Cancel</a></div></div></div>',destroy=function(){o.className="";setTimeout(function(){w.parentNode.removeChild(w);},1000);},init=function(){for(i=0;i<l.length;i++){el=l[i];t=el.getAttribute("type");if(el.getAttribute("rel").indexOf("alternate")!=-1){t=el.getAttribute("type");if(t.indexOf("application/rss+xml")!=-1||t.indexOf("text/xml")!=-1){u.push(el.getAttribute("href"));}}}if(u.length>0){if(u.length==1){main=u[0];window.open(a+u[0],"_blank");}else{w.insertAdjacentHTML("beforeend",s);w.insertAdjacentHTML("beforeend",h);o=d.getElementById("__F_OVERLAY");c=d.getElementById("__F_CLOSE");c.addEventListener("click",destroy,false);for(i=0;i<u.length;i++){for(var b in f){if(u[i].indexOf(b)>-1){f[b]=u[i];u.splice(u.indexOf(u[i]),1);break;}}}if(u.length>1){f.post=u.sort(function(g,e){return e.length-g.length;})[0];u.splice(u.indexOf(f.post),1);}f.main=u[0];u.splice(u.indexOf(f.main),1);for(var b in f){if(f[b]!=null){l=document.getElementById("__F_FEED_"+b);l.addEventListener("click",destroy,false);l.href=a+f[b];l.style.display="block";}}o.className="open";}}};init();