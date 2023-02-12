import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MainContent } from "../Main/mainSt";
import { ButtonPage, ButtonState, IssuesList, Owner } from "./repositorioSt";
import { BiArrowBack } from "react-icons/bi";
import api from "../../services/api";
import { Loading } from "../../components/Loading";

function Repositorio(){

    const { repositorio } = useParams();
    const [repositorioAtual, setRepositorioAtual] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [stateResult, setStateResult] = useState([
        {state: 'all', label: 'Todas', active: true},
        {state: 'open', label: 'Abertas', active: false},
        {state: 'closed', label: 'Fechadas', active: false}
    ]);
    const [stateIndex, setStateIndex] = useState(0);

    useEffect(()=>{

        async function Load(){
            
            const [ repositorioData, issuesData ] = await Promise.all([
                api.get(`/repos/${repositorio}`),
                api.get(`/repos/${repositorio}/issues`, {
                    params: {
                        state: stateResult.find( f => f.active).state,
                        per_page: '5'
                    }
                })
            ]);


            setRepositorioAtual(repositorioData.data)
            setIssues(issuesData.data);
            setLoading(false);
        }

        Load();
    }, [repositorio, stateResult]);

    useEffect(()=>{

        async function LoadIssues(){
            const response = await api.get(`repos/${repositorio}/issues`, {
                params: {
                    state: stateResult[stateIndex].state,
                    page,
                    per_page: 5,
                },
            });

            setIssues(response.data);
        }

        LoadIssues();
        
    }, [page, repositorio, stateIndex, stateResult])

    function HandlePage(value){
        setPage(value === 'back' ? page - 1 : page +1);
    }

    function ChangeResult(state){
        setStateIndex(state);
        // setStateResult(state);
    }

    if(loading){
        return(
            <Loading/>
        )
    }

    return(
        <MainContent>
            <Owner>

                <div>
                    <Link to={'/'}><BiArrowBack /></Link>
                </div>

                <img src={repositorioAtual.owner.avatar_url} alt={repositorioAtual.owner.login} />

                <h2>{repositorioAtual.name}</h2>
                <p>{repositorioAtual.description}</p>
            </Owner>

            <ButtonState isActive={stateIndex}>
                {stateResult.map((el, index) => (
                    <button
                    type="button"
                    key={el.label}
                    onClick={()=> { ChangeResult(index) }}
                    >{el.label}</button>
                ))}
            </ButtonState>


            <IssuesList>

                {issues.map(issue => (
                    <li key={String(issue.id)}>
                        <img src={issue.user.avatar_url} alt={issue.user.login} />

                        <div>
                            <strong>
                                <a href={issue.html_url}>{issue.title}</a>

                                {issue.labels.map(label => (
                                    <span key={String(label.id)}>{label.name}</span>
                                ))}
                            </strong>

                            <p>{issue.user.login}</p>
                        </div>
                    </li>
                ))}

            </IssuesList>

            <ButtonPage>
                <button onClick={() => HandlePage('back')} disabled={page < 2} >Voltar</button>
                <button onClick={() => HandlePage('next')} >Proximo</button>
            </ButtonPage>


        </MainContent>


    )
}

export default Repositorio;