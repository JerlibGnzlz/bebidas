import axios from "axios"
import { createContext, useEffect, useState } from 'react'

export const CategoriasContext = createContext()

export const CategoriasProvider = ({ children }) => {


    const obtenerCategorias = async () => {

        const url = "www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        const { data } = await axios(url)
        console.log(data)
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    return (
        <CategoriasContext.Provider value={{

        }}>

            {children}
        </CategoriasContext.Provider>
    )
}
