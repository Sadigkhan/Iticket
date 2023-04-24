import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import '../../assets/sass/infos/terms.scss'

function Terms() {
  const { t } = useTranslation();
  return (
    <div className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <h2 className='mt-5'>{t("term")}</h2>
        <div className='terms mt-5'>
          <div>
            <b className='termstext'>{t("term1")}</b>
            <p className='termstext'>{t("term2")}</p>
          </div>
          <div className='mt-4'>
            <b className='termstext'>{t("term3")}</b>
            <p className='termstext'>{t("term4")}</p>
          </div>
          <div className='mt-4'>
            <b className='termstext'>{t("term5")}</b>
            <p className='termstext'>{t("term6")}</p>
          </div>

          <div className='mt-4'>
            <b className='termstext'>{t("term7")}</b>
            <p className='termstext'>{t("term8")}</p>
          </div>
          <div className='mt-4'>
            <b className='termstext'>{t("term9")}</b>
          </div>


        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-4 sidebar'>
                <ul>
                    <li className='p-2'>
                        <Link to={"/faq"} >{t("faq")}</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/support"} >{t("dəstək")}</Link>
                    </li>
                    <li className='p-2' style={{ backgroundColor: 'black', borderRadius: '20px' }}>
                        <Link to={"/terms"} style={{color:'white'}} >{t("term")}</Link>
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

export default Terms