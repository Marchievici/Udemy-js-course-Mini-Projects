const step_one_container = document.getElementById('StepOneContainer')
const step_two_container = document.getElementById('StepTwoContainer')
const step_three_container = document.getElementById('StepThreeContainer')

const first_name = document.getElementById('first_name')
const first_name_err = document.getElementById('first_name_error')

const last_name = document.getElementById('last_name')
const last_name_err = document.getElementById('last_name_error')

const email = document.getElementById('email')
const email_err = document.getElementById('email_error')

const checkValid = (name, error, patterns, flags) => {
    name.addEventListener('input', (e) => {
        let current_value = e.target.value
        let pattern = new RegExp(patterns, flags)
        let validation = pattern.test(current_value)
        if(validation === false) {
            error.style.display = 'block'
        } else {
            error.style.display = 'none'
        }
    })
}

checkValid(first_name, first_name_err, '^[a-z]+$', 'i')
checkValid(last_name, last_name_err, '^[a-z]+$', 'i')
checkValid(email, email_err, '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$', 'gi')

const contact = document.getElementById('contact')
const contact_err = document.getElementById('contact_error')

const city = document.getElementById('city')
const city_err = document.getElementById('city_error')

const country = document.getElementById('country')
const country_err = document.getElementById('country_error')

checkValid(contact, contact_err, '^(\\+4)?[\\d]{10}$')
checkValid(city, city_err, '.+', 'i')
checkValid(country, country_err, '.+', 'i')

const button_step_one_next = document.getElementById('StepOneNext')
const button_step_two_next = document.getElementById('StepTwoNext')
const btnNext = (button, first_input, third_input, error1, error2, error3, curr_container, next_container) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        if (first_input.value === "") {
            error1.style.display ='block'
        }
        if (third_input.value === "") {
            error3.style.display ='block'
        }
        if (error1.style.display !== 'block' && error2.style.display !== 'block'
                && error3.style.display !== 'block') {
            curr_container.style.display = 'none'
            next_container.style.display = 'block'
        }
    })
}
btnNext(button_step_one_next, first_name, email, first_name_err, last_name_err, email_err, step_one_container, step_two_container)
btnNext(button_step_two_next, contact, country, contact_err, city_err, country_err, step_two_container, step_three_container)

const button_step_two_prev = document.getElementById('StepTwoPrevious')
const button_step_three_prev = document.getElementById('StepThreePrevious')
const btnPrevious = (button, curr_container, prev_container) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        curr_container.style.display = 'none'
        prev_container.style.display = 'block'
    })
}
btnPrevious(button_step_three_prev, step_three_container, step_two_container)
btnPrevious(button_step_two_prev, step_two_container, step_one_container)

const enrolled_program = document.getElementById('select_program')
const enrolled_program_err = document.getElementById('select_program_error')
const message = document.getElementById('message')
const message_err = document.getElementById('message_error')

const succes_message = document.getElementById('SuccessContainer')
const buttonSubmit = document.getElementById('StepThreeSubmit')

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    if(enrolled_program.value === "" ) {
        enrolled_program_err.style.display = 'block'
    } else {
        enrolled_program_err.style.display = 'none'
    }
    if(message.value.trim() === "") {
        message_err.style.display = 'block'
    } else {
        message_err.style.display = 'none' 
    }
    if (enrolled_program_err.style.display === 'none' && message_err.style.display === 'none') {
        step_three_container.style.display = 'none'
        succes_message.style.display = 'block'
    }
})









