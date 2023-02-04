const city_write = document.querySelector(".city_write");
document.querySelector(".go").addEventListener("click", () => {
    console.log(city_write.value)
    check_city(city_write.value)
})

let city = "";
function check_city(arg) {
    fetch('./city.list.json')
        .then(res => res.json())
        .then(data =>
            data.forEach(item => {
                if (item.name.toLowerCase() == arg.toLowerCase() && item.country == "UA") {
                    fetch_2(item.id)
                }
            })
        );

}
// https://openweathermap.org/img/wn/04n@2x.png
const block_weather_temp = document.querySelector(".block-weather-temp");
const city_name = document.querySelector(".city-name");
const block_weather_humidity = document.querySelector(".block-weather-humidity");
const icon = document.querySelector(".icon");
function fetch_2(temp) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${temp}&APPID=008604895bcd89f6b27f1d48846ac318`)
        .then(function (response) { return response.json() })
        .then(function (data) {
            console.log((data.main.temp - 273).toFixed(1))
            block_weather_temp.innerHTML = `temp ${(data.main.temp - 273).toFixed(1)}°C`;
            city_name.innerHTML = `city ${data.name}`;
            block_weather_humidity.innerHTML = `humidity ${data.main.humidity}%`;
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"alt="">`

            console.log(data);

            console.log((data.main.feels_like - 273).toFixed(1))
        })
}

const cityes = document.querySelectorAll(".city");
for (let key in cityes) {

    cityes[key].addEventListener("mouseenter", (e) => {
        cityes[key].style.opacity = 0.8;
        city = e.target.id;
    }
    )
    cityes[key].addEventListener("mouseleave", () => {
        cityes[key].style.opacity = 1;
    })
    cityes[key].addEventListener("click", () => {
        check_city(city)
    })
}

