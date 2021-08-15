import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* Navbar Section */}
            <nav className="navbar">
                <div className="navbar_container">
                    <img src="../../img/idealife_logo-01.png"></img>
                    <ul className="navbar_menu">
                        <li className="navbar_item">
                            <a href="#home" className="navbar_links">Home</a>
                        </li>
                        <li className="navbar_item">
                            <a href="#tips" className="navbar_links">Tips</a>
                        </li>
                        <li className="navbar_item">
                            <a href="#kalkulator" className="navbar_links">Kalkulator</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Header Section */}
            <div className="header">
                <div className="header_container">
                    <h1>Idealyfe</h1>
                    <p>Your Solution for A Better <b>Life</b></p>
                </div>
            </div>
            {/* About Section */}
            <div className="about">
                <div className="about_container">
                    <div className="about_content">
                        <h1>Apa itu Idealyfe?</h1>
                        <p><b>Idealyfe</b> adalah suatu website dimana pengguna dapat mendapatkan kategori indeks BMI dirinya dengan memasukkan tinggi serta berat badannya. Melalui indeks BMI yang didapat, <i>user</i> dapat diarahkan ke tips and tricks yang relevan bagi <i>user</i> tersebut berdasarkan BMI-nya dengan tujuan agar <i>user</i> dapat mendapatkan berat badan yang ideal berdasarkan BMI-nya.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;