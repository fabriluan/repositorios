import { List, MainButton, MainContent, MainForm } from "./mainSt";
import { AiOutlinePlus , AiFillGithub } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { ImSpinner } from "react-icons/im";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useCallback } from "react";
import { Link } from "react-router-dom";


function Main(){

    const [newRep, setNewRep] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);


    useEffect(()=>{
        const respStorage = localStorage.getItem('resp');

        if(respStorage){
            setRepositorios(JSON.parse(respStorage));
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('resp', JSON.stringify(repositorios))
    }, [repositorios]);

    const HandleSubmit = useCallback((e)=>{
        e.preventDefault();

        async function Submit(e){
            setLoading(true);

            try{

                if(newRep === ''){
                    throw new Error('O repositorio está vazio!!!');
                }

                const response = await api.get(`repos/${newRep}`);

                const hasResp = repositorios.find(resp => resp.name === newRep);

                if(hasResp){
                    throw new Error('Repositorio duplicado!!!');
                }
    
                const data = {
                    name: response.data.full_name
                }
        
                console.log(data);
        
                setRepositorios([...repositorios, data]);
                setNewRep('');

            }catch(e){
                console.log(e);
                setAlert(true)
            }finally{
                setLoading(false);
            }
        }

        Submit();
    }, [newRep, repositorios])

    const HandleDelete = useCallback((resp)=>{
        const find = repositorios.filter(r => r.name !== resp); 

        setRepositorios(find);
    }, [repositorios])

    return(
        <MainContent>
            <h2> <AiFillGithub /> Meus Repositorios</h2>

            <MainForm isAlert={alert} onSubmit={ HandleSubmit }>
                <input 
                type='text' 
                placeholder="Adicionar repositorio" 
                value={newRep} 
                onChange={ (e)=>{ setNewRep(e.target.value); setAlert(false) }}/>

                <MainButton isLoading={loading}>
                    {loading ? (
                        <ImSpinner />
                    ) : (
                        <AiOutlinePlus />
                    )
                    
                    }
                </MainButton>
            </MainForm>

            {repositorios.length !== 0 &&
                <List>
                    {repositorios.map(resp => (
                        <li key={resp.name}>
                            <span>
                                <button type="button" onClick={ ()=> HandleDelete(resp.name) }><BsFillTrashFill /></button>
                                {resp.name}
                            </span>
                            <Link to={`/repositorio/${encodeURIComponent(resp.name)}`}><FaBars /></Link>
                        </li>
                    ))}
                </List>    
            }
        </MainContent>        
    )
}

export default Main;