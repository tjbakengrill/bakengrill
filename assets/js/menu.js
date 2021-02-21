
$.ajax({
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRbwJWgOu5HcX_j_aKGE-9qinKtpgiyPWIvlronkJMELPGenDnO84VKOEVy6uZLq-66-_EHwxN5-WPy/pubhtml",
    dataType: 'text',
    success: function(data) {
         var elements = $("<div>").html(data)[0].getElementsByTagName("table")[0];

         console.log(elements)
         var elements = $("<div>").html(data)[0].getElementsByTagName("table")[0];
        $('.menu-table').append(elements)
    }
});