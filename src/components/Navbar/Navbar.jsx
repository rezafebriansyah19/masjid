import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaInfoCircle, 
  FaProjectDiagram, 
  FaImages, 
  FaPhoneAlt,
  FaUsers,
  FaHeart,
  FaTimes
} from 'react-icons/fa';
import styles from './Navbar.module.css';
import logoYayasan from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const donasiLink = "https://masjidkinclong.biolinku.biz.id/donasi-masjid-kinclong-99?fbclid=PAZXh0bgNhZW0CMTEAAacvccDbJgb9KYSNp7NJLVz7WxIRhH0AZcKnZlKMI5OgBZDny6aw15N-huDo";
  const relawanLink = "https://docs.google.com/forms/d/e/1FAIpQLSeowu_0_JySR5-hmn2t7xNylLoqLEzyxJckvf029IEWxB1XgA/viewform";

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    closeMenu();
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        {/* Logo Section */}
        <Link to="/" className={styles.navbarLogo} onClick={closeMenu}>
          <img 
            src={logoYayasan} 
            alt="Logo Yayasan Masjid Kinclong" 
            className={styles.logoImage}
          />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>Masjid Kinclong</span>
            <span className={styles.logoSubtitle}>Yayasan Sahabat Surga</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.navbarMenu}>
          <Link 
            to="/" 
            className={`${styles.navbarLink} ${isActive('/') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <span className={styles.linkText}>Beranda</span>
            <div className={styles.linkUnderline}></div>
          </Link>
          <Link 
            to="/tentang-kami" 
            className={`${styles.navbarLink} ${isActive('/tentang-kami') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <span className={styles.linkText}>Tentang Kami</span>
            <div className={styles.linkUnderline}></div>
          </Link>
          <Link 
            to="/program" 
            className={`${styles.navbarLink} ${isActive('/program') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <span className={styles.linkText}>Program</span>
            <div className={styles.linkUnderline}></div>
          </Link>
          <Link 
            to="/galeri" 
            className={`${styles.navbarLink} ${isActive('/galeri') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <span className={styles.linkText}>Galeri</span>
            <div className={styles.linkUnderline}></div>
          </Link>
          <Link 
            to="/kontak" 
            className={`${styles.navbarLink} ${isActive('/kontak') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <span className={styles.linkText}>Kontak</span>
            <div className={styles.linkUnderline}></div>
          </Link>
        </div>

        {/* CTA Buttons - Desktop */}
        <div className={styles.navbarActions}>
          <button 
            onClick={() => handleExternalLink(relawanLink)}
            className={`${styles.ctaButton} ${styles.ctaSecondary}`}
          >
            <FaUsers className={styles.buttonIcon} />
            Gabung Relawan
          </button>
          <button 
            onClick={() => handleExternalLink(donasiLink)}
            className={`${styles.ctaButton} ${styles.ctaPrimary}`}
          >
            <FaHeart className={styles.buttonIcon} />
            Donasi Sekarang
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`${styles.navbarToggle} ${isMenuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={styles.burger}>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </div>
        </button>

        {/* Mobile Overlay */}
        <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.active : ''}`} onClick={closeMenu}></div>

        {/* Mobile Menu Sidebar */}
        <div className={`${styles.navbarMobile} ${isMenuOpen ? styles.active : ''}`}>
          {/* Mobile Header */}
          <div className={styles.mobileHeader}>
            <div className={styles.mobileLogoSection}>
              <img 
                src={logoYayasan} 
                alt="Logo Yayasan Masjid Kinclong" 
                className={styles.mobileLogo}
              />
              <div className={styles.mobileLogoText}>
                <span className={styles.mobileLogoTitle}>Masjid Kinclong</span>
                <span className={styles.mobileLogoSubtitle}>Yayasan Sahabat Surga</span>
              </div>
            </div>
            
            <button 
              className={styles.mobileCloseButton}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <FaTimes className={styles.closeIcon} />
            </button>
          </div>

          <div className={styles.mobileMenuLinks}>
            <Link 
              to="/" 
              className={`${styles.mobileLink} ${isActive('/') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              <FaHome className={styles.mobileLinkIcon} />
              Beranda
            </Link>
            <Link 
              to="/tentang-kami" 
              className={`${styles.mobileLink} ${isActive('/tentang-kami') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              <FaInfoCircle className={styles.mobileLinkIcon} />
              Tentang Kami
            </Link>
            <Link 
              to="/program" 
              className={`${styles.mobileLink} ${isActive('/program') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              <FaProjectDiagram className={styles.mobileLinkIcon} />
              Program
            </Link>
            <Link 
              to="/galeri" 
              className={`${styles.mobileLink} ${isActive('/galeri') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              <FaImages className={styles.mobileLinkIcon} />
              Galeri
            </Link>
            <Link 
              to="/kontak" 
              className={`${styles.mobileLink} ${isActive('/kontak') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              <FaPhoneAlt className={styles.mobileLinkIcon} />
              Kontak
            </Link>
          </div>

          {/* Mobile CTA Section */}
          <div className={styles.mobileActions}>
            <div className={styles.mobileCTATitle}>Mari Berkontribusi</div>
            <button 
              onClick={() => handleExternalLink(relawanLink)}
              className={`${styles.mobileCtaButton} ${styles.mobileCtaSecondary}`}
            >
              <FaUsers className={styles.mobileButtonIcon} />
              Gabung Relawan
            </button>
            <button 
              onClick={() => handleExternalLink(donasiLink)}
              className={`${styles.mobileCtaButton} ${styles.mobileCtaPrimary}`}
            >
              <FaHeart className={styles.mobileButtonIcon} />
              Donasi Sekarang
            </button>
          </div>

          {/* Mobile Footer */}
          <div className={styles.mobileFooter}>
            <div className={styles.mobileFooterText}>
              Bersama membersihkan, bersama memberkahi
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;