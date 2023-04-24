import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../assets/sass/infos/about.scss';
import { Link } from 'react-router-dom'


function About() {
  const { t } = useTranslation();
  return (

    <div className='row justify-content-between container'>

      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <div>
          <h2 className='mt-5'>{t("about")}</h2>
          <div className='about mt-5'>

            <div className='about-title'>
              <img className='abouttitle' src={require('../../assets/img/info/about-title.png')} alt="about-title" />
            </div>
            <div className='image mt-4'>
              <img className='about-photo' src={require('../../assets/img/info/theatre.jpg')} alt="about-title" />
            </div>
            <div className='mt-4'>
              <p className='abouttext'>
                <b>ITicket.az</b>{t("aboutext")}
              </p>

            </div>
            <div className='mt-4'>
              <p className='abouttext'><b> {t("companyname")}</b>- «İTİCKET» MMC</p>
              <p className='abouttext'></p>
              <p className='abouttext'><b>VÖEN</b>- 1701956271 </p>
              <p className='abouttext'><b>{t("reyestr")}</b>- 1601020018130100</p>
              <p className='abouttext'><b>{t("unvan")}</b>- {t("address")}</p>

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
          <li className='p-2'>
            <Link to={"/eticket"} >{t("eticket")}</Link>
          </li>
          <li className='p-2'>
            <Link to={"/refund"}>{t("qaytarilma")}</Link>
          </li>
          <li className='p-2'>
            <Link to={"/privacy"}>{t("mexfilik")}</Link>
          </li >
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}}>
            <Link style={{color:'white'}} to={"/about"}>{t("about")}</Link>
          </li>
          <li className='p-2'>
            <Link to={"/contact"}>{t("elaqe")}</Link>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default About