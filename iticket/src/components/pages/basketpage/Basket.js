import React,{useState} from 'react'
import '../../../assets/sass/basket/basket.scss'
 import BorderTicket from './basketcomponent/BorderTicket'
import NotTicket from './basketcomponent/NotTicket'

function Basket() {
    const [forren, setForren] = useState();
    let basket;
    let tickets = JSON.parse(localStorage.getItem('seats'));
    if (tickets?.length === 0 || tickets == null ) {
        basket = <NotTicket/> 
    }else{
        basket = <BorderTicket ren={setForren}/>
    }
    return (
        <div>
            {basket}
        </div>
    )
}

export default Basket