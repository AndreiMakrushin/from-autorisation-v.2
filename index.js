
const ato = ()=>{
    const auto = document.querySelectorAll('.sing');
auto.forEach(e =>{
    
    e.addEventListener('click', ()=>{
        
            
        
        if (e.closest('.sign')) {
            const sign = document.querySelector('.sign')
            const creaate = document.querySelector('.create')
            sign.classList.toggle('autosign')
            creaate.classList.toggle('autocreate')
            setTimeout(() => {
            const headForm = document.querySelector('.head-form');
            const description = document.querySelector('.description')
            const createHead = document.querySelector('.create-head')
            const images = document.querySelector('.images')
            const input = document.querySelector('.inputs')
            const signup = document.querySelector('.sign-up')
            input.textContent = ''

            
            if (headForm.textContent === 'Welcome Back!') {
                headForm.textContent = 'Not Account ?'
                e.textContent = 'SIGN UP'
                description.textContent = 'Lets create a new account for you'
                createHead.textContent = 'Sign In Account'
                images.textContent = ''
                input.insertAdjacentHTML('afterbegin', `
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Pass">`)
                signup.textContent = 'SIGN IN'
                signup.addEventListener('click',()=>{
                    let clear = document.querySelectorAll('input')
                    clear.forEach(e=>{
                    e.value = ''
                })
                })
                
                if (document.documentElement.clientWidth > 700) {
                    sign.classList.remove('border-right')
                    sign.classList.add('border-left')
                } else {
                    sign.classList.add('border-top')
                    sign.classList.remove('border-bottom')
                };
                
            }else{
                headForm.textContent = 'Welcome Back!'
                e.textContent = 'SIGN IN'
                description.textContent = 'To keep connected with us please login with your personal info'
                createHead.textContent = 'Create Account'
                images.insertAdjacentHTML('afterbegin', `  <a href="https://fb-blog.ru/facebook-login/"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://vk.com/"><ion-icon name="logo-vk"></ion-icon></a>
                <a href="https://twitter.com"><ion-icon name="logo-twitter"></ion-icon></a>
                `) 
                input.insertAdjacentHTML('afterbegin', `
                <input type="text" placeholder="Name">
                <input type="email" placeholder="Email">
                <input type="text" placeholder="Pass" class="line">`)
                signup.textContent = 'SIGN UP'
                
                if (document.documentElement.clientWidth > 700) {
                    sign.classList.add('border-right')
                    sign.classList.remove('border-left')
                } else {
                    sign.classList.remove('border-top')
                    sign.classList.add('border-bottom')
                };
            }}, 240);
            
            

        }
    
    })
})
}
ato()