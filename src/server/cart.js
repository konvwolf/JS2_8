let add = (cart, req) => {
    cart.contents.push (req.body)
    return JSON.stringify (cart, null, 4)
}

let change = (cart, req) => {
    let find = cart.contents.find (el => el.id_product === +req.params.id)
    if (req.body.quantity >= 1) {
        find.quantity = req.body.quantity
    } else if (req.body.quantity == 0) {
        cart.contents = cart.contents.filter(el => el.id_product !== +req.params.id)
    }
    return JSON.stringify (cart, null, 4)
}

module.exports = {add, change}