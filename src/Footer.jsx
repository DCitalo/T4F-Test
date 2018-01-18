import React, { Component } from 'react';

class Footer extends Component { 
	render() {
    	return (
    	<footer className="container-100">
        <div className='container-70 tb-container-90 DF FW footer-container'>
          <div className="footerBannerSpaceNew">
              <a href="http://premier.ticketsforfun.com.br/" target="_blank" rel="noopener noreferrer"><img src="Images/logo-tickets-for-fun.png" width="220" height="120" alt="atendimento via chat" /></a>
          </div>    
          <div className="footerCompany tb-container-100 tb-text-center">
            <h3><b>Site</b></h3>
            <ul>
                <li><a href="http://premier.ticketsforfun.com.br/umbrella/atendimento/nossas-politicas.html" target="_blank" rel="noopener noreferrer">Nossas Políticas</a></li>
                <li><a href="http://premier.ticketsforfun.com.br/umbrella/atendimento/seguranca.html" target="_blank" rel="noopener noreferrer">Segurança do Site</a></li>
                <li><a href="http://premier.ticketsforfun.com.br/shows/show.aspx?sh=eticket" target="_blank" rel="noopener noreferrer">E-Ticket</a></li>
            </ul>
          </div>
          <div className="footerCompany tb-container-100 tb-text-center">
            <h3><b>Atendimento</b></h3>
            <ul>
                <li><a href="http://premier.ticketsforfun.com.br/shows/show.aspx?sh=atend" target="_blank" rel="noopener noreferrer">Atendimento</a></li>
                <li><a href="http://premier.ticketsforfun.com.br/content/buyers/meiaentrada_popup.aspx" target="_blank" rel="noopener noreferrer">Meia Entrada</a></li>
                <li><a href="http://premier.ticketsforfun.com.br/membership/contactus.aspx" target="_blank" rel="noopener noreferrer">Fale Conosco</a></li>
            </ul>
          </div>
          <div className="footerCompany tb-container-100 tb-text-center">
            <h3><b>Minha Tickets for Fun</b></h3>
            <ul>
              <li><a href="http://premier.ticketsforfun.com.br/Membership/UpdateAccount_Default.aspx" target="_blank" rel="noopener noreferrer">Cadastro / Acesso</a></li>
              <li><a href="http://premier.ticketsforfun.com.br/shows/show.aspx?sh=OFERTAS" target="_blank" rel="noopener noreferrer">Ofertas</a></li>
              <li><a href="http://premier.ticketsforfun.com.br/shows/show.aspx?sh=COMOCOMPRA" target="_blank" rel="noopener noreferrer">Como Comprar</a></li>
              <li><a href="http://premier.ticketsforfun.com.br/shows/show.aspx?sh=pdv" target="_blank" rel="noopener noreferrer">Onde Comprar?</a></li> 
              <li><a href="http://premier.ticketsforfun.com.br/shows/show.aspx?sh=VALEINGR" target="_blank" rel="noopener noreferrer">Vale Ingresso</a></li>
            </ul>      
          </div>
          <div className="footerCompany tb-container-100 tb-text-center">
            <h3><b>Comercial</b></h3>
            <ul>
              <li><a href="http://premier.ticketsforfun.com.br/shows/show.aspx?sh=grupos" target="_blank" rel="noopener noreferrer">Venda a Grupos</a></li>
              <li><a href="http://premier.ticketsforfun.com.br/umbrella/eventos/corporativo.html" target="_blank" rel="noopener noreferrer">Eventos Corporativos</a></li>
              <li><a href="http://premier.ticketsforfun.com.br/shows/show.aspx?sh=COMERCIAL" target="_blank" rel="noopener noreferrer">Venda Seu Evento</a></li>
            </ul>
          </div>
        </div>
    </footer>
    );
  	}
}

export default Footer;
