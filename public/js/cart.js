const $ = (id) => document.getElementById(id);

const addItemToCart = async (quantity, product) => {
  try {
    const response = await fetch(
      `/api/cart/item?quantity=${quantity}&product=${product}`
    );
    const result = await response.json();
    if (!result.ok) {
      throw new Error(result.msg);
    } else {
      console.log(result);
    }
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: "Hubo un error al acceder al carrito",
      icon: "error",
      html: `Debes <a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="/users/login">loguearte</a> para agregar datos al carrito`,
    });
  }
};

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

            data.products.forEach(({ image, title, price, quantity }) => {
              $("cart-table").innerHTML += `
            <tr>
                <th scope="row"><img src="/img/products/${image}" alt="" width=100/></th>
                <td>${title}</td>
                <td>${price * quantity}</td>
                <td>
                    <div class="d-flex gap-2">
                        <button class="btn btn-sm btn-danger"><i class="fa-solid fa-minus"></i></button>
                        <input type="text" value=" ${quantity}" style="width:30px"/>
                        <button class="btn btn-sm btn-success"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </td>
            </tr>
            `;
            });
          } else {
            $("cart-body").innerHTML =
              '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
          }
        }
      } catch (error) {
        console.error;
        alert(error.message);
      }
    });
};
