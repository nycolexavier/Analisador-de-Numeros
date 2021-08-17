function inserir() {
    let num = document.getElementById('number-input').value
    var sel = document.createElement('select')
    var selField = document.getElementById('select-field')
    var options = []
    var optionsn = []
    var i = 0
    var finInput = document.getElementById('finish-input')
    alert(num)
    for (var is = 0; is != 1; is++) {                               //CRIA UM SELECT E PARA
        selField.appendChild(sel) 
        sel.setAttribute('readOnly', '')  
        sel.setAttribute('size', '5')
        sel.setAttribute('class', 'select-style')
    }
    if (i != -1) {                                  //CRIA OPTION E COLOCA O NUMERO TODA VEZ QUE CLICA INSERIR
        options[i] = document.createElement('option')
        sel.appendChild(options[i]).setAttribute('id', `opt${i}`)
        options[i].innerHTML = `${num.value}`
        optionsn[i] = document.getElementById(`opt${i}`).value
        i++
    }
    finInput.setAttribute('type', 'button')
}