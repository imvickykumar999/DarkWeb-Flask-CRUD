<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    
            
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- Meta Tags for Parse.ly -->
  
<meta name="parsely-title" content="ProPublica" />
<meta name="parsely-link" content="https://v3-www.propublica.org/shell" />
<meta name="parsely-type" content="index" />
<meta name="parsely-image-url" content="https://assets.propublica.org/2017-pp-open-graph-1200x630.jpg" />



    
    <!-- Critical JS -->
    <script>(function(H){H.className=H.className.replace(/\bno-js\b/,'enhanced')})(document.documentElement)</script>
    <script>window.PP={};window.PP.utils={};window.PP.config={};PP.config.donateBanner={secondsUntilShown:0.25,daysForDonateBarDismissal:3};;(function(win,undefined){win.PP=win.PP||{};win.PP.utils=win.PP.utils||{};var PP=win.PP;// loadJS: load a JS file asynchronously. Included from https://github.com/filamentgroup/loadJS/
function loadJS(src,cb){"use strict";var ref=window.document.getElementsByTagName("script")[0];var script=window.document.createElement("script");script.src=src;script.async=true;ref.parentNode.insertBefore(script,ref);if(cb&&typeof cb==="function"){script.onload=cb}return script}PP.utils.loadJS=loadJS;// cookie function from https://github.com/filamentgroup/cookie/
function cookie(name,value,days){// if value is undefined, get the cookie value
if(value===undefined){var cookiestring="; "+window.document.cookie;var cookies=cookiestring.split("; "+name+"=");if(cookies.length===2){return cookies.pop().split(";").shift()}return null}else{var expires;var domain;// if value is a false boolean, we'll treat that as a delete
if(value===false){days=-1}if(days){var date=new Date;date.setTime(date.getTime()+days*24*60*60*1000);expires="; expires="+date.toGMTString()}else{expires=""}// check if we're in dev, if not, lets make it a domain-wide cookie
if(location.hostname=="localhost"||location.hostname=="127.0.0.1"){domain=""}else{domain="; domain=.propublica.org"}window.document.cookie=name+"="+value+expires+domain+"; path=/"}}// expose it
PP.utils.cookie=cookie;// basic logging function
function log(logLine){const logOn=new URLSearchParams(window.location.search).get("__pp-debug");if(logOn!==null){console.log(logLine)}}// expose it
PP.utils.log=log;// generic event throttler using requestAnimationFrame
function rafEvent(type,name,obj){obj=obj||win;var running=false;var func=function(){if(running){return}running=true;requestAnimationFrame(function(){obj.dispatchEvent(new CustomEvent(name));running=false})};obj.addEventListener(type,func)}PP.utils.rafEvent=rafEvent;PP.utils.rafEvent("resize","rafResize");PP.utils.rafEvent("scroll","rafScroll");// Create a series of breakpoints corresponding to the ones in css/config/_column-settings.scss
//
// Usage:
//
// 1. Check if breakpoint condition matches
//    if (PP.utils.aboveBreakpoint("lg").matches) { console.log("Is Desktop"); }
//    if (PP.utils.belowBreakpoint("lg").matches) { console.log("Is Mobile"); }
//
// 2. Listener that triggers when breakpoint condition changes
//    aboveBreakpoint("lg").addEventListener("change", function () { console.log("Mobile/Desktop breakpoint changed."); });
const breakpoints={xs:0,sm:36,md:48,lg:60,xl:78,xxl:88};PP.utils.breakpoints=breakpoints;function aboveBreakpoint(value){return window.matchMedia(`(min-width: ${PP.utils.breakpoints[value]}em)`)}function belowBreakpoint(value){return window.matchMedia(`(max-width: ${PP.utils.breakpoints[value]}em)`)}PP.utils.aboveBreakpoint=aboveBreakpoint;PP.utils.belowBreakpoint=belowBreakpoint})(this);;(function(win,undefined){// Enable JS strict mode
"use strict";// Environment variables
var PP=win.PP,utils=PP.utils,docClasses=[];// if ( "sessionStorage" in window ) {
//
//     // Font loading!
//     var fontsClass = "fonts-loaded";
//
//     if ( sessionStorage.getItem( "fontsLoaded" ) === "loaded" ) {
//         docClasses.push( fontsClass );
//     } else {
//         // Okay! Let’s watch for font events!
//         var tiemposText = new FontFaceObserver( "Tiempos Text", {
//             weight: 400
//         } );
//         var tiemposTextItalic = new FontFaceObserver( "Tiempos Text", {
//             style: "italic",
//             weight: 400
//         } );
//         var tiemposTextBold = new FontFaceObserver( "Tiempos Text", {
//             weight: 700
//         } );
//         var tiemposTextBoldItalic = new FontFaceObserver( "Tiempos Text", {
//             style: "italic",
//             weight: 700
//         } );
//         var graphik = new FontFaceObserver( "Graphik", {
//             weight: 400
//         } );
//         var graphikItalic = new FontFaceObserver( "Graphik", {
//             style: "italic",
//             weight: 400
//         } );
//         var graphikBold = new FontFaceObserver( "Graphik", {
//             weight: 700
//         } );
//         var graphikBoldItalic = new FontFaceObserver( "Graphik", {
//             style: "italic",
//             weight: 700
//         } );
//
//         // When the fonts above are loaded, we'll attach a .fonts-loaded class to the document. (Per https://www.filamentgroup.com/lab/font-events.html) We'll also append the class to the `html`.
//         win.Promise
//             .all( [
//                 tiemposText.load(),
//                 tiemposTextItalic.load(),
//                 tiemposTextBold.load(),
//                 tiemposTextBoldItalic.load(),
//                 graphik.load(),
//                 graphikItalic.load(),
//                 graphikBold.load(),
//                 graphikBoldItalic.load()
//             ] )
//             .then( function() {
//                 win.document.documentElement.className += " " + fontsClass;
//                 sessionStorage.setItem( "fontsLoaded" , "loaded" );
//             } );
//     }
// }
// Add scoping classes to HTML element
win.document.documentElement.className+=" "+docClasses.join(" ")})(this);
//# sourceMappingURL=initial.js.map
</script>

    <!-- DFP JS -->
    <script src="https://htlbid.com/v3/propublica.org/htlbid.js" async></script>
    <script>window.htlbid = window.htlbid || {};
htlbid.cmd = htlbid.cmd || [];
htlbid.cmd.push(function() {
    htlbid.layout("universal"); // Leave as "universal" or add custom layout
        htlbid.setTargeting("is_testing", "no");
        htlbid.setTargeting("is_home", "no"); // Set to "yes" on the homepage
});
</script>

    <!-- PRECONNECT -->
        <link href="https://assets.propublica.org" rel="preconnect">
    <link href="https://assets.propublica.org" rel="dns-prefetch">
        <link href="https://img.assets-c3.propublica.org" rel="dns-prefetch">
    <link href="https://img.assets-d.propublica.org" rel="dns-prefetch">

    <!-- STYLES -->
    <link rel="stylesheet" href="https://assets.propublica.org/static/prod/v4/css/main.9c1667a0.css">

    <!-- OTHER -->
        <link rel="shortcut icon" type="image/x-icon" href="https://assets.propublica.org/static/prod/v4/images/favicon.ico">
    <link rel="icon" type="image/png" href="https://assets.propublica.org/static/prod/v4/images/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="https://assets.propublica.org/static/prod/v4/images/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="https://assets.propublica.org/static/prod/v4/images/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="https://assets.propublica.org/static/prod/v4/images/favicon-128x128.png" sizes="128x128">
    <link rel="icon" type="image/png" href="https://assets.propublica.org/static/prod/v4/images/favicon-196x196.png" sizes="196x196">
    <link rel="apple-touch-icon" href="https://assets.propublica.org/static/prod/v4/images/apple-touch-icon-180x180.png" sizes="180x180">
    <meta name="application-name" content="ProPublica">
    <meta name="msapplication-TileColor" content="#FFFFFF">
    <meta name="msapplication-TileImage" content="https://assets.propublica.org/static/prod/v4/images/mstile-144x144.png">
    <meta name="msapplication-square70x70logo" content="https://assets.propublica.org/static/prod/v4/images/mstile-70x70.png">
    <meta name="msapplication-square150x150logo" content="https://assets.propublica.org/static/prod/v4/images/mstile-150x150.png">
    <meta name="msapplication-wide310x150logo" content="https://assets.propublica.org/static/prod/v4/images/mstile-310x150.png">
    <meta name="msapplication-square310x310logo" content="https://assets.propublica.org/static/prod/v4/images/mstile-310x310.png">

    <script>
      window.dataLayer = window.dataLayer || [];
                </script>

    
    
    <!--mastodon-->
    <link rel="me" href="https://newsie.social/@ProPublica" />

<title>ProPublica — ProPublica</title><meta name="description" content="ProPublica is an independent, non-profit newsroom that produces investigative journalism in the public interest.">
<meta name="referrer" content="no-referrer-when-downgrade">
<meta name="robots" content="all">
<meta content="13320939444" property="fb:profile_id">
<meta content="229862657130557" property="fb:app_id">
<meta content="en_US" property="og:locale">
<meta content="ProPublica" property="og:site_name">
<meta content="website" property="og:type">
<meta content="https://www.propublica.org/shell" property="og:url">
<meta content="ProPublica" property="og:title">
<meta content="ProPublica is an independent, non-profit newsroom that produces investigative journalism in the public interest." property="og:description">
<meta content="https://assets.propublica.org/2017-pp-open-graph-1200x630.jpg" property="og:image">
<meta content="https://vimeo.com/propublica" property="og:see_also">
<meta content="https://www.pinterest.com/propublica" property="og:see_also">
<meta content="https://www.instagram.com/propublica" property="og:see_also">
<meta content="https://www.linkedin.com/company/propublica/" property="og:see_also">
<meta content="https://github.com/propublica" property="og:see_also">
<meta content="https://www.youtube.com/user/propublica" property="og:see_also">
<meta content="https://en.wikipedia.org/wiki/ProPublica" property="og:see_also">
<meta content="https://www.facebook.com/propublica/" property="og:see_also">
<meta content="https://twitter.com/propublica" property="og:see_also">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@propublica">
<meta name="twitter:creator" content="@propublica">
<meta name="twitter:title" content="ProPublica">
<meta name="twitter:description" content="ProPublica is an independent, non-profit newsroom that produces investigative journalism in the public interest.">
<meta name="twitter:image" content="https://assets.propublica.org/2017-pp-open-graph-1200x630.jpg">
<link href="https://www.propublica.org/shell" rel="canonical">
<link href="https://www.propublica.org" rel="home">
<link type="text/plain" href="https://www.propublica.org/humans.txt" rel="author"></head>

