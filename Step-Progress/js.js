let firtName = document.querySelector('#firtName')
let firstNameHelp = document.querySelector('#firstNameHelp')
let LastName = document.querySelector('#LastName')
let LastNameHelp = document.querySelector('#LastNameHelp')
let exampleInputEmail1 = document.querySelector('#exampleInputEmail1')
let emailHelp = document.querySelector('#emailHelp')
let exampleInputPassword1 = document.querySelector('#exampleInputPassword1')
let passwordHelp = document.querySelector('#passwordHelp')
let address = document.querySelector('#address')
let prew = document.querySelector('#prew')
let next = document.querySelector('#next')
let parentClass = document.querySelectorAll('.mb-3')
let stepper = document.querySelectorAll('.stepper')
let otm = document.querySelector('#otm')
let step = 1;
// oneStep = document.querySelector('#oneStep')
// oneStep.addEventListener('click', (e)=>{
//     e.preventDefault()
// })
prew.setAttribute('hidden', true)
stepper[0].className = 'stepper active'
next.addEventListener('click', (e)=>{
    e.preventDefault()
    nextStep()
})
prew.addEventListener('click', (e)=>{
    e.preventDefault()
    prevStep(step)
})

function prevStep(st){
    switch(st){
        case 1:{
            parentClass[0].removeAttribute('hidden')
            parentClass[1].removeAttribute('hidden')
            parentClass[2].setAttribute('hidden', true)
            parentClass[3].setAttribute('hidden', true)
            parentClass[3].setAttribute('hidden', true)
            parentClass[4].setAttribute('hidden', true)
            stepper[0].className = 'stepper active'
            stepper[1].className = 'stepper'
            stepper[2].className = 'stepper'
            // alert('ss')
            step=1
            break;
        }
        case 2:{
            parentClass[0].removeAttribute('hidden')
            parentClass[1].removeAttribute('hidden')
            parentClass[2].setAttribute('hidden', true)
            parentClass[3].setAttribute('hidden', true)
            parentClass[3].setAttribute('hidden', true)
            parentClass[4].setAttribute('hidden', true)
            next.innerHTML = 'Oldinga'
            prew.setAttribute('disabled', true)
            stepper[0].className = 'stepper active'
            stepper[1].className = 'stepper'
            stepper[2].className = 'stepper'

            step=1
            break;
            
        }
        case 3:{
            parentClass[0].setAttribute('hidden', true)
            parentClass[1].setAttribute('hidden', true)
            parentClass[2].removeAttribute('hidden')
            parentClass[3].removeAttribute('hidden')
            parentClass[4].setAttribute('hidden', true)
            parentClass[5].setAttribute('hidden', true)
            next.innerHTML = 'Oldinga'
            step=2
            stepper[0].className = 'stepper'
            stepper[1].className = 'stepper active'
            stepper[2].className = 'stepper'
            break;
            
        }
       
    }
}

function nextStep(){
        switch(step){
        case 1:{
            parentClass[0].setAttribute('hidden', true)
            parentClass[1].setAttribute('hidden', true)
            parentClass[2].removeAttribute('hidden')
            parentClass[3].removeAttribute('hidden')
            parentClass[2].removeAttribute('hidden')
            parentClass[3].removeAttribute('hidden' )
            stepper.className = 'stepper active'
            prew.removeAttribute('hidden')
            prew.removeAttribute('disabled')
            stepper[0].className = 'stepper'
            stepper[1].className = 'stepper active'
            stepper[2].className = 'stepper'
            step=2
            stepper[1].style = ".stepper-wrap .stepper:after{background-color: rgb(190, 203, 211);border-color: rgb(152, 174, 187);}"
            break;
        }
        case 2:{
            parentClass[0].setAttribute('hidden', true)
            parentClass[1].setAttribute('hidden', true)
            parentClass[2].setAttribute('hidden', true)
            parentClass[3].setAttribute('hidden', true)
            parentClass[4].removeAttribute('hidden')
            parentClass[5].removeAttribute('hidden')
            prew.removeAttribute('disabled')
            stepper[0].className = 'stepper'
            stepper[1].className = 'stepper'
            stepper[2].className = 'stepper active'
            next.innerHTML = 'Saqlash'
            
            step=3
            break;
            
        }
        case 3:{
            parentClass[0].setAttribute('hidden', true)
            parentClass[1].setAttribute('hidden', true)
            parentClass[2].setAttribute('hidden', true)
            parentClass[3].setAttribute('hidden', true)
            parentClass[4].setAttribute('hidden', true)
            parentClass[5].setAttribute('hidden', true)
            next.setAttribute('hidden', true)
            prew.setAttribute('hidden', true)
            next.innerHTML = 'Saqlash'
            prew.removeAttribute('disabled')
            document.querySelector('form').innerHTML = `
            <h4>${firtName.value}<h4><br>
            <h4>${LastName.value}<h4><br>
            <h4>${exampleInputEmail1.value}<h4><br>
            <h4>${exampleInputPassword1.value}<h4><br>
            <h4>${address.value}<h4><br>
            <h4>${otm.value}<h4><br>
            `;

            break;
            
        }
    }
}