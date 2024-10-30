/* (c) BibleOnline.RU -- ver 2.7.12 -- Installation of this code https://ref.bble.ru/ */(function(w){var bibleRef={conf:{ToolTip:{width:300,height:150,timeout:10,hideTime:0.3,},Translate:'rus',Target:'blank',Site:'bibleonline.ru',CSS:'https://api.bibleonline.ru/ref/style.css',ToolTipUse:true,VSeparator:':.',RSeparator:',',CSeparator:';',BibleClass:'bibleref',NoBibleClass:'nobibleref',NoTags:['h1','h2','h3','h4','h5','h6'],},xcpt:{A:true,APPLET:true,BODY:true,HEAD:true,HR:true,IMG:true,INPUT:true,META:true,OPTION:true,SCRIPT:true,SELECT:true,TEXTAREA:true},nid:0,init:function(){if(bibleRef.conf.NoTags){var nt=bibleRef.conf.NoTags;for(var i=0;i<nt.length;i++){bibleRef.xcpt[nt[i].toUpperCase()]=true;}}
bibleRef.loadStyle();var el,e,i,j,nid=bibleRef.nid;var dash='[\\-\\–\\—\\―]';var r_dash=new RegExp(dash,"g");var vsep='\\s*['+bibleRef.conf.VSeparator.replace(/\s/g,'').replace(/\./g,'\\.')+']\\s*';var r_vsep=new RegExp(vsep,"g");var rsep='\\s*['+bibleRef.conf.RSeparator.replace(/\s/g,'').replace(/\./g,'\\.')+']\\s*';var r_rsep=new RegExp(rsep,"g");var csep='\\s*['+bibleRef.conf.CSeparator.replace(/\s/g,'').replace(/\./g,'\\.')+']\\s*';var r_csep=new RegExp(csep,"g");var nchap='(?:[1-9][0-9]?|1[0-4][0-9]|15[01])';var nvers='(?:[1-9][0-9]?|1[0-6][0-9]|17[0-6])';var numpfx='(?:'+dash+'?(?:а?я|о?е|ь[ея]))?\\s*';var versp='(?![1234]'+numpfx+'\\s*[а-яa-z])'+'(?:'+nchap+'(?:\\s*(?:'+dash+'|'+rsep+')\\s*'+nchap+')?)'+'(?:'+vsep+nvers+'(?:'+'(?:'+'(?:'+dash+'|'+rsep+')'+nvers+')*'+'|'+'(?:'+dash+nchap+vsep+nvers+')'+')?'+')?';var vers='(\\s*'+'(?![1234]'+numpfx+'\\s*[а-яa-z])'+versp+'(?:'+csep+versp+')*'+')';var versi='(?:\\s*'+dash+'\\s*'+nvers+')?)?'+'(?:,\\s*'+'(?![1234]'+numpfx+'\\s*[а-яa-z])\\d+'+'(?:\\s*'+dash+'\\s*\\d+)?'+'|'+';\\s*'+'(?![1234]'+numpfx+'\\s*[а-яa-z])'+'(?:'+nchap+'(?:\\s*'+dash+nchap+')?'+')'+'(?:'+vsep+'\\d+'+'(?:\\s*'+dash+'\\s*\\d+)?'+')?'+')*'+')';var trbooks={'eng':'(?:G(?:e(?:n(?:esis)?)?)|Ex(?:d|od(?:us)?)|L(?:ev(?:i(?:t(?:icus)?)?)?)|N(?:umb(?:ers?)?)|D(?:eut?|euteron|(?:eu|ue)teronomy)|J(?:o?sh?|oshua)|J(?:u?dgs?|ud?ges?)|R(?:u?th)|Ezra?|N(?:eh(?:em(?:iah)?)?)|E(?:s(?:t(?:h(?:er)?)?)?)|Job|P(?:s(?:l?m|s|a(?:l(?:ms?)?)?)?)|P(?:r(?:[ov]|vbs|ov(?:erbs?)?)?)|E(?:c[cl]?l?|cclesia(?:ste)?|cc?lesiastes)|Q(?:oh(?:eleth)?)|S(?:ng|OS)|S(?:on(?:gs?)?)|Sol(?:omon)?|Song\\sof\\sSo(?:l|lomon|ngs)|Song?\\sof|Canticle(?:s|\\sof\\sCanticles)|Is(?:a(?:[hi]|iah)?)|J(?:er(?:m(?:(?:ia|ai)h)?)?)|L(?:am(?:ent(?:ations?)?)?)|Ez(?:[ke]?|ek(?:iel))|D(?:an(?:iel)?)|H(?:os(?:ea)?)|J(?:l|oel?)|Am(?:[os]|os)|Ob(?:[ad]|ad(?:(?:ia|aia?)h)?)|J(?:nh|on(?:ah?)?)|Mic(?:ah?)?|Nah(?:um)?|H(?:bk|ab(?:ak|b?akk?uk)?)|Zep(?:h(?:aniah)?)?|Hag(?:g(?:ai|ia)?|ai)?|Zec(?:h(?:ara?iah)?)?|Mal(?:achi)|Matt?(?:hew)?|Ma?rk|Ma[rt]|Luke?|J(?:no|hn|ohn?)|Acts?|Ja(?:[ms]|ms|mes?)|Jude?|Rom(?:ans?)?|Gal(?:at(?:ians?|ions)?)?|Eph(?:s|e(?:s(?:ians?)?)?)?|Ph[iplm]|Phil(?:lipp?ians|ipp?(?:ians)?)?|Col(?:os(?:sians?|ians)?)?|Tit(?:us)?|Phlm|Phil(?:lemon|e(?:m(?:on)?)?)?|Heb(?:r(?:e(?:ws?)?)?)?|Rev(?:elations?)?|Apoc(?:alypse)?)|'+'(?:(?:[12]|(?:F(?:i?r)?st|Second|Scnd|1(?:-?st)?|2(?:-?nd)?|II?)\\s)(?:[PKJS]|J[no]|P[et]|S[am]|Sml|Sam(?:uel)?|K[ings]|Kgs|Ki?ng|Kings|C[oh]|Chr?s|Chr(?:o(?:n(?:i(?:c(?:l(?:es?)?)?)?)?)?)?|T[imh]|Pete?r|Pete?|Ptr|Jhn|Jno|John?|Cor(?:i(?:n(?:th(?:i(?:ans?)?)?)?)?)?|Corth|Cortn|Thess?|Thessal|Thessaloni[ao]ns|Tim|Timothy|Timoth))|'+'(?:A[cm]|C[lsl]|D[aenut]|E[codp]|G[an]|H[bekosg]|I[s]|J[damnbegru]?|L[amevuk]|M[ilrkta]|N[aeumb]|O[b]|P[hprsm]|R[moevuth]|S[gso]|T[it]|Q[o]|Z[ecp])','rus':'(?:Б(?:ы?т|ытие)|Исх(?:од)?|Л(?:е?в|евит)|Ч(?:и?с|исла?|исел)|В(?:т(?:рзк)?|тор(?:озаконие)?)|Иис(?:уса?)?|Нав(?:ина?)?|Иис(?:уса?)?\\.?\\s*Нав(?:ина?)?|С(?:у?д|уд(?:ьи|ей))|Руфь?|Е(?:зд?|здра?)|Н(?:м|еем(?:ия)?)|[ЕЭ](?:сф?|сфирь)|Ио?в|П(?:сл?|сал(?:т(?:ирь)?|ом|мы)?)|П(?:р(?:ит(?:ч[иа]?)?)?)|P(?:r(?:[ov]|vbs|ov(?:erbs?)?)?)|Е(?:к(?:кл?|кле[сз]иаст)?)|Э(?:ккл(?:е[зc]иаст)?)|Проповедника?|П(?:(?:е?(сн|[сн])[яьи\\.])(?:\\s*Песней)?)?|И(?:с(?:а(?:[ий]я)?)?)|Иер(?:ем(?:ия)?)?|Пл(?:а?ч|[\\.\\s]Иер|ач\\sИеремии)|И(?:ез|езек(?:ииль)?)|Д(?:ан(?:иил)?|нл?)|Ос(?:ия)?|И(?:л|оиль?)|Ам(?:о?с)?|Авд(?:ий)|Иона?|М(?:х|их(?:ей))|Наум|Авв(?:ак(?:ум)?)?|Соф(?:он(?:ия)?)?|Агг(?:ей)|З(?:хр|ах(?:ар(?:ия)?)?)|М(?:лх|ал(?:ах(?:ия)?)?)|Дея(?:н(?:и[ея])?)?|Д\\.?А|Деяни[яе]\\s(?:Св(?:ятых|\\.)?\\s)?Апостолов|И(а?к|акова?)|И(?:д|уд[аы])|Отк(?:р(?:\\.?Ин|ов(?:ен(?:\\.\\s*(?:Ин|иоанна)|И[не])(?:\\sот\\sИоанна|Иоанна(?:\\sБогослова)?)?)?)?)?)|'+'(?:(?:Посл(?:ание|\\.)\\s)?(к\\s)?(?:Рим(?:л(?:ян(?:ам)?)?)?|Гал(?:ат(?:ам)?)?|[ЕЭ]ф(?:ес(?:янам)?)?|Фл[пм]|Фил(?:ип(?:пийцам)?)?|Кол(?:ос(?:сянам)?)?|Титу?|Филимону?|Евр(?:еям)?))|'+'(?:(?:Св(?:ятое|\\.)?\\s)?(Ев(?:ангелие|\\.)?\\s)?(?:от\\s)?(?:М[крфт]|Ма[тр]|Мтф|Мрк|Матф(?:е[яй])?|Марка?|Лук[aи]?|Лк|Ин|Иоан(?:н[ау]?)?))|'+'(?:(?:[12]\\s*|II?\\s|1-?(?:а?я|о?е)\\s|2-?(?:а?я|о?е)\\s|Перв(?:ая|ое|\\.)\\s|Втор(?:ая|ое|\\.)\\s)(?:(?:к|Посл(?:ание|\\.)?|Кн(?:ига|\\.)?)\\s)?(?:Царей|Ц(?:а?р)?|Царств|Сам|Сам(?:уила?)?|Пар(?:алипоменон)?|Пр|Хр(?:он(?:ик)?)?|Лет(?:опись)?|Фесс?|Фес(?:с(?:алоникийцам)?)?|Сол(?:унянам)?|Тим(?:оф(?:ею)?)?|Кор(?:инф(?:ян(?:ам)?)?)?|Иоан|Ин|Иоанн[уа]?|Пет|Птр?|Петра?))|'+'(?:(?:3\\s*|III\\s|3-?ь?[яе]\\s|Трет(?:ья|\\.)\\s)(?:(?:к|Посл(?:ание|\\.)?|Кн(?:ига|\\.)?)\\s)?(?:Ц(?:а?р)?|Царств|Иоан|Ин|Иоанн[уа]?))|'+'(?:(?:4\\s*|IV|4-?а?я\\s|Четверт(?:ая|\\.)\\s)(?:Кн(?:ига|\\.)?\\s)?(?:Ц(?:а?р)?|Царств))','ukr':'(?:Б(?:у?т|утя)?|В(?:и?х|ихід)?|Л(?:е?в|евит)|Ч(?:и?с|исла)|Повторення\\sЗакону|Пв|Втор(?:озаконня)?|ІсусаНавинаІсН|Іс(?:уса?)?|Нав(?:ина?)?|Іс(?:уса?)?\\.?\\s*Н(?:ав(?:ина?)?)?|С(?:у?д|уддів)?|Рути?|Рт|[12]\\s(?:Самуїла|Царів|Хронік)|[12]\\s*(?:Са?м|Цар|Цр|Хр)|[ЄЕ]зд(?:ри)?|[ЄЕ]зри?|Не(?:[еє]м(?:ії)?)?|Ес(?:т(?:ери?)?)?|[ІЙ]ова?|[ІЙ]в|Пс(?:ало?м(?:[іи]в?)?)?|Пр(?:ип(?:ов(?:істей|ідок)?)?)?|[ЕЄ]к(?:клезіяста?)|Проп(?:овідника?)|Пісня\\sнад\\sпіснями|Псн|Пісні\\sПісень?|Іс(?:аї)?|(?:Плач\\s*)?Єр(емії)?|Пл|Єз(?:екіїля?)?|Дан(?:иїла?)?|Дн|Ос(?:ії)?|Йоіла?|Йл|Ам(?:оса?)?|Ов(?:дія)?|Йон[иа]|Йн|М[иі]х(?:ея)?|На(?:ума?)?|Ав(?:акума?)?|Софонії|Со?ф|Ог(?:ія)?|Агг(?:ея)?|Захарі[їя]|Зх|Малахії|Ма?л|Матея|Матвія|Марка?|М[тр]|Лук[иа]?|Лк|Ів(?:ана)?|Йоана|Йн|Діяння|Дії|Римлян|Ри?м|[12]\\s(?:Коринтян|Корінтян|Солунян|Тимофія|Тимотея|Петра)|[12]\\s*(?:Ко?р|Со?л|Ти?м|Пе?т)|Галатів|Га?л|Еф(?:есян)|Филип’ян|Флп|Колосян|Ко?л|Тита?|Филимона|Флм|Євреїв|Єв|Якова?|Як|[123]\\s(Йоана|Івана)|[123]\\s*(Ів|Йн)|Юди?|Об(?:’явлення)?|Одкр(?:овення)?)','na':''};trbooks['nrt']=trbooks['rus'];trbooks['cars']=trbooks['rus'];trbooks['lut']=trbooks['rus'];var books=trbooks[bibleRef.conf.Translate]||trbooks['rus'];books='(?:'+books+')\\.?\s*';books=books.replace(/-/g,dash);var regexp=new RegExp('([\\s]|[^a-zа-я\\.]|^)'+books+vers+'(?![\\d:а-яa-z]|'+dash+'[^\\d]+)(?![^<]*<\\/a>)','gi');var els=[document.body];var r_bibleclass=new RegExp('(?:^|\\s)'+bibleRef.conf.BibleClass+'(?:\\s|$)',"i");var r_nobibleclass=new RegExp('(?:^|\\s)'+bibleRef.conf.NoBibleClass+'(?:\\s|$)',"i");for(var r=regexp;el=els.pop();)
{if(el.nodeType===3){var ee=el.nodeValue.match(r);var res;var pn=el.parentNode;if(pn&&pn.className.length>0&&pn.className.match(r_bibleclass)&&pn.title.length>0&&pn.title.match(r)){res='title';e=pn.title.match(r);j=0;elR=el.nodeValue;lnk=e[0];if(/^[^a-zа-я\.]$/i.test(lnk.substr(0,1)))lnk=lnk.substr(1,lnk.length-1);bble=bibleRef.bblLink(lnk,elR,++nid);el.nodeValue='';if(bble.innerHTML){el===pn.lastChild?pn.appendChild(bble):pn.insertBefore(bble,lnk);el=lnk;}}else if(e=el.nodeValue.match(r)){res='value';j=0;for(i=e.length;j<i;j++){elR=el.nodeValue;lnk=e[j];if(/^[^a-zа-я0-9\.]$/i.test(lnk.substr(0,1)))lnk=lnk.substr(1,lnk.length-1);c=elR.indexOf(lnk);bble=bibleRef.bblLink(lnk,lnk,++nid);el.nodeValue=elR.replace(lnk,"");lnk=el.splitText(c);el===pn.lastChild?pn.appendChild(bble):pn.insertBefore(bble,lnk);el=lnk;}}}else if(el.firstChild){var e=el.childNodes;j=0;for(i=e.length;j<i;j+=1){if(e[j].nodeType===3&&el.nodeValue!==""){els.push(e[j]);}else{e[j].nodeType===1&&!bibleRef.xcpt[e[j].tagName.toUpperCase()]&&!(e[j].className&&e[j].className.length&&e[j].className.match(r_nobibleclass))&&els.push(e[j])}}}}
bibleRef.nid=nid;},bblLink:function(link,text,id){bble=document.createElement("a");bble.href="https://bble.ru/"+bibleRef.fixLink(lnk)+'?'+bibleRef.conf.Translate;bble.className="BibleOnlineBibleRef";bble.target=bibleRef.conf.Target;bble.id='BibleOnlineRef-'+id;bble.innerHTML=text;bble.setAttribute('text',lnk);if(bibleRef.conf.ToolTipUse){if(bble.addEventListener){bble.addEventListener("mouseover",bibleRef.MouseOver,false);bble.addEventListener("mouseout",bibleRef.MouseOut,false);}else{bble.attachEvent("onmouseover",bibleRef.MouseOver);bble.attachEvent("onmouseout",bibleRef.MouseOut);}}
return bble;},fixLink:function(lnk){var dash='\\s*[\\-\\–\\—\\―]\\s*';var r_dash=new RegExp(dash,"g");var vsep='\\s*['+bibleRef.conf.VSeparator.replace(/\s/g,'').replace(/\./g,'\\.')+']\\s*';var r_vsep=new RegExp(vsep,"g");var rsep='\\s*['+bibleRef.conf.RSeparator.replace(/\s/g,'').replace(/\./g,'\\.')+']\\s*';var r_rsep=new RegExp(rsep,"g");var csep='\\s*['+bibleRef.conf.CSeparator.replace(/\s/g,'').replace(/\./g,'\\.')+']\\s*';var r_csep=new RegExp(csep,"g");return lnk.replace(/\&nbsp\;/ig,' ').replace(r_dash,"-").replace(r_vsep,".").replace(r_rsep,",").replace(r_csep,"$").replace(/\s+/g,"+");},MouseOut:function(e){var d=document.getElementById('BibleOnlineToolTip');if(d&&d.style.visibility=="visible"){clearTimeout(bibleRef.status.hideTimer);bibleRef.status.hideTimer=setTimeout(function(){d.style.visibility='hidden';},bibleRef.conf.ToolTip.hideTime*1000)}},MouseOver:function(e){var e=e||wndow.event;var target=e.target||e.srcElement;bibleRef.status.lastToolTip=[e,target];bibleRef.showToolTip(e,target);},zIndex:function(){if(bibleRef.conf.ToolTip.zindex){return bibleRef.conf.ToolTip.zindex}
var elems=document.getElementsByTagName('*');var highest=0;for(var i=0;i<elems.length;i++){var zindex=document.defaultView.getComputedStyle(elems[i],null).getPropertyValue("z-index");if(/^[0-9]+$/.test(zindex)&&(Math.round(zindex)>highest))
{highest=Math.round(zindex);}}
highest=highest+1;bibleRef.conf.ToolTip.zindex=highest;return bibleRef.conf.ToolTip.zindex;},showToolTip:function(e,t){var data;var ct=bibleRef.conf.ToolTip;clearTimeout(bibleRef.status.hideTimer);var el=document.getElementById(t.id);var rst=t.getAttribute('text')||t.innerHTML;if(bibleRef.marker[t.id]){var b=bibleRef.marker[t.id];if(b.length==0||(b.status&&b.status=='failed')){var d=document.getElementById('BibleOnlineToolTip');clearTimeout(bibleRef.status.hideTimer);d.style.visibility='hidden';return;}
var d=document.getElementById('BibleOnlineToolTipContent');if(d){d.innerHTML='<span class="size" style="">&#x2922;</span>';d.innerHTML='';document.getElementById('BibleOnlineToolTip').style.visibility="visible";if(b.status&&b.status=='failed'){d.innerHTML='<div class="BibleOnlineRefLoader">К сожалению, загрузить отрывок не удалось</div>'}
var ctitle='';for(var i=0;i<b.length;i++){if(b[i].h2){ctitle=b[i].h2;d.innerHTML+='<h2>'+ctitle+"</h2>";}else if(b[i].v){d.innerHTML+=' <span>'+'<span class="verse-num">'+b[i].v.n+'&nbsp;</span>'+b[i].v.t+'</span>';}}
var more=document.getElementById('BibleOnlineToolTipMore');more.href='https://bble.ru/'+bibleRef.fixLink(rst)+'?'+bibleRef.conf.Translate;}}else{var f="https://api.bibleonline.ru/ref/get/";var q=bibleRef.fixLink(rst).replace(/([^\+\,\;\$\.%a-z0-9]+)/ig,function(match,c){return encodeURIComponent(c)});f+=f.indexOf("?")>-1?"&callback=":"?callback=";f+="bibleRef.loaded";f+="&q="+q;f+="&marker="+t.id;f+="&trans="+bibleRef.conf.Translate;var b=document.getElementsByTagName("head")[0];var k=document.createElement("script");k.setAttribute("id",'script-'+t.id);k.setAttribute("src",f);k.setAttribute("charset","utf-8");k.setAttribute("type","text/javascript");setTimeout(function(){bibleRef.marker[t.id]||bibleRef.requestFailed(t.id)},1000*bibleRef.conf.ToolTip.timeout);setTimeout(function(){bibleRef.showToolTip(e,t);},100);if(k.addEventListener){k.addEventListener("load",bibleRef.requestFinished(t.id),false);}else{k.attachEvent("onload",bibleRef.requestFinished(t.id));}
if(!document.getElementById('script-'+t.id))
{b.appendChild(k);}
if(!document.getElementById('BibleOnlineToolTip'))
{c=document.createElement("div");c.id='BibleOnlineToolTip';c.setAttribute("ref",t.id);c.className="BibleOnlineRefTooltip";c.style.position="absolute";c.style.visibility="hidden";c.style.overflow="auto";c.style.zIndex=bibleRef.zIndex();c.style.width=ct.width+'px';c.style.height=ct.height+'px';c.innerHTML='<div class="BibleOnlineRefContent" id="BibleOnlineToolTipContent" ref="'+t.id+'"></div><div class="BibleOnlineRefFooter"><a target="'+bibleRef.conf.Target+'" class="BibleOnlineRefCopy" href="https://bibleonline.ru/">Библия Онлайн</a><a id="BibleOnlineToolTipMore" target="'+bibleRef.conf.Target+'" href="https://bble.ru/'+q+'?'+bibleRef.conf.Translate+'" class="BibleOnlineRefMore">в контексте &raquo;</a></div>';document.body.appendChild(c);c.onmouseover=function(){clearTimeout(bibleRef.status.hideTimer);};c.onmouseout=function(){var d=document.getElementById('BibleOnlineToolTip');if(d&&d.style.visibility=="visible"){clearTimeout(bibleRef.status.hideTimer);bibleRef.status.hideTimer=setTimeout(function(){d.style.visibility='hidden';},bibleRef.conf.ToolTip.hideTime*1000)}};}
c=document.getElementById('BibleOnlineToolTipContent');c.innerHTML='<div class="BibleOnlineRefLoader"><img width="220" height="19" src="https://y.bibleonline.ru/img/ajax-loader.gif" alt="Loading..." /></div>';}
if(c=document.getElementById('BibleOnlineToolTip')){var cc=document.getElementById('BibleOnlineToolTipContent');c.style.width=ct.width+'px';c.style.height=ct.height+'px';cc.style.width=ct.width+'px';cc.style.height=Math.round(ct.height-20)+'px';if(cc.scrollHeight-cc.scrollTop>cc.clientHeight){var bigger=cc.scrollHeight-cc.scrollTop>cc.clientHeight;for(var i=1;i<100&&bigger;i++){bigger=cc.scrollHeight-cc.scrollTop>cc.clientHeight;var cid=Math.round(100+i)/100;c.style.width=Math.round(cid*ct.width)+'px';c.style.height=Math.round(cid*ct.height)+'px';cc.style.width=Math.round(cid*ct.width)+'px';cc.style.height=Math.round(cid*ct.height-20)+'px';}}
var tbc=document.getElementById(t.id).getBoundingClientRect();var body=document.body;var docElem=document.documentElement;var scrollTop=window.pageYOffset||docElem.scrollTop||body.scrollTop;var scrollLeft=window.pageXOffset||docElem.scrollLeft||body.scrollLeft;var clientTop=docElem.clientTop||body.clientTop||0;var clientLeft=docElem.clientLeft||body.clientLeft||0;var wWidth=0,wHeight=0;if(window.innerWidth)wWidth=window.innerWidth;else if(docElem&&docElem.clientWidth)wWidth=docElem.clientWidth;else if(body&&body.clientWidth)wWidth=body.clientWidth;if(window.innerHeight)wHeight=window.innerHeight;else if(docElem&&docElem.clientHeight)wHeight=docElem.clientHeight;else if(body&&body.clientHeight)wHeight=body.clientHeight;var cTop=Math.round(tbc.bottom+scrollTop-clientTop);var cBottom=Math.round(tbc.top+scrollTop-clientTop);var cLeft=Math.round(tbc.left+scrollLeft-clientLeft);if(cLeft+c.offsetWidth+40>=wWidth)cLeft=wWidth-c.offsetWidth-40;if(cTop+cc.offsetHeight+10>=wHeight+scrollTop-clientTop){cTop=2*cBottom-cTop-cc.offsetHeight;if(cTop<=10)cTop=10}
c.style.left=cLeft+'px';c.style.top=cTop+'px';}},marker:{},status:{hideTimer:null,lastToolTip:null},requestFailed:function(tid){if(bibleRef.marker[tid]){return}
bibleRef.removeScript(tid);bibleRef.marker[tid]={status:'failed'};var c=document.getElementById('BibleOnlineToolTipContent')
if(c&&c.getAttribute("ref")==tid)
{c.innerHTML='<div class="BibleOnlineRefLoader">К сожалению, загрузить отрывок не удалось</div>';}},removeScript:function(s){var sc=document.getElementById('script-'+s);if(sc)sc.parentNode.removeChild(sc);},requestFinished:function(tid){setTimeout(function(){if(!bibleRef.marker[tid])bibleRef.requestFailed(tid)},500)},loaded:function(r){bibleRef.marker[r.marker]=r.data;bibleRef.removeScript(r.marker);if(bibleRef.status.lastToolTip&&bibleRef.status.lastToolTip[1].id==r.marker){bibleRef.showToolTip(bibleRef.status.lastToolTip[0],bibleRef.status.lastToolTip[1])}},loadStyle:function()
{if(bibleRef.conf.CSS&&/\S/.test(bibleRef.conf.CSS))
{var dh=document.getElementsByTagName("head")[0],st=document.createElement("link");st.type="text/css";st.rel="stylesheet";st.href=bibleRef.conf.CSS;dh.insertBefore(st,dh.firstChild);}},configure:function(i,item){bibleRef.conf[i]=item;}};w.bibleRef={loaded:bibleRef.loaded,conf:bibleRef.configure,rebuild:bibleRef.init};if(w.addEventListener){w.addEventListener("load",function(){bibleRef.init()},false);}else if(w.attachEvent){w.attachEvent("onload",function(){bibleRef.init()});}})(window);