<body id="www-propublica-org" class="listing">
    <a href="#main" class="a11y a11y-focusable skiplink">Skip to main content</a>
    	<!-- SVG Sprite Sheet (sprites in alphabetical order) -->

	<svg style="display: none;">

        <!-- Close button light -->
        <symbol id="icon-close-light" viewBox="0 0 24 24">
            <title>Close</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <g transform="translate(-1149.000000, -24.000000)" class="line" stroke="#FFFFFF" stroke-width="2">
                    <g id="Group-6" transform="translate(1150.000000, 25.000000)">
                        <path d="M0.393398282,21.6066017 L21.6066017,0.393398282" id="Line-lt"></path>
                        <path d="M0.393398282,21.6066017 L21.6066017,0.393398282" id="Line-lt-Copy" transform="translate(11.000000, 11.000000) scale(-1, 1) translate(-11.000000, -11.000000) "></path>
                    </g>
                </g>
            </g>
        </symbol>

        <!-- Close button dark -->
        <symbol id="icon-close-dark" viewBox="0 0 24 24">
            <title>Close</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <g transform="translate(-1149.000000, -24.000000)" class="line" stroke="#304154" stroke-width="2">
                    <g id="Group-6-2" transform="translate(1150.000000, 25.000000)">
                        <path d="M0.393398282,21.6066017 L21.6066017,0.393398282" id="Line-dk"></path>
                        <path d="M0.393398282,21.6066017 L21.6066017,0.393398282" id="Line-dk-Copy" transform="translate(11.000000, 11.000000) scale(-1, 1) translate(-11.000000, -11.000000) "></path>
                    </g>
                </g>
            </g>
        </symbol>

		<!-- Comment -->
		<symbol id="icon-comment" viewbox="0 0 24 24">
			<title>Comment</title>
			<path d="M23.05,6.71a8,8,0,0,1,0,7.58A9.86,9.86,0,0,1,20.5,17.4a12.6,12.6,0,0,1-3.83,2.07,14.1,14.1,0,0,1-4.67.77,15.91,15.91,0,0,1-2-.14Q6.83,23.25,3.5,23.25a.48.48,0,0,1-.48-.3.54.54,0,0,1,.12-.55l0,0a7.21,7.21,0,0,0,1.59-3,9,9,0,0,0,.19-.94A10.65,10.65,0,0,1,1.32,15,8.11,8.11,0,0,1,.95,6.71,9.87,9.87,0,0,1,3.5,3.6,12.6,12.6,0,0,1,7.33,1.52,14.1,14.1,0,0,1,12,.75a14.1,14.1,0,0,1,4.67.77A12.6,12.6,0,0,1,20.5,3.6,9.86,9.86,0,0,1,23.05,6.71Z"/>
		</symbol>

		<!-- Creative Commons -->
		<symbol id="icon-cc" viewbox="0 0 24 24">
			<title>Creative Commons</title>
			<path d="M12,0A11.56,11.56,0,0,0,3.56,3.49,12.07,12.07,0,0,0,0,12a11.78,11.78,0,0,0,3.52,8.45A11.9,11.9,0,0,0,12,24a12.21,12.21,0,0,0,8.59-3.58A11.55,11.55,0,0,0,24,12a11.76,11.76,0,0,0-3.46-8.48A11.87,11.87,0,0,0,12,0Zm0,2.17A9.77,9.77,0,0,1,21.83,12,9.37,9.37,0,0,1,19,18.87a10,10,0,0,1-7,2.93A9.7,9.7,0,0,1,5.1,18.9,9.76,9.76,0,0,1,2.17,12,9.91,9.91,0,0,1,5.1,5,9.45,9.45,0,0,1,12,2.17Z"/><path d="M11.86,10A3.37,3.37,0,0,0,8.68,8.28,3.45,3.45,0,0,0,5.17,12a3.39,3.39,0,0,0,3.58,3.72,3.6,3.6,0,0,0,3.15-1.87l-1.49-.76a1.46,1.46,0,0,1-1.48,1c-1.1,0-1.61-.92-1.61-2.13s.43-2.13,1.61-2.13a1.52,1.52,0,0,1,1.33,1Z"/><path d="M18.79,10a3.38,3.38,0,0,0-3.18-1.73A3.45,3.45,0,0,0,12.1,12a3.39,3.39,0,0,0,3.58,3.72,3.6,3.6,0,0,0,3.15-1.87l-1.49-.76a1.46,1.46,0,0,1-1.48,1c-1.1,0-1.61-.92-1.61-2.13s.43-2.13,1.61-2.13a1.52,1.52,0,0,1,1.33,1Z"/>
		</symbol>

		<!-- Donate -->
		<symbol id="icon-donate" viewbox="0 0 24 24">
			<title>Donate</title>
			<path d="M1,24H11V22H10a3,3,0,0,1-3-3H9a1,1,0,0,0,1,1h1V18H10a3,3,0,0,1,0-6h1V10H1Z"/><path d="M9,15a1,1,0,0,0,1,1h1V14H10A1,1,0,0,0,9,15Z"/><path d="M13,12h1a3,3,0,0,1,3,3H15a1,1,0,0,0-1-1H13v2h1a3,3,0,0,1,0,6H13v2H23V10H13Z"/><path d="M15,19a1,1,0,0,0-1-1H13v2h1A1,1,0,0,0,15,19Z"/><path d="M20.65,5A3.46,3.46,0,0,0,21,3.5,3.5,3.5,0,0,0,17.5,0,6.5,6.5,0,0,0,12,3.05,6.5,6.5,0,0,0,6.5,0,3.5,3.5,0,0,0,3,3.5,3.46,3.46,0,0,0,3.35,5H0V9H24V5ZM6.5,5a1.5,1.5,0,0,1,0-3,4.49,4.49,0,0,1,4.22,3Zm11,0H13.28A4.49,4.49,0,0,1,17.5,2a1.5,1.5,0,0,1,0,3Z"/>
		</symbol>

		<!-- Email -->
		<symbol id="icon-email" viewbox="0 0 24 24">
			<title>Email</title>
			<path d="M12,13.5,0,4.5A1.45,1.45,0,0,1,.44,3.44,1.44,1.44,0,0,1,1.5,3h21A1.5,1.5,0,0,1,24,4.5Zm0,2.7,12-9V19.5A1.5,1.5,0,0,1,22.5,21H1.5a1.44,1.44,0,0,1-1.06-.44A1.45,1.45,0,0,1,0,19.5V7.2Z"/>
		</symbol>

        <!-- Email (add/subscribe) -->
        <symbol id="icon-add-email" viewBox="0 0 24 24">
        	<title>Add Email</title>
        	<path d="M18.81,2a5.13,5.13,0,0,0-5.2,5.06A5.2,5.2,0,0,0,24,7.08,5.13,5.13,0,0,0,18.81,2Zm3.24,5.7h-2.6v2.53H18.16V7.72h-2.6V6.45h2.6V3.91h1.29V6.45h2.6Zm-2.6,5.65V20.8A1.2,1.2,0,0,1,18.24,22h-17A1.2,1.2,0,0,1,0,20.8V11l9.73,7.14,7-5.12a6.89,6.89,0,0,0,2.1.34C19,13.4,19.24,13.39,19.45,13.37ZM9.73,16,0,8.9A1.2,1.2,0,0,1,1.22,7.72H12.35A6.28,6.28,0,0,0,15,12.18Z"/>
        </symbol>

		<!-- Facebook -->
		<symbol id="icon-facebook" viewbox="0 0 24 24">
			<title>Facebook</title>
			<path d="M24,1.5v21A1.52,1.52,0,0,1,22.5,24h-6V14.67h3l.5-3.46H16.5V8.5a1.6,1.6,0,0,1,.38-1.15A1.48,1.48,0,0,1,18,6.95h2.25V3.83a15.64,15.64,0,0,0-2.46-.16A5.11,5.11,0,0,0,14.1,4.89a4.41,4.41,0,0,0-1.27,3.33v3h-3v3.46h3V24H1.5a1.44,1.44,0,0,1-1.05-.45A1.44,1.44,0,0,1,0,22.5V1.5A1.44,1.44,0,0,1,.45.45,1.44,1.44,0,0,1,1.5,0h21a1.44,1.44,0,0,1,1.05.45A1.44,1.44,0,0,1,24,1.5Z"/>
		</symbol>

        <!-- Instagram -->
        <symbol id="icon-instagram" viewbox="0 0 24 24">
        	<title>Instagram</title>
        	<path d="M12,2.32c3.15,0,3.53,0,4.77.07a6.51,6.51,0,0,1,2.19.4,3.58,3.58,0,0,1,1.36.89A3.58,3.58,0,0,1,21.21,5a6.51,6.51,0,0,1,.4,2.19c.06,1.24.07,1.62.07,4.77s0,3.53-.07,4.77a6.51,6.51,0,0,1-.4,2.19A4,4,0,0,1,19,21.21a6.51,6.51,0,0,1-2.19.4c-1.24.06-1.62.07-4.77.07s-3.53,0-4.77-.07A6.51,6.51,0,0,1,5,21.21a3.58,3.58,0,0,1-1.36-.89A3.58,3.58,0,0,1,2.79,19a6.51,6.51,0,0,1-.4-2.19c-.06-1.24-.07-1.62-.07-4.77s0-3.53.07-4.77A6.51,6.51,0,0,1,2.79,5a3.58,3.58,0,0,1,.89-1.36A3.58,3.58,0,0,1,5,2.79a6.51,6.51,0,0,1,2.19-.4c1.24-.06,1.62-.07,4.77-.07M12,.19C8.79.19,8.39.2,7.13.26A8.84,8.84,0,0,0,4.26.81,6,6,0,0,0,.81,4.26,8.84,8.84,0,0,0,.26,7.13C.2,8.39.19,8.79.19,12s0,3.61.07,4.87a8.84,8.84,0,0,0,.55,2.87,6,6,0,0,0,3.45,3.45,8.84,8.84,0,0,0,2.87.55c1.26.06,1.66.07,4.87.07s3.61,0,4.87-.07a8.84,8.84,0,0,0,2.87-.55,6,6,0,0,0,3.45-3.45,8.84,8.84,0,0,0,.55-2.87c.06-1.26.07-1.66.07-4.87s0-3.61-.07-4.87a8.84,8.84,0,0,0-.55-2.87A6,6,0,0,0,19.74.81,8.84,8.84,0,0,0,16.87.26C15.61.2,15.21.19,12,.19Z"/><path d="M12,5.94A6.06,6.06,0,1,0,18.06,12,6.06,6.06,0,0,0,12,5.94Zm0,10A3.94,3.94,0,1,1,15.94,12,3.95,3.95,0,0,1,12,15.94Z"/><circle cx="18.3" cy="5.7" r="1.42"/>
        </symbol>

        <!-- Mastodon -->
        <symbol id="icon-mastodon" viewBox="0 0 16 16">
            <title>Mastodon</title>
            <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"/>
        </symbol>

        <!-- Messenger -->
        <symbol id="icon-messenger" viewBox="0 0 22 22">
            <title>Facebook Messenger</title>
            <path id="Facebook-Messenger" fill="#FFFFFF" fill-rule="nonzero" d="M11,0 C4.92620865,0 0,4.55793451 0,10.1826196 C0,13.3828715 1.59262087,16.2367758 4.08651399,18.1042821 L4.08651399,22 L7.83994911,19.938539 C8.84198473,20.2156171 9.9,20.3652393 11,20.3652393 C17.0737913,20.3652393 22,15.8073048 22,10.1826196 C22,4.55793451 17.0737913,0 11,0 Z M12.1587786,13.6544081 L9.31221374,10.7284635 L3.8346056,13.7292191 L9.84122137,7.42015113 L12.6849873,10.3460957 L18.1625954,7.34534005 L12.1587786,13.6544081 Z"></path>
        </symbol>

		<!-- Mobile -->
		<symbol id="icon-mobile" viewbox="0 0 24 24">
			<title>Mobile</title>
			<path d="M18,0a1.45,1.45,0,0,1,1.06.44A1.45,1.45,0,0,1,19.5,1.5v21A1.5,1.5,0,0,1,18,24H6a1.5,1.5,0,0,1-1.5-1.5V1.5A1.45,1.45,0,0,1,4.94.44,1.44,1.44,0,0,1,6,0ZM17,18V4H7V18Zm-6.06,4.06A1.5,1.5,0,1,0,10.5,21,1.45,1.45,0,0,0,10.94,22.06Z"/>
		</symbol>

        <!-- Nav menu button (hamburger) -->
        <symbol id="icon-nav-menu" viewBox="0 0 24 24">
            <title>Nav Menu</title>
            <path d="M24,5.5a.5.5,0,0,1-.5.5H.5A.5.5,0,0,1,0,5.5v-4A.5.5,0,0,1,.5,1h23a.5.5,0,0,1,.5.5Zm0,9a.5.5,0,0,1-.5.5H.5a.5.5,0,0,1-.5-.5v-4A.5.5,0,0,1,.5,10h23a.5.5,0,0,1,.5.5Zm0,9a.5.5,0,0,1-.5.5H.5a.5.5,0,0,1-.5-.5v-4A.5.5,0,0,1,.5,19h23a.5.5,0,0,1,.5.5Z"/>
        </symbol>

		
		<!-- Podcast -->
		<symbol id="icon-podcast" viewbox="0 0 24 24">
			<title>Podcast</title>
			<path d="M10,22a.48.48,0,0,1-.35-.14L4.29,16.5H.51a.49.49,0,0,1-.36-.15A.49.49,0,0,1,0,16V8a.49.49,0,0,1,.15-.36A.49.49,0,0,1,.51,7.5H4.29L9.65,2.14a.5.5,0,0,1,.86.35v19a.45.45,0,0,1-.3.46A.63.63,0,0,1,10,22Zm5.2-2a.45.45,0,0,1-.35.15A.49.49,0,0,1,14.5,20l-1.42-1.42a.51.51,0,0,1-.14-.36.47.47,0,0,1,.14-.35,8.09,8.09,0,0,0,2.14-3.71,8.18,8.18,0,0,0,0-4.25,8.09,8.09,0,0,0-2.14-3.71.47.47,0,0,1-.14-.35.51.51,0,0,1,.14-.36L14.5,4a.49.49,0,0,1,.36-.15.45.45,0,0,1,.35.15,11,11,0,0,1,2.46,3.72,11.06,11.06,0,0,1,0,8.47A11,11,0,0,1,15.21,20Zm3.19,3.89L17,22.43a.51.51,0,0,1-.14-.36.47.47,0,0,1,.14-.35,13.78,13.78,0,0,0,2.58-3.56,13,13,0,0,0,1.29-4.07,15.09,15.09,0,0,0,0-4.2,13,13,0,0,0-1.29-4.07A13.78,13.78,0,0,0,17,2.27a.47.47,0,0,1-.14-.35A.51.51,0,0,1,17,1.57L18.39.15A.51.51,0,0,1,18.75,0a.47.47,0,0,1,.35.14,17,17,0,0,1,2.72,3.57,16.43,16.43,0,0,1,1.65,4,17.24,17.24,0,0,1,0,8.51,16.43,16.43,0,0,1-1.65,4,17,17,0,0,1-2.72,3.57.47.47,0,0,1-.35.14A.51.51,0,0,1,18.39,23.85Z"/>
		</symbol>

		<!-- Print -->
		<symbol id="icon-print" viewbox="0 0 24 24">
			<title>Print</title>
			<path d="M22.5,0a1.45,1.45,0,0,1,1.06.44A1.45,1.45,0,0,1,24,1.5v12A1.5,1.5,0,0,1,22.5,15H20V10H4v5H1.5a1.45,1.45,0,0,1-1.06-.44A1.45,1.45,0,0,1,0,13.5V1.5A1.45,1.45,0,0,1,.44.44,1.45,1.45,0,0,1,1.5,0ZM6,12V23.5a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V12ZM18.44,5.56A1.5,1.5,0,0,0,21,4.5a1.5,1.5,0,0,0-3,0A1.45,1.45,0,0,0,18.44,5.56Z"/>
		</symbol>

		<!-- ProPublica Logo -->
		<symbol id="propublica-logo" viewBox="0 0 574.24 75">
			<title>ProPublica</title>
			<path class="cls-1" d="M66.4,13.48,66,14.91l6.23,11.45,1.15.47L75,26.29V75H50.95A41.2,41.2,0,0,0,62.13,46.88a40.61,40.61,0,0,0-3.39-16.26,45.17,45.17,0,0,1,7.79-4.95l1.69-.2.14-.41L65,18.83H64.5l-.88,1.29c-2.91,1.9-4.67,2.3-8.54,3.79A41.35,41.35,0,0,0,20.46,5.42,39.87,39.87,0,0,0,0,10.91V0H75V8.81ZM57.32,47A37.54,37.54,0,0,1,44.65,75H0V16A37,37,0,0,1,57.32,47ZM43.7,37.06c0-8.13-6-12-17.75-12H7.18v3.66l4.2.95V62.2l-4.2.95v3.73H27.85V63.14l-7.18-.95V50.14h5.15C37.26,50.14,43.7,45.53,43.7,37.06Zm-9.76.27c0,5.15-2.78,8.33-7.25,8.33h-6V29.47H27C31.37,29.47,33.94,32.32,33.94,37.33Z"/><path class="cls-1" d="M116.53,60.07l9.15,1.08v4.2H99.39v-4.2l5.28-1.36v-44l-5.28-1.36V10.41H123c15.31,0,22.9,5.28,22.9,16.13,0,11.18-8.33,17.41-23.1,17.41h-6.3Zm0-21.14h6.84c6.44,0,10.5-4.61,10.5-12.06,0-7.18-3.73-11.45-10.09-11.45h-7.25Z"/><path class="cls-1" d="M200.74,61.15v4.2H185.9l-16-20.6h-2.51v15l5.28,1.36v4.2H150.27v-4.2l5.28-1.36V23.35l-5-1.36V17.93H175.2c10.5,0,17.55,5.08,17.55,12.67,0,8.4-5.76,12.2-11,13.55l13.48,15.79ZM167.41,39.74h4.47c5.76,0,8.81-3.18,8.81-8.88,0-5.35-2.85-7.93-8.81-7.93h-4.47Z"/><path class="cls-1" d="M199.59,41.64c0-14.77,9.82-24.73,25.68-24.73s25.68,10,25.68,24.73-9.82,24.73-25.68,24.73S199.59,56.48,199.59,41.64Zm38.89,0c0-9.69-3.25-19.17-13.21-19.17S212.05,32,212.05,41.64s3.25,19.17,13.21,19.17S238.48,51.33,238.48,41.64Z"/><path class="cls-1" d="M270.79,60.07l9.15,1.08v4.2H253.31v-4.2l5.62-1.36v-44l-5.62-1.36V10.41h24c15.31,0,22.9,5.28,22.9,16.13,0,11.18-8.33,17.41-23.1,17.41h-6.3Zm0-21.14h6.84c6.44,0,10.5-4.61,10.5-12.06,0-7.18-3.73-11.45-10.1-11.45h-7.25Z"/><path class="cls-1" d="M354.26,22l-4.95,1.36V47c0,12.87-7.79,19.38-20.05,19.38-13.62,0-20.73-7.86-20.73-20v-23L303.58,22V17.93h22V22l-5.08,1.36V47.74c0,7.25,4.34,12.06,11.45,12.06,6.84,0,11.25-4.47,11.25-11.31V23.35L338.14,22V17.93h16.12Z"/><path class="cls-1" d="M403.85,52.21c0,8.88-7.11,13.14-22,13.14H357.58v-4.2l5.56-1.36V23.35L358.26,22V17.93h23.92c12.6,0,19.51,3.79,19.51,11.72,0,6.17-4.06,9.08-10.91,9.89v.27C399.31,40.76,403.85,45.1,403.85,52.21ZM375,38.32h5.76c6.1,0,9-2.78,9-7.79,0-5.22-3.12-7.59-9-7.59H375Zm16.8,13.41c0-5.62-3.79-8.67-11.25-8.67H375V60.34h6.64C388.07,60.34,391.79,57.29,391.79,51.74Z"/><path class="cls-1" d="M451.07,48.62l-4.4,16.73H408v-4.2l5.28-1.36V23.35L407.65,22V17.93h22.76V22l-5.28,1.36v37l14.16-.81L447,47.26Z"/><path class="cls-1" d="M475.4,61.15v4.2H453v-4.2l5.28-1.36V23.35L453,22V17.93H475.4V22l-5.28,1.36V59.8Z"/><path class="cls-1" d="M478,41.78c0-15.85,12.13-24.86,27-24.86a35.6,35.6,0,0,1,18.29,5.15l-2,13.21h-4.2l-1.69-9.08a13.23,13.23,0,0,0-10.09-4.13c-9.15,0-14.7,6.57-14.7,18.22,0,13.21,6.84,19.31,15.24,19.31,6.17,0,10.23-3.39,13.41-9.55l4.27,2c-4.27,10-11.65,14.36-21.07,14.36C488.4,66.37,478,56.48,478,41.78Z"/><path class="cls-1" d="M574.24,61.15v4.2H551.48v-4.2L557,60l-2.85-8.13h-16.6l-3.12,8.2,5.42,1.15-.07,4.2-16.53-.07v-4.2l4.27-1.08,14.9-37.33-4-1.29V17.93h13.69L569.3,60Zm-27.57-31-.47-1.56-.47,1.56-6.23,16.73h12.94Z"/>
		</symbol>

		<!-- RSS -->
		<symbol id="icon-rss" viewbox="0 0 24 24">
			<title>RSS</title>
			<path d="M24,23.5a.5.5,0,0,1-.5.5H20a.5.5,0,0,1-.5-.5,18.88,18.88,0,0,0-.68-5.05,18.84,18.84,0,0,0-1.9-4.55,19.06,19.06,0,0,0-3-3.84,19.06,19.06,0,0,0-3.84-3,18.84,18.84,0,0,0-4.55-1.9A18.88,18.88,0,0,0,.5,4.5a.49.49,0,0,1-.36-.15A.49.49,0,0,1,0,4V.5A.49.49,0,0,1,.15.15.49.49,0,0,1,.5,0,23.23,23.23,0,0,1,6.74.84a23.3,23.3,0,0,1,5.62,2.36,23.69,23.69,0,0,1,4.75,3.69,23.69,23.69,0,0,1,3.69,4.75,23.3,23.3,0,0,1,2.36,5.62A23.23,23.23,0,0,1,24,23.5Zm-7.5,0a.5.5,0,0,1-.5.5H12.5a.5.5,0,0,1-.5-.5A11.27,11.27,0,0,0,11.09,19a11.52,11.52,0,0,0-2.45-3.67A11.52,11.52,0,0,0,5,12.91,11.27,11.27,0,0,0,.5,12a.49.49,0,0,1-.36-.15A.49.49,0,0,1,0,11.5V8a.49.49,0,0,1,.15-.36A.49.49,0,0,1,.5,7.5a15.83,15.83,0,0,1,4.24.57A15.94,15.94,0,0,1,8.58,9.68a16,16,0,0,1,3.23,2.51,16,16,0,0,1,2.51,3.23,15.94,15.94,0,0,1,1.61,3.83A15.83,15.83,0,0,1,16.5,23.5ZM6.41,17.59a3.79,3.79,0,0,1,0,5.32A3.62,3.62,0,0,1,3.75,24a3.62,3.62,0,0,1-2.66-1.09,3.79,3.79,0,0,1,0-5.32A3.62,3.62,0,0,1,3.75,16.5,3.62,3.62,0,0,1,6.41,17.59Z"/>
		</symbol>

		<!-- Search -->
		<symbol id="icon-search" viewbox="0 0 24 24">
			<title>Search</title>
			<path d="M10.48,1.21a9.06,9.06,0,0,1,9,0,9,9,0,0,1,3.28,3.28A8.8,8.8,0,0,1,24,9a8.8,8.8,0,0,1-1.21,4.52,9,9,0,0,1-3.28,3.28A8.8,8.8,0,0,1,15,18a8.7,8.7,0,0,1-4.8-1.39L3.42,23.41A2,2,0,0,1,2,24a1.93,1.93,0,0,1-1.42-.59,2,2,0,0,1,0-2.84L7.39,13.8A8.7,8.7,0,0,1,6,9,8.8,8.8,0,0,1,7.21,4.48,9,9,0,0,1,10.48,1.21Zm2.19,13.32a5.94,5.94,0,0,0,4.65,0,5.94,5.94,0,0,0,3.2-3.2,5.94,5.94,0,0,0,0-4.65,5.94,5.94,0,0,0-3.2-3.2,5.94,5.94,0,0,0-4.65,0,5.94,5.94,0,0,0-3.2,3.2,5.94,5.94,0,0,0,0,4.65,5.94,5.94,0,0,0,3.2,3.2Z"/>
		</symbol>

		<!-- Secure -->
		<symbol id="icon-secure" viewbox="0 0 24 24">
			<title>Secure</title>
			<path d="M19.5,10.5A1.5,1.5,0,0,1,21,12V22.5A1.5,1.5,0,0,1,19.5,24H4.5A1.5,1.5,0,0,1,3,22.5V12a1.5,1.5,0,0,1,1.5-1.5H6V6a5.84,5.84,0,0,1,.47-2.33A5.94,5.94,0,0,1,9.67.47a5.94,5.94,0,0,1,4.65,0,5.94,5.94,0,0,1,3.2,3.2A5.84,5.84,0,0,1,18,6v4.5ZM9,6v4.5h6V6a2.89,2.89,0,0,0-.88-2.12,3,3,0,0,0-4.24,0A2.89,2.89,0,0,0,9,6Z"/>
		</symbol>

		
		<!-- Twitter -->
		<symbol id="icon-twitter" viewbox="0 0 24 24">
			<title>Twitter</title>
			<path d="M24,4.55A9.88,9.88,0,0,1,21.55,7.1v.64a13.51,13.51,0,0,1-.42,3.3,15.87,15.87,0,0,1-1.2,3.22,13.16,13.16,0,0,1-2,2.92,14.5,14.5,0,0,1-2.73,2.37,12.7,12.7,0,0,1-3.49,1.6,14.57,14.57,0,0,1-4.17.59,13.69,13.69,0,0,1-7.56-2,7.81,7.81,0,0,0,1.17.08,8.52,8.52,0,0,0,3.21-.63,11.36,11.36,0,0,0,2.89-1.7,4.66,4.66,0,0,1-2.85-1A4.79,4.79,0,0,1,2.7,14.07,4.78,4.78,0,0,0,4.92,14,4.8,4.8,0,0,1,2.1,12.3,4.76,4.76,0,0,1,1,9.16V9.11a4.91,4.91,0,0,0,2.23.61A4.94,4.94,0,0,1,1.59,8,4.75,4.75,0,0,1,1,5.64a4.82,4.82,0,0,1,.67-2.39A13.69,13.69,0,0,0,6.14,6.81,14.18,14.18,0,0,0,11.8,8.3a5.16,5.16,0,0,1-.11-1.14,4.73,4.73,0,0,1,1.44-3.47,4.73,4.73,0,0,1,3.47-1.44A4.91,4.91,0,0,1,20.23,3.8a9.79,9.79,0,0,0,3.11-1.2,4.72,4.72,0,0,1-2.17,2.73A9.36,9.36,0,0,0,24,4.55Z"/>
		</symbol>

		<!-- WhatsApp -->
        <symbol id="icon-whatsapp" viewBox="0 0 25 24">
            <title>WhatsApp</title>
            <path d="M20.7589168,3.489665 C18.4736378,1.24305061 15.4401331,0.005702067 12.2036214,0 C5.53339105,0 0.110203805,5.33713471 0.104403605,11.8888097 C0.104403605,13.9871703 0.66122283,16.0285103 1.71685928,17.8360656 L0,24 L6.41502149,22.3464006 C8.18408258,23.2929437 10.1735513,23.7947256 12.1978212,23.7947256 L12.2036214,23.7947256 C12.2036214,23.7947256 12.2036214,23.7947256 12.2036214,23.7947256 C18.8680515,23.7947256 24.2970389,18.4575909 24.3028391,11.9002138 C24.3028391,8.72416251 23.0441957,5.7362794 20.7589168,3.489665 Z M12.2036214,21.787598 C10.3939589,21.787598 8.6248978,21.3086244 7.08204453,20.4076978 L6.71663191,20.1910192 L2.91170053,21.1717748 L3.92673558,17.5224519 L3.68892737,17.1461155 C2.67969252,15.572345 2.1518743,13.7533856 2.1518743,11.8888097 C2.1518743,6.43763364 6.66443011,2.00712758 12.2094216,2.00712758 C14.8949143,2.00712758 17.4180014,3.03920171 19.3204671,4.90377762 C21.2171326,6.7740556 22.2611686,9.25445474 22.2611686,11.8945118 C22.2553684,17.3513899 17.7428126,21.787598 12.2036214,21.787598 Z M17.7196118,14.380613 C17.4180014,14.2323592 15.9331501,13.5138988 15.6547405,13.4112616 C15.3763309,13.3143264 15.1733239,13.2630078 14.9761171,13.5595153 C14.7731101,13.8560228 14.1930901,14.5288667 14.019084,14.722737 C13.845078,14.9223093 13.6652718,14.9451176 13.3636614,14.7968639 C13.062051,14.6486101 12.0876174,14.3349964 10.9333775,13.3200285 C10.0343465,12.5331433 9.43112563,11.5580898 9.25131943,11.2615823 C9.07731342,10.9650748 9.23391882,10.805417 9.38472403,10.6571632 C9.51812864,10.5260157 9.68633445,10.3093371 9.83713965,10.1382751 C9.98794486,9.96721311 10.0401467,9.84176764 10.1387501,9.6421953 C10.2373535,9.44262295 10.1909519,9.27156094 10.1155493,9.1233072 C10.0401467,8.97505346 9.43692583,7.50962224 9.18171702,6.91660727 C8.93810861,6.33499644 8.6887,6.41482537 8.50309359,6.40912331 C8.32908758,6.39771917 8.12608057,6.39771917 7.92307356,6.39771917 C7.72006655,6.39771917 7.39525534,6.47184604 7.11684573,6.76835353 C6.83843611,7.06486101 6.06120928,7.78332145 6.06120928,9.24875267 C6.06120928,10.7141839 7.14584673,12.1225944 7.29665194,12.3221668 C7.44745714,12.5217391 9.42532543,15.5210264 12.4588302,16.8096935 C13.178055,17.1176051 13.7406744,17.3000713 14.1814897,17.4369209 C14.9065147,17.6650036 15.5619373,17.6307912 16.0839553,17.5566643 C16.6639754,17.4711333 17.870417,16.8382038 18.1256258,16.1425517 C18.3750344,15.4468995 18.3750344,14.8538845 18.2996318,14.7284391 C18.2242292,14.6029936 18.0212222,14.5288667 17.7196118,14.380613 Z"></path>
        </symbol>

		<!-- YouTube -->
		<symbol id="icon-youtube" viewbox="0 0 24 24">
			<title>YouTube</title>
			<path d="M24,12c0,8.5,0,8.5-12,8.5S0,20.5,0,12,0,3.5,12,3.5,24,3.5,24,12Zm-7.5,0L9,7.5v9Z"/>
		</symbol>

	</svg>
    


