// Connexion d'un écouteur d'événement au bouton de calcul
document.getElementById("soumettre").addEventListener("click",calculer);

function calculer() {
    var monOperat;
    var valeurRenvoi;
    
    // Extraction des opérandes
    //déclaration de la variable
    var vOp1 = document.getElementById("operande1").value;
    var vOp2 = document.getElementById("operande2").value;

    // Extraction des types des opérandes
    var select1 = document.getElementById("operande1-type");
    var select2 = document.getElementById("operande2-type");
  
    var typeOp1 = select1.value;
    var typeOp2 = select2.value;
    
    // Extraction de l'opérateur
    var radios = document.getElementsByName('operateur');
    
    // Conversion des opérandes
    switch (typeOp1) {
        case "string":
            vOp1 = String(vOp1);
            break;
        case "number":
            vOp1 = Number(vOp1);
            break;
    }
    
    switch (typeOp2) {
        case "string":
            vOp2 = String(vOp2);
            break;
        case "number":
            vOp2 = Number(vOp2);
            break;
    }
    // loop through each possible operand value and find the checked one
    for (var i = 0, length = radios.length; i < length; i++) {
 
        if (radios[i].checked) {
            monOperat = radios[i].value;
            
        //do a different operation depending on which operator was selected
            switch (radios[i].value) {
                case "+":
                    valeurRenvoi = vOp1 + vOp2;
                    break;
                case "-":
                    valeurRenvoi = vOp1 - vOp2;
                    break;
                case "*":
                    valeurRenvoi = vOp1 * vOp2;
                    break;
                case "/":
                    valeurRenvoi = vOp1 * vOp2;
                    break;
                case "%":
                    valeurRenvoi = vOp1 % vOp2;
                    break;
                case "concat":
                    valeurRenvoi = vOp1 + vOp2;
                    monOperat = "+";
                    break;
                case "==":
                    valeurRenvoi = vOp1 == vOp2;
                    break;
                case "===":
                    valeurRenvoi = vOp1 === vOp2;
                    break;
                case "!=":
                    valeurRenvoi = vOp1 != vOp2;
                    break;
                case "!==":
                    valeurRenvoi = vOp1 !== vOp2;
                    break;
                case ">":
                    valeurRenvoi = vOp1 > vOp2;
                    break;
                case ">=":
                    valeurRenvoi = vOp1 >= vOp2;
                    break;
                case "<":
                    valeurRenvoi = vOp1 < vOp2;
                    break;
                case "<=":
                    valeurRenvoi = vOp1 <= vOp2;
                    break;
            }

            break;
        }
    }

    // Affichage de l'expression
    
    if (typeof(vOp1)==="string"){
        vOp1 = '"' + vOp1 + '"';
    }
    if (typeof(vOp2)==="string"){
        vOp2 = '"' + vOp2 + '"';
    }
    document.getElementById("final-operation").innerHTML = vOp1 + monOperat + vOp2;
    
    // Affichage du résultat
    document.getElementById("resultat").innerHTML = valeurRenvoi;
};