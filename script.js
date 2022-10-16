window.addEventListener('load', function () {
    console.log('page is loaded');
    fetch('restaurant.json')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let restaurantArray = data;

            fetch ('restaurant.json')
                .then(response => response.json())
                .then(data => {
                    let restaurantInfo = data;

                    let randomNumber = Math.floor(Math.random() * restaurantArray.length);
                  
                    let nameElement = document.getElementById('restaurant');
                    
             
                    nameElement.innerHTML = countryArray[randomNumber].restaurant;

                    let priceElement_1 = document.getElementById("restaurant_price");
                    priceElement.innerHTML = restaurantArray[randomNumber].price;
                

                    let restaurant_Info = nameElement.innerHTML;
                  

                    let restaurant_image;
                    for (let i = 0; i < restaurantInfo.length; i++) {
                        if (data[i].name == restaurant_Info) {
                            restaurant_image = data[i].image;
                        };
                    }


                    let Image1 = document.getElementById('flag-image1');
                    Image1.src = restaurant_image;


                    console.log(restaurant_image);
                })

        })
        // function refreshPage(){
        //     window.reload();
        // } 
})