import { 
  FaMosque, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaUserTie, 
  FaHeart,
  FaHandsHelping,
  FaStar,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaExternalLinkAlt
} from 'react-icons/fa';
import Hero3D from '../../components/Hero3D/Hero3D';
import styles from './Home.module.css';

const Home = () => {
  const stats = [
    { 
      number: '1800+', 
      label: 'Masjid Dibersihkan', 
      icon: <FaMosque />,
      gradient: 'from-green-400 to-cyan-400'
    },
    { 
      number: '200+', 
      label: 'Relawan Aktif', 
      icon: <FaUsers />,
      gradient: 'from-cyan-400 to-blue-400'
    },
    { 
      number: '14+', 
      label: 'Kota/Kabupaten', 
      icon: <FaMapMarkerAlt />,
      gradient: 'from-blue-400 to-purple-400'
    },
    { 
      number: '25.000+', 
      label: 'Jamaah Terbantu', 
      icon: <FaHeart />,
      gradient: 'from-purple-400 to-pink-400'
    }
  ];

  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Aman & Terpercaya',
      description: 'Laporan keuangan transparan dan diawasi oleh dewan syariah',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Gotong Royong',
      description: 'Melibatkan masyarakat dalam setiap kegiatan pembersihan',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <FaStar />,
      title: 'Berkualitas',
      description: 'Standar kebersihan tinggi dengan peralatan profesional',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <FaUserTie />,
      title: 'Profesional',
      description: 'Tim yang terlatih dan berpengalaman di bidangnya',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const values = [
    "Kebersihan bagian dari iman",
    "Transparansi dalam pengelolaan",
    "Gotong royong masyarakat",
    "Professionalisme kerja",
    "Keberlanjutan program"
  ];

  const donasiLink = "https://masjidkinclong.biolinku.biz.id/donasi-masjid-kinclong-99?fbclid=PAZXh0bgNhZW0CMTEAAacvccDbJgb9KYSNp7NJLVz7WxIRhH0AZcKnZlKMI5OgBZDny6aw15N-huDo";
  const relawanLink = "https://docs.google.com/forms/d/e/1FAIpQLSeowu_0_JySR5-hmn2t7xNylLoqLEzyxJckvf029IEWxB1XgA/viewform";

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.home}>
      <Hero3D />
      
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsHeader}>
            <h2 className={styles.sectionTitle}>Pencapaian Kami</h2>
            <p className={styles.sectionSubtitle}>
              Perjalanan dedikasi kami dalam membersihkan dan memakmurkan masjid-masjid di Indonesia
            </p>
          </div>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={`${styles.statIconWrapper} ${styles[stat.gradient.replace(/\s+/g, '')]}`}>
                  {stat.icon}
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
                <div className={styles.statGlow}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.featuresSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Mengapa Memilih Kami?</h2>
            <p className={styles.sectionSubtitle}>
              Komitmen kami dalam memberikan pelayanan terbaik untuk kemasjidan Indonesia
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={`${styles.featureIcon} ${styles[feature.gradient.replace(/\s+/g, '')]}`}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.featureHover}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Visi & Misi Kami</h2>
            <p className={styles.sectionSubtitle}>
              Landasan perjuangan kami dalam mewujudkan masjid yang bersih dan nyaman
            </p>
          </div>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <div className={styles.missionMain}>
                <p className={styles.missionDescription}>
                  Yayasan Masjid Kinclong berkomitmen untuk menciptakan lingkungan masjid yang bersih, 
                  nyaman, dan kondusif untuk ibadah. Kami meyakini bahwa kebersihan masjid adalah 
                  cerminan kemuliaan umat Islam dan bagian tak terpisahkan dari ibadah itu sendiri.
                </p>
                
                <div className={styles.valuesList}>
                  <h4 className={styles.valuesTitle}>Nilai-nilai Kami:</h4>
                  <div className={styles.valuesGrid}>
                    {values.map((value, index) => (
                      <div key={index} className={styles.valueItem}>
                        <FaCheckCircle className={styles.valueIcon} />
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={styles.missionPoints}>
                <div className={styles.missionPoint}>
                  <div className={styles.pointHeader}>
                    <div className={styles.pointIcon}>🎯</div>
                    <h3 className={styles.pointTitle}>Visi</h3>
                  </div>
                  <p className={styles.pointDescription}>
                  Menumbuhkan generasi pejuang Masjid Kinclong Nasional hingga pelosok negeri.
                  </p>
                </div>
                
                <div className={styles.missionPoint}>
                  <div className={styles.pointHeader}>
                    <div className={styles.pointIcon}>🚀</div>
                    <h3 className={styles.pointTitle}>Misi</h3>
                  </div>
                  <p className={styles.pointDescription}>
                    1. Membina dan menumbuhkan generasi pejuang Masjid Kinclong yang berakhlak, peduli hingga pelosok negeri.
                    <br />
                    2. Menggerakkan gerakan cinta dan pemakmuran masjid melalui kebersihan, keindahan, serta kegiatan sosial dan dakwah umat.
                    <br />
                    3. Memperluas dakwah dan kolaborasi melalui media sosial dan teknologi digital untuk menginspirasi gerakan Masjid Kinclong hingga pelosok negeri
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.missionVisual}>
              <div className={styles.visualCard}>
                <div className={styles.visualIcon}>
                  <FaMosque />
                </div>
                <h4 className={styles.visualTitle}>Masjid Bersih</h4>
                <p className={styles.visualDescription}>
                  Menciptakan lingkungan ibadah yang bersih, rapi, dan menyenangkan
                </p>
                <div className={styles.visualStats}>
                  <div className={styles.visualStat}>
                    <span className={styles.statNumber}>99%</span>
                    <span className={styles.statLabel}>Kepuasan Jamaah</span>
                  </div>
                  <div className={styles.visualStat}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>Transparansi</span>
                  </div>
                </div>
                <div className={styles.visualFooter}>
                  <span className={styles.visualTag}>Terpercaya</span>
                  <span className={styles.visualTag}>Bersertifikat</span>
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
              <h2 className={styles.ctaTitle}>Mari Bersama Menjaga Kebersihan Masjid</h2>
              <p className={styles.ctaDescription}>
                Setiap kontribusi Anda membawa berkah dan kemaslahatan bagi umat. 
                Bergabunglah dalam misi mulia kami membersihkan dan memakmurkan masjid-masjid di Indonesia.
              </p>
              <div className={styles.ctaBenefits}>
                <div className={styles.benefitItem}>
                  <FaCheckCircle className={styles.benefitIcon} />
                  <span>Dapatkan pahala jariyah</span>
                </div>
                <div className={styles.benefitItem}>
                  <FaCheckCircle className={styles.benefitIcon} />
                  <span>Berkontribusi untuk umat</span>
                </div>
                <div className={styles.benefitItem}>
                  <FaCheckCircle className={styles.benefitIcon} />
                  <span>Laporan transparan</span>
                </div>
              </div>
            </div>
            <div className={styles.ctaActions}>
              <button 
                onClick={() => handleExternalLink(relawanLink)}
                className={styles.ctaButtonPrimary}
              >
                <FaUsers className={styles.buttonIcon} />
                <span>Gabung Menjadi Relawan</span>
                <FaExternalLinkAlt className={styles.externalIcon} />
              </button>
              <button 
                onClick={() => handleExternalLink(donasiLink)}
                className={styles.ctaButtonSecondary}
              >
                <FaHeart className={styles.buttonIcon} />
                <span>Donasi Sekarang</span>
                <FaExternalLinkAlt className={styles.externalIcon} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;