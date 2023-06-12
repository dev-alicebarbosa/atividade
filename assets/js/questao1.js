botaoQuestao1 = document.querySelector("#botao-questao1")

botaoQuestao1.addEventListener("click", function(event){
    event.preventDefault()
    let radios = document.getElementsByName("questao1")
    let gabarito1 = document.getElementById("gabarito1")
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == 'a'){
                gabarito1.textContent = "Gabarito A. Resposta certa"
                radios[i].parentElement.classList.add("certa")
            }else{
                gabarito1.textContent = "Gabarito A. Resposta errada"
                radios[i].parentElement.classList.add("errada")
            }
            
            break;
        }
    }
})

botaoQuestao1.addEventListener("click", function(event){
    event.preventDefault()
    let radio = document.getElementsByName("questao2")
    let gabarito2 = document.getElementById("gabarito2")
    for (let i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            if(radio[i].value == 'd'){
                gabarito2.textContent = "Gabarito A. Resposta certa"
                radio[i].parentElement.classList.add("certa")
            }else{
                gabarito2.textContent = "Gabarito A. Resposta errada"
                radio[i].parentElement.classList.add("errada")
            }
            
            break;
        }
    }

        let radio3 = document.getElementsByName("questao3")
        let gabarito3 = document.getElementById("gabarito3")
        for (let i = 0, length = radio3.length; i < length; i++) {
            if (radio3[i].checked) {
                if(radio3[i].value == 'i'){
                    gabarito3.textContent = "Gabarito C. Resposta certa"
                    radio3[i].parentElement.classList.add("certa")
                }else{
                    gabarito3.textContent = "Gabarito C. Resposta errada"
                    radio3[i].parentElement.classList.add("errada")
                }
                
                break;
            }
        }

        let radio4 = document.getElementsByName("questao4")
        let gabarito4 = document.getElementById("gabarito4")
        for (let i = 0, length = radio4.length; i < length; i++) {
            if (radio4[i].checked) {
                if(radio4[i].value == 'a'){
                    gabarito4.textContent = "Gabarito A. Resposta certa"
                    radio4[i].parentElement.classList.add("certa")
                }else{
                    gabarito4.textContent = "Gabarito A. Resposta errada"
                    radio4[i].parentElement.classList.add("errada")
                }
                
                break;
            }
        }

        let radio5 = document.getElementsByName("questao5")
        let gabarito5 = document.getElementById("gabarito5")
        for (let i = 0, length = radio5.length; i < length; i++) {
            if (radio5[i].checked) {
                if(radio5[i].value == 'c'){
                    gabarito5.textContent = "Gabarito C. Resposta certa"
                    radio5[i].parentElement.classList.add("certa")
                }else{
                    gabarito4.textContent = "Gabarito C. Resposta errada"
                    radio5[i].parentElement.classList.add("errada")
                }
                
                break;
            }
        }

        let radio6 = document.getElementsByName("questao6")
        let gabarito6 = document.getElementById("gabarito6")
        for (let i = 0, length = radio6.length; i < length; i++) {
            if (radio6[i].checked) {
                if(radio6[i].value == 'b'){
                    gabarito6.textContent = "Gabarito B. Resposta certa"
                    radio6[i].parentElement.classList.add("certa")
                }else{
                    gabarito6.textContent = "Gabarito B. Resposta errada"
                    radio6[i].parentElement.classList.add("errada")
                }
                
                break;
            }
        }


        let radio7 = document.getElementsByName("questao7")
        let gabarito7 = document.getElementById("gabarito7")
        for (let i = 0, length = radio7.length; i < length; i++) {
            if (radio7[i].checked) {
                if(radio7[i].value == 'b'){
                    gabarito7.textContent = "Gabarito B. Resposta certa"
                    radio7[i].parentElement.classList.add("certa")
                }else{
                    gabarito7.textContent = "Gabarito B. Resposta errada"
                    radio7[i].parentElement.classList.add("errada")
                }
                
                break;
            }
        }
})

botaoQuestao1.addEventListener("click", function(){
    resolucao= document.getElementById("resolucao")
    resolucao.classList.remove("hidden")
    resolucao.classList.add("show")
})