<div class="masthead-wrapper">

    <div class="masthead-inner content">

        <header role="banner" class="masthead">

            <nav class="org-nav" role="navigation" aria-label="Site Navigation">
                <ul>
                    <li class="org-nav-item main"><a href="https://www.propublica.org/">ProPublica</a></li>
                    <li class="org-nav-item local-initiatives"><a href="https://www.propublica.org/local-initiatives/">Local Initiatives</a></li>
                    <li class="org-nav-item data-store"><a href="https://www.propublica.org/datastore/">Data Store</a></li>
                </ul>
            </nav>
            <!-- end .org-nav -->

            <nav class="action-nav" aria-label="Action navigation">
                <ul>
                    <li class="action-nav-item donate">
                        <a href="https://www.propublica.org/donate">Donate</a>
                    </li>
                    <li class="action-nav-item social twitter">
                        <a href="https://twitter.com/propublica">
                            <svg class="icon" width="24" height="24">
                                <use xlink:href="#icon-twitter" />
                            </svg>
                            <span class="cta">Follow us on Twitter</span>
                        </a>
                    </li>
                    <li class="action-nav-item social facebook">
                        <a href="https://www.facebook.com/propublica">
                            <svg class="icon" width="24" height="24">
                                <use xlink:href="#icon-facebook" />
                            </svg>
                            <span class="cta">Like us on Facebook</span>
                        </a>
                    </li>
                    <li class="action-nav-item tools search">
                        <a href="https://www.propublica.org/search/" data-collapsible-target="#modal-search">
                            <svg class="icon" width="24" height="24">
                                <use xlink:href="#icon-search" />
                            </svg>
                            <span class="cta">Search</span>
                        </a>
                    </li>
                    <li class="action-nav-item tools newsletters">
                        <a href="https://www.propublica.org/newsletters/">
                            <svg class="icon" width="24" height="24">
                                <use xlink:href="#icon-add-email" />
                            </svg>
                            <span class="cta">Newsletters</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- end .action-nav -->

            <div class="masthead-inner-wrapper">
                <h1>
                    <a class="logo" href="https://www.propublica.org/" data-title="">
                        <svg id="propublica-wordmark" data-name="propublica-wordmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 574.24 75"><title>ProPublica logo</title><path class="cls-1" d="M66.4,13.48,66,14.91l6.23,11.45,1.15.47L75,26.29V75H50.95A41.2,41.2,0,0,0,62.13,46.88a40.61,40.61,0,0,0-3.39-16.26,45.17,45.17,0,0,1,7.79-4.95l1.69-.2.14-.41L65,18.83H64.5l-.88,1.29c-2.91,1.9-4.67,2.3-8.54,3.79A41.35,41.35,0,0,0,20.46,5.42,39.87,39.87,0,0,0,0,10.91V0H75V8.81ZM57.32,47A37.54,37.54,0,0,1,44.65,75H0V16A37,37,0,0,1,57.32,47ZM43.7,37.06c0-8.13-6-12-17.75-12H7.18v3.66l4.2.95V62.2l-4.2.95v3.73H27.85V63.14l-7.18-.95V50.14h5.15C37.26,50.14,43.7,45.53,43.7,37.06Zm-9.76.27c0,5.15-2.78,8.33-7.25,8.33h-6V29.47H27C31.37,29.47,33.94,32.32,33.94,37.33Z"/><path class="cls-1" d="M116.53,60.07l9.15,1.08v4.2H99.39v-4.2l5.28-1.36v-44l-5.28-1.36V10.41H123c15.31,0,22.9,5.28,22.9,16.13,0,11.18-8.33,17.41-23.1,17.41h-6.3Zm0-21.14h6.84c6.44,0,10.5-4.61,10.5-12.06,0-7.18-3.73-11.45-10.09-11.45h-7.25Z"/><path class="cls-1" d="M200.74,61.15v4.2H185.9l-16-20.6h-2.51v15l5.28,1.36v4.2H150.27v-4.2l5.28-1.36V23.35l-5-1.36V17.93H175.2c10.5,0,17.55,5.08,17.55,12.67,0,8.4-5.76,12.2-11,13.55l13.48,15.79ZM167.41,39.74h4.47c5.76,0,8.81-3.18,8.81-8.88,0-5.35-2.85-7.93-8.81-7.93h-4.47Z"/><path class="cls-1" d="M199.59,41.64c0-14.77,9.82-24.73,25.68-24.73s25.68,10,25.68,24.73-9.82,24.73-25.68,24.73S199.59,56.48,199.59,41.64Zm38.89,0c0-9.69-3.25-19.17-13.21-19.17S212.05,32,212.05,41.64s3.25,19.17,13.21,19.17S238.48,51.33,238.48,41.64Z"/><path class="cls-1" d="M270.79,60.07l9.15,1.08v4.2H253.31v-4.2l5.62-1.36v-44l-5.62-1.36V10.41h24c15.31,0,22.9,5.28,22.9,16.13,0,11.18-8.33,17.41-23.1,17.41h-6.3Zm0-21.14h6.84c6.44,0,10.5-4.61,10.5-12.06,0-7.18-3.73-11.45-10.1-11.45h-7.25Z"/><path class="cls-1" d="M354.26,22l-4.95,1.36V47c0,12.87-7.79,19.38-20.05,19.38-13.62,0-20.73-7.86-20.73-20v-23L303.58,22V17.93h22V22l-5.08,1.36V47.74c0,7.25,4.34,12.06,11.45,12.06,6.84,0,11.25-4.47,11.25-11.31V23.35L338.14,22V17.93h16.12Z"/><path class="cls-1" d="M403.85,52.21c0,8.88-7.11,13.14-22,13.14H357.58v-4.2l5.56-1.36V23.35L358.26,22V17.93h23.92c12.6,0,19.51,3.79,19.51,11.72,0,6.17-4.06,9.08-10.91,9.89v.27C399.31,40.76,403.85,45.1,403.85,52.21ZM375,38.32h5.76c6.1,0,9-2.78,9-7.79,0-5.22-3.12-7.59-9-7.59H375Zm16.8,13.41c0-5.62-3.79-8.67-11.25-8.67H375V60.34h6.64C388.07,60.34,391.79,57.29,391.79,51.74Z"/><path class="cls-1" d="M451.07,48.62l-4.4,16.73H408v-4.2l5.28-1.36V23.35L407.65,22V17.93h22.76V22l-5.28,1.36v37l14.16-.81L447,47.26Z"/><path class="cls-1" d="M475.4,61.15v4.2H453v-4.2l5.28-1.36V23.35L453,22V17.93H475.4V22l-5.28,1.36V59.8Z"/><path class="cls-1" d="M478,41.78c0-15.85,12.13-24.86,27-24.86a35.6,35.6,0,0,1,18.29,5.15l-2,13.21h-4.2l-1.69-9.08a13.23,13.23,0,0,0-10.09-4.13c-9.15,0-14.7,6.57-14.7,18.22,0,13.21,6.84,19.31,15.24,19.31,6.17,0,10.23-3.39,13.41-9.55l4.27,2c-4.27,10-11.65,14.36-21.07,14.36C488.4,66.37,478,56.48,478,41.78Z"/><path class="cls-1" d="M574.24,61.15v4.2H551.48v-4.2L557,60l-2.85-8.13h-16.6l-3.12,8.2,5.42,1.15-.07,4.2-16.53-.07v-4.2l4.27-1.08,14.9-37.33-4-1.29V17.93h13.69L569.3,60Zm-27.57-31-.47-1.56-.47,1.56-6.23,16.73h12.94Z"/></svg>
                    </a>
                </h1>
                <!-- end .logo -->

                <nav class="primary-nav" aria-label="Primary navigation">
                    <ul>
                        <li class="primary-nav-item news-apps squelch"><a href="https://www.propublica.org/newsapps/">Graphics &amp; Data</a></li>
                        <li class="primary-nav-item newsletters"><a href="https://www.propublica.org/newsletters/">Newsletters</a></li>
                        <li class="primary-nav-item about"><a href="https://www.propublica.org/about/">About</a></li>
                    </ul>
                </nav>
                <!-- end .primary-nav -->

                <div class="email-nav">
                    <form class="ajax-form" action="https://signup.propublica.org/newsletter/turing" method="post" id="newsletter-header-form">
                        <div class="input-wrapper">
                        	<label for="pp-email-signup--lead" class="a11y">Email Address</label>
                            <input class="text subscribe-email-text" type="email" placeholder="Get the Big Story" id="pp-email-signup--lead" name="email" onfocus="recaptchaInit()" />
                            <input id="newsletter-signup-header" class="btn subscribe-email-btn g-recaptcha" type="submit" value="Join" />
                            <input type="hidden" name="target" value="l/125411/2018-11-01/5vd2wz" />
                            <input type="hidden" name="stlist" value="The Big Story" />
                            <input type="hidden" name="source" value="https://www.propublica.org/" />
                            <input type="hidden" name="placement" value="main-nav" />
                            <input type="hidden" name="region" value="national" />
                            <input type="hidden" name="success_location" value="https://www.propublica.org/forms/thankyou" />
                            <input type="hidden" name="origin_location" value="https://v3-www.propublica.org/shell" />
                            <input type="hidden" name="error_location" value="https://www.propublica.org/forms/error" />
                            <svg class="icon">
                                <use xlink:href="#icon-add-email" />
                            </svg>
                        </div>
                    </form>
                </div>
                <!-- end .email-nav -->

            </div>
            <!-- end .masthead-inner-wrapper -->

            <nav class="secondary-nav" aria-label="Topuc navigation">
                 
                
                                                
                
                <ul class="topics-nav">
                                                        <li class="topics-nav-item">
                        <a href="https://www.propublica.org/topics/racial-justice">
                            <svg class="topic-icon" viewBox="0 0 15 15"><path d="M15,12.23v0L14,4.55l.24.06.11,0a.38.38,0,0,0,.36-.27.38.38,0,0,0-.25-.47c-.19-.06-.39-.1-.59-.15a.38.38,0,0,0-.29-.26.37.37,0,0,0-.28.11c-.6-.15-1.21-.28-1.82-.39V1.29A1.29,1.29,0,0,0,10.17,0,1.32,1.32,0,0,0,9.11.57a1.37,1.37,0,0,0-2,.26A1.3,1.3,0,0,0,6.23.51a1.32,1.32,0,0,0-1.12.66A1.13,1.13,0,0,0,4.46,1,1.19,1.19,0,0,0,3.27,2.14V3.25c-.53.1-1,.21-1.57.34a.37.37,0,0,0-.28-.11.38.38,0,0,0-.29.26c-.19,0-.39.09-.58.15a.38.38,0,0,0-.25.47.38.38,0,0,0,.36.27l.11,0L1,4.55,0,12.21v0A2.67,2.67,0,0,0,2.6,15a2.67,2.67,0,0,0,2.57-2.73h0a.19.19,0,0,0,0-.07.13.13,0,0,0,0-.06h0L2,4.27c.41-.1.82-.18,1.24-.25v.37a4,4,0,0,0-.12,1A3.93,3.93,0,0,0,5.21,8.81v1.77a.38.38,0,1,0,.75,0v-2a.39.39,0,0,0-.21-.34A3.19,3.19,0,0,1,3.9,5.39a1.18,1.18,0,0,0,.56.16,1.2,1.2,0,0,0,.8-.32,1.35,1.35,0,0,0,1,.43,1.29,1.29,0,0,0,1-.44,1.29,1.29,0,0,0,.6.32,3.58,3.58,0,0,0-.89.85.37.37,0,0,0,.3.59.39.39,0,0,0,.31-.15A2.81,2.81,0,0,1,9.76,5.61a.38.38,0,0,0,0-.75H8.14a.59.59,0,0,1-.58-.59v-.5h2.82a.73.73,0,0,1,.75.71v.89A3.19,3.19,0,0,1,9.28,8.24a.39.39,0,0,0-.21.34v2a.38.38,0,1,0,.75,0V8.81a3.93,3.93,0,0,0,2.06-3.44V4.48A1.33,1.33,0,0,0,11.8,4c.4.07.79.15,1.18.24L9.87,12.11h0a.13.13,0,0,0,0,.06.25.25,0,0,0,0,.07h0A2.67,2.67,0,0,0,12.41,15,2.67,2.67,0,0,0,15,12.25ZM1.65,5.35l2.59,6.53H.83Zm1,8.9A1.88,1.88,0,0,1,.81,12.63H4.39A1.88,1.88,0,0,1,2.6,14.25ZM4.9,4.36a.44.44,0,0,1-.44.44A.44.44,0,0,1,4,4.36V2.14a.44.44,0,0,1,.44-.44.44.44,0,0,1,.44.44Zm1.91,0a.58.58,0,1,1-1.16,0V2.14a.7.7,0,0,0,0-.14.4.4,0,0,0,0-.15.58.58,0,1,1,1.16,0Zm.73-2.58a.43.43,0,0,0,0-.11.65.65,0,1,1,1.29,0V3H7.56V1.85S7.54,1.78,7.54,1.74ZM9.6,3V1.63s0,0,0-.06,0,0,0,0V1.29a.57.57,0,0,1,1.14,0V3.07a1.49,1.49,0,0,0-.36,0Zm4.58,8.86H10.77l2.59-6.53Zm-1.77,2.37a1.89,1.89,0,0,1-1.79-1.62H14.2A1.88,1.88,0,0,1,12.41,14.25Z"/></svg>                            Racial Justice
                        </a>
                    </li>
                    
                                                                                                                                                                <li class="topics-nav-item">
                                <a href="https://www.propublica.org/topics/politics">
                                    <svg class="topic-icon" viewBox="0 0 15 15"><path d="M12.54,14.89h-10a.38.38,0,0,1-.38-.37V11a.38.38,0,0,1,.38-.38h10a.38.38,0,0,1,.38.38v3.55A.38.38,0,0,1,12.54,14.89Zm-9.66-.75h9.29v-2.8H2.88Z"/><path d="M14.52,14.89H.53a.38.38,0,0,1,0-.75h14a.38.38,0,0,1,0,.75Z"/><path d="M11.71,11.35H3.34A.37.37,0,0,1,3,11V8.7a.38.38,0,0,1,.37-.38h8.37a.37.37,0,0,1,.37.38V11A.36.36,0,0,1,11.71,11.35Zm-8-.75h7.61V9.07H3.72Z"/><path d="M8.36,5.11A.38.38,0,0,1,8,4.73V3.42H7.07V4.73a.38.38,0,1,1-.75,0V3a.37.37,0,0,1,.37-.37H8.36A.37.37,0,0,1,8.73,3V4.73A.38.38,0,0,1,8.36,5.11Z"/><path d="M3.84,13.79a.38.38,0,0,1-.38-.37V12.25a.38.38,0,0,1,.75,0v1.17A.38.38,0,0,1,3.84,13.79Z"/><path d="M5.31,13.79a.38.38,0,0,1-.37-.37V12.25a.38.38,0,0,1,.75,0v1.17A.38.38,0,0,1,5.31,13.79Z"/><path d="M6.79,13.79a.37.37,0,0,1-.37-.37V12.25a.36.36,0,0,1,.37-.37.37.37,0,0,1,.38.37v1.17A.38.38,0,0,1,6.79,13.79Z"/><path d="M8.27,13.79a.38.38,0,0,1-.38-.37V12.25a.37.37,0,0,1,.38-.37.36.36,0,0,1,.37.37v1.17A.37.37,0,0,1,8.27,13.79Z"/><path d="M9.75,13.79a.38.38,0,0,1-.38-.37V12.25a.38.38,0,0,1,.75,0v1.17A.38.38,0,0,1,9.75,13.79Z"/><path d="M11.22,13.79a.38.38,0,0,1-.37-.37V12.25a.38.38,0,0,1,.75,0v1.17A.38.38,0,0,1,11.22,13.79Z"/><path d="M7.53,3.42A.37.37,0,0,1,7.16,3V.48A.37.37,0,0,1,7.53.11a.38.38,0,0,1,.38.37V3A.38.38,0,0,1,7.53,3.42Z"/><path d="M11.72,9.06a.38.38,0,0,1-.38-.37A3.74,3.74,0,0,0,7.53,5,3.74,3.74,0,0,0,3.72,8.69a.38.38,0,0,1-.75,0A4.49,4.49,0,0,1,7.53,4.28a4.49,4.49,0,0,1,4.56,4.41A.37.37,0,0,1,11.72,9.06Z"/></svg>                                    Politics
                                </a>
                            </li>
                                            
                                                                                                                                            <li class="topics-nav-item">
                                <a href="https://www.propublica.org/topics/criminal-justice">
                                    <svg class="topic-icon" viewBox="0 0 15 15"><path d="M13.48,4h-.11A20.22,20.22,0,0,0,1.76,4a.38.38,0,0,1-.47-.26.37.37,0,0,1,.25-.46,21,21,0,0,1,12.05,0,.37.37,0,0,1-.11.73Z"/><path d="M10.53,15h-6a.38.38,0,1,1,0-.75h6a.38.38,0,0,1,0,.75Z"/><path d="M7.5,15a.37.37,0,0,1-.37-.38V.42A.37.37,0,0,1,7.5,0a.38.38,0,0,1,.38.38V14.6A.38.38,0,0,1,7.5,15Z"/><path d="M5.39,9.89H.46a.37.37,0,0,1-.31-.16.36.36,0,0,1,0-.35L2.57,3.16a.38.38,0,0,1,.35-.24h0a.38.38,0,0,1,.35.23L5.74,9.38a.36.36,0,0,1,0,.35A.37.37,0,0,1,5.39,9.89ZM1,9.14H4.84L2.92,4.31Z"/><path d="M14.6,9.89H9.67a.37.37,0,0,1-.31-.16.36.36,0,0,1,0-.35l2.46-6.22a.38.38,0,0,1,.35-.24h0a.37.37,0,0,1,.35.23L15,9.38a.36.36,0,0,1,0,.35A.37.37,0,0,1,14.6,9.89Zm-4.38-.75h3.83L12.13,4.31Z"/><path d="M2.92,11.75A3,3,0,0,1,.1,9.62a.36.36,0,0,1,.06-.33.38.38,0,0,1,.3-.15H5.39a.38.38,0,0,1,.3.15.39.39,0,0,1,.06.33A3,3,0,0,1,2.92,11.75ZM1,9.89A2.21,2.21,0,0,0,2.92,11,2.22,2.22,0,0,0,4.83,9.89Z"/><path d="M12.13,11.75A3,3,0,0,1,9.3,9.62a.39.39,0,0,1,.06-.33.38.38,0,0,1,.3-.15h4.93a.38.38,0,0,1,.3.15.36.36,0,0,1,.06.33A3,3,0,0,1,12.13,11.75ZM10.22,9.89a2.19,2.19,0,0,0,3.81,0Z"/></svg>                                    Criminal Justice
                                </a>
                            </li>
                                            
                                                                                                                                            <li class="topics-nav-item">
                                <a href="https://www.propublica.org/topics/environment">
                                    <svg class="topic-icon" viewBox="0 0 15 15"><path d="M7.52,9.81c-1.63,0-3-1.84-3-4.11S7.12.34,7.23.21a.38.38,0,0,1,.58,0c.11.13,2.67,3.31,2.67,5.49S9.15,9.81,7.52,9.81Zm0-8.75c-.66.88-2.21,3.13-2.21,4.64,0,1.85,1,3.36,2.21,3.36S9.73,7.55,9.73,5.7C9.73,4.19,8.18,1.94,7.52,1.06Z"/><path d="M7.52,15a.37.37,0,0,1-.37-.37V9.44a.37.37,0,0,1,.37-.38.38.38,0,0,1,.38.38V14.6A.38.38,0,0,1,7.52,15Z"/><path d="M4.81,14.4A4.37,4.37,0,0,1,1.86,13C.47,11.63.07,8,.05,7.81A.39.39,0,0,1,.16,7.5a.36.36,0,0,1,.3-.11c.16,0,3.84.42,5.23,1.81h0c1.48,1.48,1.81,3.49.74,4.57a2.25,2.25,0,0,1-1.61.63ZM.86,8.2c.15,1,.59,3.36,1.53,4.3a3.61,3.61,0,0,0,2.42,1.15h0a1.57,1.57,0,0,0,1.09-.41c.76-.77.43-2.34-.74-3.51h0C4.29,8.86,2.08,8.38.86,8.2Z"/><path d="M10.21,14.42a2.28,2.28,0,0,1-1.63-.63c-1.06-1.08-.74-3.09.74-4.57h0c1.4-1.38,5.07-1.79,5.23-1.81a.38.38,0,0,1,.41.41c0,.16-.41,3.83-1.81,5.23A4.31,4.31,0,0,1,10.21,14.42ZM9.85,9.75c-1.16,1.17-1.49,2.74-.73,3.51s2.33.43,3.5-.74c.94-.94,1.38-3.29,1.53-4.3C13.14,8.38,10.79,8.82,9.85,9.75Z"/></svg>                                    Environment
                                </a>
                            </li>
                                            
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                                        <li class="topics-nav-item more"><a href="https://www.propublica.org/topics/">More…</a></li>
                </ul>
                <!-- end .topics-nav -->

                <ul class="extras-nav">
                    <li class="extras-nav-item series"><a href="https://www.propublica.org/series/">Series</a></li>
                    <li class="extras-nav-item video"><a href="https://www.propublica.org/video/">Video</a></li>
                    <li class="extras-nav-item impact"><a href="https://www.propublica.org/impact/">Impact</a></li>
                    <li class="extras-nav-item search">
                        <a href="https://www.propublica.org/search" data-collapsible-target="#modal-search">
                            <svg class="icon" width="24" height="24">
                                <use xlink:href="#icon-search" />
                            </svg>
                            <span class="cta">Search</span>
                        </a>
                    </li>
                    <li nav class="extras-nav-item more">
                        <a href="#footer-links" data-collapsible-target="#nav-menu">
                            <span class="cta">More</span>
                            <svg class="icon" width="24" height="24">
                                <use xlink:href="#icon-nav-menu" />
                            </svg>
                        </a>
                    </li>
                </ul>
                <!-- end .extras-nav -->

            </nav>
            <!-- end .secondary-nav -->

        </header>
        <!-- end .masthead -->
    </div>
