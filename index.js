export function utilClick() {
    //creating the .hidden class
    const style = document.createElement('style')

    style.innerHTML = '.hidden { display: none; }'

    document.head.appendChild(style)

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
    //creating the .hidden class
    const style = document.createElement('style')

    style.innerHTML = '.hidden { display: none; }'

    document.head.appendChild(style)

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

utilClick()
utilHover()