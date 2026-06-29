var elementskit = {
			resturl: 'https://timberlinespokane.com/wp-json/elementskit/v1/',
		}

var rest_config = {"rest_url":"https://timberlinespokane.com/wp-json/","nonce":"900709893e","insta_enabled":""};
//# sourceURL=xs_front_main_js-js-extra

var rest_api_conf = {"siteurl":"https://timberlinespokane.com","nonce":"900709893e","root":"https://timberlinespokane.com/wp-json/"};
var wsluFrontObj = {"resturl":"https://timberlinespokane.com/wp-json/","rest_nonce":"900709893e"};
//# sourceURL=xs_social_custom-js-extra

var breakpoints = [{"label":"Desktop","slug":"Desktop","value":"base","direction":"max","isActive":true,"isRequired":true},{"label":"Tablet","slug":"Tablet","value":"1024","direction":"max","isActive":true,"isRequired":true},{"label":"Mobile","slug":"Mobile","value":"767","direction":"max","isActive":true,"isRequired":true}];

jQuery(document).ready(function($){

    var header = $('.header-desktop');
    var logo = $('.header-logo');
    var defaultBg = header.css('background-color');

    function updateHeader() {

        // Change logo movement based on screen width
        var move = ($(window).width() < 1400) ? 40 : 90;

        if ($(window).scrollTop() > 50) {
            header.css('background-color', defaultBg);
            logo.css('transform', 'translateY(0)');
        } else {
            header.css('background-color', 'transparent');
            logo.css('transform', 'translateY(' + move + 'px)');
        }
    }

    updateHeader();

    $(window).on('scroll resize', updateHeader);

});

