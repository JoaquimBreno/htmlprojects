
function populateUFs() {//setting a fuction//
    const ufSelect = document.querySelector("select[name=uf]")//saying that this const is the uf option//
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")//calling the state url//
    .then( res => res.json() )//anwer to answer.json//
    .then( states => { //when answer has gone, informs states}

        for( const state of states ) { // to each state of states do that//
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`}
    })
}

populateUFs()//display UF//

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value//setting that ufValue is an event target value//

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`//calling for cities using an state id//
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true
    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        for( const city of cities ) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`}
    })
    citySelect.disabled = false // switch citySelect disable to enable//

}

document// inform a html code//
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)// wait the change and get Cities //



//Colect items//
//Whole li's//
const itemsToCollect = document.querySelectorAll(".items-grid li")
    for(const item of itemsToCollect) {
        item.addEventListener("click", handleSelectedItem)
    }

    let selectedItems = []
    function handleSelectedItem(event) {

        const itemLi = event.target
        // add or remove a class with js
        itemLi.classList.toggle("selected")
        const itemId = event.target.dataset.id

   //verify whether it has items selected, if true
    //pick the items selectet
    const collectedItems = document.querySelector("[name=item]")
    const alreadySelected = selectedItems.findIndex( item =>{
        const itemFound = item == itemId
        return itemFound
    })


    //if it's already selected, take out of selection
    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter( item =>{
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })     
    
    selectedItems=filteredItems}
    // else its not selected, add to selection
    else{
        selectedItems.push(itemId)
    }
    //upgrade the ocult space with selected items
    collectedItems.value = selectedItems
}

 
