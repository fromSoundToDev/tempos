// secrure APIs

const ApiUrl = "Https//www.getmeteo.com/fef34r34dsf";

const fetchData = async (params) => {
    try {
        const response = fetch(ApiUrl,{
            method:'GET',
            head:{
                'AutorizationKey':    `Bearer ${ApiKey}`,
                 'Content-Type': 'Appliction/Json'
            }
        })
        if (!response.ok) {
            if (response.status===401) {
                throw new Error("Apikey error");
            }
            throw new Error("network not working");
        }

        const data = await response.json();
        const sanitizeData = inputSanitize(data);
        displayData(sanitizeData)
    } catch (error) {
        console.log(error.message);
    }
}

const displayData = (params)=>{

}