{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/dehomes-child/*","/wp-content/themes/dehomes/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}

const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );

var PremiumSettings = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"015a0f596c"};
//# sourceURL=elementor-frontend-js-extra

var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.1.4","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_optimized_markup":true,"e_panel_promotions":true,"theme_builder_v2":true,"e_pro_free_trial_popup":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"e_pro_atomic_form":true,"mega-menu":true,"e_pro_variables":true,"e_pro_interactions":true},"urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/timberlinespokane.com\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"9cb3b13a0a","atomicFormsSendForm":"18cc0efeaf"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":2652,"title":"Hillwood Manor%20Residences%20%7C%20South%20Hill%20Apartments%20Rentals%20WA","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before

var ekit_config = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"e9f950c4fd"};
//# sourceURL=ekit-core-js-extra

wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after

var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","nonce":"26907980a0","urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/timberlinespokane.com\/wp-json\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
//# sourceURL=elementor-pro-frontend-js-before

/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://timberlinespokane.com/wp-includes/js/wp-emoji-loader.min.js

var elementskit = {
			resturl: 'https://timberlinespokane.com/wp-json/elementskit/v1/',
		}

var rest_config = {"rest_url":"https://timberlinespokane.com/wp-json/","nonce":"900709893e","insta_enabled":""};
//# sourceURL=xs_front_main_js-js-extra

var rest_api_conf = {"siteurl":"https://timberlinespokane.com","nonce":"900709893e","root":"https://timberlinespokane.com/wp-json/"};
var wsluFrontObj = {"resturl":"https://timberlinespokane.com/wp-json/","rest_nonce":"900709893e"};
//# sourceURL=xs_social_custom-js-extra

var breakpoints = [{"label":"Desktop","slug":"Desktop","value":"base","direction":"max","isActive":true,"isRequired":true},{"label":"Tablet","slug":"Tablet","value":"1024","direction":"max","isActive":true,"isRequired":true},{"label":"Mobile","slug":"Mobile","value":"767","direction":"max","isActive":true,"isRequired":true}];

jQuery(document).ready(function($){

    var header = $('.header-desktop');
    var logo = $('.header-logo');
    var defaultBg = header.css('background-color');

    function updateHeader() {

        // Change logo movement based on screen width
        var move = ($(window).width() < 1400) ? 40 : 90;

        if ($(window).scrollTop() > 50) {
            header.css('background-color', defaultBg);
            logo.css('transform', 'translateY(0)');
        } else {
            header.css('background-color', 'transparent');
            logo.css('transform', 'translateY(' + move + 'px)');
        }
    }

    updateHeader();

    $(window).on('scroll resize', updateHeader);

});

{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/dehomes-child/*","/wp-content/themes/dehomes/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}

const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );

var PremiumSettings = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"015a0f596c"};
//# sourceURL=elementor-frontend-js-extra

var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.1.4","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_optimized_markup":true,"e_panel_promotions":true,"theme_builder_v2":true,"e_pro_free_trial_popup":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"e_pro_atomic_form":true,"mega-menu":true,"e_pro_variables":true,"e_pro_interactions":true},"urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/timberlinespokane.com\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"9cb3b13a0a","atomicFormsSendForm":"18cc0efeaf"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":3555,"title":"About%20Hillwood Manor%20Union City%20South%20Hill%20Apartment%20Community%20WA","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before

var ekit_config = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"e9f950c4fd"};
//# sourceURL=ekit-core-js-extra

wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after

var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","nonce":"26907980a0","urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/timberlinespokane.com\/wp-json\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
//# sourceURL=elementor-pro-frontend-js-before

/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://timberlinespokane.com/wp-includes/js/wp-emoji-loader.min.js

var elementskit = {
			resturl: 'https://timberlinespokane.com/wp-json/elementskit/v1/',
		}

var rest_config = {"rest_url":"https://timberlinespokane.com/wp-json/","nonce":"4ade6710d6","insta_enabled":""};
//# sourceURL=xs_front_main_js-js-extra

var rest_api_conf = {"siteurl":"https://timberlinespokane.com","nonce":"4ade6710d6","root":"https://timberlinespokane.com/wp-json/"};
var wsluFrontObj = {"resturl":"https://timberlinespokane.com/wp-json/","rest_nonce":"4ade6710d6"};
//# sourceURL=xs_social_custom-js-extra

var breakpoints = [{"label":"Desktop","slug":"Desktop","value":"base","direction":"max","isActive":true,"isRequired":true},{"label":"Tablet","slug":"Tablet","value":"1024","direction":"max","isActive":true,"isRequired":true},{"label":"Mobile","slug":"Mobile","value":"767","direction":"max","isActive":true,"isRequired":true}];

jQuery(document).ready(function($){

    var header = $('.header-desktop');
    var logo = $('.header-logo');
    var defaultBg = header.css('background-color');

    function updateHeader() {

        // Change logo movement based on screen width
        var move = ($(window).width() < 1400) ? 40 : 90;

        if ($(window).scrollTop() > 50) {
            header.css('background-color', defaultBg);
            logo.css('transform', 'translateY(0)');
        } else {
            header.css('background-color', 'transparent');
            logo.css('transform', 'translateY(' + move + 'px)');
        }
    }

    updateHeader();

    $(window).on('scroll resize', updateHeader);

});

( function() {
					const style = document.createElement( 'style' );
					style.appendChild( document.createTextNode( '#wpforms-2994-field_4-container { position: absolute !important; overflow: hidden !important; display: inline !important; height: 1px !important; width: 1px !important; z-index: -1000 !important; padding: 0 !important; } #wpforms-2994-field_4-container input { visibility: hidden; } #wpforms-conversational-form-page #wpforms-2994-field_4-container label { counter-increment: none; }' ) );
					document.head.appendChild( style );
					document.currentScript?.remove();
				} )();

{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/dehomes-child/*","/wp-content/themes/dehomes/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}

const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );

var PremiumSettings = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"ecebf4c76c"};
//# sourceURL=elementor-frontend-js-extra

var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.1.4","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_optimized_markup":true,"e_panel_promotions":true,"theme_builder_v2":true,"e_pro_free_trial_popup":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"e_pro_atomic_form":true,"mega-menu":true,"e_pro_variables":true,"e_pro_interactions":true},"urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/timberlinespokane.com\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"54510fc620","atomicFormsSendForm":"684c4fa371"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":52,"title":"Contact%20Hillwood Manor%20Residences%20%7C%20Now%20Leasing%20Spokane%20WA","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before

var ekit_config = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"00b08b700d"};
//# sourceURL=ekit-core-js-extra

wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after

var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","nonce":"4a40537eef","urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/timberlinespokane.com\/wp-json\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
//# sourceURL=elementor-pro-frontend-js-before

var _wpUtilSettings = {"ajax":{"url":"/wp-admin/admin-ajax.php"}};
//# sourceURL=wp-util-js-extra

var wpformsElementorVars = {"captcha_provider":"recaptcha","recaptcha_type":"v2"};
//# sourceURL=wpforms-elementor-js-extra

/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://timberlinespokane.com/wp-includes/js/wp-emoji-loader.min.js

/* <![CDATA[ */
var wpforms_settings = {"val_required":"This field is required.","val_email":"Please enter a valid email address.","val_email_suggestion":"Did you mean {suggestion}?","val_email_suggestion_title":"Click to accept this suggestion.","val_email_restricted":"This email address is not allowed.","val_number":"Please enter a valid number.","val_number_positive":"Please enter a valid positive number.","val_minimum_price":"Amount entered is less than the required minimum.","val_confirm":"Field values do not match.","val_checklimit":"You have exceeded the number of allowed selections: {#}.","val_limit_characters":"{count} of {limit} max characters.","val_limit_words":"{count} of {limit} max words.","val_min":"Please enter a value greater than or equal to {0}.","val_max":"Please enter a value less than or equal to {0}.","val_recaptcha_fail_msg":"Google reCAPTCHA verification failed, please try again later.","val_turnstile_fail_msg":"Cloudflare Turnstile verification failed, please try again later.","val_inputmask_incomplete":"Please fill out the field in required format.","uuid_cookie":"1","locale":"en","country":"","country_list_label":"Country list","wpforms_plugin_url":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/wpforms\/","gdpr":"","ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","mailcheck_enabled":"1","mailcheck_domains":[],"mailcheck_toplevel_domains":["dev"],"is_ssl":"1","currency_code":"USD","currency_thousands":",","currency_decimals":"2","currency_decimal":".","currency_symbol":"$","currency_symbol_pos":"left","val_requiredpayment":"Payment is required.","val_creditcard":"Please enter a valid credit card number.","css_vars":["field-border-radius","field-border-style","field-border-size","field-background-color","field-border-color","field-text-color","field-menu-color","label-color","label-sublabel-color","label-error-color","button-border-radius","button-border-style","button-border-size","button-background-color","button-border-color","button-text-color","page-break-color","background-image","background-position","background-repeat","background-size","background-width","background-height","background-color","background-url","container-padding","container-border-style","container-border-width","container-border-color","container-border-radius","field-size-input-height","field-size-input-spacing","field-size-font-size","field-size-line-height","field-size-padding-h","field-size-checkbox-size","field-size-sublabel-spacing","field-size-icon-size","label-size-font-size","label-size-line-height","label-size-sublabel-font-size","label-size-sublabel-line-height","button-size-font-size","button-size-height","button-size-padding-h","button-size-margin-top","container-shadow-size-box-shadow"],"val_post_max_size":"The total size of the selected files {totalSize} MB exceeds the allowed limit {maxSize} MB.","val_time12h":"Please enter time in 12-hour AM\/PM format (eg 8:45 AM).","val_time24h":"Please enter time in 24-hour format (eg 22:45).","val_time_limit":"Please enter time between {minTime} and {maxTime}.","val_url":"Please enter a valid URL.","val_fileextension":"File type is not allowed.","val_filesize":"File exceeds max size allowed. File was not uploaded.","post_max_size":"268435456","isModernMarkupEnabled":"1","formErrorMessagePrefix":"Form error message","errorMessagePrefix":"Error message","submitBtnDisabled":"Submit button is disabled during form submission.","readOnlyDisallowedFields":["captcha","repeater","map","content","divider","hidden","html","entry-preview","pagebreak","layout","payment-total"],"error_updating_token":"Error updating token. Please try again or contact support if the issue persists.","network_error":"Network error or server is unreachable. Check your connection or try again later.","token_cache_lifetime":"86400","hn_data":{"2994":4},"address_field":{"list_countries_without_states":["GB","DE","CH","NL"]},"val_phone":"Please enter a valid phone number.","val_password_strength":"A stronger password is required. Consider using upper and lower case letters, numbers, and symbols.","entry_preview_iframe_styles":["https:\/\/timberlinespokane.com\/wp-includes\/js\/tinymce\/skins\/lightgray\/content.min.css?ver=7.0","https:\/\/timberlinespokane.com\/wp-includes\/css\/dashicons.min.css?ver=7.0","https:\/\/timberlinespokane.com\/wp-includes\/js\/tinymce\/skins\/wordpress\/wp-content.css?ver=7.0","https:\/\/timberlinespokane.com\/wp-content\/plugins\/wpforms\/assets\/pro\/css\/fields\/richtext\/editor-content.min.css"],"indicatorStepsPattern":"Step {current} of {total}"}
/* ]]> */

document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('custom-contact-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Replace this URL with your Google Apps Script URL
                const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
                
                const formData = new FormData(form);
                
                // Optional: Change button text to show loading state
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn ? submitBtn.innerText : 'Submit';
                if (submitBtn) submitBtn.innerText = 'Sending...';

                fetch(scriptURL, { method: 'POST', body: formData })
                    .then(response => {
                        alert('Thanks for contacting us! We will get back to you soon.');
                        form.reset();
                        if (submitBtn) submitBtn.innerText = originalText;
                    })
                    .catch(error => {
                        console.error('Error!', error.message);
                        alert('There was an error sending your message. Please try again.');
                        if (submitBtn) submitBtn.innerText = originalText;
                    });
            });
        }
    });

