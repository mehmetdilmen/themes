$(document).ready(function () {
    var siteNameValue = "MeMo | Under Construction";
    var contactBTNValue = "CONTACT";
    var sendBTNVal = "SEND";
    var emailInputVal = "EMAIL";
    var emailErrorVal = "Email is required!";
    var emailSuccessVal = "Thank You!";
    var firstTextValue = "Under Construction";
    var descTextVal = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    var contactTextVal = "Contact with us!";
    var linkedinValue = "";
    var faceValue = "";
    var twitValue = "";
    var instaValue = "";
    var youtubeValue = "";
    var pinValue = "";
    var linkedinIcon, faceIcon, twitterIcon, instaIcon, youtubeIcon, pinIcon  = "none";


    $('#contact').click(e => {
        e.preventDefault();

        $('#thanksArea').addClass('display-none');
        $('#inputArea').removeClass('display-none');
        $('#email').val("");

        $('.bg-home').addClass('display-none').css("width", "0px");
        $('.contact').removeClass('display-none').animate({
            width: "100%"
        }).css("dispaly", "flex");
    });

    $('#close').click(e => {
        e.preventDefault();
        $('.contact').addClass('display-none').css("width", "0px");
        $('.bg-home').removeClass('display-none').animate({
            width: "100%"
        });
    });

    $('#saveSocial').click(e => {
        e.preventDefault();
        var linkedinValue = $('#linkedinVal').val();
        var faceValue = $('#faceVal').val();
        var twitValue = $('#twitVal').val();
        var instaValue = $('#instaVal').val();
        var youtubeValue = $('#youtubeVal').val();
        var pinValue = $('#pinVal').val();

        if (linkedinValue !== "") {
            $('#linkedinIcon').css('display', 'inline-block');
            $('#linkedinIcon').closest("a").attr('href', linkedinValue);
            linkedinIcon = "inline-block"
        }
        if (faceValue !== "") {
            $('#faceIcon').css('display', 'inline-block');
            $('#faceIcon').closest("a").attr('href', faceValue);
            faceIcon = "inline-block"
        }
        if (twitValue !== "") {
            $('#twitterIcon').css('display', 'inline-block');
            $('#twitterIcon').closest("a").attr('href', twitValue);
            twitterIcon = "inline-block"
        }
        if (instaValue !== "") {
            $('#instaIcon').css('display', 'inline-block');
            $('#instaIcon').closest("a").attr('href', instaValue);
            instaIcon = "inline-block"
        }
        if (youtubeValue !== "") {
            $('#youtubeIcon').css('display', 'inline-block');
            $('#youtubeValue').closest("a").attr('href', youtubeValue);
            youtubeIcon = "inline-block"
        }
        if (pinValue !== "") {
            $('#pinIcon').css('display', 'inline-block');
            $('#pinIcon').closest("a").attr('href', pinValue);
            pinIcon = "inline-block"
        }

    });


    $('#saveTexts').click(e => {
        e.preventDefault();
        firstTextValue = $('#firstText').val();
        descTextVal = $('#descText').val();
        contactTextVal = $('#contactText').val();

        if (firstTextValue !== "") {
            $('#firstTextSpan').text(firstTextValue);
        }
        if (descTextVal !== "") {
            $('#descTextSpan').text(descTextVal);
        }
        if (contactTextVal !== "") {
            $('#contactTextSpan').text(contactTextVal);
        }
    });


    $('#saveInputs').click(e => {
        e.preventDefault();
        emailInputVal = $('#emailInput').val();
        emailErrorVal = $('#emailErrorInput').val();
        emailSuccessVal = $('#emailSuccessInput').val();

        if (emailInputVal !== "") {
            $('#emailField').text(emailInputVal);
        }if (emailErrorVal !== "") {
            $('#emailErrorField').text(emailErrorVal);
        }if (emailSuccessVal !== "") {
            $('#emailSuccessField').text(emailSuccessVal);
        }

    });


    $('#saveButtons').click(e => {
        e.preventDefault();
        contactBTNValue = $('#contactButton').val();
        sendBTNVal = $('#sendButton').val();

        if (contactBTNValue !== "") {
            $('#contact').text(contactBTNValue);
        }
        if (sendBTNVal !== "") {
            $('#send').text(sendBTNVal);
        }

    });


    $('#saveSiteName').click(e => {
        e.preventDefault();
        siteNameValue = $('#siteNameText').val();

        if (siteNameValue !== "") {
            $('#title').text(siteNameValue);
        }
    });


    $('#publish').click(e => {
        e.preventDefault();
        var template = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'> <title id='title'>" + siteNameValue + " </title> <link rel='stylesheet' href='css/bootstrap.css'> <link rel='stylesheet' href='css/style.css'> <link href='https://fonts.googleapis.com/css?family=Courgette|Maven+Pro&display=swap' rel='stylesheet'></head><body><div id='socialBar'> <a href='"+ instaValue +"' target='_blank'><img src='assets/icons/social/instagram-sketched.png' style='display: "+ instaIcon +"'></a> <a href='"+ faceValue +"' target='_blank'><img src='assets/icons/social/facebook.png' style='display: "+ faceIcon +"'></a> <a href='" + twitValue + "' target='_blank'><img src='assets/icons/social/twitter.png' style='display: "+ twitterIcon +"'></a> <a href='" + pinValue + "' target='_blank'><img src='assets/icons/social/pinterest.png' style='display: "+ pinIcon +"'></a> <a href='"+ youtubeValue +"' target='_blank'><img src='assets/icons/social/youtube.png' style='display: "+ youtubeIcon +"'></a> <a href='"+ linkedinValue +"' target='_blank'><img src='assets/icons/social/linkedin.png' style='display: "+ linkedinIcon +"'></a></div><div class='bg-home'> <div class='container-fluid'><span class='text-home' id='firstTextSpan'>" + firstTextValue + "</span> <div class='mb-30' style='margin-bottom: 100px;'> <div style='width: 100%; text-align: center'> <div class='center-text-ps'><span class='text-desc' id='descTextSpan'>" + descTextVal + "</span> </div></div></div><button class='btn btn-home contact-btn' id='contact'>" + contactBTNValue + "</button> </div></div><div class='contact display-none'> <div class='contact-box'> <div class='contact-frame'> <div class='close-btn' id='close'> X </div><div id='inputArea'><span class='text-home-contact' id='contactTextSpan'>" + contactTextVal + "</span> <div class='input-style'> <span class='contact-name' id='emailField'>EMAIL</span> <input class='memo-input' id='email'> <div id='errorArea' class='display-none'> <p class='text-error'> "+ emailErrorVal +" </p></div></div><div class='btn-frame'> <button class='btn-contact' id='send' onclick='sendMail()'>" + sendBTNVal + "</button> </div></div><div id='thanksArea' class='display-none'> <img src='assets/img/success.png' width='30'/> <p class='text-home-contact'> "+ emailSuccessVal +" </p></div></div></div></div></body><script src='js/bootstrap.js'></script><script src='https://code.jquery.com/jquery-3.4.1.js'></script><script src='js/main.js'></script></html>"
        var file = new Blob([template], {type: "html"});
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, "index");
        else { // Others
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = "index.html";
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    })




});
