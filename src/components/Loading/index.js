import { LoadingSt } from "./loadingSt";
import { ImSpinner } from "react-icons/im";

export const Loading = ()=> {
    return(
        <LoadingSt>
            <h2>Carregando...</h2>
            <ImSpinner />
        </LoadingSt>
    )
}