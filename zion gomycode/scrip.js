let box = document.getElementsByClassName("card")
for (let i = 0; i < box.length; i++){
    let btnminus = box[i].children[1].children[3].children[2]
    let priceunit = box[i].children[1].children[2]
    let btnplus = box[i].children[1].children[3].children[0]
    let nombre = box[i].children[1].children[3].children[1]
    let prixUnit = box[i].children[1].children[2]
    let totalprice = box[i].children[1].children[5]
    let qty = parseInt(nombre.innerHTML)
    let prixUnitaire = parseInt(prixUnit.innerText)

    btnplus.addEventListener("click", function(){
        qty++;
        nombre.innerHTML = qty
        totalprice.innerHTML = qty*prixUnitaire
    })

    btnminus.addEventListener("click", function(){
       
       
        totalprice.innerText = qty*prixUnitaire
        nombre.innerText = qty
        qty--;
      
        if(qty<1){
            qty=0;}
    })

    function change(){
        let btn = document.getElementById("btn-heart");
        btn.style.backgroundColor= "red";

    }

}