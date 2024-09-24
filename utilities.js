function getInputFieldById(id) {
    const donateInput = document.getElementById(id).value;
    const donateNumber = parseFloat(donateInput)
    return donateNumber;
}