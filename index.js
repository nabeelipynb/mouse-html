const style = document.createElement('style');
export function utilEffectX() {
    //creating the necessary styles in the head <style></style> tag

    style.innerHTML += `
    
            .hidden {
                display: none;
            }
    
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
    
                to {
                    opacity: 1;
                }
            }

            @keyframes X { from { transform: translateX(100px); } to { transform: translateX(0); } }

            @keyframes Y { from { transform: translateY(100px); } to { transform: translateY(0); } }

            .X {
                animation: X 0.3s ease forwards;
            }

            .Y {
                animation: Y 0.3s ease forwards;
            }
    
            .fade {
                animation: fadeIn 0.25s ease-in forwards;
            }


    `

    document.head.appendChild(style)
}

export function utilClick() {
    //selecting element with the click attribute
    let anchors = document.querySelectorAll(`[mouse-click]`);

    if (anchors) {
        anchors.forEach(anchor => {
            //get the values of the attribute for all elements having that attribute
            let select = anchor.getAttribute(`mouse-click`)

            //select the element that is specified in the attribute
            let boats = document.querySelector(select);
            boats.classList.add('hidden')

            //add click event listener to all elements with that attribute
            anchor.addEventListener('click', () => {
            try {
                    boats.classList.toggle('hidden')
            } catch (error) {
                    console.log('Error no DOM element has that selector!😭')
            }
            })
        })
    }
}


export function utilHover() {
    //selecting element with the hover attribute
    let anchors = document.querySelectorAll(`[mouse-hover]`);

    if (anchors) {
        anchors.forEach(anchor => {
            //get the values of the attribute for all elements having that attribute
            let select = anchor.getAttribute(`mouse-hover`)

            //select the element that is specified in the attribute
            let boats = document.querySelector(select);
            boats.classList.add('hidden')

            //add hoveron event listener to all elements with that attribute
            anchor.addEventListener('mouseenter', () => {
            try {
                    boats.classList.remove('hidden')
            } catch (error) {
                    console.log('Error no DOM element has that selector!😭')
            }
            })

            //add hoveroff event listener to all elements with that attribute
            anchor.addEventListener('mouseleave', () => {
            try {
                    boats.classList.add('hidden')
            } catch (error) {
                    console.log('Error no DOM element has that selector!😭')
            }
            })
        })
    }
}

export function utilAnimation() {
    let animation_elements = document.querySelectorAll(`[mouse-animation]`);

    animation_elements.forEach(anime => {
        let animation = anime.getAttribute('mouse-animation');
        
        if (animation == 'X') {
        let animation_length = anime.getAttribute('mouse-animation-length');

        console.log(style.innerHTML)

        if (animation_length) {
            style.innerHTML = style.innerHTML.replace(
                `@keyframes X { from { transform: translateX(100px); } to { transform: translateX(0); } }`,
                `@keyframes X { from { transform: translateX(${animation_length}px); } to { transform: translateX(0); } }`
            );

            console.log(style.innerHTML)
        }

            anime.classList.add(animation);
        }

        else if (animation == "Y") {
            let animation_length = anime.getAttribute('mouse-animation-length');

        console.log(style.innerHTML)

        if (animation_length) {
            style.innerHTML = style.innerHTML.replace(
                `@keyframes Y { from { transform: translateY(100px); } to { transform: translateY(0); } }`,
                `@keyframes Y { from { transform: translateY(${animation_length}px); } to { transform: translateY(0); } }`
            );

            console.log(style.innerHTML)
        }

            anime.classList.add(animation);
        }

        else if (animation == "fade") {
            anime.classList.add('fade')
        }

        else {
            anime.classList.add(animation)
        }
    });
}



export function utilSwap() {
    //grabbing all elements with that attribute
    let old = document.querySelectorAll(`[mouse-swap]`);
    old.forEach(ol => {
        //get value of that attribute
        let val = ol.getAttribute('mouse-swap')
        let young = document.querySelector(val)
        //add hidden class to the element being referred to
        young.classList.add('hidden')
        
        ol.addEventListener('click', () => {
            ol.classList.toggle('hidden');
            young.classList.toggle('hidden')
        })
        
        young.addEventListener('click', () => {
            ol.classList.toggle('hidden');
            young.classList.toggle('hidden')
        })

    })



}

utilEffectX()
utilClick()
utilHover()
utilAnimation()
utilSwap()