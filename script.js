window.addEventListener('load', function () {
    console.log('page is loaded');
    fetch('speed.json')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let countryArray = data;

            fetch('flags.json')
                .then(response => response.json())
                .then(data => {
                    let countryInfo = data;

                    let randomNumber = Math.floor(Math.random() * countryArray.length);
                    let randomNumber2 = Math.floor(Math.random() * countryArray.length);
                    //** make sure the two are not the same
                    if (randomNumber2 == randomNumber) {
                        randomNumber2 = Math.floor(Math.random() * countryArray.length);
                    }
                    let nameElement_1 = document.getElementById('country1');
                    let nameElement_2 = document.getElementById('country2');
             
                    nameElement_1.innerHTML = countryArray[randomNumber].Country;
                    nameElement_2.innerHTML = countryArray[randomNumber2].Country;

                    let speedElement_1 = document.getElementById("country1_speed");
                    speedElement_1.innerHTML = countryArray[randomNumber].Speed;
                    let speedElement_2 = document.getElementById("country2_speed");
                    speedElement_2.innerHTML = countryArray[randomNumber2].Speed;

                    let country_1_Info = nameElement_1.innerHTML;
                    let country_2_Info = nameElement_2.innerHTML;

                    let country_1_emoji;
                    for (let i = 0; i < countryInfo.length; i++) {
                        if (data[i].name == country_1_Info) {
                            country_1_emoji = data[i].emoji;
                        };
                    }
                    let country_2_emoji;
                    for (let i = 0; i < countryInfo.length; i++) {
                        if (data[i].name == country_2_Info) {
                            country_2_emoji = data[i].emoji;
                        };
                    }
                    let Emoji1 = document.getElementById('countryflag1');
                    Emoji1.innerHTML = country_1_emoji;
  
                    let Emoji2 = document.getElementById('countryflag2');
                    Emoji2.innerHTML = country_2_emoji;

                    let country_1_image;
                    for (let i = 0; i < countryInfo.length; i++) {
                        if (data[i].name == country_1_Info) {
                            country_1_image = data[i].image;
                        };
                    }

                    let country_2_image;
                    for (let i = 0; i < countryInfo.length; i++) {
                        if (data[i].name == country_2_Info) {
                            country_2_image = data[i].image;
                        };
                    }

                    let Image1 = document.getElementById('flag-image1');
                    Image1.src = country_1_image;
  
                    let Image2 = document.getElementById('flag-image2');
                    Image2.src = country_2_image;


                    console.log(country_1_image, country_2_image);
                })


        })
        // function refreshPage(){
        //     window.reload();
        // } 
})