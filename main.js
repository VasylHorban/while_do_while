//1
let passTry = 5;
let password = 'LogosItAcademy'
while (passTry >= 0) {
    if (passTry == 0) {
        alert('Спробуйте пізніше!')
        passTry = -1
        continue;
    }
    
    let userPassword = prompt(`Введіть пароль!`)
    passTry--
    if (userPassword == password) {
        alert('Запрошуємо на сайт!')
        passTry = -1
    } else {
        alert(`Кількість спроб : ${passTry} . Підказка : назва академії (камелкейсом)`)
    }
}
