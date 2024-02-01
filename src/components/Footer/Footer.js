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

export default function FooterComponent () {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        {/* <section className='mb-4'>
          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section> */}
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            {/* <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>عضو خبرنامه ما شوید</strong>
              </p>
            </MDBCol> */}

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput label='ایمیل خود را برای عضویت در خبرنامه ما وارد کنید' id='form1' type='text' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>عضو شدن</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()}
        <span className='text-dark'>
        تمام حقوق اين وب‌سايت برای شریف‌پاب است
        </span>
      </div>
    </MDBFooter>
  );
}