KEEP.initUtils=()=>{KEEP.utils={html_root_dom:document.querySelector("html"),pageContainer_dom:document.querySelector(".page-container"),pageTop_dom:document.querySelector(".page-main-content-top"),firstScreen_dom:document.querySelector(".first-screen-container"),scrollProgressBar_dom:document.querySelector(".scroll-progress-bar"),pjaxProgressBar_dom:document.querySelector(".pjax-progress-bar"),pjaxProgressIcon_dom:document.querySelector(".pjax-progress-icon"),back2TopButton_dom:document.querySelector(".tool-scroll-to-top"),innerHeight:window.innerHeight,pjaxProgressBarTimer:null,prevScrollValue:0,fontSizeLevel:0,isHasScrollProgressBar:!0===KEEP.theme_config.style.scroll.progress_bar.enable,isHasScrollPercent:!0===KEEP.theme_config.style.scroll.percent.enable,hideTop(){const e=setTimeout(()=>{KEEP.utils.pageTop_dom.classList.contains("hide")||KEEP.utils.pageTop_dom.classList.add("hide"),clearTimeout(e)},300);return!0},backHome(){window.pjax?window.pjaxOpenUrl("/"):window.location.href="/"},styleHandleWhenScroll(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.body.scrollHeight||document.documentElement.scrollHeight,o=window.innerHeight||document.documentElement.clientHeight;const s=Math.round(e/(t-o)*100);if(this.isHasScrollProgressBar&&(o=(e/(t-o)*100).toFixed(3),this.scrollProgressBar_dom.style.visibility=0===s?"hidden":"visible",this.scrollProgressBar_dom.style.width=`${o}%`),this.isHasScrollPercent){const r=this.back2TopButton_dom.querySelector(".percent");0===s||void 0===s?this.back2TopButton_dom.classList.remove("show"):(this.back2TopButton_dom.classList.add("show"),r.innerHTML=s.toFixed(0))}e>this.prevScrollValue&&e>this.innerHeight?this.pageTop_dom.classList.add("hide"):this.pageTop_dom.classList.remove("hide"),this.prevScrollValue=e},registerWindowScroll(){window.addEventListener("scroll",()=>{(this.isHasScrollPercent||this.isHasScrollProgressBar)&&this.styleHandleWhenScroll(),KEEP.theme_config.toc.enable&&KEEP.utils.hasOwnProperty("findActiveIndexByTOC")&&KEEP.utils.findActiveIndexByTOC(),KEEP.utils.headerShrink.headerShrink()})},toggleShowToolsList(){document.querySelector(".tool-toggle-show").addEventListener("click",()=>{document.querySelector(".side-tools-list").classList.toggle("show")})},globalFontAdjust(){var e=document.defaultView.getComputedStyle(document.body).fontSize;const t=parseFloat(e);var o;const s=e=>{this.html_root_dom.style.fontSize=`${t*(1+.05*e)}px`,KEEP.styleStatus.fontSizeLevel=e,KEEP.setStyleStatus()};(o=KEEP.getStyleStatus())&&(this.fontSizeLevel=o.fontSizeLevel,s(this.fontSizeLevel)),document.querySelector(".tool-font-adjust-plus").addEventListener("click",()=>{5!==this.fontSizeLevel&&(this.fontSizeLevel++,s(this.fontSizeLevel))}),document.querySelector(".tool-font-adjust-minus").addEventListener("click",()=>{this.fontSizeLevel<=0||(this.fontSizeLevel--,s(this.fontSizeLevel))})},contentAreaWidthAdjust(){const e=document.querySelector(".tool-expand-width"),t=document.querySelector(".header-content"),o=document.querySelector(".main-content"),s=e.querySelector("i"),r=KEEP.theme_config.style.content_max_width||"1000px";let i=r,n=!1;!0===KEEP.theme_config.style.first_screen.enable&&"/"===window.location.pathname&&(i=1.2*parseInt(r)+"px");const a=e=>{KEEP.styleStatus.isExpandPageWidth=e,KEEP.setStyleStatus(),e?(s.classList.remove("fa-arrows-alt-h"),s.classList.add("fa-compress-arrows-alt"),t.style.maxWidth="90%",o.style.maxWidth="90%"):(s.classList.remove("fa-compress-arrows-alt"),s.classList.add("fa-arrows-alt-h"),t.style.maxWidth=i,o.style.maxWidth=r)};var l;(l=KEEP.getStyleStatus())&&(n=l.isExpandPageWidth,a(n)),e.addEventListener("click",()=>{n=!n,a(n)})},goComment(){this.goComment_dom=document.querySelector(".go-comment"),this.goComment_dom&&this.goComment_dom.addEventListener("click",()=>{document.querySelector("#comment-anchor").scrollIntoView()})},getElementHeight(e){const t=document.querySelector(e);return t?t.getBoundingClientRect().height:0},initFirstScreenHeight(){this.firstScreen_dom&&(this.firstScreen_dom.style.height=this.innerHeight+"px")},initPageHeightHandle(){if(!this.firstScreen_dom){var e=this.getElementHeight(".page-main-content-top")+this.getElementHeight(".page-main-content-middle")+this.getElementHeight(".page-main-content-bottom"),t=window.innerHeight;const o=document.querySelector(".page-main-content-bottom");e<t&&(o.style.marginTop=t-e+"px")}},setHowLongAgoLanguage(e,t){return t.replace(/%s/g,e)},getHowLongAgo(e){var t=KEEP.language_ago;e/=1e3;var o=Math.floor(e/2592e3/12),s=Math.floor(e/2592e3),r=Math.floor(e/86400/7),i=Math.floor(e/86400),n=Math.floor(e/3600%24),a=Math.floor(e/60%60),e=Math.floor(e%60);return 0<o?this.setHowLongAgoLanguage(o,t.year):0<s?this.setHowLongAgoLanguage(s,t.month):0<r?this.setHowLongAgoLanguage(r,t.week):0<i?this.setHowLongAgoLanguage(i,t.day):0<n?this.setHowLongAgoLanguage(n,t.hour):0<a?this.setHowLongAgoLanguage(a,t.minute):0<e?this.setHowLongAgoLanguage(e,t.second):void 0},setHowLongAgoInHome(){const e=document.querySelectorAll(".home-article-meta-info .home-article-date");e&&e.forEach(e=>{e.innerHTML=this.getHowLongAgo(Date.now()-new Date(e.dataset.date).getTime())})},pjaxProgressBarStart(){this.pjaxProgressBarTimer&&clearInterval(this.pjaxProgressBarTimer),this.isHasScrollProgressBar&&this.scrollProgressBar_dom.classList.add("hide"),this.pjaxProgressBar_dom.style.width="0",this.pjaxProgressIcon_dom.classList.add("show");let e=1;this.pjaxProgressBar_dom.classList.add("show"),this.pjaxProgressBar_dom.style.width=e+"%",this.pjaxProgressBarTimer=setInterval(()=>{e+=5,99<e&&(e=99),this.pjaxProgressBar_dom.style.width=e+"%"},100)},pjaxProgressBarEnd(){this.pjaxProgressBarTimer&&clearInterval(this.pjaxProgressBarTimer),this.pjaxProgressBar_dom.style.width="100%";const t=setTimeout(()=>{this.pjaxProgressBar_dom.classList.remove("show"),this.pjaxProgressIcon_dom.classList.remove("show"),this.isHasScrollProgressBar&&this.scrollProgressBar_dom.classList.remove("hide");const e=setTimeout(()=>{this.pjaxProgressBar_dom.style.width="0",clearTimeout(t),clearTimeout(e)},200)},200)}},KEEP.utils.registerWindowScroll(),KEEP.utils.toggleShowToolsList(),KEEP.utils.globalFontAdjust(),KEEP.utils.contentAreaWidthAdjust(),KEEP.utils.goComment(),KEEP.utils.initPageHeightHandle(),KEEP.utils.initFirstScreenHeight(),KEEP.utils.setHowLongAgoInHome()};