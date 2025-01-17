import { useEffect, useState } from "react";
import styles from './Reposlist.module.css';
import PropTypes from 'prop-types';

const ReposList= ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);

    ReposList.propTypes = {
        nomeUsuario: PropTypes.string.isRequired, 
    };
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())  
            .then(resJson => {
                setRepos(resJson);
            })
            .catch(error => console.error("Erro ao carregar os repositórios:", error));
    }, [nomeUsuario]);

    return (
        <div className="container">
        <ul className={styles.list}>
           {/*} {repos.map(repositorio => ( */}
           {repos.map(({ id , name, language, html_url}) =>

            <li  className={styles.listItem}key={id}>
                    <div className={styles.itemName}>
                        <b>Nome:</b> {name}
                    </div>

                    <div className={styles.itemLanguage}>
                         <b>Linguagem:</b> {language}
                    </div>
                    
                   
                    <a  className={styles.itemlink} target='_blank' href={html_url}>Visitar no Github</a>
                </li>
        )}    
           
            
         </ul>
     </div>
    );
   
};

export default ReposList;
