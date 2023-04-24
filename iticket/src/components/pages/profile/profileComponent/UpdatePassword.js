import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

import '../../../../assets/sass/profile/updatepassword.scss'
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import axios from 'axios';

function UpdatePassword() {

  const [forrender, setForrender] = useState();
  const [repeatpass, setRepeatpass] = useState();
  function clearToken(e) {
    e.preventDefault()
    localStorage.removeItem('token')



    setForrender('');
    console.log(forrender);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Çıxış Etdiniz',
      showConfirmButton: false,
      timer: 1500
    })

    window.location.assign('http://localhost:3000/')
  }
  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

  const [user, setUser] = useState();
  let token = localStorage.getItem('token');
  useEffect(() => {


    if (token != null) {

      let email = parseJwt(token).sub[1]
      axios.get(`/api/Account/GetUserByEmail/${email}`)
        .then((res) => {
          setUser(res.data)
        })
    }
  }, [])

  const [currentpassword, setCurrentPassword] = useState();
  const [newpassword, setNewPassword] = useState();
  async function resetPassword(e) {

    e.preventDefault();
    if (repeatpass === newpassword) {
      await axios.put(`/api/Account/UpdateUserPassword/${user?.email}`, {
        CurrentPassword: currentpassword,
        NewPassword: newpassword


      }, { 'Content-Type': 'multipart/form-data' })
        .then(function (response) {

          Swal.fire(
            "Şifrəniz Yeniləndi",
            'Updated',
            'success'
          )
        })
        .catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })

        });
    }else{
      Swal.fire({
        icon: 'error',
        text: 'Şifrənizin təkrarını düzgün daxil edin',
      })
    }



  };
  const { t } = useTranslation();
  console.log(newpassword);
  console.log(repeatpass);
  return (
    <div className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <h2 className='mt-5'>{t("shifreyenile")}</h2>
        <div className='passwords mt-5'>
          <Form onSubmit={(e) => resetPassword(e)}>
            <div className='mt-4 updatepassw'>
              <Form.Group className="mb-3" controlId="formBasicOldPassword">
                <Form.Label className='labtext'>{t("currentpass")}</Form.Label>
                <Form.Control type="password" placeholder="" onChange={(e) => setCurrentPassword(e.target.value)} />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='labtext'>{t("newpass")}</Form.Label>
                <Form.Control type="password" placeholder="" onChange={(e) => setNewPassword(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label className='labtext' >{t("confirmnewpass")} </Form.Label>
                <Form.Control type="password" onChange={(e) => setRepeatpass(e.target.value)} placeholder="" />
                <p>{(repeatpass !== newpassword) ? 'Sifre Uygun Deyil' : ''}</p>
              </Form.Group>


            </div>
            <div className='mt-4 '>
              <div className='passbut'>
                <Button className='passbutton' type="submit">
                  {t("savechanges")}
                </Button>
              </div>

            </div>
          </Form>








        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-4 UpdatePasssidebar'>
        <ul>
          <li className='p-2' >
            <Link to={"/profile"}  >Profil</Link>
          </li>

          <li className='p-2' style={{ backgroundColor: 'black', borderRadius: '20px' }}>
            <Link to={"/updatepass"} style={{ color: 'white' }}>{t("shifreyenile")}</Link>
          </li>
          <li className='p-2'>
            <Link to={"/"}><button className='logout2' onClick={(e) => clearToken(e)}>{t("logout")}</button></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UpdatePassword