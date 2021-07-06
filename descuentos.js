

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;

}
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon")
    const couponValue = inputCoupon.value;


    let descuento;
    switch (couponValue) {
        case "JuanDC_es_batman":
            descuento = 15;
            break;
        case "pero_no_le_digas_a_nadie":
            descuento: 20;
            break;
        case "es_un_secreto":
            descuento: 30;
            break;

    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, couponValue);
    
    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento es $ : " + precioConDescuento;
}
const cupones = [
    "JuanD_C_es_batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto"
]


