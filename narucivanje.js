function izaberi(radiobtn){
    let tekst = "";
    if(radiobtn.value == "kapricoza"){
        tekst = "Capriziosa";
    }
    else if(radiobtn.value == "kulen"){
        tekst = "Feferoni";
    }
    else if(radiobtn.value == "vege"){
        tekst = "Vegan";
    }

    document.getElementById("pizza").innerHTML = tekst;
}