</div>
<!-- end .masthead-wrap -->

    
<main role="main" class="content" id="main" tabindex="-1">
	<div id="content-top"></div>

	
	<div id="level1">
		<!-- CONTENT-HERE -->
					<div class="wrapper">
	<h1 style="font-size: 2.625rem; line-height: 1.1; font-family:tiempos text,serif;font-weight:700">Page Not Found</h1>
	<p style="line-height: 1.625; margin-top: 1em; margin-bottom: 1em">We're sorry, but we couldn't find the page you were looking for. You can <a href="https://www.propublica.org/search?qss=">try to search for the page you wanted</a>, or <a href="https://www.propublica.org/">go to the home page</a>.</p>
	<p style="font-size:100px">🔎</p>
</div>
			</div><!-- end #level1 -->

	
	
</main><!-- end .content -->


    <div id="modal-search" class="modal collapsible collapsible-collapsed">

    <div class="collapsible-header close-btn ">
        <svg class="icon" width="24" height="24">
            <use xlink:href="#icon-close-light" />
        </svg>
        <span class="a11y">Close this screen</span>
    </div>
    <!-- end .collapsible-header -->

    <div class="collapsible-content content">
        <form class="nav-site-search" action="https://www.propublica.org/search" method="get">
            <label class="a11y hed-form hed-site-search">Search ProPublica:</label>
            <div class="input-wrapper reverse">
                <input placeholder="Search ProPublica" class="text nav-site-search-text" type="search" value="" name="qss" />
                <input type="submit" value="Search" />
            </div>
        </form>
    </div>
    <!-- end .collapsible-content -->

