$(document).ready(function () {
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

});
function sendMail() {
    var mail = $('#email').val();
    if (mail === "" || mail === undefined) {
        $('#errorArea').removeClass('display-none');
    } else {
        $('#errorArea').addClass('display-none');

        $('#inputArea').addClass('display-none');
        $('#thanksArea').removeClass('display-none');
        /*
        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': 'YOUR API KEY HERE',
                'message': {
                    'from_email': 'YOUR@EMAIL.HERE',
                    'to': [
                        {
                            'email': mail,
                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': mail,
                }
            }
        }).done(function (response) {
            console.log(response); // if you're into that sorta thing
            $('#inputArea').addClass('display-none');
            $('#thanksArea').removeClass('display-none');
        });*/
    }
}