var elementskit = {
			resturl: 'https://timberlinespokane.com/wp-json/elementskit/v1/',
		}

var rest_config = {"rest_url":"https://timberlinespokane.com/wp-json/","nonce":"900709893e","insta_enabled":""};
//# sourceURL=xs_front_main_js-js-extra

var rest_api_conf = {"siteurl":"https://timberlinespokane.com","nonce":"900709893e","root":"https://timberlinespokane.com/wp-json/"};
var wsluFrontObj = {"resturl":"https://timberlinespokane.com/wp-json/","rest_nonce":"900709893e"};
//# sourceURL=xs_social_custom-js-extra

var breakpoints = [{"label":"Desktop","slug":"Desktop","value":"base","direction":"max","isActive":true,"isRequired":true},{"label":"Tablet","slug":"Tablet","value":"1024","direction":"max","isActive":true,"isRequired":true},{"label":"Mobile","slug":"Mobile","value":"767","direction":"max","isActive":true,"isRequired":true}];

jQuery(document).ready(function($){

    var header = $('.header-desktop');
    var logo = $('.header-logo');
    var defaultBg = header.css('background-color');

    function updateHeader() {

        // Change logo movement based on screen width
        var move = ($(window).width() < 1400) ? 40 : 90;

        if ($(window).scrollTop() > 50) {
            header.css('background-color', defaultBg);
            logo.css('transform', 'translateY(0)');
        } else {
            header.css('background-color', 'transparent');
            logo.css('transform', 'translateY(' + move + 'px)');
        }
    }

    updateHeader();

    $(window).on('scroll resize', updateHeader);

});

