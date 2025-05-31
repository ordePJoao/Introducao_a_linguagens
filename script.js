let tarefas = []

function adicionarTarefa() {

      let mensagem = "Tarefa adicionada com sucesso!";
      const tarefa_add = document.getElementById("mensagem")            
      tarefa_add.textContent = mensagem;

      const inputTarefa = document.getElementById("input-tarefa")
      let tarefa = inputTarefa.value.trim() /* pegando o valor atribuido na entrada do input-tarefa
      /* .trim() FUNCAO DO JS (retira espacos do inicio/finaol do texto)  */
      const mensagemTarefa = document.getElementById("mensagem-tarefa")

      if (tarefa === "") { //tarefa.trim() e uma funcao que evita campos vazios e/com espacos
                  
            document.getElementById("mensagem").textContent = "" //Excluido a mensagem Tarefa adicionada com sucesso caso o if = true
            mensagemTarefa.classList.remove("mensagem-tarefa-adicionada")
            mensagemTarefa.classList.add("mensagem-tarefa-erro")
            mensagemTarefa.textContent = "Erro: O campo está vazio!"             
      }

      else{
            mensagemTarefa.classList.remove("mensagem-tarefa-erro") //remove a class erro do <p>
            tarefa_add.classList.add("mensagem-tarefa-adicionada") //Mudando class da primeira mensagem (adicionando cor)
            mensagemTarefa.textContent = tarefa + " Adicionado"; //Mostrando a tarefa adicionada

            tarefas.push(tarefa) //armazendando a tarefa no ARRAY tarefas

            renderizarTarefas() //Formar lista de "tarefas adicionadas"

            inputTarefa.value = "" /* Zerando o input | Adicionando o valor "vazio" */

            const botaoLista = document.getElementById("botao_lista") 
            botaoLista.classList.remove("botao_lista-esconder") //Botao Remover Tudo aparecer
            botaoLista.classList.add("botao_lista-amostra")
      }
}
/* 
            let inputTarefa = document.getElementById("input-tarefa")
            let tarefa = inputTarefa.value //pegando o valor atribuido na entrada do input-tarefa
            console.log(tarefa)  
*/

/* OBS: tudo que vem depois de um . indica acao | .textContent = / .conteudodotexto = */

function renderizarTarefas() {
      const listaTarefa = document.getElementById("lista-tarefa") //no ul
      listaTarefa.innerHTML = "" //innerHTML Altera/atualiza uma div | NESSE CASO APAGANDO OS ELEMENTOS DA DIV
      
      for(let i=0; i < tarefas.length; i++){ //criar a variavel dentro do for, para ser possivel encomenda-la para outras funcoes
      
            let novaTarefa = document.createElement("li") //Criar elemento <li>
            novaTarefa.textContent = tarefas[i] //atribuindo a nova lista, o que foi escrito no input (tarefa)
            
            let botaoRemover = document.createElement("button")
            botaoRemover.className = "remover" //Atribuindo classe ao button criado
            botaoRemover.textContent = "REMOVER" //Atribuindo o texto REMOVER no button
            botaoRemover.onclick = () => removerTarefa(i) /* REDUZINDO: function() {
                                                                                    removerTarefa(i)
            } */

            //removerTarefa(i) - Passando o endereço/encomenda do que e pra remover
      
            let botaoEditar = document.createElement("button")
            botaoEditar.className = "editar" //Atribuindo classe ao button criado
            botaoEditar.textContent = "EDITAR" //Atribuindo o texto REMOVER no button
            botaoEditar.onclick = () => editarTarefa(i)



            novaTarefa.appendChild(botaoRemover) //Atribuindo o botao remover (filho) a novaTarefa (pai)
            novaTarefa.appendChild(botaoEditar)
            listaTarefa.appendChild(novaTarefa) // Adiciondo a lista criada (elemento filho) no elemento pai (lista tarefa UL)
      }
}

function removerTarefa(indice) { //declarando "indice" para recerber o i | parametro = Variável que recebe o valor, argumento = Valor que você envia à função

      const tarefa_add = document.getElementById("mensagem")
      tarefa_add.innerHTML = "" //Limpado a mensagem "tarefa adicionada com sucesso"
      
      const mensagemTarefa = document.getElementById("mensagem-tarefa")
      mensagemTarefa.innerHTML = "" //Limpando o conteudo de mensagemTarefa
      mensagemTarefa.textContent = tarefas[indice] + " Removido"
      tarefas.splice(indice, 1) //remove UM elemento do vetor
      //removendo especificamente o elemento do indice = i
      
      renderizarTarefas()

      if(tarefas.length === 0){ //Caso remova todas as tarefas manualmente
            const mensagemTarefa = document.getElementById("mensagem-tarefa")
            mensagemTarefa.textContent = ""

            const botaoLista = document.getElementById("botao_lista")
            botaoLista.classList.add("botao_lista-esconder") //Removendo o botao Remover Tudo da tela
      }
}

function editarTarefa(indice){

      let tarefaEditada = prompt("Edite a tarefa:")

      if(tarefaEditada.trim() !== ""){ //Se o conteudo escrito no prompt for diferente de ... VAZIO
            tarefas[indice] = tarefaEditada //Atribuido o novo valor da tarefa

            const tarefa_add = document.getElementById("mensagem")
            tarefa_add.textContent = "Tarefa Editada com Sucesso!"
      
            const mensagemTarefa = document.getElementById("mensagem-tarefa")
            mensagemTarefa.innerHTML = "" //Limpando o conteudo de mensagemTarefa
            mensagemTarefa.textContent = tarefas[indice] + " Adicionada"

            renderizarTarefas()

      }
}

function removerTudo(){
      tarefas.length = 0 //zerando tamanho do array "limpando o array"
      renderizarTarefas()

      const tarefa_add = document.getElementById("mensagem")
      tarefa_add.textContent = "Todas as Tarefas Removidas com Sucesso!" //Limpado a mensagem "tarefa adicionada com sucesso"
      
      const mensagemTarefa = document.getElementById("mensagem-tarefa")
      mensagemTarefa.textContent = "" //Limpando o conteudo de mensagemTarefa

      const botaoLista = document.getElementById("botao_lista")
      botaoLista.classList.add("botao_lista-esconder") //Removendo o botao Remover Tudo da tela
}