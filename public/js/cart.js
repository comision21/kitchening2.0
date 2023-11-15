const $ = (id) => document.getElementById(id);

const showProductInCart = (products) => {
  if($("cart-table")){
    $("cart-table").innerHTML = null;
    products.forEach(({ id, image, title, price, quantity }) => {
      $("cart-table").innerHTML += `
    <tr>
        <th scope="row"><img src="/img/products/${image}" alt="" width=100/></th>
        <td>${title}</td>
        <td>${price * quantity}</td>
        <td>
            <div class="d-flex gap-2">
                <button class="btn btn-sm btn-danger" onclick="removeItemToCart(${id})"><i class="fa-solid fa-minus"></i></button>
                <input type="text" value=" ${quantity}" style="width:30px"/>
                <button class="btn btn-sm btn-success" onclick="addItemToCart(1,${id})"><i class="fa-solid fa-plus"></i></button>
            </div>
        </td>
        <td>
        <h3 style="cursor:pointer" onclick="deleteItemToCart(${id})" class="text-danger"><i class="fa fa-trash"></i></h3>
        </td>
    </tr>
    `;
    });
  }
 
};

const addItemToCart = async (quantity, product) => {
  try {
    const response = await fetch(`/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        quantity,
        product : +product,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (!result.ok) {
      throw new Error(result.msg);
    } else {
      showProductInCart(result.data.products)
    }
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};


const removeItemToCart = async (id) => {
  try {

    const response = await fetch(`/api/cart?product=${id}`, {
      method : 'DELETE'
    });

    const result = await response.json();

    if (!result.ok) {
      throw new Error(result.msg);
    } else {
      showProductInCart(result.data.products)
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};

const deleteItemToCart = async (id) => {
  try {

    const response = await fetch(`/api/cart/item?product=${id}`, {
      method : 'DELETE'
    });
    
    const result = await response.json();

    if (!result.ok) {
      throw new Error(result.msg);
    } else {
      showProductInCart(result.data.products)
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};


const clearCart = async () => {
  try {

    const response = await fetch(`/api/cart/all`,{
      method : 'DELETE'
    });
    
    const result = await response.json();

    if (!result.ok) {
      throw new Error(result.msg);
    } else {
      $("cart-body").innerHTML =
      '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
    $("btn-clearCart").classList.add('disabled')
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
}



window.onload = function () {
  $("btn-cart") &&
    $("btn-cart").addEventListener("click", async function (e) {
      try {
        const response = await fetch("/api/cart");
        const { ok, data } = await response.json();

        if (ok) {
          if (data.products.length) {
            $("cart-body").innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Product</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody id="cart-table">
                  
                </tbody>
                <caption>
                    <div class="d-flex justify-content-end">
                        <h5>Total: ${data.total}</h5> 
                    </div>
                 </caption>
            </table>`;
            showProductInCart(data.products)
            $("btn-clearCart").classList.remove('disabled')
          } else {
            $("cart-body").innerHTML =
              '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
            $("btn-clearCart").classList.add('disabled')
          }
        }
      } catch (error) {
        console.error;
        alert(error.message);
      }
    });
};
