import {useState, createContext} from "react"

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {
const [modal, setModal] = useState(false)
    return (
        <CotizadorContext.Provider
        value={{
            modal,
            setModal
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext