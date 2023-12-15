// ---------------------------- LOADER TIME ---------------------------
setTimeout(function(){
    document.getElementById("loader-wrapper").style.display = " none ";
}, 1000);
// ---------------------------- categories DROP DOWN  ---------------------------

var Btn = document.getElementById("_button_categories");
var Box = document.getElementById("drop_down_categories");

Btn.onclick = function(){
    Box.classList.toggle("drop_down_categories_open");
}

// ---------------------------- DRESSES DROP DOWN  ---------------------------

var Btn2 = document.getElementById("open_drop_down_dresses");
var Box2 = document.getElementById("drop_down_dresses");

Btn2.onclick = function(){
    Box2.classList.toggle("drop_down_dresses_open");
}

// ---------------------------- LOG DROP DOWN  ---------------------------

var OpenBtn = document.getElementById("open_log");
var Drop = document.getElementById("drop_down_log");

OpenBtn.onclick = function(){
    Drop.classList.toggle("drop_down_log_open");
}

// ---------------------------- PRODUCT API VIEW  ---------------------------

document.addEventListener('DOMContentLoaded', function () {
    let products1 = document.querySelector('.recent_products_cards');
    let products2 = document.querySelector('.featured_products');

    async function fetchProducts(url, productsContainer) {
        let data = await fetch(url);
        let response = await data.json();

        for (let i = 0; i < 8 && i < response.length; i++) {
            productsContainer.innerHTML += `
                <div class="card col-3">
                <div class="card_img">
                    <img src="${response[i].image}" alt="product">
                </div>
                <div class="card_icons">
                    <ul class="card_icons_list">
                        <li class="icon">
                            <i class='bx bxs-cart'></i>
                        </li>
                        <li class="icon">
                            <i class='bx bx-heart heart_transform'></i>
                        </li>
                    </ul>
                </div>
                <div class="card_info">
                    <p class="product_name">
                        ${response[i].title}
                    </p>
                    <p class="price">
                        $${response[i].price}
                        <span>$${response[i].price}</span>
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

        var hearts = productsContainer.querySelectorAll(".heart_transform");

        hearts.forEach(function (heart) {
            heart.addEventListener('click', function () {
                if (heart.classList.contains('bx-heart')) {
                    heart.classList.remove("bx-heart");
                    heart.classList.add("bxs-heart");
                } else {
                    heart.classList.remove("bxs-heart");
                    heart.classList.add("bx-heart");
                }
            });
        });
    }

    fetchProducts('https://fakestoreapi.com/products', products1);
    fetchProducts('https://fakestoreapi.com/products', products2);
});

// ---------------------------- MEDIA QUERY RIGHT MENU BUTTONS ---------------------------

var BtnOpen = document.getElementById("open_hidden_list");
var MenuOpen = document.getElementById("hidden_list_open_md");
var MenuIcon = document.getElementById("menu_icon");
var OpenPages = document.getElementById("open_pages_md");
var PagesMenu = document.getElementById("drop_down_pages_md");
var OpenPagesAccount = document.getElementById("open_log_md");
var PagesAccountMenu = document.getElementById("drop_down_log_md");

BtnOpen.onclick = function (){
    MenuOpen.classList.toggle("hidden_list_open_md_click");
    if(MenuIcon.classList.contains("bx-menu")){
        MenuIcon.classList.remove("bx-menu");
        MenuIcon.classList.add("bx-x");
    }else{
        MenuIcon.classList.remove("bx-x")
        MenuIcon.classList.add("bx-menu");
    }
}

OpenPages.onclick =function(){
    PagesMenu.classList.toggle("drop_down_pages_md_open");
}

OpenPagesAccount.onclick =function(){
    PagesAccountMenu.classList.toggle("drop_down_log_md_open");
}









