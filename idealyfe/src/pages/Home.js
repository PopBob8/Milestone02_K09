import React from 'react';
import './Home.css';

import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>

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