{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/dehomes-child/*","/wp-content/themes/dehomes/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}

const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );

var PremiumSettings = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"015a0f596c"};
//# sourceURL=elementor-frontend-js-extra

var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.1.4","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_optimized_markup":true,"e_panel_promotions":true,"theme_builder_v2":true,"e_pro_free_trial_popup":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"e_pro_atomic_form":true,"mega-menu":true,"e_pro_variables":true,"e_pro_interactions":true},"urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/timberlinespokane.com\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"9cb3b13a0a","atomicFormsSendForm":"18cc0efeaf"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":3298,"title":"Hillwood Manor%20Union City%20Apartment%20Amenities%20Gated%20South%20Hill%20WA","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before

var ekit_config = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"e9f950c4fd"};
//# sourceURL=ekit-core-js-extra

/* Coverflow Carousel scripts: */ 

jQuery(document).ready(function(){
function uc_cover_flow_carousel_elementor_0c5e56c_start(){
			

  var objCoverflow = jQuery("#uc_cover_flow_carousel_elementor_0c5e56c");
    
    function startCoverflow(){      
      objCoverflow.show();
      
      objCoverflow.flipster({
        style: 'coverflow',
        
                           
        loop: true, 
        spacing: -0.5,                  
          
        
        pauseOnHover: false,
        
                
                
                
                                
        
        click: true,
        keyboard: false,
        scrollwheel: false,
        touch: false,
        
        	
        
           
        buttons: false,    
                      
      });
      
    }
    
    startCoverflow();
    
    objCoverflow.on("uc_ajax_refreshed",function(){      
      //remove flipster classes from mani container
      objCoverflow.removeClass("flipster flipster--transform flipster--infinite-carousel flipster--click flipster--active");
      
      var objButtons = objCoverflow.find('.flipster__nav');
      var objArrows = objCoverflow.find('.flipsflipster__button');
      
      //remove buttons and arrows
      objButtons.remove();
      objArrows.remove();
      
      //reinit flipster
      startCoverflow();
      
    });
    
    var objRemoteOptions = {
      class_items:"ue-coverflow-item",
      class_active:"flipster__item--current",
      selector_item_trigger:""
    };
    
    						objCoverflow.data("uc-remote-options", objRemoteOptions);
			
			objCoverflow.trigger("uc-object-ready");
			jQuery(document).trigger("uc-remote-parent-init", [objCoverflow]);
			
    
    document.addEventListener('animationend', function (e) {
      window.dispatchEvent(new Event('resize'))
    });     
    	
}if(jQuery("#uc_cover_flow_carousel_elementor_0c5e56c").length && !jQuery("#uc_cover_flow_carousel_elementor_0c5e56c").parents('[data-elementor-type="popup"]').length) uc_cover_flow_carousel_elementor_0c5e56c_start();
	jQuery( document ).on( 'elementor/popup/show', (event, id, objPopup) => {
	if(objPopup.$element.has(jQuery("#uc_cover_flow_carousel_elementor_0c5e56c")).length) uc_cover_flow_carousel_elementor_0c5e56c_start()});
});
			
//# sourceURL=ue_script_cover_flow_carousel-js-after

wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after

var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","nonce":"26907980a0","urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/timberlinespokane.com\/wp-json\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
//# sourceURL=elementor-pro-frontend-js-before

/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://timberlinespokane.com/wp-includes/js/wp-emoji-loader.min.js

var elementskit = {
			resturl: 'https://timberlinespokane.com/wp-json/elementskit/v1/',
		}

var rest_config = {"rest_url":"https://timberlinespokane.com/wp-json/","nonce":"900709893e","insta_enabled":""};
//# sourceURL=xs_front_main_js-js-extra

var rest_api_conf = {"siteurl":"https://timberlinespokane.com","nonce":"900709893e","root":"https://timberlinespokane.com/wp-json/"};
var wsluFrontObj = {"resturl":"https://timberlinespokane.com/wp-json/","rest_nonce":"900709893e"};
//# sourceURL=xs_social_custom-js-extra

var breakpoints = [{"label":"Desktop","slug":"Desktop","value":"base","direction":"max","isActive":true,"isRequired":true},{"label":"Tablet","slug":"Tablet","value":"1024","direction":"max","isActive":true,"isRequired":true},{"label":"Mobile","slug":"Mobile","value":"767","direction":"max","isActive":true,"isRequired":true}];

jQuery(document).ready(function($){

    var header = $('.header-desktop');
    var logo = $('.header-logo');
    var defaultBg = header.css('background-color');

    function updateHeader() {

        // Change logo movement based on screen width
        var move = ($(window).width() < 1400) ? 40 : 90;

        if ($(window).scrollTop() > 50) {
            header.css('background-color', defaultBg);
            logo.css('transform', 'translateY(0)');
        } else {
            header.css('background-color', 'transparent');
            logo.css('transform', 'translateY(' + move + 'px)');
        }
    }

    updateHeader();

    $(window).on('scroll resize', updateHeader);

});

{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/dehomes-child/*","/wp-content/themes/dehomes/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}

const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );

var PremiumSettings = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"015a0f596c"};
//# sourceURL=elementor-frontend-js-extra

var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.1.4","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_optimized_markup":true,"e_panel_promotions":true,"theme_builder_v2":true,"e_pro_free_trial_popup":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"e_pro_atomic_form":true,"mega-menu":true,"e_pro_variables":true,"e_pro_interactions":true},"urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/timberlinespokane.com\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"9cb3b13a0a","atomicFormsSendForm":"18cc0efeaf"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":3612,"title":"Hillwood Manor%20Union City%20Apartment%20Gallery%20South%20Hill%20Living%20WA","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before

var ekit_config = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"e9f950c4fd"};
//# sourceURL=ekit-core-js-extra

wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after

var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","nonce":"26907980a0","urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/timberlinespokane.com\/wp-json\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
//# sourceURL=elementor-pro-frontend-js-before

/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://timberlinespokane.com/wp-includes/js/wp-emoji-loader.min.js

var elementskit = {
			resturl: 'https://timberlinespokane.com/wp-json/elementskit/v1/',
		}

var rest_config = {"rest_url":"https://timberlinespokane.com/wp-json/","nonce":"900709893e","insta_enabled":""};
//# sourceURL=xs_front_main_js-js-extra

var rest_api_conf = {"siteurl":"https://timberlinespokane.com","nonce":"900709893e","root":"https://timberlinespokane.com/wp-json/"};
var wsluFrontObj = {"resturl":"https://timberlinespokane.com/wp-json/","rest_nonce":"900709893e"};
//# sourceURL=xs_social_custom-js-extra

var breakpoints = [{"label":"Desktop","slug":"Desktop","value":"base","direction":"max","isActive":true,"isRequired":true},{"label":"Tablet","slug":"Tablet","value":"1024","direction":"max","isActive":true,"isRequired":true},{"label":"Mobile","slug":"Mobile","value":"767","direction":"max","isActive":true,"isRequired":true}];

jQuery(document).ready(function($){

    var header = $('.header-desktop');
    var logo = $('.header-logo');
    var defaultBg = header.css('background-color');

    function updateHeader() {

        // Change logo movement based on screen width
        var move = ($(window).width() < 1400) ? 40 : 90;

        if ($(window).scrollTop() > 50) {
            header.css('background-color', defaultBg);
            logo.css('transform', 'translateY(0)');
        } else {
            header.css('background-color', 'transparent');
            logo.css('transform', 'translateY(' + move + 'px)');
        }
    }

    updateHeader();

    $(window).on('scroll resize', updateHeader);

});

{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/dehomes-child/*","/wp-content/themes/dehomes/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}

const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );

var PremiumSettings = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"015a0f596c"};
//# sourceURL=elementor-frontend-js-extra

var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.1.4","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_optimized_markup":true,"e_panel_promotions":true,"theme_builder_v2":true,"e_pro_free_trial_popup":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"e_pro_atomic_form":true,"mega-menu":true,"e_pro_variables":true,"e_pro_interactions":true},"urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/timberlinespokane.com\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"9cb3b13a0a","atomicFormsSendForm":"18cc0efeaf"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":3405,"title":"Apartment%20Floor%20Plans%20%7C%20Spacious%202%20%26%203%20Bedroom%20Homes%20Union City%20WA","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before

var ekit_config = {"ajaxurl":"https://timberlinespokane.com/wp-admin/admin-ajax.php","nonce":"e9f950c4fd"};
//# sourceURL=ekit-core-js-extra

wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after

var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/timberlinespokane.com\/wp-admin\/admin-ajax.php","nonce":"26907980a0","urls":{"assets":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/timberlinespokane.com\/wp-json\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/timberlinespokane.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
//# sourceURL=elementor-pro-frontend-js-before

/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://timberlinespokane.com/wp-includes/js/wp-emoji-loader.min.js