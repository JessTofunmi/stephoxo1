$(document).ready(function () {
    $('#myform').validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
            },
            radio: {
                required: true,
            },
            message: {
                required: true,
            },
            url_name: {
                required: true,
            },
        },
        messages: {
            name: {
                required: 'Please enter a valid name <br/>',
            },
            email: {
                required: 'Please enter a valid email <br/>',
            },
            radio: {
                required: 'Please select an option <br/>',
            },
            url_name: {
                required: 'Please enter a competitior URL',
            },
            message: {
                required: 'Please enter a message in your enquiry.',
            },
        },

        errorPlacement: function (error, element) {
            if (element.prop('type') === 'radio') {
                error.insertBefore(element);
            } else {
                error.insertBefore(element);
            }
        },
    });

    $('#message').keyup(function () {
        el = $(this);
        if (el.val().length >= 201) {
            el.val(el.val().substr(0, 200));
        } else {
            $('#characters').text('(' + el.val().length + '/200)');
        }
    });

    //Removes the default checked radio button, setting it to false
    $('input[name=radio]').attr('checked', false);
});
