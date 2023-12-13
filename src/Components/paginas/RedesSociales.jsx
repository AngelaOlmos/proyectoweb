import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; 
import './hoja3.css';

const RedesSociales = () => {
  return (
    <section className="buttons">
      <a href="https://www.facebook.com/TuPaginaDeFacebook" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"></a>
      <a href="https://twitter.com/TuCuentaDeTwitter" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
      <a href="https://plus.google.com/TuPaginaDeGooglePlus" className="fa fa-google-plus" target="_blank" rel="noopener noreferrer"></a>
      <a href="https://www.youtube.com/TuCanalDeYouTube" className="fa fa-youtube" target="_blank" rel="noopener noreferrer"></a>
      <a href="https://www.linkedin.com/in/TuPerfilLinkedIn" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
    </section>
  );
};

export default RedesSociales;
