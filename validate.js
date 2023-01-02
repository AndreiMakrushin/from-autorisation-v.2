const sing = document.querySelector('.sing')

const btn = () =>{
    const valname = document.querySelector('[placeholder="Name"]')
    const valemail = document.querySelectorAll('[placeholder="Email"]')
    const valpass = document.querySelectorAll('[placeholder="Pass"]')
    const line = document.querySelector('.line')

    
    if (valname === null) {

    }else{
        valname.addEventListener('input', (e)=>{
            e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ a-zA-Z]/g, "").trim()
        })
    }
 
    valemail.forEach(em =>{
        em.addEventListener('input', (e)=>{
            e.target.value = e.target.value.replace(/[^@ - _ .! ~ * ' a-z A-Z 0-9]+(.*)/, '$1').trim()
        })
    })
    if (line === null) {
        
    }else{
        valpass.forEach(em =>{
            em.addEventListener('input', (e)=>{
                e.target.value = e.target.value.replace(/[^! ~ * ' a-z A-Z 0-9]+(.*)/, '$1').trim()
                if (e.target.value.length < 6) {
                    line.setAttribute('class', 'badly')
                   
                }else if(e.target.value.length > 6 && e.target.value.length < 14){
                    line.setAttribute('class', 'will-go')
                }
                else if( e.target.value.length > 15){
                    line.setAttribute('class', 'good')
                }
                
            })
        })
    }
    
}
btn()

sing.addEventListener('click', ()=>{
    setTimeout(() => {
        btn()
    }, 241); 
})