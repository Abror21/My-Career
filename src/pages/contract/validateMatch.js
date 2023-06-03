export const validate = (values) => {
    let error = {}

    if(!values.pasportSeriyaNumber){
        error.pasportSeriyaNumber = "Requared"
    }else if(values.pasportSeriyaNumber.length < 9 || values.pasportSeriyaNumber.length > 9) {
        error.pasportSeriyaNumber = "Invalid pasport seriya number"
    }

    if(!values.inn){
        error.inn = "Requared"
    }else if(values.inn.toString(10).length < 9 || values.inn.toString(10).length > 9) {
        error.inn = "Invalid inn number"
    }

    if(!values.cardNumber){
        error.cardNumber = "Requared"
    }else if(values.cardNumber.toString(10).length < 16 || values.cardNumber.toString(10).length > 16) {
        error.cardNumber = "Invalid card number"
    }

    if(!values.inps){
        error.inps = "Requared"
    }else if(values.inps.length < 18 || values.inps.length > 18) {
        error.inps = "Invalid inps number"
    }

    if(!values.bankName){
        error.bankName = "Requared"
    }

    if(!values.bankINN){
        error.bankINN = "Requared"
    }else if(values.bankINN.toString(10).length < 9 || values.bankINN.toString(10).length > 9) {
        error.bankINN = "Invalid bank INN number"
    }

    if(!values.tranzitAccount){
        error.tranzitAccount = "Requared"

    }else if(values.tranzitAccount.toString(10).length < 9 || values.tranzitAccount.toString(10).length > 9) {
        error.tranzitAccount = "Invalid tranzit Account number"
    }

    if(!values.mfo){
        error.mfo = "Requared"
    }else if(values.mfo.length < 9 || values.mfo.length > 9) {
        error.mfo = "Invalid mfo number"
    }

    return error
}