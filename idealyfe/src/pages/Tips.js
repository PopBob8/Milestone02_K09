import React from 'react';
import './Tips.css';
import Header from '../components/Header';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Tips = () => {
    return (
        <div>
            <div className="header">
                <div className="header_container">
                    <h1><b>Tips</b></h1>
                    <p>Here's Our Tips For <b>You</b></p>
                </div>
            </div>
            <div className="articles">
                <div className="articles_wrapper">
                    <div className="articles_card">
                        <h2><b>Tips Pencegahan Eating Disorder</b></h2>
                        <p>Binge eating disorder berdampak pada orang-orang dari segala usia dan ukuran — jadi tidak hanya orang bertubuh gemuk dan sebaliknya. Orang dengan binge eating disorder bisa mengalami kelebihan berat badan atau obesitas, tetapi beberapa dari mereka memiliki berat badan normal. Berikut adalah tips-tips pencegahan eating disorder yang penting untuk diketahui.</p>
                        <a target="_blank" href="https://medium.com/@imaazzahra38/tips-pencegahan-eating-disorder-e7b25e958bcc" className="articles_btn" ><button><b>Baca Selengkapnya</b></button></a>
                    </div>
                </div>
                <div className="articles_wrapper">
                    <div className="articles_card">
                        <h2><b>Gejala Anoreksia dan Cara Mengatasinya</b></h2>
                        <p>Penderita anoreksia mengetahui bahwa dirinya lapar, namun rasa takut berlebihan terhadap kenaikan berat badan, membuat penderita tetap tidak ingin makan. Berikut adalah informasi terkait gejala anoreksia dan cara mengatasinya.</p>
                        <a target="_blank" href="https://medium.com/@imaazzahra38/gejala-anoreksia-dan-cara-mengatasinya-a3acddaef905" className="articles_btn" ><button><b>Baca Selengkapnya</b></button></a>
                    </div>
                </div>
                <div className="articles_wrapper">
                    <div className="articles_card">
                        <h2><b>10 Tips for A Healthy Diet</b></h2>
                        <p>Makanan memainkan peran vital dalam kesehatan badan kita. Namun, apakah kamu tau bahwa diet yang tidak sehat dapat berakibat pada kerusakan tubuh? Hindari diet yang tidak sehat dengan memerhatikan 10 tips berikut!</p>
                        <a target="_blank" href="https://medium.com/@sarahazkarief/10-tips-for-a-healthy-diet-f8f6dc8b552a" className="articles_btn" ><button><b>Baca Selengkapnya</b></button></a>
                    </div>
                </div>
                <div className="articles_wrapper">
                    <div className="articles_card">
                        <h2><b>8 Best Exercises for a Safe Weight Loss</b></h2>
                        <p>Dalam mendapatkan tubuh ideal, terdapat berbagai olahraga yang dapat dilakukan. Namun, olahraga mana saja yang ampuh dan sehat untuk dilakukan?</p>
                        <a target="_blank" href="https://medium.com/@sarahazkarief/safe-weight-loss-exercises-7e6adb3ebab" className="articles_btn" ><button><b>Baca Selengkapnya</b></button></a>
                    </div>
                </div>
                <div className="articles_wrapper">
                    <div className="articles_card">
                        <h2><b>Selain Melalui Penghitungan BMI, Ini Dia Lima Tanda Berat Badan Seseorang Disebut Ideal</b></h2>
                        <p>Banyak persepsi yang salah terkait berat badan seseorang dapat dikatakan ideal. Padahal, menjaga berat badan ideal merupakan hal yang sangat penting. Melalui artikel ini, pengguna Idealyfe diharapkan dapat memahami apa saja tanda-tanda yang menyebabkan seseorang dapat dikategorikan telah memiliki berat badan ideal.</p>
                        <a target="_blank" href="https://medium.com/@nelsenputra/selain-mengetahui-bmi-ini-dia-lima-tanda-berat-badan-seseorang-disebut-ideal-178c36f37841" className="articles_btn" ><button><b>Baca Selengkapnya</b></button></a>
                    </div>
                </div>
                <div className="articles_wrapper">
                    <div className="articles_card">
                        <h2><b>Menjaga Berat Badan Ideal dengan Pola Hidup Sehat</b></h2>
                        <p>Mengenai apa-apa saja yang perlu dilakukan oleh seseorang untuk menjaga agar berat badannya tetap ideal. Pola hidup yang sehat menjadi salah satu kuncinya. Lantas, bagaimana cara menerapkan pola hidup sehat versi Idealyfe?</p>
                        <a target="_blank" href="https://medium.com/@nelsenputra/menjaga-berat-badan-ideal-dengan-pola-hidup-sehat-3064d2adcc0e" className="articles_btn" ><button><b>Baca Selengkapnya</b></button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tips;