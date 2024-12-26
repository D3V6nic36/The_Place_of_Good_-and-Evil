/* This compressed file is part of Xinha. For uncompressed sources, forum, and bug reports, go to xinha.org */
/* This file is part of version 0.96beta2 released Fri, 20 Mar 2009 11:01:14 +0100 */
Gecko._pluginInfo={name:"Gecko",origin:"Xinha Core",version:"$LastChangedRevision: 1084 $".replace(/^[^:]*:\s*(.*)\s*\$$/,"$1"),developer:"The Xinha Core Developer Team",developer_url:"$HeadURL: http://svn.xinha.org/trunk/modules/Gecko/Gecko.js $".replace(/^[^:]*:\s*(.*)\s*\$$/,"$1"),sponsor:"",sponsor_url:"",license:"htmlArea"};function Gecko(a){this.editor=a;a.Gecko=this}Gecko.prototype.onKeyPress=function(u){var d=this.editor;var j=d.getSelection();if(d.isShortCut(u)){switch(d.getKey(u).toLowerCase()){case"z":if(d._unLink&&d._unlinkOnUndo){Xinha._stopEvent(u);d._unLink();d.updateToolbar();return true}break;case"a":sel=d.getSelection();sel.removeAllRanges();range=d.createRange();range.selectNodeContents(d._doc.body);sel.addRange(range);Xinha._stopEvent(u);return true;break;case"v":if(!d.config.htmlareaPaste){return true}break}}switch(d.getKey(u)){case" ":var g=function(y,m){var x=y.nextSibling;if(typeof m=="string"){m=d._doc.createElement(m)}var s=y.parentNode.insertBefore(m,x);Xinha.removeFromParent(y);s.appendChild(y);x.data=" "+x.data;j.collapse(x,1);d._unLink=function(){var a=s.firstChild;s.removeChild(a);s.parentNode.insertBefore(a,s);Xinha.removeFromParent(s);d._unLink=null;d._unlinkOnUndo=false};d._unlinkOnUndo=true;return s};if(d.config.convertUrlsToLinks&&j&&j.isCollapsed&&j.anchorNode.nodeType==3&&j.anchorNode.data.length>3&&j.anchorNode.data.indexOf(".")>=0){var t=j.anchorNode.data.substring(0,j.anchorOffset).search(/\S{4,}$/);if(t==-1){break}if(d._getFirstAncestor(j,"a")){break}var h=j.anchorNode.data.substring(0,j.anchorOffset).replace(/^.*?(\S*)$/,"$1");var e=h.match(Xinha.RE_email);if(e){var v=j.anchorNode;var f=v.splitText(j.anchorOffset);var k=v.splitText(t);g(k,"a").href="mailto:"+e[0];break}RE_date=/([0-9]+\.)+/;RE_ip=/(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;var p=h.match(Xinha.RE_url);if(p){if(RE_date.test(h)){break}var i=j.anchorNode;var b=i.splitText(j.anchorOffset);var q=i.splitText(t);g(q,"a").href=(p[1]?p[1]:"http://")+p[2];break}}break}switch(u.keyCode){case 27:if(d._unLink){d._unLink();Xinha._stopEvent(u)}break;break;case 8:case 46:if(!u.shiftKey&&this.handleBackspace()){Xinha._stopEvent(u)}default:d._unlinkOnUndo=false;if(j.anchorNode&&j.anchorNode.nodeType==3){var w=d._getFirstAncestor(j,"a");if(!w){break}if(!w._updateAnchTimeout){if(j.anchorNode.data.match(Xinha.RE_email)&&w.href.match("mailto:"+j.anchorNode.data.trim())){var l=j.anchorNode;var c=function(){w.href="mailto:"+l.data.trim();w._updateAnchTimeout=setTimeout(c,250)};w._updateAnchTimeout=setTimeout(c,1000);break}var n=j.anchorNode.data.match(Xinha.RE_url);if(n&&w.href.match(new RegExp("http(s)?://"+Xinha.escapeStringForRegExp(j.anchorNode.data.trim())))){var o=j.anchorNode;var r=function(){n=o.data.match(Xinha.RE_url);if(n){w.href=(n[1]?n[1]:"http://")+n[2]}w._updateAnchTimeout=setTimeout(r,250)};w._updateAnchTimeout=setTimeout(r,1000)}}}break}return false};Gecko.prototype.handleBackspace=function(){var a=this.editor;setTimeout(function(){var e=a.getSelection();var g=a.createRange(e);var f=g.startContainer;var i=g.startOffset;var c=g.endContainer;var h=g.endOffset;var j=f.nextSibling;if(f.nodeType==3){f=f.parentNode}if(!(/\S/.test(f.tagName))){var d=document.createElement("p");while(f.firstChild){d.appendChild(f.firstChild)}f.parentNode.insertBefore(d,f);Xinha.removeFromParent(f);var b=g.cloneRange();b.setStartBefore(j);b.setEndAfter(j);b.extractContents();e.removeAllRanges();e.addRange(b)}},10)};Gecko.prototype.inwardHtml=function(a){a=a.replace(/<(\/?)strong(\s|>|\/)/ig,"<$1b$2");a=a.replace(/<(\/?)em(\s|>|\/)/ig,"<$1i$2");a=a.replace(/<(\/?)del(\s|>|\/)/ig,"<$1strike$2");return a};Gecko.prototype.outwardHtml=function(a){a=a.replace(/<script[\s]*src[\s]*=[\s]*['"]chrome:\/\/.*?["']>[\s]*<\/script>/ig,"");return a};Gecko.prototype.onExecCommand=function(f,e,d){try{this.editor._doc.execCommand("useCSS",false,true);this.editor._doc.execCommand("styleWithCSS",false,false)}catch(l){}switch(f){case"paste":alert(Xinha._lc("The Paste button does not work in Mozilla based web browsers (technical security reasons). Press CTRL-V on your keyboard to paste directly."));return true;break;case"removeformat":var k=this.editor;var c=k.getSelection();var m=k.saveSelection(c);var j=k.createRange(c);var g=k._doc.body.getElementsByTagName("*");var a=(j.startContainer.nodeType==1)?j.startContainer:j.startContainer.parentNode;var h,b;if(c.isCollapsed){j.selectNodeContents(k._doc.body)}for(h=0;h<g.length;h++){b=g[h];if(j.isPointInRange(b,0)||(g[h]==a&&j.startOffset==0)){b.removeAttribute("style")}}this.editor._doc.execCommand(f,e,d);k.restoreSelection(m);return true;break}return false};Gecko.prototype.onMouseDown=function(b){if(b.target.tagName.toLowerCase()=="hr"){var c=this.editor.getSelection();var a=this.editor.createRange(c);a.selectNode(b.target)}};Xinha.prototype.insertNodeAtSelection=function(b){if(b.ownerDocument!=this._doc){try{b=this._doc.adoptNode(b)}catch(f){}}var d=this.getSelection();var a=this.createRange(d);d.removeAllRanges();a.deleteContents();var c=a.startContainer;var h=a.startOffset;var g=b;switch(c.nodeType){case 3:if(b.nodeType==3){c.insertData(h,b.data);a=this.createRange();a.setEnd(c,h+b.length);a.setStart(c,h+b.length);d.addRange(a)}else{c=c.splitText(h);if(b.nodeType==11){g=g.firstChild}c.parentNode.insertBefore(b,c);this.selectNodeContents(g);this.updateToolbar()}break;case 1:if(b.nodeType==11){g=g.firstChild}c.insertBefore(b,c.childNodes[h]);this.selectNodeContents(g);this.updateToolbar();break}};Xinha.prototype.getParentElement=function(c){if(typeof c=="undefined"){c=this.getSelection()}var a=this.createRange(c);try{var d=a.commonAncestorContainer;if(!a.collapsed&&a.startContainer==a.endContainer&&a.startOffset-a.endOffset<=1&&a.startContainer.hasChildNodes()){d=a.startContainer.childNodes[a.startOffset]}while(d.nodeType==3){d=d.parentNode}return d}catch(b){return null}};Xinha.prototype.activeElement=function(a){if((a===null)||this.selectionEmpty(a)){return null}if(!a.isCollapsed){if(a.anchorNode.childNodes.length>a.anchorOffset&&a.anchorNode.childNodes[a.anchorOffset].nodeType==1){return a.anchorNode.childNodes[a.anchorOffset]}else{if(a.anchorNode.nodeType==1){return a.anchorNode}else{return null}}}return null};Xinha.prototype.selectionEmpty=function(a){if(!a){return true}if(typeof a.isCollapsed!="undefined"){return a.isCollapsed}return true};Xinha.prototype.saveSelection=function(){return this.createRange(this.getSelection()).cloneRange()};Xinha.prototype.restoreSelection=function(a){try{var b=this.getSelection();b.removeAllRanges();b.addRange(a)}catch(c){}};Xinha.prototype.selectNodeContents=function(b,d){this.focusEditor();this.forceRedraw();var a;var e=typeof d=="undefined"?true:false;var c=this.getSelection();a=this._doc.createRange();if(!b){c.removeAllRanges();return}if(e&&b.tagName&&b.tagName.toLowerCase().match(/table|img|input|textarea|select/)){a.selectNode(b)}else{a.selectNodeContents(b)}c.removeAllRanges();c.addRange(a);if(typeof d!="undefined"){if(d){c.collapse(a.startContainer,a.startOffset)}else{c.collapse(a.endContainer,a.endOffset)}}};Xinha.prototype.insertHTML=function(c){var e=this.getSelection();var a=this.createRange(e);this.focusEditor();var b=this._doc.createDocumentFragment();var f=this._doc.createElement("div");f.innerHTML=c;while(f.firstChild){b.appendChild(f.firstChild)}var d=this.insertNodeAtSelection(b)};Xinha.prototype.getSelectedHTML=function(){var b=this.getSelection();if(b.isCollapsed){return""}var a=this.createRange(b);return Xinha.getHTML(a.cloneContents(),false,this)};Xinha.prototype.getSelection=function(){return this._iframe.contentWindow.getSelection()};Xinha.prototype.createRange=function(b){this.activateEditor();if(typeof b!="undefined"){try{return b.getRangeAt(0)}catch(a){return this._doc.createRange()}}else{return this._doc.createRange()}};Xinha.prototype.isKeyEvent=function(a){return a.type=="keypress"};Xinha.prototype.getKey=function(a){return String.fromCharCode(a.charCode)};Xinha.getOuterHTML=function(a){return(new XMLSerializer()).serializeToString(a)};Xinha.cc=String.fromCharCode(8286);Xinha.prototype.setCC=function(h){var c=Xinha.cc;try{if(h=="textarea"){var d=this._textArea;var f=d.selectionStart;var j=d.value.substring(0,f);var a=d.value.substring(f,d.value.length);if(a.match(/^[^<]*>/)){var i=a.indexOf(">")+1;d.value=j+a.substring(0,i)+c+a.substring(i,a.length)}else{d.value=j+c+a}d.value=d.value.replace(new RegExp("(&[^"+c+"]*?)("+c+")([^"+c+"]*?;)"),"$1$3$2");d.value=d.value.replace(new RegExp("(<script[^>]*>[^"+c+"]*?)("+c+")([^"+c+"]*?<\/script>)"),"$1$3$2");d.value=d.value.replace(new RegExp("^([^"+c+"]*)("+c+")([^"+c+"]*<body[^>]*>)(.*?)"),"$1$3$2$4")}else{var b=this.getSelection();b.getRangeAt(0).insertNode(this._doc.createTextNode(c))}}catch(g){}};Xinha.prototype.findCC=function(h){if(h=="textarea"){var d=this._textArea;var i=d.value.indexOf(Xinha.cc);if(i==-1){return}var c=i+Xinha.cc.length;var j=d.value.substring(0,i);var a=d.value.substring(c,d.value.length);d.value=j;d.scrollTop=d.scrollHeight;var b=d.scrollTop;d.value+=a;d.setSelectionRange(i,i);d.focus();d.scrollTop=b}else{try{var k=this._doc;k.body.innerHTML=k.body.innerHTML.replace(new RegExp(Xinha.cc),'<span id="XinhaEditingPostion"></span>');var g=k.getElementById("XinhaEditingPostion");this.selectNodeContents(g);this.scrollToElement(g);g.parentNode.removeChild(g);this._iframe.contentWindow.focus()}catch(f){}}};Xinha.prototype._standardToggleBorders=Xinha.prototype._toggleBorders;Xinha.prototype._toggleBorders=function(){var a=this._standardToggleBorders();var c=this._doc.getElementsByTagName("TABLE");for(var b=0;b<c.length;b++){c[b].style.display="none";c[b].style.display="table"}return a};Xinha.getDoctype=function(a){var b="";if(a.doctype){b+="<!DOCTYPE "+a.doctype.name+" PUBLIC ";b+=a.doctype.publicId?'"'+a.doctype.publicId+'"':"";b+=a.doctype.systemId?' "'+a.doctype.systemId+'"':"";b+=">"}return b};