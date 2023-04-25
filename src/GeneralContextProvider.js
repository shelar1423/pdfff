import { useState, createContext } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
    const [files, setFiles] = useState([]);
    const [popup, setPopup] = useState({show: false, message: "", timeout: 0});
    const [chosen, setChosen] = useState({element: null, offsetX: null, offsetY: null, left: null, top: null});

    return (
        <GeneralContext.Provider value={{files, setFiles, popup, setPopup, chosen, setChosen}}>
            {children}
        </GeneralContext.Provider>
    );
};

export default GeneralContextProvider;
