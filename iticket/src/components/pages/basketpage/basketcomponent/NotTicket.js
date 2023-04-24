import React from 'react'
import { useTranslation } from 'react-i18next';
import '../../../../assets/sass/basket/notticket.scss'

function NotTicket() {
    
    const { t } = useTranslation();
    return (

        <div className='container'>
            <div className="row mt-5 ticketsonline">
                <div>
                    <h2>{t("basket")}</h2>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 war">

                    <div className='warning'>
                        <p className='notticket'>{t("notbasket")}</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default NotTicket