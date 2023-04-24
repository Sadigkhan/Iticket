import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import '../../assets/sass/infos/refund.scss'

function Refund() {
  const { t } = useTranslation();
  return (
    <div  className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <h2 className='mt-5'>{t("qaytarilma")}</h2>
        <div className='refund mt-5'>

          <p className='refundtext'>{t("qaytarilma1")}</p>
          <p className='refundtext'>{t("qaytarilma2")}</p>
          <p className='refundtext'>{t("qaytarilma3")}</p>
          <p className='refundtext'>{t("qaytarilma4")}</p>
        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-4 sidebar'>
      <ul>
          <li className='p-2'>
            <Link to={"/faq"} >{t("faq")}</Link>
          </li>
          <li className='p-2'>
            <Link to={"/support"}>{t("dəstək")}</Link>
          </li>
          <li className='p-2'>
            <Link to={"/terms"}>{t("term")}</Link>
          </li>
          <li className='p-2' >
            <Link to={"/eticket"} >{t("eticket")}</Link>
          </li>
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}}>
            <Link to={"/refund"}  style={{color:'white'}}>{t("qaytarilma")}</Link>
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

export default Refund