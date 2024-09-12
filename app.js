//button handler
window.onload = () =>{
    document.querySelector("#calculate").onclick = tipCalculate;
}

const tipCalculate = () =>{
    // store value of HTML element in variable
    let billAmount = parseFloat(document.querySelector(".amount").value);  
    let serviceRate = parseFloat(document.querySelector("#services").value);
    let person = parseFloat(document.querySelector("#person-count").value);
    const errorMsg = document.querySelector("#msg");

    //check either user input is valid or not
    if( isNaN(billAmount)  || serviceRate == 'Select' || person <= 0 || isNaN(person)){
        errorMsg.innerText = `Please enter valid details`;
        errorMsg.style.color = "red";
        return;
    }

    // if updated user input is valid, remove error message
    errorMsg.style.display = "none";

    //tip calculate calculation
    let totalTip = (billAmount * serviceRate) ;
    let tipPperson = totalTip / person;

    //result
    document.querySelector("#total").innerText = `Total Tip: ${totalTip} Rs`;
    document.querySelector("#each").innerText = `Each Person: ${tipPperson} Rs`;
};

