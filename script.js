const city = document.querySelector(".city");
let city_id = 709717;



document.querySelector(".go").addEventListener("click", () => {
    fetch('./city.list.json')
        .then(res => res.json())
        .then(data =>

            // if (input_city === data.)
            data.forEach(item => {
                // console.log(item.name)
                if (item.name.toLowerCase() == city.value.toLowerCase() && item.country == "UA") {
                    // item.id
                    fetch_2(item.id)
                }
                // console.log(111)
                // console.log(item.id)
                // console.log(item.id)
            })
        );

    // console.log(city_id)

})
function fetch_2(temp_data) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${temp_data}&APPID=008604895bcd89f6b27f1d48846ac318`)
        .then(function (response) { return response.json() })
        .then(function (data) {
            console.log(data)
        })
}


const cityes = document.querySelectorAll(".city");
for (let key in cityes) {
    cityes[key].addEventListener("mouseenter", () => {
        cityes[key].style.opacity = 0.8;
        console.log(cityes[key])
    }
    )
    cityes[key].addEventListener("mouseleave", () => {
        cityes[key].style.opacity = 1;
    })

}