import './footer.css'
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter }
 from 'react-icons/fa';
import { SlSocialPintarest } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import pic1 from './../../assets/pic1.webp'
import pic2 from './../../assets/pic2.webp'
import pic3 from './../../assets/pic3.webp'
import pic4 from './../../assets/pic4.webp'
import pic5 from './../../assets/pic5.webp'
import pic6 from './../../assets/pic6.webp'

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-con">
                <div className="col">
                    <h3>About us</h3>
                    <p className="text-footer">
                    Far far away,behind the word,far from the countries Vokalia and 
                    consonantia,there live the blind texts.
                    </p>
                    <h3>Connect</h3>
                    <div className="social">
                        <Link><FaFacebookF/></Link>
                        <Link><FaInstagram/></Link>
                        <Link><FaTwitter/></Link>
                        <Link><FaLinkedinIn/></Link>
                        <Link><SlSocialPintarest/></Link>
                        <Link><FaGoogle/></Link>
                    </div>
                </div>
                <div className="col">
                    <h3>Projects</h3>
                    <ul>
                        <li>Web Design</li>
                        <li>Html5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Gallery</h3>
                    <div className='footer-picture'>
                        <img src={pic1} alt="" />
                        <img src={pic2} alt="" />
                        <img src={pic3} alt="" />
                        <img src={pic4} alt="" />
                        <img src={pic5} alt="" />
                        <img src={pic6} alt="" />
                    </div>
                </div>
                <div className="col">
                    <h3>Contact</h3>
                    <ul className='info'>
                        <li>43 Raymouth Rd. Baltemoer, london 3910</li>
                        <li>+1(123)-456-7890</li>
                        <li>+1(123)-456-7890</li>
                        <li>info@mydomain.com</li>
                    </ul>
                </div>
            </div>
            <p className="copyright">Copyright &copy; 2023. All Right Reserved.--Designed With Love By Maha Rabah</p>
        </div>
    );
}