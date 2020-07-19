document.getElementById("myinput").onclick = function () {
    var link = document.getElementById("linkinput").value;
    var data = {
        "domain": "hey.portalurbanna.com.br",
        "originalURL": link,
        "allowDuplicates": false
    };
    fetch('https://api.short.cm/links/public', {
        method: 'post',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'FXV9LhBc44cjRRsLgyP6vg7DTUgrXvmY'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            document.getElementById("message").innerHTML =
                "Seu novo link é: " +
                "<a href='" + data.shortURL + "' target='_blank' class='is-link'>"
                    + data.shortURL + "</a>" +
                "</div>" +
                "<div class='has-text-centered mb-2'>"+
                    "<div class=\"columns\">\n" +
                        "<div class=\"column\">\n" +
                            "Compartilhe:</div>\n"+
                            "<div class=\"column\">\n" +
                                "<span class=\"icon is-medium\">\n" +
                                    "<span class=\"fa-stack\">\n" +
                                        "<i class=\"fab fa-facebook fa-stack-1x fa-inverse\"></i>\n" +
                                    "</span>" +
                                "</span>\n" +
                            "</div>\n" +
                            "<div class=\"column\">\n" +
                                "<span class=\"icon is-medium\">\n" +
                                    "<span class=\"fa-stack\">\n" +
                                        "<i class=\"fab fa-instagram fa-stack-1x fa-inverse\"></i>\n" +
                                    "</span>\n" +
                                "</span>\n"+
                            "</div>\n"+
                            "<div class=\"column\">\n" +
                                "<span class=\"icon is-medium\">\n" +
                                    "<span class=\"fa-stack\">\n" +
                                        "<i class=\"fab fa-twitter fa-stack-1x fa-inverse\"></i>\n" +
                                    "</span>\n" +
                                "</span>\n"+
                            "</div>\n"+
                            "<div class=\"column\">\n" +
                                "<span class=\"icon is-medium\">\n" +
                                    "<span class=\"fa-stack\">\n" +
                                    "<i class=\"fab fa-linkedin fa-stack-1x fa-inverse\"></i>\n" +
                                    "</span>\n" +
                                "</span>\n"+
                            "</div>\n" +
                        "</div>"
        })
    document.getElementById("linkinput").value = '';
}