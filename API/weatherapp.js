const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68ffc4819emsh24dda2222503ea1p1f1657jsn532f5ce94314',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

const show = async() => {
    let city = document.getElementById("city")
    const url = `https://open-weather13.p.rapidapi.com/city/${city.value}`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.name);
    } catch (error) {
        console.error(error);
    }
}
