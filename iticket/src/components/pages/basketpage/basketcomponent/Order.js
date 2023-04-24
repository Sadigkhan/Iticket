import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import '../../../../assets/sass/basket/order.scss';
import axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

function Order() {
    const [event, setEvent] = useState();

    let tickets = JSON.parse(localStorage.getItem('seats'));
    let token = localStorage.getItem('token');

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    let seats = tickets.seats
    function orders(e) {
        e.preventDefault();

        seats?.forEach(ticket => {
            createOrder()
            async function createOrder() {
                await axios.post('https://localhost:44351/api/Order/CreateOrder', {
                    seatId: ticket,
                    eventId: tickets.id,
                    email: parseJwt(token).sub[1],
                    eventname: event.name,
                    hallname: event.hall.name,
                    date: moment(event?.date).subtract(10, 'days').calendar()
                }, { 'Content-Type': 'multipart/form-data' })
                    .then(function (response) {
                       
                        localStorage.setItem("seats", JSON.stringify([]));
                        window.location.reload();
                    })

            }
        });
        Swal.fire(
            'Created',
            'success',
        )


    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    useEffect(() => {
        function fetchSampleData() {
            let method = 'get' // ex. get | post | put | delete , etc
            return axios[method](`https://localhost:44351/api/Event/GetById/${tickets.id}`)
                .then((response) => {
                    // success
                    //-> save response to state, notification
                    setEvent(response.data) // pass to finish
                })
                .catch((error) => {
                    // failed
                    //-> prepare, notify, handle error

                    return false // pass to finish
                })
                .then((resultBoolean) => {
                    // do something after success or error

                    return resultBoolean // for await purpose
                });
        }

        function fetchResult() {
            let success = fetchSampleData()
            if (success) {
                setEvent(success.data)
            } else {
            }
        }

        fetchResult()



    }, [tickets.id]);

    if (seats == null) {
        seats = []
    }


    const [forrender, setForrender] = useState();
    function clearToken(e) {
      e.preventDefault()
      localStorage.removeItem('token')
  
  
  
      setForrender('');
      console.log(forrender);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Çıxış Etdiniz',
        showConfirmButton: false,
        timer: 1500
      })
      
      window.location.assign('http://localhost:3000/')
    }
    const { t } = useTranslation();

    return (
        <div className='row justify-content-between container'>
        <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
            <h2 className='mt-5'>Sifariş</h2>
            <div className='order mt-5'>
                {seats?.map(seat =>
                    <div key={seat.toString()} className='mt-4 ordertab'>
                        <div className='maxord'>
                            <div className='ordertita'><b>{event?.name}</b></div>
                            <div className='orderhallo'><b>{event?.hall.name}</b></div>
                            <div className='ordersea'><p>Sıra: {seat.substring(0, 1)}, Yer: {seat.substring(2)}</p></div>
                            <div className='orderprices'><b>{t("price")}: {event?.price} ₼</b></div>
                        </div>
                        <div className='orderda'>
                            <b>{moment(event?.date).format("DD/MM/YYYY")}</b>
                            <b>{moment(event?.date).format("HH:MM")}</b>
                        </div>
                    </div>
                )}


                <div className='mt-4 cashtab'>
                    <h2 className='mt-5'>Çatdırılma Üsulu</h2>

                    <div className='etiko'>
                        <p>Elektron Bilet</p>
                    </div>

                </div>

                <div className='mt-4 cashtab'>
                    <h2 className='mt-5'>Kartınızı Qeyd Edin</h2>

                    <div className=''>
                        <Form.Group className="mb-3 cardcode" controlId="formBasicNumberCode">

                            <Form.Control type="number" placeholder="XXXX-XXXX-XXXX-XXXX" />

                        </Form.Group>

                    </div>
                    <div className='sendtick'>
                        <div>
                            <Link to={"/"}>
                            <Button className='canceltick' type="submit">
                                Ləğv Et
                            </Button>
                            </Link>
                          
                        </div>

                        <div>
                            <Button className='endtick' onClick={(e) => orders(e)} type="submit">
                                Sifarişi Tamamla
                            </Button></div>
                    </div>

                </div>





            </div>
        </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-4 ordersidebar'>
                <ul>
                    <li className='p-2' >
                        <Link to={"/profile"} >Profil</Link>
                    </li>
                 
                    <li className='p-2'>
                        <Link to={"/updatepassword"}>{t("shifreyenile")}</Link>
                    </li>
                    <li className='p-2'>
                    <Link to={"/logout"}><button className='logout'  onClick={(e)=>clearToken(e)}>{t("logout")}</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Order