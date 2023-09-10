/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const [showPage, setShowPage] = React.useState(false)

  const handleClick = () => {
    setShowPage(!showPage)
  }

  return (
    <>
      <div className='name' onClick={handleClick} style={{ cursor: 'pointer', color: '#BB3C3C' }}>
        Alia Farid
      </div>
      <div
        className='overlay' // Add a class for the overlay
        style={{
          display: showPage ? 'flex' : 'none',
          position: 'fixed', // Position the overlay
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background color
          zIndex: 1, // Ensure it's on top
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
        }}
        onClick={handleClick} // Close the text when overlay is clicked
      >
        <div className='page' style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'row' }}>
        <h1 style={{ color: '#BB3C3C', fontFamily: 'sans-serif', fontSize: '20px' }}>About Alia Farid</h1>
          
          <div style={{ color: '#BB3C3C', fontFamily: 'sans-serif', fontSize: '16px', textAlign: 'center', flex: '1' }}>
            **Website under construction** Alia Farid (b.1985) lives and works in Kuwait and Puerto Rico. She has had solo exhibitions in Kunsthalle Basel, Basel; Contemporary Art Museum St. Louis, Missouri; Kunstinstituut Melly, Rotterdam; and Portikus, Frankfurt am Main. Recent and upcoming group shows include participation in the Geneva Biennale Sculpture Garden, Whitney Biennial, Diriyah Biennale, Bienal de São Paulo, Gwangju Biennale, Sharjah Biennial, Theater of Operations: The Gulf Wars 1991-2001 in MoMA PS1, Yokohama Triennale and Asia Pacific Triennial. She has forthcoming solo exhibitions in Chisenhale Gallery, Contemporary Art Museum Houston in partnership with Rivers Institute, CAC Passerelle and Detroit Institute of Arts.
          </div>
          <div style={{ color: '#BB3C3C', fontFamily: 'sans-serif', fontSize: '16px', textAlign: 'center', flex: '1' }}>
            <div> 
              Alia Farid has a Bachelor of Fine Arts from la Escuela de Artes Plásticas de Puerto Rico (San Juan), a Master of Science in Visual Studies from the Visual Arts Program in MIT (Cambridge) and a Master of Arts in Museum Studies and Critical Theory from the Programa d'Estudis Independents MACBA (Barcelona). She received The Lise Wilhelmsen Art Award in 2023 and is currently the David and Roberta Logle Fellow at Harvard Radcliffe Institute (2023-2024)
            </div>
            <a className='anchor'>aliafarid@gmail.com</a><br/>
            <a className='anchor'>Instagram</a><br/>
            <a className='anchor'>CV</a><br/>
            <a className='anchor'>Admin</a><br/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
