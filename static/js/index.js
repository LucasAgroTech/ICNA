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
});
