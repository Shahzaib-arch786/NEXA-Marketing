import React from "react";
import { Twitter, Instagram, Facebook, Github, Shield, Star, Briefcase, Smartphone, Monitor, Apple } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex flex-col sm:flex-row flex-wrap bg-neutral text-neutral-content p-6 sm:p-10 gap-6 sm:gap-10">
        <nav className="flex-1 min-w-[150px]">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex-1 min-w-[150px]">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex-1 min-w-[150px]">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover"><Shield size={16} className="inline mr-1" />Terms of use</a>
          <a className="link link-hover"><Shield size={16} className="inline mr-1" />Privacy policy</a>
          <a className="link link-hover"><Shield size={16} className="inline mr-1" />Cookie policy</a>
        </nav>
        <nav className="flex-1 min-w-[150px]">
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover"><Twitter size={16} className="inline mr-1" />Twitter</a>
          <a className="link link-hover"><Instagram size={16} className="inline mr-1" />Instagram</a>
          <a className="link link-hover"><Facebook size={16} className="inline mr-1" />Facebook</a>
          <a className="link link-hover"><Github size={16} className="inline mr-1" />GitHub</a>
        </nav>
        <nav className="flex-1 min-w-[150px]">
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover"><Star size={16} className="inline mr-1" />Features</a>
          <a className="link link-hover"><Briefcase size={16} className="inline mr-1" />Enterprise</a>
          <a className="link link-hover"><Shield size={16} className="inline mr-1" />Security</a>
          <a className="link link-hover"><Star size={16} className="inline mr-1" />Pricing</a>
        </nav>
        <nav className="flex-1 min-w-[150px]">
          <h6 className="footer-title">Apps</h6>
          <a className="link link-hover"><Apple size={16} className="inline mr-1" />Mac</a>
          <a className="link link-hover"><Monitor size={16} className="inline mr-1" />Windows</a>
          <a className="link link-hover"><Smartphone size={16} className="inline mr-1" />iPhone</a>
          <a className="link link-hover"><Smartphone size={16} className="inline mr-1" />Android</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by NEXA
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
