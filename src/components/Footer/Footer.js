import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function FooterComponent () {
  return (
    <div className='main-container-footer'>
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <MDBContainer className='p-4 pb-0'> 
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <section className='mb-4'>
                <a href="https://www.twitter.com/jamesqquick" className="twitter social" style={{margin : '10px'}}>
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/learnbuildteach"
                  className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <p>ما را در شبکه‌های اجتماعی دنبال کنید</p>
              </section>
            </MDBCol>
            <MDBCol md='5' size='5' className='mb-4 mb-md-0'>
              <MDBInput label='ایمیل خود را برای عضویت در خبرنامه ما وارد کنید' id='form1' type='text'/>
            </MDBCol>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>عضو شدن</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          &copy; {new Date().getFullYear()}
          <span className='text-dark'>
          تمام حقوق اين وب‌سايت برای شریف‌پاب است
          </span>
        </div>
      </MDBFooter>
    </div>
  );
}