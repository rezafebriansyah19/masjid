import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMosque, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaYoutube,
  FaWhatsapp,
<<<<<<< HEAD
  FaGlobe,
  FaTelegram
} from 'react-icons/fa';

import { FaTiktok } from "react-icons/fa6";

=======
  FaExternalLinkAlt
} from 'react-icons/fa';
>>>>>>> 276ecda12d8f4a5fb488469d9ec02d95c3a6762b
import styles from './Footer.module.css';

const Footer = () => {
  const socialLinks = {
    instagram: "https://www.instagram.com/masjid.kinclong?igsh=MTIyajVvN2swcG5udg==",
<<<<<<< HEAD
    tiktok: "https://www.tiktok.com/@masjid_kinclong?_r=1&_t=ZS-91TS0aNCEHh",
    facebook: "https://www.facebook.com/share/19p6cSNyGZ/",
    whatsapp: "https://wa.me/6281111827599",
    telegram: "https://t.me/+rEgiwyGBpx85MDE1",
=======
    facebook: "https://www.facebook.com/share/19p6cSNyGZ/",
    whatsapp: "https://wa.me/6281111827599",
>>>>>>> 276ecda12d8f4a5fb488469d9ec02d95c3a6762b
    youtube: "https://m.youtube.com/@MasjidKinclong?fbclid=PAT01DUANpxY5leHRuA2FlbQIxMAABp8iLj3R5AL_E4wsJSqxTZBbL6xz1ooKRcC5yAAHZXhrh11k53-62iL_XvLN0_aem_jpUj7HdfEsZ7Qi4rgr6ClQ",
    biolink: "https://masjidkinclong.biolinku.biz.id/?fbclid=PAb21jcANpxShleHRuA2FlbQIxMQABpwh8lYpNhzm_vIcD3rJRyPubQrel2uktQQQhD7wZEBfZKimH3DUT3vzTmC2T_aem_L6OSAU20-w0534kN0aIY5g"
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
<<<<<<< HEAD
        <div className={styles.footerContent}>
=======
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Brand Section */}
>>>>>>> 276ecda12d8f4a5fb488469d9ec02d95c3a6762b
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <FaMosque className={styles.logoIcon} />
              <div className={styles.logoText}>
                <span className={styles.logoTitle}>Masjid Kinclong</span>
<<<<<<< HEAD
                <span className={styles.logoSubtitle}>Gerakan Masjid Bersih</span>
=======
                <span className={styles.logoSubtitle}>Yayasan Masjid Kinclong</span>
>>>>>>> 276ecda12d8f4a5fb488469d9ec02d95c3a6762b
              </div>
            </div>
            <p className={styles.footerDescription}>
              Membersihkan masjid-masjid di seluruh Indonesia dan memberdayakan masyarakat 
              melalui kegiatan sosial yang bermakna dan berkelanjutan.
            </p>
            
            {/* Social Links */}
            <div className={styles.socialLinks}>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.instagram}`}
                aria-label="Instagram"
              >
                <FaInstagram />
                <span className={styles.socialTooltip}>Instagram</span>
              </a>
<<<<<<< HEAD

              <a 
                href={socialLinks.tiktok} 
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.tiktok}`}
                aria-label="TikTok" 
              >
                <FaTiktok />
                <span className={styles.socialTooltip}>TikTok</span>
              </a>

=======
>>>>>>> 276ecda12d8f4a5fb488469d9ec02d95c3a6762b
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.facebook}`}
                aria-label="Facebook"
              >
                <FaFacebook />
                <span className={styles.socialTooltip}>Facebook</span>
              </a>
<<<<<<< HEAD

=======
>>>>>>> 276ecda12d8f4a5fb488469d9ec02d95c3a6762b
              <a 
                href={socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.whatsapp}`}
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
                <span className={styles.socialTooltip}>WhatsApp</span>
              </a>
              <a 
