import React from 'react';

// Define variables for name, city, and profile photo
const name = "نام"; // Replace with the name variable obtained from the server
const city = "نام خانوادگی"; // Replace with the city variable obtained from the server
const profilePhoto = "https://www.tanjungbunga.com/wp-content/uploads/2021/11/Blank-Avatar.png"; // Replace with the actual URL of the profile photo

function UserProfile() {
  return (
    <section className="h-100 gradient-custom-2" style={{ borderRadius: '30px' }}>
      <div className="container py-5 h-100" style={{ borderRadius: '30px' }}>
        <div className="row d-flex justify-content-center align-items-center h-100" style={{ borderRadius: '30px'}}>
          <div className="col col-lg-9 col-xl-7" style={{ borderRadius: '30px'}}>
            <div className="card" style={{ borderRadius: '30px' }}>
              <div className="rounded-top text-white d-flex flex-row" style={{ background: 'linear-gradient(to bottom, #5C469C, #D4ADFC)', height: '200px' , borderRadius: '30px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <img src={profilePhoto}
                    alt="Profile" className="img-fluid img-thumbnail mt-4 mb-2 mb-2 rounded-circle" style={{ width: '150px' }} />
                  <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark">
                    Edit profile
                  </button>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <h5>{name}</h5>
                  <p>{city}</p>
                </div>
              </div>
              <div className="card-body p-4 text-black" style={{ borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}>
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">نشریات مورد پسند</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <p className="font-italic mb-1">گل</p>
                    <p className="font-italic mb-1">پروانه</p>
                    <p className="font-italic mb-0">درخت</p>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">نشریات خوانده شده</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <p className="font-italic mb-1">اب</p>
                    <p className="font-italic mb-1">دریا</p>
                    <p className="font-italic mb-0">ماهی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;