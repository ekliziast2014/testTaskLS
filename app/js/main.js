var divJS= $('#JS'),
    curseJS = divJS.parent().parent(),
    divJQ= $('#JQ'),
    curseJQ = divJQ.parent().parent(),
    divBasEl= $('#BasEl'),
    curseBasEl = divBasEl.parent().parent(),
    divAdptSit= $('#AdptSit'),
    curseAdptSit = divAdptSit.parent().parent(),
    divAdCSS= $('#AdCSS'),
    curseAdCSS = divAdCSS.parent().parent(),
    divAdCSSGal= $('#AdCSSGal'),
    curseAdCSSGal = divAdCSSGal.parent().parent();
;(function () {

    divJS.click(function () {
        $(curseJS).addClass('to-hide');
        $(curseJS).hide(1000);
        if (($('#js').hasClass('to-hide') && ($('#jq').hasClass('to-hide')) &&
            ($('#basEl').hasClass('to-hide')) && ($('#adptSit').hasClass('to-hide')) &&
            ($('#adCSS').hasClass('to-hide')) && ($('#adCSSGal').hasClass('to-hide')))) {
             $('.complete')[0].style.display='block';
        }
    });
    divJQ.click(function () {
        $(curseJQ).addClass('to-hide');
        $(curseJQ).hide(1000);
        if (($('#js').hasClass('to-hide') && ($('#jq').hasClass('to-hide')) &&
            ($('#basEl').hasClass('to-hide')) && ($('#adptSit').hasClass('to-hide')) &&
            ($('#adCSS').hasClass('to-hide')) && ($('#adCSSGal').hasClass('to-hide')))) {
            $('.complete')[0].style.display='block';
        }
    });
    divBasEl.click(function () {
        $(curseBasEl).addClass('to-hide');
        $(curseBasEl).hide(1000);
        if (($('#js').hasClass('to-hide') && ($('#jq').hasClass('to-hide')) &&
            ($('#basEl').hasClass('to-hide')) && ($('#adptSit').hasClass('to-hide')) &&
            ($('#adCSS').hasClass('to-hide')) && ($('#adCSSGal').hasClass('to-hide')))) {
            $('.complete')[0].style.display='block';
        }
    });
    divAdptSit.click(function () {
        $(curseAdptSit).addClass('to-hide');
        $(curseAdptSit).hide(1000);
        if (($('#js').hasClass('to-hide') && ($('#jq').hasClass('to-hide')) &&
            ($('#basEl').hasClass('to-hide')) && ($('#adptSit').hasClass('to-hide')) &&
            ($('#adCSS').hasClass('to-hide')) && ($('#adCSSGal').hasClass('to-hide')))) {
            $('.complete')[0].style.display='block';
        }
    });
    divAdCSS.click(function () {
        $(curseAdCSS).addClass('to-hide');
        $(curseAdCSS).hide(1000);
        if (($('#js').hasClass('to-hide') && ($('#jq').hasClass('to-hide')) &&
            ($('#basEl').hasClass('to-hide')) && ($('#adptSit').hasClass('to-hide')) &&
            ($('#adCSS').hasClass('to-hide')) && ($('#adCSSGal').hasClass('to-hide')))) {
            $('.complete')[0].style.display='block';
        }
    });
    divAdCSSGal.click(function () {
        $(curseAdCSSGal).addClass('to-hide');
        $(curseAdCSSGal).hide(1000);
        if (($('#js').hasClass('to-hide') && ($('#jq').hasClass('to-hide')) &&
            ($('#basEl').hasClass('to-hide')) && ($('#adptSit').hasClass('to-hide')) &&
            ($('#adCSS').hasClass('to-hide')) && ($('#adCSSGal').hasClass('to-hide')))) {
            $('.complete')[0].style.display='block';
        }
    });
})();