</div>
<!-- end #modal-search -->
    <div id="modal-republish" class="modal collapsible collapsible-collapsed">

    <div class="collapsible-header close-btn">
        <svg class="icon" width="24" height="24">
            <use xlink:href="#icon-close-light" />
        </svg>
        <span class="a11y">Close this screen</span>
    </div>
    <!-- end .collapsible-header -->

    <div class="collapsible-content content">

        <div class="wrapper">

            <h3>Republish This Story for Free</h3>
            <p class="license"><a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/3.0/">Creative Commons License (CC BY-NC-ND 3.0)</a></p>

            <div class="republish-instructions">

                <h3 class="title"></h3>
                <p class="byline"></p>

                <p class="intro">Thank you for your interest in republishing this story. You are are free to republish it so long as you do the following:</p>
                <ul>

                    <li>You have to credit <em>ProPublica and any co-reporting partners</em>. In the byline, we prefer “Author Name, Publication(s).” At the top of the text of your story, include a line that reads: “This story was originally published by ProPublica.” You must link the word “ProPublica” to the original URL of the story.</li>

                    <li>If you’re republishing online, you must link to the URL of this story on propublica.org, include all of the links from our story, including our newsletter sign up language and link, and use our <a href="https://www.propublica.org/pixelping">PixelPing tag</a>.</li>

                    <li>If you use canonical metadata, please use the ProPublica URL. For more information about canonical metadata, <a href="https://support.google.com/webmasters/answer/139066?hl=en">refer to this Google SEO link</a>.</li>

                    <li>You can’t edit our material, except to reflect relative changes in time, location and editorial style. (For example, “yesterday” can be changed to “last week,” and “Portland, Ore.” to “Portland” or “here.”)</li>

                    <li>You cannot republish our photographs or illustrations without specific permission. Please contact <a href="https://www.propublica.org/cdn-cgi/l/email-protection#3f525a5b565e4d5658574b4c7f4f4d504f4a5d53565c5e11504d58"><span class="__cf_email__" data-cfemail="2d404849444c5f444a45595e6d5d5f425d584f41444e4c03425f4a">[email&#160;protected]</span></a>.</li>

                    <li>It’s okay to put our stories on pages with ads, but not ads specifically sold against our stories. You can’t state or imply that donations to your organization support ProPublica’s work.</li>

                    <li>You can’t sell our material separately or syndicate it. This includes publishing or syndicating our work on platforms or apps such as Apple News, Google News, etc.</li>

                    <li>You can’t republish our material wholesale, or automatically; you need to select stories to be republished individually. (To inquire about syndication or licensing opportunities, contact <a href="https://www.propublica.org/cdn-cgi/l/email-protection#305c5953555e43595e577040425f4045525c5953511e5f4257"><span class="__cf_email__" data-cfemail="54383d37313a273d3a331424263b242136383d37357a3b2633">[email&#160;protected]</span></a>.)</li>

                    <li>You can’t use our work to populate a website designed to improve rankings on search engines or solely to gain revenue from network-based advertisements.</li>

                    <li>We do not generally permit translation of our stories into another language.</li>

                    <li>Any website our stories appear on must include a prominent and effective way to contact you.</li>

                    <li>If you share republished stories on social media, we’d appreciate being tagged in your posts. We have official accounts for ProPublica on <a href="https://twitter.com/propublica">Twitter</a>, <a href="https://www.facebook.com/propublica">Facebook</a> and <a href="https://www.instagram.com/propublica/">Instagram</a>.</li>

                </ul>
            </div>
            <!-- end .republish-content -->

            <div class="republish-copy">
                <p>Copy and paste the following into your page to republish:</p>
            </div>
            <!-- end .republish-copy -->

        </div>
        <!-- end .wrapper -->

    </div>
    <!-- end .collapsible-content -->

</div>
<!-- end #modal-republish -->
    <div id="nav-menu" class="modal collapsible collapsible-collapsed">

    <div class="collapsible-header close-btn">
        <svg class="icon" width="24" height="24">
            <use xlink:href="#icon-close-light" />
        </svg>
        <span class="a11y">Close this menu</span>
    </div>

    <div class="collapsible-content">

        <nav class="primary-nav">
            <ul>
                <li class="primary-nav-item news-apps"><a href="https://www.propublica.org/newsapps/">Graphics &amp; Data</a></li>
                <li class="primary-nav-item topics"><a href="https://www.propublica.org/topics/">Topics</a></li>
                <li class="primary-nav-item series"><a href="https://www.propublica.org/series/">Series</a></li>
                <li class="primary-nav-item videos"><a href="https://www.propublica.org/video/">Videos</a></li>
                <li class="primary-nav-item impact"><a href="https://www.propublica.org/impact/">Impact</a></li>
            </ul>
        </nav><!-- end .primary-nav -->

        <nav class="org-nav">
            <ul>
                <li class="org-nav-item main"><a href="https://www.propublica.org/">ProPublica</a></li>
                <li class="org-nav-item local-initiatives"><a href="https://www.propublica.org/local-initiatives/">Local Initiatives</a></li>
                <li class="org-nav-item data-store"><a href="https://www.propublica.org/datastore/">Data Store</a></li>
            </ul>
        </nav><!-- end .org-nav -->

        <nav class="action-nav">
            <p>Follow Us:</p>
            <ul>
                <li class="action-nav-item social facebook">
                    <a href="https://www.facebook.com/propublica">
                        <svg class="icon" width="24" height="24">
                            <use xlink:href="#icon-facebook" />
                        </svg>
                        <span class="cta">Like us on Facebook</span>
                    </a>
                </li>
                <li class="action-nav-item social twitter">
                    <a href="https://twitter.com/propublica">
                        <svg class="icon" width="24" height="24">
                            <use xlink:href="#icon-twitter" />
                        </svg>
                        <span class="cta">Follow us on Twitter</span>
                    </a>
                </li>
            </ul>
        </nav><!-- end .action-nav -->

    </div><!-- end .modal-inner -->

</div><!-- end .modal -->

    
<style>

    /* re-assert som CSS Custom Properties from v5 */
    .admin-shortcuts {
        --fonts-sans: "Graphik", sans-serif;
        --scale0: 1rem;
        --scale-1: 13px;
        --scale-2: 11px;
        --scale-3: 9px;
        --spacing-2: 4px;
        --spacing-1: 8px;
        --spacing0: 16px;
        --spacing1: 24px;
        --spacing2: 32px;
        --spacing3: 64px;
    }

    .admin-shortcuts {
        position: fixed;
        z-index: 10000;
        bottom: 0;
        right: var(--spacing0);
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        gap: var(--spacing0);
        padding: var(--spacing-1) var(--spacing0);
        background-color: black;
        color: white;
        font-size: var(--scale-1);
        font-family: var(--fonts-sans);
        border-radius: 0.25rem 0.25rem 0 0;
    }

    .admin-shortcuts__link {
        display: inline-block;
        text-decoration: none;
        color: inherit;
        display: flex;
        gap: 0.33em;
    }

    .admin-shortcuts__user:before {
        content: "";
        width: 0.66em;
        height: 0.66em;
        border-radius: 100%;
        background-color: #14b84f; /* green 50 */
    }

    .admin-shortcuts__user {
        padding-right: calc(var(--spacing-2) * 4);
        border-right: 1px solid hsla(0, 0%, 100%, 0.2);
    }

    .admin-shortcuts__user:before,
    .admin-shortcuts__icon {
        align-self: center;
    }

    .admin-shortcuts__icon {
        width: 1.1em;
        height: 1.1em;
    }
</style>


    <!-- jQuery/Legacy JS -->
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="https://www.propublica.org/js/public/assets/all.js"></script>
    <script src="https://assets.propublica.org/static/prod/v4/js/main.5b15f1db.js"></script>

    <script src="https://www.propublica.org/js/public/assets/beacons.js"></script>
  <script id="parsely-cfg" src="//cdn.parsely.com/keys/propublica.org/p.js"></script>

    <!-- FOOTER -->

<footer role="contentinfo">

    <div class="newsletter">
        <div class="site-footer-inner">
            <form class="ajax-form subscribe-email" action="https://signup.propublica.org/newsletter/turing" method="post" >
                <h2 class="pp-module-title" id="digest-title">Stay informed with the Daily Digest.</h2>
                <div role="group" class="form-wrap" aria-describedby="digest-title">
                    <label for="pp-email-signup--full" class="a11y">Enter your email</label>
                    <input class="text subscribe-email-text" type="email" placeholder="Enter your email" id="pp-email-signup--full" name="email" onfocus="recaptchaInit()" />
                    <input id="newsletter-signup-footer" class="btn subscribe-email-btn g-recaptcha" type="submit" value="Sign Up" />
                    <input type="hidden" name="target" value="l/125411/2018-11-01/5vd35q" />
                    <input type="hidden" name="stlist" value="The Daily Digest" />
                    <input type="hidden" name="source" value="https://www.propublica.org/" />
                    <input type="hidden" name="placement" value="site-wide-footer" />
                    <input type="hidden" name="region" value="national" />
                    <input type="hidden" name="success_location" value="https://www.propublica.org/forms/thankyou" />
                    <input type="hidden" name="error_location" value="https://www.propublica.org/forms/error" />
                    <input type="hidden" name="origin_location" value="https://v3-www.propublica.org/shell" />
                </div>
            </form><!-- end .subscribe-email -->
        </div>
    </div><!-- end .newsletter -->

    <div class="site-footer-inner">

      <nav id="footer-links" aria-labelledby="footer-nav">
        <h2 id="footer-nav" class="a11y">Site Navigation</h2>
        <div>
          <div class="collapsible collapsible-collapsed collapsible-expandwhenwide" data-collapsible-set="footer-links">
              <h3>Sections</h3>
              <ul>
                  <li><a href="https://www.propublica.org/">ProPublica</a></li>
                  <li><a href="https://www.propublica.org/local-reporting-network/">Local Reporting Network</a></li>
                  <li><a href="https://www.propublica.org/texas/">Texas Tribune Partnership</a></li>
                  <li><a href="https://www.propublica.org/datastore/">The Data Store</a></li>
                  <li><a href="https://www.propublica.org/electionland/">Electionland</a></li>
              </ul>
          </div>
          <div class="collapsible collapsible-collapsed collapsible-expandwhenwide" data-collapsible-set="footer-links">
              <h3>Browse by Type</h3>
              <ul>
                  <li><a href="https://www.propublica.org/topics/">Topics</a></li>
                  <li><a href="https://www.propublica.org/series/">Series</a></li>
                  <li><a href="https://www.propublica.org/video/">Videos</a></li>
                  <li><a href="https://www.propublica.org/newsapps/">News Apps</a></li>
                  <li><a href="https://www.propublica.org/getinvolved/">Get Involved</a></li>
                  <li><a href="https://www.propublica.org/nerds/">The Nerd Blog</a></li>
                  <li><a href="https://www.propublica.org/atpropublica/">@ProPublica</a></li>
                  <li><a href="https://www.propublica.org/events/">Events</a></li>
              </ul>
          </div>
        </div>

        <div>
          <div class="collapsible collapsible-collapsed collapsible-expandwhenwide" data-collapsible-set="footer-links">
              <h3>Info</h3>
              <ul>
                  <li><a href="https://www.propublica.org/about/">About Us</a></li>
                  <li><a href="https://www.propublica.org/leadership/">Board and Advisors</a></li>
                  <li><a href="https://www.propublica.org/staff/">Officers and Staff</a></li>
                  <li><a href="https://www.propublica.org/diversity/">Diversity</a></li>
                  <li><a href="https://www.propublica.org/jobs/">Jobs</a> and <a href="https://www.propublica.org/fellowships/">Fellowships</a></li>
                  <li><a href="https://www.propublica.org/local-initiatives/">Local Initiatives</a></li>
                  <li><a href="https://www.propublica.org/media-center/">Media Center</a></li>
                  <li><a href="https://www.propublica.org/reports/">Reports</a></li>
                  <li><a href="https://www.propublica.org/impact/">Impact</a></li>
                  <li><a href="https://www.propublica.org/awards/">Awards</a></li>
                  <li><a href="https://www.propublica.org/corrections/">Corrections</a></li>
              </ul>
          </div>
          <div class="collapsible collapsible-collapsed collapsible-expandwhenwide" data-collapsible-set="footer-links">
              <h3>Policies</h3>
              <ul>
                  <li><a href="https://www.propublica.org/code-of-ethics/">Code of Ethics</a></li>
                  <li><a href="https://www.propublica.org/advertising/">Advertising Policy</a></li>
                  <li><a href="https://www.propublica.org/legal/">Privacy Policy</a></li>
              </ul>
          </div>
        </div>

        <div>
          <div class="collapsible collapsible-collapsed collapsible-expandwhenwide" data-collapsible-set="footer-links">
              <h3>Follow</h3>
              <ul>
                  <li><a href="https://www.propublica.org/newsletters/">Newsletters</a></li>
                  <li><a href="https://www.propublica.org/series/trump-inc/">Podcast</a></li>
                  <li><a href="https://itunes.apple.com/us/app/propublica/id355298887?mt=8">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.propublica&hl=en">Android</a></li>
                  <li><a href="https://www.propublica.org/feeds/propublica/main">RSS Feed</a></li>
              </ul>
          </div>
          <div class="collapsible collapsible-collapsed collapsible-expandwhenwide" data-collapsible-set="footer-links">
              <h3>More</h3>
              <ul>
                  <li><a href="https://www.propublica.org/tips/">Send Us Tips</a></li>
                  <li><a href="https://www.propublica.org/steal-our-stories/">Steal Our Stories</a></li>
                  <li><a href="http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion">Browse via Tor</a></li>
                  <li><a href="https://www.propublica.org/contact/">Contact Us</a></li>
                  <li><a href="https://propublica.org/donate/">Donate</a></li>
                  <li><a href="https://www.propublica.org/support/other-ways-to-give/">More Ways to Give</a></li>
              </ul>
          </div>
        </div>

      </nav>

      <div class="site-copyright">
        <a class="logo" href="https://www.propublica.org/">
          <svg role="img" width="574" height="75">
            <use xlink:href="#propublica-logo" />
            <text class="a11y">ProPublica</text>
          </svg>
        </a>
        <p class="slogan">Journalism in the Public&nbsp;Interest</p>
        <small>&copy; Copyright 2024 Pro Publica Inc.</small>
      </div>

    </div><!-- end .site-footer-inner -->

</footer>

<!-- anchors used by `aria-describedby` states -->
<div id="wayfinding" class="squelch">
    <span id="current-site">Current site</span>
    <span id="current-page">Current page</span>
</div>

    <script
    data-syndicate
    src="https://assets.propublica.org/static/prod/v4/js/deploy/syndicated-newsletter-v1.1.0.js"
    data-delay="0"
    data-endpoint="https://www.propublica.org/partials/newsletter-roadblock-big-story.html"
    data-stylesheet="https://assets.propublica.org/static/prod/v4/css/deploy/syndicated-newsletter.css"
    data-target="l/125411/2019-04-26/6m938v">
</script>

<!-- END FOOTER -->

    <script src='https://www.google.com/recaptcha/api.js?onload=grecaptchaLoaded&render=6LdI1rAUAAAAACI0GsFv-yRpC0tPF5ECiIMDUz2x'></script>

<script type="application/ld+json">{"@context":"http://schema.org","@graph":[{"@type":"WebSite","author":{"@id":"https://www.propublica.org#identity"},"copyrightHolder":{"@id":"https://www.propublica.org#identity"},"creator":{"@id":"#creator"},"description":"ProPublica is an independent, non-profit newsroom that produces investigative journalism in the public interest.","image":{"@type":"ImageObject","url":"https://assets.propublica.org/2017-pp-open-graph-1200x630.jpg"},"mainEntityOfPage":"https://www.propublica.org/shell","name":"ProPublica","url":"https://www.propublica.org/shell"},{"@id":"https://www.propublica.org#identity","@type":"NewsMediaOrganization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"New York","addressRegion":"NY","postalCode":"10013","streetAddress":"155 Avenue of the Americas, 13th Floor"},"description":"ProPublica is an independent, non-profit newsroom that produces investigative journalism in the public interest.","email":"info@propublica.org","name":"ProPublica","sameAs":["https://twitter.com/propublica","https://www.facebook.com/propublica/","https://en.wikipedia.org/wiki/ProPublica","https://www.youtube.com/user/propublica","https://github.com/propublica","https://www.linkedin.com/company/propublica/","https://www.instagram.com/propublica","https://www.pinterest.com/propublica","https://vimeo.com/propublica"],"telephone":"1-212-514-5250","url":"https://www.propublica.org"},{"@id":"#creator","@type":"Organization"},{"@type":"BreadcrumbList","description":"Breadcrumbs list","itemListElement":[{"@type":"ListItem","item":"https://www.propublica.org","name":"Homepage","position":1}],"name":"Breadcrumbs"}]}</script></body>
</html>