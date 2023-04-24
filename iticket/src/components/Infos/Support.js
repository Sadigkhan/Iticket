import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import '../../assets/sass/infos/support.scss'

function Support() {
    const { t } = useTranslation();
    return (
        <div className='row justify-content-between container'>
            <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
                <h2 className='mt-5'>{t("dəstək")}</h2>
                <div className='supp mt-5'>
                    <p className='textsupp'>{t("textsupp1")}</p>
                    <h4 className='texsupp'>{t("textsupp2")}</h4>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-4 sidebar'>
                <ul>
                    <li className='p-2'>
                        <Link to={"/faq"} >{t("faq")}</Link>
                    </li>
                    <li className='p-2' style={{ backgroundColor: 'black', borderRadius: '20px' }}>
                        <Link to={"/support"}   style={{color:'white'}}>{t("dəstək")}</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/terms"}>{t("term")}</Link>
                    </li>
                    <li className='p-2' >
                        <Link to={"/eticket"} >{t("eticket")}</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/refund"} >{t("qaytarilma")}</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/privacy"} >{t("mexfilik")}</Link>
                    </li >
                    <li className='p-2' >
                        <Link to={"/about"}>{t("about")}</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/contact"}>{t("elaqe")}</Link>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default Support