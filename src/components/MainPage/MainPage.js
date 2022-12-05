import React from 'react';
import { Link } from 'react-router-dom';

function MainPage(props) {
  return (
    <div>
      
      <div className="auth-wrapper">
        <div style={{ textAlign: 'center' }}>
          
          <h3>HappyRoulette</h3>
          <Link style={{ color: 'gray', textDecoration: 'none' }} to="/login">로그인  </Link> <br />
          <Link style={{ color: 'gray', textDecoration: 'none' }} to="/register">회원가입  </Link> <br />
          <Link style={{ color: 'gray', textDecoration: 'none' }} to="/project">프로젝트 보기  </Link> <br />
        </div>


      </div>
    </div>
  );
}

export default MainPage;
