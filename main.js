$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        
        const nomeTarefa = $('#nova-tarefa').val()
        const listaTarefas = $('#lista-tarefas')
        const novoItem = $(`<li class="tarefa">
        <input type="checkbox" class="checkbox" id="${nomeTarefa}">
        <label for="${nomeTarefa}">${nomeTarefa}</label>
        </li><hr>`)

        $(novoItem).appendTo(listaTarefas)
        $('#nova-tarefa').val('')
    })
})