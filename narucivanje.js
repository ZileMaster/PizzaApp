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
    window.addEventListener("load", function(){
        this.document.getElementById("form").addEventListener("submit", e=>{
            let validno = true;

            if(this.document.getElementById("kolicina").value <= 0){
                validno = false;
            }
            if(this.document.getElementById("vreme-dostave").value <= 0){
                validno = false;
            }
            if(this.document.getElementById("phoneNum").value == ""){
                validno = false;
            }
            if(this.document.getElementById("adresa").value == ""){
                validno = false;
            }

            if(this.document.getElementById("pizza").innerHTML == "(chose)" || this.document.getElementById("pizza").innerHTML == ""){
                validno = false;
            }

            if(!validno){
                this.window.alert("Popunite sva polja!");
                e.preventDefault();
            }
        });
    });
    