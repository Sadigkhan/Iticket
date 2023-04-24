import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'reactstrap'
import axios from 'axios';
import moment from 'moment';
// import Seats from './Seats';

function Tick() {
    const { id } = useParams();
    const [data, setData] = useState();



    useEffect(() => {
        function fetchSampleData() {
            let method = 'get' // ex. get | post | put | delete , etc
            return axios[method](`/api/Event/GetById/${id}`)
                .then((response) => {
                    // success
                    //-> save response to state, notification
                    setData(response.data) // pass to finish
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
                setData(success.data)
            } else {
            }
        }

    
        fetchResult()
    
    }, [id]);
    return (
        <div className="container">
            <div className="row infa mt-5">
                <div className='col-lg-6 col-md-9 col-sm-12 loca'>
                    <h4 className='hallside'>Məkan</h4>
                    <h6 className='hallo'>{data?.hall.name}</h6>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 loca'>
                    <h4 className='hallside'>Tarix</h4>
                    <h6 className='hallo'>{moment(data?.date).format("DD/MM/YYYY")}</h6>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 loca'>
                    <h4 className='hallside'>Qiymət</h4>
                    <h6 className='hallo'>{data?.price} ₼</h6>
                </div>

            </div>
            <div className="row imha">
                <div className='col-lg-12 col-md-12 col-sm-12 poca'>
                    <div className='roca'>
                        <Form>
                            <div className="hoca">
                                <div className='halna' >
                                    <h4 className='halla'>{data?.name}</h4>
                                </div>
                                <div className='prico mt-2'>
                                    <h6> Qiymət:</h6>
                                    <h6>{data?.price} ₼</h6>
                                </div>
                                <div className='plusminus mt-2'>
                                    <button className='minus'>-</button>
                                    <Form.Control className='inpo' type="number" defaultValue={1} min={1} max={10} />
                                    <button className='plus'>+</button>
                                </div>
                                <button className='subo mt-2' type='submit'>Əlavə Edin</button>
                            </div>
                        </Form>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Tick