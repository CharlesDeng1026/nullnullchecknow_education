/* <![CDATA[ */
var _wpcf7 = {"loaderUrl":"wp-content\/themes\/eduma\/images\/ajax-loader.gif","recaptchaEmpty":"Please verify that you are not a robot.","sending":"Sending ...","cached":0};
/* ]]> */

/* <![CDATA[ */var thim_placeholder = {"login":"Email or username","password":"Password"};/* ]]> */
/* <![CDATA[ */var panelsStyles = {"fullContainer":"body"};/* ]]> */
/* <![CDATA[ */var mc4wp_forms_config = [];/* ]]> */

    (function() {
        function addEventListener(element, event, handler) {
            if (element.addEventListener) {
                element.addEventListener(event, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, handler);
            }
        }
    })();

//Start of Zopim Live Chat Script
    window.$zopim || (function(d, s) {
        var z = $zopim = function(c) {
                z._.push(c)
            },
            $ = z.s =

            d.createElement(s),
            e = d.getElementsByTagName(s)[0];
        z.set = function(o) {
            z.set.

            _.push(o)
        };
        z._ = [];
        z.set._ = [];
        $.async = !0;
        $.setAttribute("charset", "utf-8");

        $.src = "//v2.zopim.com/?45ItxXfVgmbCwkGnssMKaC93ZArkRq0h";
        z.t = +new Date;
        $.

        type = "text/javascript";
        e.parentNode.insertBefore($, e)
    })(document, "script");


  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)

	})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-90649041-1', 'auto');
	ga('send', 'pageview');


var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement("div");
    htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
    document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
} 
		
/****************************************** -	PREPARE PLACEHOLDER FOR SLIDER	- ******************************************/ 
var setREVStartSize = function() {
    try {
        var e = new Object,
            i = jQuery(window).width(),
            t = 9999,
            r = 0,
            n = 0,
            l = 0,
            f = 0,
            s = 0,
            h = 0;
        e.c = jQuery('#rev_slider_4_1');
        e.responsiveLevels = [1240, 1024, 778, 480];
        e.gridwidth = [1200, 960, 768, 481];
        e.gridheight = [500, 400, 400, 320];
        e.sliderLayout = "fullscreen";
        e.fullScreenAutoWidth = 'on';
        e.fullScreenAlignForce = 'off';
        e.fullScreenOffsetContainer = '';
        e.fullScreenOffset = '';
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
                f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
            }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
            var u = (e.c.width(), jQuery(window).height());
            if (void 0 != e.fullScreenOffsetContainer) {
                var c = e.fullScreenOffsetContainer.split(",");
                if (c) jQuery.each(c, function(e, i) {
                    u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
            }
            f = u
        } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
        e.c.closest(".rev_slider_wrapper").css({
            height: f
        })
    } catch (d) {
        console.log("Failure at Presize of Slider:" + d)
    }
};
setREVStartSize();

function revslider_showDoubleJqueryError(sliderID) {
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
    jQuery(sliderID).show().html(errorMessage);
}
var tpj = jQuery;
var revapi4;
tpj(document).ready(function() {
    if (tpj("#rev_slider_4_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_4_1");
    } else {
        revapi4 = tpj("#rev_slider_4_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "plugins/revslider/public/assets/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                arrows: {
                    style: "zeus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 1024,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1200, 960, 768, 481],
            gridheight: [500, 400, 400, 320],
            lazyType: "all",
            shadow: 0,
            spinner: "spinner2",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "on",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
                panZoomDisableOnMobile: "on",
            }
        });
    }
}); /*ready*/ 

var htmlDivCss = ' #rev_slider_4_1_wrapper .tp-loader.spinner2{ background-color: #FFFFFF !important; } ';
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style > ';
    document.getElementsByTagName(' head ')[0].appendChild(htmlDiv.childNodes[0]);
}

