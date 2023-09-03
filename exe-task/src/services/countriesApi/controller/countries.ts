import CountriesApiInstace from '../index'

export const getAllCountries = async ():Promise<any> => {
    const res = await CountriesApiInstace.get('/all');
    return res.data
}