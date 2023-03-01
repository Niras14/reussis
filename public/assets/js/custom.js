jQuery.validator.addMethod("alphanumeric", function(value, element) {
    return this.optional(element) || /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _.]*$/i.test(value);
}, "Special Charecters are not allowed");
$('#contact-form').validate({
    rules: {
        name: {
            required: true,
            alphanumeric: true
        },
        phone: {
            number: true
        },
        email: {
            required: true,
            email: true
        },
        // file_c: {
        //     required: true,
        //     extension: "pdf|doc|docx|jpg|jpeg|png"
        // },
        message: {
            required: true,
            alphanumeric: true
        }
    },
    messages: {
        name: {
            required: "Please enter your name."
        },
        email: {
            required: "Please enter your email address."
        },
        file_c: {
            required: "Please Upload RFP File .",
            extension: "select jpg|jpeg|png|doc|docx|pdf file format only"
        },
        message: {
            required: "Please enter Message."
        }
    },
    //Submit Handler Function
    // submitHandler: function(form) {
    //     // Add accordingly
    //     var form1 = $("#contact-form");
    //     var msgLabel = $(".ajax-message1");
    //     var formData = form1.serialize();
    //     var $inputBoxes = $('input, [type=\'submit\']', "#contact-form");
    //     $inputBoxes.prop('disabled', true);
    //     msgLabel.css("visibility", "hidden");
    //     msgLabel.css("visibility", "visible").html('<i class="fa fa-hourglass-start"></i> registering your details...');

    //     var url = form1.attr("action");
    //     $.ajax({
    //         type: "POST",
    //         url: url,
    //         mimeType: "multipart/form-data",
    //         contentType: false,
    //         data: formData, // serializes the form's elements.
    //         dataType: 'json',
    //         success: function(data) {
    //             if (data.error) {
    //                 msgLabel.css("visibility", "hidden");
    //                 msgLabel.removeClass("error success").addClass("error").css("visibility", "visible").html('<i class="fa fa-times"></i> ' + data.message);
    //                 $inputBoxes.prop('disabled', false);
    //             } else {
    //                 // redirect to thank you page
    //                 window.location.href = "http://my.reussis.com/thank-you.php";
    //             }
    //         },
    //         // error: function() {
    //         // 	msgLabel.css("visibility", "hidden");
    //         // 	msgLabel.removeClass("error success").addClass("error").css("visibility", "visible").html('<i class="fa fa-times"></i> Problem connecting to server. Please try again');
    //         // 	$inputBoxes.prop('disabled', false);
    //         // }
    //     }).fail(function(jqXHR, textStatus, errorThrown) {
    //         msgLabel.css("visibility", "hidden");
    //         msgLabel.removeClass("error success").addClass("error").css("visibility", "visible").html(jqXHR.status + '<i class="fa fa-times"></i> failed Problem connecting to server. Please try again');
    //         $inputBoxes.prop('disabled', false);
    //     });
    //     return false;
    // }
});

(function() {
    // use URLSerachParams to get strings <- does not work in Internet Explorer
    const utmParamQueryString = new URLSearchParams(window.location.search);
    if (utmParamQueryString) {
        // get all the links on the page
        var navLinks = document.querySelectorAll('a');
        navLinks.forEach(function(item) {
            // if the links hrefs contain test.de then run
            if (item.href.indexOf('http://my.reussis.com/') !== -1) {
                // if the link href does NOT have query strings add query strings as is
                if (item.href.indexOf('?') === -1) {
                    if (utmParamQueryString.toString() != '') {
                        item.href += '?' + utmParamQueryString.toString();
                    }

                    // otherwise append the query strings with a &
                } else {
                    item.href += '&' + utmParamQueryString.toString();
                }
            }
        });
    }
})();