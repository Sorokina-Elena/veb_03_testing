function hello() {
    document.getElementById("demo").innerHTML = 'Привет мир';
}

function task_1() {
    alert('Привет, мир!');
}

function task_2() {
    let num_1 = parseInt(prompt("Введите первое число"));
    let num_2 = parseInt(prompt("Введите второе число"));
    alert(`${num_1} + ${num_2} = ${num_1+num_2}`);
}

function task_3_5() {
    let name = prompt("Введите имя: ", "Имя");
    alert(`"Привет ${name}"`);
}

function task_6() {
    if (confirm("Вы уверены?")) {
        alert("Мы рады, что вы уверены");
    }
    else{
        alert("Жаль, что вы не уверены")
    }
}

function task_7() {
    let age = parseInt(prompt("Введите возраст"));
    switch (age) {
        case 10:
            alert("Идите учить уроки")
            break;
        case 18:
            alert("Вы совершеннолетний, Вам все можно")
            break;
        case 30:
            alert("Идите спать, завтра на работу")
            break;
        default:
            alert("Мы не знаем, что вам делать")
            break;
    }
}

function task_8() {
    let num_1 = parseInt(prompt("Введите первое число"));
    let arithmetic_sign = prompt("Введите действие: +, -, *, /");
    let num_2 = parseInt(prompt("Введите второе число"));
    let result = alert("=");
    switch (arithmetic_sign) {
        case "+":
            alert(`${num_1 + num_2}`)
            break;
        case "-":
            alert(`${num_1 - num_2}`)
            break;
        case "*":
            alert(`${num_1 * num_2}`)
            break;
        default:
            alert(`${num_1/num_2}`)
            break;
    }
}