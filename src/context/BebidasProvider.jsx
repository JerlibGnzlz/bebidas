import axios from "axios";
import { createContext, useState } from 'react';

export const BebidasContext = createContext();

export const BebidasProvider = ({ children }) => {

    const [bebidas, setBebidas] = useState([]);

    const [modal, setModal] = useState(false);

    const obtenerBebidas = async (datos) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

            const { data } = await axios(url);
            setBebidas(data.drinks);
        } catch (error) {
            console.log(error);
        }
    };

    const handleModalclick = () => {
        setModal(!modal);
    };

    return (
        <BebidasContext.Provider value={{
            obtenerBebidas,
            bebidas,
            handleModalclick,
            modal

        }}>

            {children}
        </BebidasContext.Provider>
    );
}

