document.addEventListener('DOMContentLoaded' , function(){
    let products = document.getElementById('cart_shop_place');
    async function fetchProducts1(url){

        let data = await fetch(url);
        let response = await data.json();

        for (let i = 0; i < 4 && i < response.length; i++) {
            let title = response[i].title.length > 50 ? response[i].title.substring(0, 10) + '...' : response[i].title;
            products.innerHTML += `
                        <tr>
                            <td class="product_name"><img src="${response[i].image}" alt=""> ${title}</td>
                            <td>$ ${response[i].price}</td>
                            <td class="quantity">
                                <a class="incrementButton"><i class='bx bx-plus'></i></a>
                                <span class="num_product">0</span>
                                <a class="decrementButton"><i class='bx bx-minus' ></i></a>
                            </td>
                            <td class="none_table">$ ${response[i].price}</td>
                            <td class="remove"><a><i class='bx bx-x'></i></a></td>
                        </tr>
            `;
        }

        /******************************************************** DETAIL PAGE ( Increasing the number and decreasing the number ) ******************************************************/

            const incrementButtons = document.querySelectorAll(".incrementButton");
            const decrementButtons = document.querySelectorAll(".decrementButton");
            const counterElements = document.querySelectorAll(".num_product");
        
            incrementButtons.forEach(function (button, index) {
                button.addEventListener("click", function () {
                    let counterValue = parseInt(counterElements[index].innerHTML, 10) || 0;
                    counterValue += 1;
                    counterElements[index].innerHTML = counterValue;
                });
            });
        
            decrementButtons.forEach(function (button, index) {
                button.addEventListener("click", function () {
                    let counterValue = parseInt(counterElements[index].innerHTML, 10) || 0;
                    if (counterValue > 0) {
                        counterValue -= 1;
                        counterElements[index].innerHTML = counterValue;
                    }
                });
            });
    }

    fetchProducts1('https://fakestoreapi.com/products');
});