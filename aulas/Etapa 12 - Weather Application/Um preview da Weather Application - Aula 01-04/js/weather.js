const APIKey = 'SulVDZSD21OP0ps89TTMCoAGojJPKlS8'

const getCityURL = cityName =>  
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
    try {
        const cityUrl = getCityURL(cityName)
        const response = await fetch(cityUrl)

        if(!response.ok) {
            throw new error('Não foi possível obter os dados')
        }

        const cityData = await response.json()
        console.log(cityData[0])
    } catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}

getCityData('São Paulo')



