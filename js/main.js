//QUALIFICACOES 
const botao = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

botao.forEach(tab =>{
tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
        tabContent.classList.remove('qualificacao-ativa')
    })
    target.classList.add('qualificacao-ativa')

    botao.forEach(tab =>{
        tab.classList.remove('qualificacao-ativa')
    })
    tab.classList.add('qualificacao-ativa')
})
})