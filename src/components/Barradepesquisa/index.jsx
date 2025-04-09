import { useState } from 'react';
import './styles.css';
export default function Barradepesquisa() {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    console.log(termoPesquisa);
    return (
        
        <input 
        type="seart" 
        placeholder="Digite o que você procura" 
        className='barra__pesquisa'
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)}        
        />

    );
}