<<<<<<< HEAD
              href={socialLinks.telegram}
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.telegram}`}
                aria-label="Telegram"
              >
                <FaTelegram />
                <span className={styles.socialTooltip}>Telegram</span>  
              </a>
              <a 
=======
>>>>>>> 276ecda12d8f4a5fb488469d9ec02d95c3a6762b
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.youtube}`}
                aria-label="YouTube"
              >
                <FaYoutube />
                <span className={styles.socialTooltip}>YouTube</span>
              </a>
              <a 
                href={socialLinks.biolink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.biolink}`}
                aria-label="Bio Link"
              >
<<<<<<< HEAD
                <FaGlobe />
=======
                <FaExternalLinkAlt />
>>>>>>> 276ecda12d8f4a5fb488469d9ec02d95c3a6762b
                <span className={styles.socialTooltip}>Info Lengkap</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Tautan Cepat</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/" className={styles.footerLink}>
                  <span className={styles.linkBullet}></span>
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang-kami" className={styles.footerLink}>
                  <span className={styles.linkBullet}></span>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/program" className={styles.footerLink}>
                  <span className={styles.linkBullet}></span>
                  Program
                </Link>
              </li>
              <li>
                <Link to="/galeri" className={styles.footerLink}>
                  <span className={styles.linkBullet}></span>
                  Galeri
                </Link>
              </li>
              <li>
                <Link to="/kontak" className={styles.footerLink}>
                  <span className={styles.linkBullet}></span>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Program Kami</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#bersih-masjid" className={styles.footerLink}>
                  <span className={styles.linkBullet}></span>
                  Bersih Masjid Rutin
                </a>
              </li>
              <li>
                <a href="#relawan" className={styles.footerLink}>
                  <span className={styles.linkBullet}></span>
                  Pemberdayaan Relawan
                </a>
              </li>
              <li>
                <a href="#donasi" className={styles.footerLink}>
                  <span className={styles.linkBullet}></span>
                  Donasi & Support
                </a>
              </li>
              <li>
                <a href="#sosial" className={styles.footerLink}>
                  <span className={styles.linkBullet}></span>
                  Kegiatan Sosial
                </a>
              </li>
              <li>
                <a href="#edukasi" className={styles.footerLink}>
                  <span className={styles.linkBullet}></span>
                  Edukasi Kebersihan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Kontak Kami</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIconWrapper}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Alamat</span>
                  <span className={styles.contactValue}>Jl. Gandaria I, Ratu Jaya, Kec. Cipayung, Kota Depok, Jawa Barat 16439</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIconWrapper}>
                  <FaPhone className={styles.contactIcon} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Telepon</span>
                  <a href="admin1" className={styles.contactValue}>Admin 1 :</a>
                  <a href="tel:+6281111827599" className={styles.contactValue}>
                    081111827599
                  </a>
                  <a href="admin2" className={styles.contactValue}>Admin 2 :</a>
                  <a href="tel:087775993000" className={styles.contactValue}>
                    087775993000
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIconWrapper}>
                  <FaEnvelope className={styles.contactIcon} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:info@masjidkinclong.org" className={styles.contactValue}>
                    masjidkinclong88@gmail.com 
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIconWrapper}>
                  <FaWhatsapp className={styles.contactIcon} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <a 
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={styles.contactValue}
                  >
                    Chat Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
<<<<<<< HEAD
              &copy; 2025 <strong>Gerakan Masjid Bersih</strong>. Semua hak dilindungi.
=======
              &copy; 2025 <strong>Yayasan Sahabat Surga</strong>. Semua hak dilindungi.
>>>>>>> 276ecda12d8f4a5fb488469d9ec02d95c3a6762b
            </p>
            <div className={styles.footerLegal}>
              <a href="#privacy" className={styles.legalLink}>Kebijakan Privasi</a>
              <span className={styles.separator}>|</span>
              <a href="#terms" className={styles.legalLink}>Syarat & Ketentuan</a>
              <span className={styles.separator}>|</span>
              <a href="#disclaimer" className={styles.legalLink}>Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsApp}
        aria-label="Chat via WhatsApp"
      >
        <FaWhatsapp className={styles.whatsappIcon} />
        <span className={styles.whatsappTooltip}>Chat dengan Kami</span>
      </a>
    </footer>
  );
};

export default Footer;