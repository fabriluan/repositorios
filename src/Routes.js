import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

function RoutesComp(){
    return(
            <Routes>
                <Route exact path="/" element={ <Main /> }/>
                <Route path="/repositorio/:repositorio" element={ <Repositorio /> }/>
            </Routes>
    )
}

export default RoutesComp;