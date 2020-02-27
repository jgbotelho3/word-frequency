
const Translate = {

    button: document.querySelector('.btn'),
    textarea: document.querySelector('.textarea'),

    getText(){

        
        
        let results = {
            word: '',
            times: 0
        }
        const text = Translate.textarea.value.toLowerCase().replace(/[^\w\s]/g, '')
        const words = text.split(' ')
        words.forEach(word =>{

            if(!word) return alert('Some word is needed')

        })
        
        

    }   
}