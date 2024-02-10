import axios from "axios"
import { createContext, useState } from 'react'

export const BebidasContext = createContext()

export const BebidasProvider = ({ children }) => {

    const [bebidas, setBebidas] = useState([])

    const obtenerBebidas = async (datos) => {
        try {
            const url = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

            const { data } = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <BebidasContext.Provider value={{
            obtenerBebidas,
            bebidas
        }}>

            {children}
        </BebidasContext.Provider>
    )
}

