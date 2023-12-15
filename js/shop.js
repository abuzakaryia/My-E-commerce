/******************************************************** SHOP PAGE (API CARDS)******************************************************/

document.addEventListener('DOMContentLoaded' , function(){
    let productCard = document.querySelector('.shop_cards_place');
    async function fetchProducts3(url){

        let data3 = await fetch(url);
        let response3 = await data3.json(); 

        for (let i = 0; i < response3.length; i++) {
            productCard.innerHTML += `
                <div class="card col-3">
                    <div class="card_img">
                        <img src="${response3[i].image}" alt="product">
                    </div>
                    <div class="card_icons">
                        <ul class="card_icons_list">
                            <li class="icon">
                                <i class='bx bxs-cart'></i>
                            </li>
                            <li class="icon">
                                <i class='bx bx-heart heart_transform3'></i>
                            </li>
                        </ul>
                    </div>
                    <div class="card_info">
                        <p class="product_name">
                            ${response3[i].title}
                        </p>
                        <p class="price">
                            $${response3[i].price}
                            <span>$${response3[i].price}</span>
                        </p>
                        <ul class="product_stars">
                            <li class="star">
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                            </li>
                        </ul>
                    </div>
                </div>
            `;
        }

        // ---------------------------- PRODUCT HEARTS TRANSFORM  ---------------------------

        var hearts3 = document.querySelectorAll(".heart_transform3");

        hearts3.forEach(function (heart3) {
            heart3.addEventListener('click', function () {
                if (heart3.classList.contains('bx-heart')) {
                    heart3.classList.remove("bx-heart");
                    heart3.classList.add("bxs-heart");
                } else {
                    heart3.classList.remove("bxs-heart");
                    heart3.classList.add("bx-heart");
                }
            });
        }); 

    }

    fetchProducts3('https://fakestoreapi.com/products');
    
});

/******************************************************** SHOP PAGE ( CLICK BTN OPEN Formats )******************************************************/

var openSorting = document.getElementById("click_open_sorting");
var openListSorting = document.getElementById("sorting_list");

openSorting.onclick = function(){
    openListSorting.classList.toggle("sorting_list_open");
}

var openShowing = document.getElementById("click_open_showing");
var openListShowing = document.getElementById("showing_list");

openShowing.onclick = function(){
    openListShowing.classList.toggle("showing_list_open");
}
