/* eslint-disable jsx-a11y/img-redundant-alt */
import React   from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container-fluid">
                    <div className ="row">

                        <div className="col-md-3 ">
                            <h5><a href="/Jobseeker" className="badge text-white " >Job By Location :</a></h5>
                            <ul className ="list-unstyled">
                                <h3> <p> <a href="/jobseeker" className="text-white " >Job By Location</a> </p></h3>
                                <p><Link className="text-white" >Job in Bangalore</Link></p>
                                <p><Link className="text-white" >Job in Chennai</Link></p>
                                <p><Link className="text-white" >Job in Kerala</Link></p>
                                <p><Link className="text-white" >Job in Delhi</Link></p>
                                <p><Link className="text-white" >Job in Mumbai</Link></p>
                            </ul>
                        </div>

                        <div className="col-md-3 ">
                            <ul className ="list-unstyled">
                                <h5><Link className="badge text-white" >Popular Searches :</Link></h5>
                                <li><p><Link className=" text-white" >Data Analytics in Bangalore</Link></p></li>
                                <li><p><Link className=" text-white" >Front End Developer in Mumbai</Link></p></li>
                                <li><p><Link className=" text-white" >Truck Drivers in Rajasthan</Link></p></li>
                                <li><p><Link className=" text-white" >Business Consultants in Delhi</Link></p></li>
                                <li><p><Link className=" text-white" >Supply chain Manager in Kerala</Link></p></li>
                            </ul>
                        </div>

                        <div className="col-md-3 ">
                            <ul className ="list-unstyled">
                               <h5><Link className="badge text-white" >More in Chakuri :</Link></h5>
                                <li><p><a href="https://ggtech.co.in/about-us" className=" text-white" >About Us</a></p></li>
                                <li><p><a href="https://ggtech.co.in/privacy-policy" className=" text-white" >Privacy and Policy</a></p></li>
                                <li><p><a href="https://www.naukri.com/faq/job-seeker?utm_source=footer" className=" text-white" >FAQ</a></p></li>
                                <li><p><a href="https://www.naukri.com/termsconditions" className=" text-white" >Terms and Conditions</a></p></li>
                                <li><p><a href="mailto: hr.gts@ggtech.co.in" className=" text-white" >Feedback</a></p></li>
                            </ul>
                        </div>

                        <div className="col-md-3 ">
                            <ul className ="list-unstyled">
                                <h5><a href="/ContactUs" className=" badge text-white" >Contact Us :</a></h5>
                                <li><p><a href="mailto: chakuricustomercare@gmail.com" className=" text-white" target = "blank">chakuricustomercare@gmail.com</a></p></li>
                                <li><p onclick="window.open('tel:+91 33 67133010');"><Link  className=" text-white" >+91 33 67133010</Link></p></li>
                                <li> <p><a  href="https://www.facebook.com/GoraiGlobalTechnology/" className="fb-ic  text-white" target = "blank"><FaFacebook/>Facebook</a></p></li>
                                <li> <p><a href="https://www.twitter.com" className="tw-ic text-white"><FaTwitter/>Twitter</a></p></li>
                                <li>  <p><a  href="https://www.instagram.com" className="ins-ic text-white"><FaInstagram/>Instagram</a></p></li>
                                <li>  <p> <a  href="https://in.linkedin.com/company/goraitechnologysolutions" className="li-ic text-white" target = "blank"><FaLinkedin/>linkedin</a></p></li>
                            </ul>
                        </div>

                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col ">
                                <h4 className="text-white">Get it on your mobile phone on</h4>
                            </div>
                            <div className="col-2">
                                <a href="https://www.apple.com/in/app-store/"><img src="https://www.medsurety.com/wp-content/uploads/2019/09/apple-store-button.png" className="img-fluid"  alt="Responsive Image" width="150"  height="230"/></a>
                            </div>
                            <div class="col-1  mb-0 ">
                                <h1 class="text-white text-center">OR</h1>
                            </div>
                            <div class="col">
                                <a href="https://play.google.com/store/apps/details?id=com.gts.chakuri.JobSeeker"><img src="https://ridesharetax.com.au/wp-content/uploads/Get_it_on_Google_play.png" className="img-fluid"  alt="Responsive Image" width="150"  height="230" /></a>
                            </div>
                            <div className="col text-right">
                                <p className="text">&copy;CHAKURI 2020</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
.footer-middle
{
    background: #007bff;
    padding : -top, 6rem;
    color: #fff;
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}
`;