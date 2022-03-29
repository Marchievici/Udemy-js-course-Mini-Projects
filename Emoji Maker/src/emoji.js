const goLeft = document.getElementsByClassName('fas fa-chevron-left previous-step')
const goRight = document.getElementsByClassName('fas fa-chevron-right next-step')
for (let j = 0; j < goRight.length; ++j) {
    goRight[j].addEventListener('click', function(e) {
        updateLeftCard(1)
    })
}

for (let j = 0; j < goLeft.length; ++j) {
    goLeft[j].addEventListener('click', function() {
        updateLeftCard(-1)
    })
}

const skinChange = () => {
    const faceColor = document.getElementById('skin')
    const yellowSkin = document.getElementById('yellow-skin')
    const greenSkin = document.getElementById('green-skin')
    const redSkin = document.getElementById('red-skin')
    const colors = [yellowSkin, greenSkin, redSkin] 

    colors.forEach(elem => {
        elem.addEventListener('click', function() {
            faceColor.src = elem.src
            updateLeftCard(1)
        })
    })
}

const eyesChange = () => {
    const eyesType = document.getElementById('eyes')
    const eyeNormal = document.getElementById('eye-normal')
    const eyeClosed = document.getElementById('eye-closed')
    const eyeLong = document.getElementById('eye-long')
    const eyeLaughing = document.getElementById('eye-laughing')
    const eyeRolling = document.getElementById('eye-rolling')
    const eyeWinking = document.getElementById('eye-winking')
    const eyes = [eyeNormal, eyeClosed, eyeLong, eyeLaughing, eyeRolling, eyeWinking]

    eyes.forEach(elem => {
        elem.addEventListener('click', function() {
            eyesType.src = elem.src
            updateLeftCard(1)
        })
    })
}

const mouthChange = () => {
    const mouthType = document.getElementById('mouth')
    const mouthSmiling = document.getElementById('mouth-smiling')
    const mouthOpen = document.getElementById('mouth-open')
    const mouthStraight = document.getElementById('mouth-straight')
    const mouthSad = document.getElementById('mouth-sad')
    const mouthTeeth= document.getElementById('mouth-teeth')
    const mouthTypes = [mouthOpen, mouthSmiling, mouthStraight, mouthSad, mouthTeeth]

    mouthTypes.forEach(elem => {
        elem.addEventListener('click', function() {
            mouthType.src = elem.src
        })
    })
}

const skinCard = document.getElementById('select-skin-card')
const eyesCard = document.getElementById('select-eyes-card')
const mouthCard = document.getElementById('select-mouth-card')
let cardsProperties = [[skinCard, 1], [eyesCard, 0], [mouthCard, 0]]

const updateLeftCard = (direction) => {
    if (direction === 1) {
        for (let i = 0; i < cardsProperties.length - 1; ++i) {
            if (cardsProperties[i][1] === 1) {
                cardsProperties[i][1] = 0
                let nextInd = cardsProperties.indexOf(cardsProperties[i]) + 1  
                cardsProperties[nextInd][1] = 1
                cardsProperties[nextInd][0].style.display = 'block'
                cardsProperties[i][0].style.display = 'none'
                break
            }
        }
    } else {
        for (let i = cardsProperties.length - 1; i > 0; --i) {
            if (cardsProperties[i][1] === 1) {
                cardsProperties[i][1] = 0
                let prevInd = cardsProperties.indexOf(cardsProperties[i]) - 1  
                cardsProperties[prevInd][1] = 1
                cardsProperties[prevInd][0].style.display = 'block'
                cardsProperties[i][0].style.display = 'none'
                break
            }
        }
    }
} 

skinChange()
eyesChange()
mouthChange()





   

