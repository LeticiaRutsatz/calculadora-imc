

function pesoIdeal() {
    const name = document.getElementById("name");
    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    const p = document.getElementById("resultado");

    const calculoImc= peso.value/(altura.value*altura.value);


    if(name.value !== '' && peso.value !== '' && altura.value !== ''){
        if(calculoImc < 18.5){
            p.textContent = `${name.value}, Seu IMC é de ${calculoImc.toFixed(1)}, você está abaixo do peso!`
        }else if(calculoImc >= 18.5 && calculoImc <= 24.9){
            p.textContent = `${name.value}, Seu IMC é de ${calculoImc.toFixed(1)}, você está no peso ideal!`
        }else if(calculoImc >= 25 && calculoImc <= 29.9){
            p.textContent = `${name.value}, Seu IMC é de ${calculoImc.toFixed(1)}, você está com sobrepeso!`
        }else if(calculoImc >= 30 && calculoImc <= 34.99){
            p.textContent = `${name.value}, Seu IMC é de ${calculoImc.toFixed(1)}, você está com obesidade grau |!`
        }else if(calculoImc >= 35 && calculoImc <= 39.99){
            p.textContent = `${name.value}, Seu IMC é de ${calculoImc.toFixed(1)}, você está com obesidade grau ||!`
        }else{
            p.textContent = `${name.value},Seu IMC é de ${calculoImc.toFixed(1)}, você está com obesidade grau |||!`
        }
    }else{
        alert('Preencha todos os campos!');
    }

};


