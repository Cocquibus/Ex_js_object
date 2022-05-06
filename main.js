function exo1(){
    let vieille = {
        age: 90,
        nom: {
            nomdf: "joselinne",
            prenom: "martine"
        },
        nomdf: "josé",
        objet: "canne",
        parlerb: "je vais bien",
        parlerm: "je vais mal"
    }
    console.log(vieille)
    console.log(vieille.parlerb)
    console.log(vieille.parlerm)
    
    let moi = {
        prenom: "yves",
        nom: "cocquibus",
        age: 30,
    }
    console.log(moi.age)
    
    let trois = {
        prenom: moi.prenom,
        age : vieille.age,
        taille : 160
    }
    console.log(trois)
}
function exo2(){
    let sergio ={
        course : ["pain","tomate","cerise","ketchup"]
    }
    let francois ={
        course : ["tomate","ketchup"],
        derober: sergio.course[0] + " " + sergio.course[2]
    }
    console.log(francois)
}
function exo3(){
    let moi = {
        prenom : "yves",
        nom:"cocquibus",
        presente(){
            console.log("je m'apelle " + this.prenom + " " + this.nom);
        }        
    }
    moi.presente()
}
function exo4(){
    let moi = {
        prenom: "yves",
        nom:"cocquibus",
        age: 30,
        change(){
            moi.age = prompt("entrer votre age")
        }
    }
    moi.change()
    console.log(moi)
}