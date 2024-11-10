function pessoa(tipo) {
    if (tipo === "pf") {
        document.getElementById('cpf').style.display = "block";
        document.getElementById('cnpj').style.display = "none";
        document.cadastro.cpf.focus();
    } else {
        document.getElementById('cpf').style.display = "none";
        document.getElementById('cnpj').style.display = "block";
        document.cadastro.cnpj.focus();
    }
}

function senha() {
    const s1 = document.cadastro.senha1.value;
    const s2 = document.cadastro.senha2.value;

    if (s1 !== s2) {
        document.getElementById('msg').style.display = "block";
    } else {
        document.getElementById('msg').style.display = "none";
    }
}

function mascara_cpf(obj) {
    if (obj.value.length === 3 || obj.value.length === 7) {
        obj.value += ".";
    } else if (obj.value.length === 11) {
        obj.value += "-";
    }
}

function mascara_cnpj(obj) {
    if (obj.value.length === 2 || obj.value.length === 6) {
        obj.value += ".";
    } else if (obj.value.length === 10) {
        obj.value += "/";
    } else if (obj.value.length === 15) {
        obj.value += "-";
    }
}

function mascara_tel(obj) {
    if (obj.value.length === 0) {
        obj.value += "(";
    } else if (obj.value.length === 3) {
        obj.value += ")";
    } else if (obj.value.length === 9) {
        obj.value += "-";
    }
}

function salto(campo, digito) {
    if (campo === "cpf" && digito.length > 13) {
        document.cadastro.telefone.focus();
    } else if (campo === "cnpj" && digito.length > 17) {
        document.cadastro.telefone.focus();
    } else if (campo === "telefone" && digito.length > 13) {
        document.cadastro.pagamento.focus();
    }
}

function abrir() {
    const pagamento = document.cadastro.pagamento.value;
    if (pagamento === "Cartão") {
        document.getElementById('cartao').style.display = "block";
        document.cadastro.num.focus();
    } else {
        document.getElementById('cartao').style.display = "none";
    }
}

function somente_numero(e) {
    const tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) || (tecla === 8) || (tecla === 37) || (tecla === 39) || (tecla === 46)) {
        return true;
    } else {
        return false;
    }
}

function setas(e) {
    const tecla = (window.event) ? event.keyCode : e.which;
    if (tecla === 38 || tecla === 40 || tecla === 9) {
        return true;
    } else {
        return false;
    }
}

function calculos(form) {
    form.login.value = form.login.value.toUpperCase();

    const quant1 = parseInt(form.quant1.value) || 0;
    const quant2 = parseInt(form.quant2.value) || 0;
    const quant3 = parseInt(form.quant3.value) || 0;

    const tot1 = quant1 * 50;
    const tot2 = quant2 * 45;
    const tot3 = quant3 * 55;

    const total = tot1 + tot2 + tot3;
    const desconto = (form.pagamento.value === "Dinheiro") ? total * 0.10 : 0;
    const apagar = total - desconto;

    form.tot1.value = "R$ " + tot1.toFixed(2);
    form.tot2.value = "R$ " + tot2.toFixed(2);
    form.tot3.value = "R$ " + tot3.toFixed(2);

    document.getElementById('total').innerText = total.toFixed(2);
    document.getElementById('desconto').innerText = desconto.toFixed(2);
    document.getElementById('apagar').innerText = apagar.toFixed(2);
}

function confirmar() {
    confirm('Deseja enviar o formulário?');
}

