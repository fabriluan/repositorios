import { useContext } from "react";
import { AuthContext } from "../../Contexts/theme";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeSt } from "./themeSt";

export const Theme = ()=>{
    const { theme, setTheme } = useContext(AuthContext);

    function HandleTheme(){        
        setTheme(!theme)
    }

    return(
        <ThemeSt isOn={ theme } onClick={ HandleTheme }>

            {theme ? (
                <BsFillSunFill color="#ffffff"  size={'2.5rem'}/>
            ) : (
                <BsFillMoonFill color="#ffffff"  size={'2.3rem'}/>
            )}

        </ThemeSt>
    )
}