var htmlDivCss = unescape(".zeus.tparrows%20%7B%0A%20%20cursor%3Apointer%3B%0A%20%20min-width%3A70px%3B%0A%20%20min-height%3A70px%3B%0A%20%20position%3Aabsolute%3B%0A%20%20display%3Ablock%3B%0A%20%20z-index%3A100%3B%0A%20%20border-radius%3A35px%3B%20%20%20%0A%20%20overflow%3Ahidden%3B%0A%20%20background%3Argba%280%2C0%2C0%2C0.10%29%3B%0A%7D%0A%0A.zeus.tparrows%3Abefore%20%7B%0A%20%20font-family%3A%20%22revicons%22%3B%0A%20%20font-size%3A20px%3B%0A%20%20color%3A%23fff%3B%0A%20%20display%3Ablock%3B%0A%20%20line-height%3A%2070px%3B%0A%20%20text-align%3A%20center%3B%20%20%20%20%0A%20%20z-index%3A2%3B%0A%20%20position%3Arelative%3B%0A%7D%0A.zeus.tparrows.tp-leftarrow%3Abefore%20%7B%0A%20%20content%3A%20%22%5Ce824%22%3B%0A%7D%0A.zeus.tparrows.tp-rightarrow%3Abefore%20%7B%0A%20%20content%3A%20%22%5Ce825%22%3B%0A%7D%0A%0A.zeus%20.tp-title-wrap%20%7B%0A%20%20background%3A%23000%3B%0A%20%20background%3Argba%280%2C0%2C0%2C0.5%29%3B%0A%20%20width%3A100%25%3B%0A%20%20height%3A100%25%3B%0A%20%20top%3A0px%3B%0A%20%20left%3A0px%3B%0A%20%20position%3Aabsolute%3B%0A%20%20opacity%3A0%3B%0A%20%20transform%3Ascale%280%29%3B%0A%20%20-webkit-transform%3Ascale%280%29%3B%0A%20%20%20transition%3A%20all%200.3s%3B%0A%20%20-webkit-transition%3Aall%200.3s%3B%0A%20%20-moz-transition%3Aall%200.3s%3B%0A%20%20%20border-radius%3A50%25%3B%0A%20%7D%0A.zeus%20.tp-arr-imgholder%20%7B%0A%20%20width%3A100%25%3B%0A%20%20height%3A100%25%3B%0A%20%20position%3Aabsolute%3B%0A%20%20top%3A0px%3B%0A%20%20left%3A0px%3B%0A%20%20background-position%3Acenter%20center%3B%0A%20%20background-size%3Acover%3B%0A%20%20border-radius%3A50%25%3B%0A%20%20transform%3AtranslateX%28-100%25%29%3B%0A%20%20-webkit-transform%3AtranslateX%28-100%25%29%3B%0A%20%20%20transition%3A%20all%200.3s%3B%0A%20%20-webkit-transition%3Aall%200.3s%3B%0A%20%20-moz-transition%3Aall%200.3s%3B%0A%0A%20%7D%0A.zeus.tp-rightarrow%20.tp-arr-imgholder%20%7B%0A%20%20%20%20transform%3AtranslateX%28100%25%29%3B%0A%20%20-webkit-transform%3AtranslateX%28100%25%29%3B%0A%20%20%20%20%20%20%7D%0A.zeus.tparrows%3Ahover%20.tp-arr-imgholder%20%7B%0A%20%20transform%3AtranslateX%280%29%3B%0A%20%20-webkit-transform%3AtranslateX%280%29%3B%0A%20%20opacity%3A1%3B%0A%7D%0A%20%20%20%20%20%20%0A.zeus.tparrows%3Ahover%20.tp-title-wrap%20%7B%0A%20%20transform%3Ascale%281%29%3B%0A%20%20-webkit-transform%3Ascale%281%29%3B%0A%20%20opacity%3A1%3B%0A%7D%0A%20%0A"); 	var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
	if (htmlDiv) {
	    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
	} else {
	    var htmlDiv = document.createElement('div');
	    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
	    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
	}   

// protected email script by Joe Maller
// JavaScripts available at http://www.joemaller.com
// this script is free to use and distribute
// but please credit me and/or link to my site

emailE=('ramesh@' + 'abacuseducation.ca')
document.write('<A href="mailto:' + emailE + '">' + emailE + '</a>')

// protected email script by Joe Maller
// JavaScripts available at http://www.joemaller.com
// this script is free to use and distribute
// but please credit me and/or link to my site

emailE=('shashank@' + 'abacuseducation.ca')
document.write('<A href="mailto:' + emailE + '">' + emailE + '</a>')

// protected email script by Joe Maller
// JavaScripts available at http://www.joemaller.com
// this script is free to use and distribute
// but please credit me and/or link to my site
emailE=('neha@' + 'abacuseducation.ca')
document.write('<A href="mailto:' + emailE + '">' + emailE + '</a>')
 
// protected email script by Joe Maller
// JavaScripts available at http://www.joemaller.com
// this script is free to use and distribute
// but please credit me and/or link to my site

emailE=('bhupendra@' + 'abacuseducation.ca')
document.write('<A href="mailto:' + emailE + '">' + emailE + '</a>')

//-->

 // Skype.ui({
 // 	"name": "dropdown",
 // 	"element": "SkypeButton_Call_abacusoverseas_1",
 // 	"participants": ["abacusoverseas"],
 // 	"imageSize": 32
 // });

//You should create the validator only after the definition of the HTML form
 //  	var frmvalidator  = new Validator("myform");
 //  	frmvalidator.addValidation("name","req","Please Enter Your Name");
 //  	frmvalidator.addValidation("name","maxlen=20", "Max Length for Name is 20");
 //    frmvalidator.addValidation("phone","req","Please Enter Your Cell Number");
	// frmvalidator.addValidation("phone","maxlen=15");
 //  	frmvalidator.addValidation("phone","numeric");
 //  	frmvalidator.addValidation("email","maxlen=50");
 //  	frmvalidator.addValidation("email","req","Please Enter Your Email");
 //  	frmvalidator.addValidation("email","email");
 //  	frmvalidator.addValidation("letters_code","req","Please Enter Verification Code");

