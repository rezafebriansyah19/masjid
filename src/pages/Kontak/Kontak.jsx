import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaExternalLinkAlt
} from 'react-icons/fa';
import styles from './Kontak.module.css';

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Pesan berhasil dikirim! Terima kasih telah menghubungi kami.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Alamat Kantor',
      content: 'Jl. Gandaria I, Ratu Jaya, Kec. Cipayung, Kota Depok, Jawa Barat 16439',
      link: 'https://maps.app.goo.gl/fTxpc211JUUdxCn9A',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaPhone />,
      title: 'Telepon & WhatsApp',
      content: '+62 811-1182-7599\n+62 812-3456-7890',
      link: 'https://wa.me/6281111827599',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'masjidkinclong88@gmail.com',
      link: 'masjidkinclong88@gmail.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaClock />,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 08:00 - 17:00 WIB\nSabtu: 08:00 - 14:00 WIB',
      gradient: 'from-orange-500 to-amber-500'
    }
  ];

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      url: 'https://wa.me/6281111827599',
      color: '#25D366'
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://www.instagram.com/masjid.kinclong',
      color: '#E4405F'
    },
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      url: 'https://www.facebook.com/share/19p6cSNyGZ/',
      color: '#1877F2'
    },
    {
      icon: <FaYoutube />,
      name: 'YouTube',
      url: 'https://m.youtube.com/@MasjidKinclong',
      color: '#FF0000'
    }
  ];

  return (
    <div className={styles.kontak}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Hubungi <span className={styles.highlight}>Kami</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Mari berkolaborasi untuk mewujudkan masjid yang bersih, nyaman, dan memberdayakan umat
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>1-2</div>
                <div className={styles.statLabel}>Hari Response</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Gratis</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </section>

      {/* Contact Section */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Mari Terhubung</h2>
            <p className={styles.sectionSubtitle}>
              Tim kami siap membantu Anda dengan segala pertanyaan dan kolaborasi
            </p>
          </div>

          <div className={styles.contactContent}>
            {/* Contact Form */}
            <div className={styles.contactFormSection}>
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <h3 className={styles.formTitle}>Kirim Pesan</h3>
                  <p className={styles.formSubtitle}>
                    Isi form berikut dan kami akan merespons secepatnya
                  </p>
                </div>
                
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="Masukkan nama lengkap Anda"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="nama@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      Subjek *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.formInput}
                      placeholder="Apa yang bisa kami bantu?"
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.formTextarea}
                      rows="6"
                      placeholder="Tuliskan pesan detail Anda di sini..."
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className={styles.loadingSpinner}></div>
                    ) : (
                      <>
                        <FaPaperPlane className={styles.submitIcon} />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfoSection}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Informasi Kontak</h3>
                <p className={styles.infoSubtitle}>
                  Beberapa cara untuk terhubung dengan kami
                </p>

                <div className={styles.contactInfoGrid}>
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className={styles.contactInfoCard}
                      onClick={() => info.link && window.open(info.link, '_blank')}
                    >
                      <div className={`${styles.infoIcon} ${styles[info.gradient.replace(/\s+/g, '')]}`}>
                        {info.icon}
                      </div>
                      <div className={styles.infoContent}>
                        <h4 className={styles.infoCardTitle}>{info.title}</h4>
                        <p className={styles.infoCardContent}>
                          {info.content.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < info.content.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                        {info.link && (
                          <div className={styles.infoLink}>
                            <span>Buka</span>
                            <FaExternalLinkAlt className={styles.linkIcon} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className={styles.socialSection}>
                  <h4 className={styles.socialTitle}>Media Sosial</h4>
                  <p className={styles.socialSubtitle}>
                    Ikuti kami di platform sosial untuk update terbaru
                  </p>
                  <div className={styles.socialLinks}>
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        style={{ '--social-color': social.color }}
                        aria-label={social.name}
                      >
                        {social.icon}
                        <span className={styles.socialTooltip}>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className={styles.mapCard}>
                <h3 className={styles.mapTitle}>Lokasi Kantor Kami</h3>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.0658515259115!2d106.81316777355747!3d-6.419173462773615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e97ef10e4081%3A0x854a7aa2a8ea0203!2sJl.%20Gandaria%20I%2C%20Ratu%20Jaya%2C%20Kec.%20Cipayung%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016439!5e1!3m2!1sen!2sid!4v1762161626784!5m2!1sen!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '15px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Masjid Kinclong"
                  ></iframe>
                  <div className={styles.mapInfo}>
                    <FaMapMarkerAlt className={styles.mapPinIcon} />
                    <div className={styles.mapAddress}>
                      <strong>Yayasan Masjid Kinclong</strong>
                      <span>Jl. Gandaria I, Ratu Jaya, Kec. Cipayung, Kota Depok, Jawa Barat 16439</span>
                    </div>
                    <a 
                      href="https://maps.app.goo.gl/fTxpc211JUUdxCn9A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mapLink}
                    >
                      Buka di Google Maps
                      <FaExternalLinkAlt className={styles.mapLinkIcon} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Butuh Bantuan Cepat?</h2>
              <p className={styles.ctaDescription}>
                Hubungi kami via WhatsApp untuk respon yang lebih cepat dan personal
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a 
                href="https://wa.me/6281111827599"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                <FaWhatsapp className={styles.whatsappIcon} />
                Chat via WhatsApp
              </a>
              <a 
                href="tel:+6281111827599"
                className={styles.phoneButton}
              >
                <FaPhone className={styles.phoneIcon} />
                Telepon Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;