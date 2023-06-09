import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

import '../../../../assets/sass/basket/borderticket.scss';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function BorderTicket(params) {
    const navigate = useNavigate();
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

    const [user, setUser] = useState();
  
    let seats = tickets.seats


    useEffect(() => {
        function fetchSampleData() {
            let method = 'get' // ex. get | post | put | delete , etc
            return axios[method](`/api/Event/GetById/${tickets.id}`)
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

        if (token != null) {
            let usermail = parseJwt(token).sub[1]
            axios.get(`api/Account/GetUserByEmail/${usermail}`)
                .then((res) => {
                    setUser(res.data)
                })
    
        }

    }, [tickets.id]);

    if (seats == null) {
        seats = []
    }



    // let result = items.filter(event => event.price >= price[0] && event.price <= price[1] && moment(startAndEnd[0]).format('YYYY/MM/DD') < moment(event.date).format('YYYY/MM/DD'));

    function clearSeats(e) {
        e.preventDefault()
        localStorage.removeItem('seats')
        localStorage.setItem('seats', JSON.stringify([]))
        tickets = JSON.parse(localStorage.getItem('seats'));
        params.ren('');
        window.location.reload();
    }

    function order() {
        if(user == null){
            alert('Please login to order')
        }else{
            navigate('/order')
        }
    }
    const { t } = useTranslation();

    return (
        <div className='container'>
            <div className="row mt-3 ticketsonline">
                <div className="d-flex justify-content-between">
                    <h2 className='mt-5'>{t("basket")}</h2>
                    <button className="btn btn-outline-success cleare" onClick={(e) => clearSeats(e)}>{t("clearbasket")}</button>

                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        {seats.map(seat =>
                            <div key={seat} className="col-12">
                                <div className='war'>
                                    <div className='ticket d-flex mt-5 '>
                                        <div className='tickdeta'>
                                            <div className='imagetick'>
                                                <img style={{ height: '100%', minHeight: '-webkit-fill-available' }} className='tickimage imag' src={`data:image/jpeg;base64,${event?.detailImage}`} alt="" />
                                            </div>
                                            <div>
                                                <div><span className='spans'>{event?.hall.name}</span><span className='spans'>{moment(event?.date).subtract(10, 'days').calendar()}</span><span className='spans'>{moment(event?.date).format("HH:MM")}</span></div>
                                                <div><b className='tickname'>{event?.name}</b></div>
                                                <div className='seattick'><p>{t("sira")}:{seat.substring(0, 1)}</p><p>{t("yer")}: {seat.substring(2)}</p></div>
                                            </div>
                                        </div>
                                        <div className='tickbuttons'>
                                            <div className='tickbuton'>
                                                <b> {event?.price} ₼</b>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 '>
                        <div className='waro mt-5'>
                            <div className='container'>
                                <Form className='mt-5'>

                                    <Form.Group className="mb-4" controlId="formBasicText">
                                        <Form.Label>{t("ad soyad")}</Form.Label>
                                        <Form.Control type="text" defaultValue={user?.fullName} />
                                    </Form.Group>
                                    {/* <Form.Group className="mb-4" controlId="formBasicText">
                                        <Form.Control type="text" placeholder="Soy Ad" />
                                    </Form.Group> */}
                                    <Form.Group className="mb-4" controlId="formBasicNumber">
                                        <Form.Label>{t("phone")}</Form.Label>
                                        <Form.Control type="text" defaultValue={user?.phoneNumber} />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                        <Form.Label> Email</Form.Label>
                                        <Form.Control type="email" defaultValue={user?.email} />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicCheckbox">

                                        <Form.Check type="checkbox" label=" Şərtləri və qaydaları qəbul edirəm." />
                                    </Form.Group>
                                        <Button className='tickord' onClick={(e) => order(e)} type="submit" >
                                            {t("createorder")}
                                        </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BorderTicket