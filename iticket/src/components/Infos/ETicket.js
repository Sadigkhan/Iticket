import React from 'react';
import '../../assets/sass/infos/eticket.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ETicket() {
  const { t } = useTranslation();
  return (

    <div className='row justify-content-between container'>

      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <div>
          <h2 className='mt-5'>{t("eticket")}</h2>
          <div className='eticket mt-5'>
            <div>
              <p className='etickettext'>{t("rahat")}</p>
            </div>
            <div className='mt-4'>
              <b className='etickettext'>{t("convenient")}</b>
              <p className='etickettext'>{t("convenienttext")}</p>
            </div>
            <div className='mt-4'>
              <b className='etickettext'>{t("etickord")}</b>
              <p className='etickettext'>{t("etickordtext")}</p>
            </div>

            <div className='mt-4'>
              <b className='etickettext'>{t("refundtick")}</b>
              <p className='etickettext'>{t("refundticktext")}</p>
            </div>


          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-4 sidebar'>
        <ul>
          <li className='p-2'>
            <Link to={"/faq"}>{t("faq")}</Link>
          </li>
          <li className='p-2'>
            <Link to={"/support"}>{t("dəstək")}</Link>
          </li>
          <li className='p-2'>
            <Link to={"/terms"}>{t("term")}</Link>
          </li>
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}}>
            <Link to={"/eticket"} style={{color:'white'}}>{t("eticket")}</Link>
          </li>
          <li className='p-2'>
            <Link to={"/refund"}>{t("qaytarilma")}</Link>
          </li>
          <li className='p-2'>
            <Link to={"/privacy"}>{t("mexfilik")}</Link>
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

export default ETicket