import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import '../../assets/sass/infos/privacy.scss'

function Privacy() {
  const { t } = useTranslation();
  return (

    <div className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <h2 className='mt-5'>{t("mexfilik")}</h2>
        <div className='privacy mt-5'>

          <div className='mt-4'>
            <b className='privacytext'>I. {t("shexsi")}</b>
            <p className='privacytext'>{t("shexsitext")}</p>
          </div>
          <div className='mt-4'>
            <b className='privacytext'>II.{t("socialplug")}</b>
            <p className='privacytext'>{t("socialplugtext")}  </p>
          </div>

          <div className='mt-4'>
            <b className='privacytext'>III. {t("cooki")}</b>
            <p className='privacytext'>{t("cookitext")}</p>
          </div>


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
          <li className='p-2'>
            <Link to={"/refund"}>{t("qaytarilma")}</Link>
          </li>
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}} >
            <Link to={"/privacy"}  style={{color:'white'}}>{t("mexfilik")}</Link>
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

export default Privacy