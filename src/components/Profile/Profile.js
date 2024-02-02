import React from 'react';
import { useState } from 'react';
import { logout } from '../redux/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ProfilePage () {
  const [link, setLink] = useState(""); 
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  }
  return (
    <section style={{ backgroundColor: 'transparent' }}>
      <MDBContainer className="py-5 main-container">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4" style={{ backgroundColor: '#AAA2B8' }}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1 title">خواننده</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>ویرایش عکس</MDBBtn>
                </div>
              </MDBCardBody>
              <MDBCardBody>
              <MDBRow>
                  <MDBCol md='50' size='10' className='mb-4 mb-md-0'>
                    <MDBInput label='نام کاربری' labelClass="myCustomLabel" id='form1' type='text' value="نام کاربری طرف"/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol md='50' size='20' className='mb-4 mb-md-0'>
                    <MDBInput label='ایمیل' labelClass="myCustomLabel" id='form1' type='email' value="example@example.com"/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol md='50' size='10' className='mb-4 mb-md-0'>
                    <MDBInput label='گذرواژه' labelClass="myCustomLabel" id='form1' type='password' value="1234"/>
                  </MDBCol>
                </MDBRow>
                <MDBBtn>اعمال تغییرات</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
          <MDBCol>
            <MDBRow>
              <MDBCol md="20">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">نشریه های پسندیده</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}></MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="20">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">شماره‌های ذخیره شده</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}></MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>   
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="20">
                <MDBCard className="mb-4 mb-md-0"></MDBCard>
                  <MDBBtn onClick={()=> handleLogout()}>خروج</MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      
    </section>
  );
}