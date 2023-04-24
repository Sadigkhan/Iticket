import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../../assets/sass/infos/faq.scss'

function Faq() {
  const [visible, setVisible] = React.useState(false);
  const [where, setWhere] = React.useState(false);
  const [delivery, setDelivery] = React.useState(false);
  const [kids, setKids] = React.useState(false);
  const [minors, setMinors] = React.useState(false);
  const [promo, setPromo] = React.useState(false);
  const [mydetail, setMydetail] = React.useState(false);
  const [stolen, setStolen] = React.useState(false);
  const [returntick, setReturntick] = React.useState(false);
  const [canceled, setCanceled] = React.useState(false);
  const [outside, setOutside] = React.useState(false);
  const [venue, setVenue] = React.useState(false);
  const [reuqired, setRequired] = React.useState(false);

  const { t } = useTranslation();

  return (
    <div className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4' >
        <h2 className='mt-5'>{t("faq")}</h2>
        <div className='faq mt-5'>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setVisible(!visible)} style={{ border: visible ? 'none' : '' }} > 1. {t("faq1")}</button>

            <div className='answer' style={{ display: visible ? 'block' : 'none' }}>
              <p>{t("faq2")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setWhere(!where)} style={{ border: where ? 'none' : '' }} > 2. {t("faq3")}</button>

            <div className='answer' style={{ display: where ? 'block' : 'none' }}>
              <p>{t("faq4")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setDelivery(!delivery)} style={{ border: delivery ? 'none' : '' }} > 3. {t("faq5")}</button>

            <div className='answer' style={{ display: delivery ? 'block' : 'none' }}>
              <p>{t("faq6")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setKids(!kids)} style={{ border: kids ? 'none' : '' }} > 4. {t("faq7")}</button>

            <div className='answer' style={{ display: kids ? 'block' : 'none' }}>
              <p>{t("faq8")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setMinors(!minors)} style={{ border: minors ? 'none' : '' }} > 5. {t("faq9")}</button>

            <div className='answer' style={{ display: minors ? 'block' : 'none' }}>
              <p>{t("faq10")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setPromo(!promo)} style={{ border: promo ? 'none' : '' }} >6. {t("faq11")}</button>

            <div className='answer' style={{ display: promo ? 'block' : 'none' }}>
              <p>{t("faq12")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setMydetail(!mydetail)} style={{ border: mydetail ? 'none' : '' }} >7. {t("faq13")}</button>

            <div className='answer' style={{ display: mydetail ? 'block' : 'none' }}>
              <p>{t("faq14")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setStolen(!stolen)} style={{ border: stolen ? 'none' : '' }} >8. {t("faq15")}</button>

            <div className='answer' style={{ display: stolen ? 'block' : 'none' }}>
              <p>{t("faq16")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setReturntick(!returntick)} style={{ border: returntick ? 'none' : '' }} >9. {t("faq17")}</button>

            <div className='answer' style={{ display: returntick ? 'block' : 'none' }}>
              <p>{t("faq18")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setCanceled(!canceled)} style={{ border: canceled ? 'none' : '' }} >10. {t("faq19")}</button>

            <div className='answer' style={{ display: canceled ? 'block' : 'none' }}>
              <p>{t("faq20")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setOutside(!outside)} style={{ border: outside ? 'none' : '' }} >11. {t("faq21")}</button>

            <div className='answer' style={{ display: outside ? 'block' : 'none' }}>
              <p>{t("faq22")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setVenue(!venue)} style={{ border: venue ? 'none' : '' }} >12. {t("faq23")}</button>

            <div className='answer' style={{ display: venue ? 'block' : 'none' }}>
              <p>{t("faq24")}</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setRequired(!reuqired)} style={{ border: reuqired ? 'none' : '' }} >13. {t("faq25")}</button>

            <div className='answer' style={{ display: reuqired ? 'block' : 'none' }}>
              <p>{t("faq26")}</p>
            </div>

          </div>



        </div>
      </div>

      <div className='col-lg-3 col-md-6 col-sm-12 mt-4 sidebar'>
      <ul>
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}}>
            <Link to={"/faq"} style={{color:'white'}}>{t("faq")}</Link>
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

export default Faq