import React from 'react'
import { useTranslation } from 'react-i18next';
import '../../../../assets/sass/basket/notticket.scss'

function NotFavorites() {
    const { t } = useTranslation();
    return (

        <div className='container'>
            <div className="row mt-5 ticketsonline">
                <div>
                    <h2>{t("favorites")}</h2>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 war">

                    <div className='warning'>
                        <p className='notticket'>{t("notfavorites")}</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default NotFavorites