import axios from "axios"
import Config from "../util/Config"

class InventarioService{
    
    async registrar(data){
        return axios({
            url: Config.API_URL + "inventario/registrar",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async listarAtivo(ativo){
        return axios({
            url: Config.API_URL + "inventario/listarAtivos",
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

    async findAtivo(ativo){
        return axios({
            url: Config.API_URL + "inventario/findAtivo",
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

const inventarioService = new InventarioService();
export default inventarioService;