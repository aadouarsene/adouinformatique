const darkMode = document.querySelector('.darkMode')
const darkLight = document.querySelector('.darkLight')
const body = document.body
const header = document.querySelector('header')



window.addEventListener('DOMContentLoaded', (event) => {

    darkMode.addEventListener('click', () => {
        const moon = darkLight.getAttribute('name')
        const lien = document.querySelectorAll('a')
        if (moon === 'moon') {
            darkLight.setAttribute('name', 'moon-outline')
            darkLight.style.color = 'white'
            body.classList.add('darkModeBlack')
            header.classList.add('darkModeBlack')
            lien.forEach(a => a.style.color = 'white')
        }
        if (moon === 'moon-outline') {
            darkLight.setAttribute('name', 'moon')
            darkLight.style.color = 'black'
            body.classList.remove('darkModeBlack')
            header.classList.remove('darkModeBlack')
            lien.forEach(a => a.style.color = 'black')
        }
    })

    const scrollRevealOption = {
        distance: "75px",
        origin: "bottom",
        duration: 1000,
        interval: 1000,
        easing: 'ease-in'
    }

    ScrollReveal().reveal(".aries", {
        ...scrollRevealOption
    })

    ScrollReveal().reveal(".logo_cmby", {
        ...scrollRevealOption, delay: 500
    })

    ScrollReveal().reveal(".infoLogo", {
        ...scrollRevealOption, delay: 1000
    })

    ScrollReveal().reveal(".logoCpcss", {
        ...scrollRevealOption, delay: 1500
    })

    ScrollReveal().reveal(".imageAccueil h1", {
        ...scrollRevealOption, origin: 'top'
    })

    ScrollReveal().reveal("button.ctabtn", {
        ...scrollRevealOption, scale: 0.4
    })

    ScrollReveal().reveal(".arrowCta", {
        ...scrollRevealOption, scale: 0.85
    })

    ScrollReveal().reveal(".title", {
        ...scrollRevealOption, origin: 'top', scale: 0.85
    })
    ScrollReveal().reveal(".imageDg", {
        ...scrollRevealOption, origin: 'left', scale: 0.5
    })

    ScrollReveal().reveal(".nomDg", {
        ...scrollRevealOption, origin: 'right'
    })

    ScrollReveal().reveal(".impression", {
        ...scrollRevealOption
    })

    ScrollReveal().reveal(".impressionCoul", {
        ...scrollRevealOption, delay: 500
    })

    ScrollReveal().reveal(".reliure", {
        ...scrollRevealOption, delay: 1000
    })
    ScrollReveal().reveal(".saisie", {
        ...scrollRevealOption, delay: 1500
    })


    ScrollReveal().reveal(".bureautique", {
        ...scrollRevealOption
    })

    ScrollReveal().reveal(".Formations", {
        ...scrollRevealOption, delay: 500
    })

    ScrollReveal().reveal(".Devweb", {
        ...scrollRevealOption, delay: 1000
    })
    ScrollReveal().reveal(".Graphique", {
        ...scrollRevealOption, delay: 1500
    })

})
