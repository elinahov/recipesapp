import axios from "axios"

export const getRecipesList = async (tags = null, size) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: { from: '0', size: size || '20', tags },
        headers: {
            'X-RapidAPI-Key': '4c78c6cbc0msh689dccf56625cf1p117b84jsn897f105ecb99',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    return await axios.request(options)
}