import { useState, createContext } from "react";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../helpers/index";


const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizadorSeguro = () => {
    //una base
    let resultado = 2000;
    //obtener diferencia de año
    const diferencia = obtenerDiferenciaYear(datos.year);
    //hay que restar el 3% por año
    resultado -= (diferencia * 3 * resultado) / 100;   
    //europeo 30%
    //americano 15%
    //asiatico 5%
    resultado *= calcularMarca(datos.marca)
    //basico
    //completo
    resultado *= calcularPlan(datos.plan)
    //formatear Dinero
   resultado =  formatearDinero(resultado)

    setResultado(resultado)
  };


  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizadorSeguro,
        resultado
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
