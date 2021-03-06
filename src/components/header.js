import React, { useState, useEffect,useRef  } from 'react';
import { render } from '@testing-library/react';

const Header = (props) =>{
    const [searchBar, setSearchBar] = useState('');
    const [articulos, setArticulos] = useState([]);
    const {buscar:buscararticulo=undefined}={...props}

    useEffect(() => {
        console.log("se ejecuto useEffect");
    }, [articulos])

    const inputchange=(e)=>{
        const { target: { value = '' } = {} } = { ...e };
        setSearchBar(value);
    } 

    return(

        <div class="row">
            <div className='col-sm-12 justify-content-center'>
            <center><a className="display-4"><strong> En cuanto me queda?</strong></a></center>

            </div>
            <div className='col-sm-2'></div>
            <div className='col-sm-7 pading'>
                <input type="text" className="form-control" value={searchBar} onChange={inputchange} aria-describedby="emailHelp" placeholder="Que producto deseas comprar hoy?"></input>
            </div>
            <div className='col-sm-1 pading'>
                <button className="btn btn-danger col-sm-12" onClick={()=>buscararticulo(searchBar)}>Buscar</button>
            </div>
            <div className='col-sm-2'></div>
        </div>
        
    )

}

export default Header;