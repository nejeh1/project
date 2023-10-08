import React from 'react';
import './Home.css';
import image from './jjjj-removebg-preview.png'
function Home() {
  return (
    <div className="home">
      <div className="firsthalf">
        <h1 className="title">
          <span>Upgrade</span> Your Capabilities And<br/>Skills To Get <span>More</span> <br></br><span>Opportunities</span>
        </h1>
        <p className="para">We prepare the best and latest courses to<br />enhance your professional capabilities</p>
        <div className="buttons">
          <button className="button sign-in">Sign In</button>
          <button className="button free-courses">Free Courses</button>
        </div>
        <div className="bigbox">
          <div className="box">
            <img src='https://icon-library.com/images/certification-icon-png/certification-icon-png-15.jpg' alt="Certificate" />
            <p>International recognized certificate</p>
          </div>
          <div className="box">
            <img src='https://icones.pro/wp-content/uploads/2021/07/icone-d-affaires-et-d-entrepreneurs-gris.png' alt="Qualified Teachers" />
            <p>We rely on qualified teachers</p>
          </div>
          <div className="box">
            <img src='https://cdn4.iconfinder.com/data/icons/gray-user-management/512/knowledge-512.png' alt="Students" />
            <p>+5k students every year</p>
          </div>
        </div>
      </div>
      <div className='secondhalf'>
      <img src='https://www.gta.net/hs-fs/hubfs/Business_Desktop_Wireless-Internet.png?width=640&height=652&name=Business_Desktop_Wireless-Internet.png' alt='mg' className='imagehome'></img>
      </div>
    </div>
  );
}

export default Home;

