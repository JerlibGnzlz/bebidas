import axios from "axios"
import { createContext, useEffect, useState } from 'react'

export const CategoriasContext = createContext()

export const CategoriasProvider = ({ children }) => {
    return (
        <CategoriasContext.Provider value={{

        }}>

            {children}
        </CategoriasContext.Provider>
    )
}
