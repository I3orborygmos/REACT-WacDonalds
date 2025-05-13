import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

// Import components for the footer routes
import About from './about';
import WorkForUs from './workforus';
import Contact from './contact';
import FAQ from './faq';
import PrivacyPolicy from './privacypolicy';
import TermsOfService from './tos';

export default function Footer() {
    return (
        <BrowserRouter>
            <footer className="bg-color text-center text-white py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>About Us</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/about" className="footer-link">Our Story</Link></li>
                                <li><Link to="/work-for-us" className="footer-link">Work for Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Support</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                                <li><Link to="/faq" className="footer-link">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Legal</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                                <li><Link to="/terms-of-service" className="footer-link">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-3">&copy; 2025 WacDonald's. All rights reserved.</p>
                </div>
                {/* Footer Routes */}
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/work-for-us" element={<WorkForUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                </Routes>
            </footer>
        </BrowserRouter>
    );
}