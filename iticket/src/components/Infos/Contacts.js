import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../assets/sass/infos/contact.scss';
import { Link } from 'react-router-dom';
function Contacts() {
  const { t } = useTranslation();
  return (

    <div className='row justify-content-between container'>

      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <div>
          <h2 className='mt-5'>{t("elaqe")}</h2>
          <div className='contact mt-5'>

            <div className='mt-4'>
              <b className='contacttext'>{t("unvan")}</b>
              <p className='contacttext'>{t("address")}</p>
            </div>
            <div className='mt-4'>
              <b className='contacttext'>{t("telefon")}</b>
              <p className='contacttext'>+994 51 455-50-07</p>
            </div>

            <div className='mt-4'>
              <b className='contacttext'>{t("contacttext")}</b>
              <p className='contacttext'>code.test.iticket@gmail.com</p>
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
            <Link to={"/eticket"}>{t("eticket")}</Link>
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
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}}>
            <Link style={{color:'white'}} to={"/contact"}>{t("elaqe")}</Link>
          </li>
        </ul>
      </div>
    </div>



  )
}

export default Contacts