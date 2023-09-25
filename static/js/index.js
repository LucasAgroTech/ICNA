$(document).ready(function() {
    $(document).ready(function(){
        $('#cpf').mask('000.000.000-00');
    });
    $('#state').change(function() {
        var stateCode = $(this).val();
        $.getJSON(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateCode}/municipios`, function(data) {
            var cityDropdown = $('#city');
            cityDropdown.empty();
            cityDropdown.append($('<option></option>').attr('value', '').text('Select a city...'));  // Adiciona uma opção padrão
            $.each(data, function(key, entry) {
                cityDropdown.append($('<option></option>').attr('value', entry.nome).text(entry.nome));
            });
        });
    });
    $(document).ready(function(){
        // When the user clicks on the button, open the modal 
        $("#showConsentText").click(function() {
            $("#consentModal").css("display", "block");
        });
    
        // When the user clicks on <span> (x), close the modal
        $(".close").click(function() {
            $("#consentModal").css("display", "none");
        });
    
        // When the user clicks anywhere outside of the modal, close it
        $(window).click(function(event) {
            if ($(event.target).is("#consentModal")) {
                $("#consentModal").css("display", "none");
            }
        });
    });
    
});
