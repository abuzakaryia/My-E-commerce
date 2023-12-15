/******************************************************** DETAIL PAGE ( show img api ) ******************************************************/

document.addEventListener('DOMContentLoaded' , function(){
    let products2 = document.querySelector('.imgs_product');
    async function fetchProducts(url){

        let data = await fetch(url);
        let response = await data.json();

        for (let i = 0; i < 1 && i < response.length; i++) {
            products2.innerHTML += `
                    <div id="carouselExampleInterval" class="carousel  carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                        <img src="${response[i].image}" class="d-block" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                        <img src="${response[i].image}" class="d-block" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="${response[i].image}" class="d-block" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="${response[i].image}" class="d-block" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="${response[i].image}" class="d-block" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="${response[i].image}" class="d-block" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="${response[i].image}" class="d-block" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="${response[i].image}" class="d-block" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="${response[i].image}" class="d-block" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            `;
        }
    }

    fetchProducts('https://fakestoreapi.com/products');
});

/******************************************************** DETAIL PAGE ( show product api info ) ******************************************************/

document.addEventListener('DOMContentLoaded' , function(){
    let products = document.querySelector('.info_product');
    async function fetchProducts1(url){

        let data1 = await fetch(url);
        let response1 = await data1.json();

        for (let i = 0; i < 1 && i < response1.length; i++) {
            products.innerHTML += `
                            <div class="product_name">
                                <p>${response1[i].title}</p>
                            </div>
                            <div class="product_review">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star-half' ></i>
                                <i class='bx bx-star'></i>
                            </div>
                            <div class="product_price">
                                <p>$ ${response1[i].price}</p>
                            </div>
                            <div class="product_des">
                                ${response1[i].description}
                            </div>
                            <div class="product_size">
                                <form>
                                    <ul class="size_list">
                                        <li class="title">Sizes :</li>
                                        <li>
                                            <input class="form-check-input" type="radio"  name="answer" id="option1">
                                            <label for="option1" class="form-check-label">XS</label>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="answer" id="option2">
                                            <label for="option2" class="form-check-label">S</label>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="answer" id="option3"> 
                                            <label for="option3" class="form-check-label">m</label>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="answer" id="option4"> 
                                            <label for="option4" class="form-check-label" >l</label>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="answer" id="option5"> 
                                            <label for="option5" class="form-check-label">XL</label>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div class="Product_color">
                                <form>
                                    <ul class="color_list">
                                        <li class="title">Colors :</li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="answer" id="answer1"> 
                                            <label for="answer1" class="form-check-label">black</label>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="answer" id="answer2"> 
                                            <label for="answer2" class="form-check-label">white</label>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="answer" id="answer3"> 
                                            <label for="answer3" class="form-check-label">red</label>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="answer" id="answer4"> 
                                            <label for="answer4" class="form-check-label">blue</label>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="answer" id="answer5"> 
                                            <label for="answer5" class="form-check-label">green</label>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div class="product_num">
                                <div class="product_num_content">
                                    <button id="decrementButton">
                                        <i class='bx bx-minus'></i>
                                    </button>
                                    <span id="num_product">0</span>
                                    <button id="incrementButton">
                                        <i class='bx bx-plus'></i>
                                    </button>
                                    <a href="#">
                                        <i class='bx bxs-cart'></i> 
                                        add to cart
                                    </a>
                                </div>
                            </div>
            `;
        }

        /******************************************************** DETAIL PAGE ( Increasing the number and decreasing the number ) ******************************************************/

        const incrementButton = document.getElementById("incrementButton");
        const decrementButton = document.getElementById("decrementButton");
        const counterElement = document.getElementById("num_product");

        let counterValue = 0;

        incrementButton.addEventListener("click", function () {
            counterValue += 1;
            counterElement.innerHTML = counterValue;
        });

        decrementButton.addEventListener("click", function () {
            if (counterValue > 0) {
                counterValue -= 1;
                counterElement.innerHTML = counterValue;
            }
        });

    }

    fetchProducts1('https://fakestoreapi.com/products');
});

        /******************************************************** DETAIL PAGE ( info table ) ******************************************************/
        var BtnShowDes = document.getElementById("show_description");
        var ShowDes = document.getElementById("show_description_place");
        
        var BtnShowInfo = document.getElementById("show_information");
        var ShowInfo = document.getElementById("show_information_place");

        var BtnShowReview = document.getElementById("show_review");
        var ShowReview = document.getElementById("show_review_place");

        BtnShowDes.addEventListener("click", function () {

                BtnShowReview.classList.remove("active");
                BtnShowInfo.classList.remove("active");
                BtnShowDes.classList.add("active"); 
                
                ShowDes.classList.remove("description_place_hidden");
                ShowInfo.classList.remove("information_place_show");
                ShowReview.classList.remove("review_place_show");

        });
        
        BtnShowInfo.addEventListener("click", function () {

                BtnShowReview.classList.remove("active");
                BtnShowInfo.classList.add("active");
                BtnShowDes.classList.remove("active");

                ShowDes.classList.add("description_place_hidden");
                ShowInfo.classList.add("information_place_show");
                ShowReview.classList.remove("review_place_show");

        });
        
        BtnShowReview.addEventListener("click", function () {

                BtnShowReview.classList.add("active");
                BtnShowInfo.classList.remove("active");
                BtnShowDes.classList.remove("active");

                ShowDes.classList.add("description_place_hidden");
                ShowInfo.classList.remove("information_place_show");
                ShowReview.classList.add("review_place_show");
            
        });