const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    let button = document.createElement('button')
    button.classList.add('buttons')
    button.innerHTML = sound

    
    button.addEventListener('click', () => {
        let tocar = document.getElementById(sound)
        
        stopSound()//Parar Som

        tocar.play()
    })

    document.querySelector('.container').appendChild(button)

})

function stopSound() {
    
    sounds.forEach(sound =>{

        let id = document.getElementById(sound)

        id.pause()
        id.currentTime = 0
    })
}

