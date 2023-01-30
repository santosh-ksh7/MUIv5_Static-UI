import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { createContext, useState } from "react"


export const toggleModeContext = createContext();

function MuiThemeProvider({children}) {

    const[currMode, setCurrMode] = useState("light");
 
    const myTheme = createTheme({
        palette: {
            mode: currMode
        }
    })

  return (
    <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <toggleModeContext.Provider value={{currMode, setCurrMode}}>
            {children}
        </toggleModeContext.Provider>
    </ThemeProvider>
  )
}

export default MuiThemeProvider