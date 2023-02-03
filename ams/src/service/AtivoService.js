import axios from "axios"
import Config from "../util/Config"

class AtivoService{
    
    async listarAmbientes(){
        return axios({
            url: Config.API_URL + "ativo/listarAmbientes",
            method: "GET",
            timeout: Config.TIMEOUT_REQUEST,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            // AsyncStorage.setItem("TOKEN", response.data.access_token)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
    
}

const ativoService = new AtivoService();
export default ativoService;