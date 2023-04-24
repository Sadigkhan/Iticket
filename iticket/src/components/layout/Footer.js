import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import '../../assets/sass/layout/footer.scss'

function Footer() {
  const { t } = useTranslation();
  return (

    <div className='foot row mt-4'>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
        <div className='logo mt-2'>
          <img className='logofoot' src={require('../../assets/img/logoiticket.png')} alt="" />
        </div>
        <div>
          <h4 className='call'>{t("dəstək")}:</h4>
          <h3 className='num heade'><Link className='number' to="/">+994514555007</Link></h3>
          <h3 className='num heade'><Link className='number' to="/">code.test.iticket@gmail.com</Link></h3>
        </div>

      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
        <h3 className='heade'>{t("melumat")}</h3>
        <div>

          <ul>
            <li><Link to="/faq">{t("faq")}</Link></li>
            <li><Link to="/support">{t("dəstək")}</Link></li>
            <li><Link to="/terms">{t("term")}</Link></li>
            <li><Link to="/eticket">{t("eticket")}</Link></li>
            <li><Link to="/refund">{t("qaytarilma")}</Link></li>
            <li><Link to="/privacy">{t("mexfilik")}</Link></li>
          </ul>
        </div>

      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
        <h3 className='heade'>İTicket</h3>
        <div>

          <ul>
            <li><Link to="/about">{t("about")}</Link></li>
          
            <li><Link to="/contact">{t("elaqe")}</Link></li>
          </ul>
        </div>

      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
        <h3 className='heade'>{t("security")}</h3>
        <div>

          <p className='visa'>{t("secur")}</p>
          <img className='visalog' src={require('../../assets/img/visalog.png')} alt="" />
        </div>

      </div>
      <p className='mmc'>{t("admin")}</p>
    </div>

  )
}

export default Footer