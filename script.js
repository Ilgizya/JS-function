const userTime = +prompt('Введите количество часов для перевода в секунды:')

function timeToSecond() {
    let userSecond
    if (userTime > 0) {
        userSecond = userTime * 60 * 60
    } else {
        userSecond = 0
    }
    return userSecond
}

const SecondP = timeToSecond()

console.log(`Секунды от ${userTime} часа(ов) равны ${SecondP}`)



const userNumber = +prompt('Введите количество символов для генерации пароля')

function generateRandomPassword(NumberP) {
    let userPassword = ''

    for (let i = 0; i < NumberP; i++) {
        const randomNumber = Math.round(Math.random() * 10)
        userPassword += randomNumber
    }
    return userPassword
}

console.log(`Случайный пароль из ${userNumber} цифр : ${generateRandomPassword(userNumber)}`)