let listOfQuestions = document.getElementsByClassName('quiz')
let modal = document.getElementById("modal-wrapper")
const getDataFromBackend = new Promise((resolve, reject) => {
    $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz',(data) => {
        resolve(data)
    }).fail(err => {
        reject(new Error(`Call failed with status ${err.status}`))
    })
}) 

getDataFromBackend
.then((data) => {
    for (let i = 0; i < data.length; ++i) {
        addInListOfQuestionsDinamically(data, i)  
    }
    checkWhenButtonPressed(data)
}) 
.catch((err) => {
    console.log('call failed ' + err)
})

const addInListOfQuestionsDinamically = (data, i) => {
    const newSection = document.createElement('section')
    newSection.className = 'quiz-item'
    listOfQuestions[0].appendChild(newSection)

    const question = document.createElement('h3')
    question.innerHTML =  data[i].question
    newSection.appendChild(question)

    for (let j = 0; j < 4; ++j) {
        const option = document.createElement('div')
        newSection.appendChild(option)
        option.className = 'option-wrapper'

        const label = document.createElement('label')
        option.appendChild(label)

        const input = document.createElement('input')
        label.appendChild(input)
        input.type = 'radio'
        input.value = j + 1
        input.className = 'input-answers'
        input.required = true  
        input.name = `q${i + 1}` 

        const p = document.createElement('p')
        label.appendChild(p)
        p.innerHTML = data[i].options[j] 
    }
}

const checkCorrectAnswers = (data) => {
    let inputAnswer = document.getElementsByClassName('input-answers')
    let counter = 0, jump = 4
    for (let i = 0; i < data.length; ++i) {
        for (j = i * 4; j < jump; ++j) {
            if (inputAnswer[j].checked === true && inputAnswer[j].value == data[i].answer) {
                ++counter
            } 
        } 
        jump += 4       
    } 
    let scoreCount = document.getElementById('result')
    scoreCount.innerHTML = `${counter}/5`
    modal.style.display = 'block'
}

const verifyNrOfAnswersChecked = () => {
    let inputAnswer = document.getElementsByClassName('input-answers')
    let count = 0
    for(let i = 0; i < inputAnswer.length; ++i) {
        if(inputAnswer[i].checked === true) {
            ++count
        }
    }
    if(count === 5) {
        return true 
    } else {
        return false
    }
} 

const checkWhenButtonPressed = (data) => {
    const sectionBtn = document.createElement('section')
    listOfQuestions[0].appendChild(sectionBtn)
    sectionBtn.id = 'submit-section'
    const btnInput = document.createElement('input')
    sectionBtn.appendChild(btnInput)
    btnInput.id = 'btn-submit'
    btnInput.type = 'submit'
    btnInput.value = 'Submit'

    sectionBtn.addEventListener('click', (e) => {
        if(verifyNrOfAnswersChecked(data) === true) {
            e.preventDefault()
            checkCorrectAnswers(data)
        }
    })
}

const close_modal = document.getElementById('backdrop')
close_modal.addEventListener('click', () => {
    if (modal.style.display === 'block') {
        modal.style.display = 'none'
    }
})










