const $ = id => document.getElementById(id)

const addItemToCart = async (quantity, product) => {
    try {
        const response = await fetch(`/api/cart/item?quantity=${quantity}&product=${product}`);
        const result = await response.json();
        console.log(result);
        
    } catch (error) {
        console.error
    }
}


window.onload = function(){

    $('btn-cart') && $('btn-cart').addEventListener('click', async function(e) {
        try {

            const response = await fetch('/api/cart');
            const {ok,data} = await response.json();

            if(ok){
                if(data.products.length){
                    $('cart-body').innerHTML = '<p>muestro los datos de los productos</p>'
                }else {
                    $('cart-body').innerHTML = '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>'
                }
            }
            
        } catch (error) {
            console.error
        }
    })

   
}