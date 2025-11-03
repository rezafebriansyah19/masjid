import React, { useState, useRef, useEffect } from 'react';
import { 
  FaHeart, 
  FaHandsHelping, 
  FaUsers, 
  FaMosque, 
  FaShieldAlt,
  FaStar,
  FaAward,
  FaRocket,
  FaQuoteLeft,
  FaCheckCircle,
  FaLinkedin,
  FaTwitter,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends
} from 'react-icons/fa';
import styles from './TentangKami.module.css';

import Logo1 from '../../assets/logo1.png';
import Logo2 from '../../assets/logo2.png';
import Logo3 from '../../assets/logo3.png';
import Logo4 from '../../assets/logo4.png';
import Logo5 from '../../assets/logo5.png';
import Logo6 from '../../assets/logo6.png';
import Logo7 from '../../assets/logo7.png';
import Logo8 from '../../assets/logo8.png';

const TentangKami = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    { 
      name: 'Coach Faisal Ramli', 
      position: 'CEO Yayasan Sahabat Surga', 
      bio: 'Pendiri dan penggerak utama Yayasan Sahabat Surga. Memiliki visi besar dalam memberdayakan masyarakat melalui program kebersihan masjid.',
      expertise: ['Leadership', 'Strategic Planning', 'Community Development'],
      photo: '/images/team/faisal-ramli.jpeg',
      location: 'Jakarta',
      joinDate: '2020'
    },
    { 
      name: 'Eva Wardah', 
      position: 'PJ Masjid Kinclong Nasional & Leader MK Depok', 
      bio: 'Memimpin gerakan Masjid Kinclong secara nasional sekaligus mengkoordinasi kegiatan di Depok.',
      expertise: ['National Coordination', 'Team Management', 'Program Execution'],
      photo: '/images/team/eva-wardah.jpg',
      location: 'Depok',
      joinDate: '2021'
    },
    { 
      name: 'Irwandi', 
      position: 'Leader MK Pasangkayu', 
      bio: 'Menggerakkan program Masjid Kinclong di wilayah Pasangkayu dengan dedikasi tinggi.',
      expertise: ['Regional Leadership', 'Community Engagement', 'Local Coordination'],
      photo: '/images/team/Irwandi.jpg',
      location: 'Pasangkayu',
      joinDate: '2021'
    },
    { 
      name: 'Syukri Jadas', 
      position: 'Leader MK Palu', 
      bio: 'Memimpin kegiatan pembersihan masjid di Palu dan sekitarnya dengan semangat gotong royong.',
      expertise: ['Disaster Area Management', 'Volunteer Coordination', 'Rehabilitation'],
      photo: '/images/team/syukri-jadas.jpg',
      location: 'Palu',
      joinDate: '2021'
    },
    { 
      name: 'Irgie', 
      position: 'Leader MK Malang', 
      bio: 'Mengkoordinasi relawan dan kegiatan Masjid Kinclong di kota Malang.',
      expertise: ['Youth Engagement', 'Event Organization', 'Digital Marketing'],
      photo: '/images/team/irgie.jpg',
      location: 'Malang',
      joinDate: '2022'
    },
    { 
      name: 'H. Maman', 
      position: 'Leader MK Karawang', 
      bio: 'Memimpin gerakan Masjid Kinclong di Karawang dengan fokus pada masjid-masjid tradisional.',
      expertise: ['Traditional Community', 'Local Wisdom', 'Sustainable Program'],
      photo: '/images/team/h-maman.jpg',
      location: 'Karawang',
      joinDate: '2021'
    },
    { 
      name: 'Firmansyah', 
      position: 'Leader MK Cianjur', 
      bio: 'Menggerakkan program di Cianjur dengan pendekatan kearifan lokal.',
      expertise: ['Local Adaptation', 'Cultural Approach', 'Rural Development'],
      photo: '/images/team/firmansyah.jpg',
      location: 'Cianjur',
      joinDate: '2022'
    },
    { 
      name: 'Nurul Hidayat', 
      position: 'Leader MK Jatinangor', 
      bio: 'Memimpin kegiatan di kawasan Jatinangor yang didominasi oleh kampus dan mahasiswa.',
      expertise: ['Campus Movement', 'Student Engagement', 'Academic Collaboration'],
      photo: '/images/team/nurul-hidayat.jpg',
      location: 'Jatinangor',
      joinDate: '2022'
    },
    { 
      name: 'Farhan Maulana', 
      position: 'Leader MK Gorontalo', 
      bio: 'Mengembangkan program Masjid Kinclong di wilayah Gorontalo dengan semangat kebersamaan.',
      expertise: ['Eastern Indonesia', 'Cultural Integration', 'Remote Area'],
      photo: '/images/team/farhan-maulana.jpg',
      location: 'Gorontalo',
      joinDate: '2023'
    },
    { 
      name: 'Wildan', 
      position: 'Leader MK Sukabumi', 
      bio: 'Memimpin gerakan di Sukabumi dengan fokus pada masjid-masjid bersejarah.',
      expertise: ['Heritage Conservation', 'Tourism Integration', 'Historical Sites'],
      photo: '/images/team/wildan.jpg',
      location: 'Sukabumi',
      joinDate: '2022'
    },
    { 
      name: 'Fauzan Al Mumayyiz', 
      position: 'Leader MK Makassar', 
      bio: 'Mengkoordinasi kegiatan di Makassar dengan pendekatan urban community development.',
      expertise: ['Urban Development', 'Metropolitan Strategy', 'Multi-cultural'],
      photo: '/images/team/fauzan-al-mumayyiz.jpg',
      location: 'Makassar',
      joinDate: '2023'
    },
    { 
      name: 'Adil', 
      position: 'Leader MK Yogyakarta', 
      bio: 'Memimpin program di Yogyakarta dengan kekhasan budaya dan pendidikan.',
      expertise: ['Cultural City', 'Educational Approach', 'Student City'],
      photo: '/images/team/adil.jpg',
      location: 'Yogyakarta',
      joinDate: '2022'
    },
    { 
      name: 'Ade Faisal', 
      position: 'Leader MK Garut', 
      bio: 'Menggerakkan kegiatan di Garut dengan fokus pada masjid-masjid pedesaan.',
      expertise: ['Rural Development', 'Agricultural Community', 'Traditional Values'],
      photo: '/images/team/ade-faisal.jpg',
      location: 'Garut',
      joinDate: '2023'
    },
    { 
      name: 'Ilham', 
      position: 'Leader MK Prabumulih', 
      bio: 'Memimpin program di Prabumulih dengan semangat perubahan positif.',
      expertise: ['Small City Development', 'Community Mobilization', 'Local Innovation'],
      photo: '/images/team/ilham.jpg',
      location: 'Prabumulih',
      joinDate: '2023'
    },
    { 
      name: 'Fahril', 
      position: 'Leader MK Klaten', 
      bio: 'Mengkoordinasi kegiatan Masjid Kinclong di Klaten dan sekitarnya.',
      expertise: ['Central Java', 'Traditional Community', 'Sustainable Practice'],
      photo: '/images/team/fahril.jpg',
      location: 'Klaten',
      joinDate: '2023'
    },
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: 'Ikhlas & Tulus',
      description: 'Semua kegiatan kami lakukan dengan penuh keikhlasan untuk mencari ridha Allah SWT.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Gotong Royong',
      description: 'Kami percaya pada kekuatan gotong royong dalam mewujudkan perubahan positif.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaUsers />,
      title: 'Pemberdayaan',
      description: 'Memberdayakan masyarakat melalui program yang berkelanjutan dan bermakna.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaMosque />,
      title: 'Kebersihan Iman',
      description: 'Kebersihan adalah bagian dari iman dan wujud kecintaan kita pada rumah Allah.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Amanah',
      description: 'Menjaga amanah dengan transparansi dalam setiap kegiatan dan pengelolaan dana.',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: <FaStar />,
      title: 'Profesional',
      description: 'Bekerja dengan standar profesional tertinggi untuk hasil yang optimal.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const partners = [
    { name: 'Pejuang Masjid Kinclong', type: 'Pejuang', logo: Logo1 },
    { name: 'YAI', type: 'Lembaga Sosial', logo: Logo2 },
    { name: 'WPI', type: 'Lembaga Sosial', logo: Logo3 },
    { name: 'Keluarga 3000', type: 'Kemanusiaan', logo: Logo4 },
    { name: 'Sahabat Surga', type: 'Internasional', logo: Logo5 },
    { name: 'Miracle Gold', type: 'Mitra Strategis', logo: Logo6 },
    { name: 'RQ PPA', type: 'Yayasan', logo: Logo7 },
    { name: 'Sedekah Listrik', type: 'Corporate', logo: Logo8 },
  ];

  const milestones = [
    { year: '2020', event: 'Pendirian Yayasan', description: 'Yayasan resmi berdiri dengan visi membersihkan masjid' },
    { year: '2021', event: 'Program Nasional', description: 'Meluncurkan program bersih masjid di 10 kota' },
    { year: '2022', event: 'Ekspansi Relawan', description: 'Menjaring 1,000+ relawan dari berbagai daerah' },
    { year: '2023', event: 'Penghargaan', description: 'Mendapatkan penghargaan lembaga sosial terbaik' },
    { year: '2024', event: 'Digital Platform', description: 'Meluncurkan platform digital untuk donasi online' },
  ];

  const slidesToShow = 6; 
  const totalSlides = Math.ceil(teamMembers.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleMembers = () => {
    const startIndex = currentSlide * slidesToShow;
    return teamMembers.slice(startIndex, startIndex + slidesToShow);
  };

  return (
    <div className={styles.tentangKami} ref={sectionRef}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Tentang <span className={styles.highlight}>Masjid Kinclong</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Bergerak bersama membersihkan dan memakmurkan masjid-masjid di seluruh Indonesia 
              melalui program yang berkelanjutan dan penuh makna.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>4+</div>
                <div className={styles.statLabel}>Tahun Pengalaman</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>15</div>
                <div className={styles.statLabel}>Kota/Kabupaten</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>1,500+</div>
                <div className={styles.statLabel}>Relawan Aktif</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </section>

      {/* Sejarah Section */}
      <section className={`section ${styles.sejarahSection} ${isVisible ? styles.visible : ''}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Sejarah Perjalanan Kami</h2>
            <p className={styles.sectionSubtitle}>
              Dari sebuah keprihatinan menjadi gerakan nasional yang menginspirasi
            </p>
          </div>
          <div className={styles.sejarahContent}>
            <div className={styles.sejarahText}>
              <div className={styles.timeline}>
                {milestones.map((milestone, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                      <div className={styles.timelineDot}></div>
                      {index < milestones.length - 1 && <div className={styles.timelineLine}></div>}
                    </div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineYear}>{milestone.year}</div>
                      <h3 className={styles.timelineEvent}>{milestone.event}</h3>
                      <p className={styles.timelineDescription}>{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={styles.missionVision}>
                <div className={styles.missionCard}>
                  <div className={styles.cardHeader}>
                    <FaRocket className={styles.cardIcon} />
                    <h3 className={styles.cardTitle}>Visi Kami</h3>
                  </div>
                  <p className={styles.cardText}>
                    Menumbuhkan generasi pejuang Masjid Kinclong Nasional hingga pelosok negeri.
                  </p>
                </div>
                
                <div className={styles.missionCard}>
                  <div className={styles.cardHeader}>
                    <FaAward className={styles.cardIcon} />
                    <h3 className={styles.cardTitle}>Misi Kami</h3>
                  </div>
                  <p className={styles.cardText}>
                    1. Membina dan menumbuhkan generasi pejuang Masjid Kinclong yang berakhlak, peduli hingga pelosok negeri.
                      <br />
                    2. Menggerakkan gerakan cinta dan pemakmuran masjid melalui kebersihan, keindahan, serta kegiatan sosial dan dakwah umat.
                      <br />
                    3. Memperluas dakwah dan kolaborasi melalui media sosial dan teknologi digital untuk menginspirasi gerakan Masjid Kinclong higga pelosok negeri
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.sejarahVisual}>
              <div className={styles.achievementCard}>
                <div className={styles.achievementHeader}>
                  <FaAward className={styles.achievementIcon} />
                  <h3 className={styles.achievementTitle}>Pencapaian Kami</h3>
                </div>
                <div className={styles.achievementList}>
                  <div className={styles.achievementItem}>
                    <FaCheckCircle className={styles.achievementCheck} />
                    <span>250+ Masjid dibersihkan</span>
                  </div>
                  <div className={styles.achievementItem}>
                    <FaCheckCircle className={styles.achievementCheck} />
                    <span>1,500+ Relawan aktif</span>
                  </div>
                  <div className={styles.achievementItem}>
                    <FaCheckCircle className={styles.achievementCheck} />
                    <span>15 Kota/Kabupaten</span>
                  </div>
                  <div className={styles.achievementItem}>
                    <FaCheckCircle className={styles.achievementCheck} />
                    <span>25,000+ Jamaah terbantu</span>
                  </div>
                  <div className={styles.achievementItem}>
                    <FaCheckCircle className={styles.achievementCheck} />
                    <span>10+ Penghargaan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-nilai Section */}
      <section className={`section ${styles.valuesSection} ${isVisible ? styles.visible : ''}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nilai-nilai Inti Kami</h2>
            <p className={styles.sectionSubtitle}>
              Prinsip-prinsip yang menjadi landasan setiap langkah dan keputusan kami
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={`${styles.valueCard} ${styles[`delay-${index}`]}`}>
                <div className={`${styles.valueIcon} ${styles[value.gradient.replace(/\s+/g, '')]}`}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
                <div className={styles.valueHover}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Section dengan Slider */}
      <section className={`section ${styles.teamSection} ${isVisible ? styles.visible : ''}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Struktur Kepengurusan</h2>
            <p className={styles.sectionSubtitle}>
              Tim profesional yang berdedikasi penuh untuk kemajuan yayasan
            </p>
          </div>

          <div className={styles.teamSlider}>
            <button 
              className={`${styles.sliderButton} ${styles.sliderButtonPrev}`}
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <FaChevronLeft />
            </button>

            <div className={styles.teamGrid}>
              {getVisibleMembers().map((member, index) => (
                <div key={index} className={styles.teamCard}>
                  <div className={styles.memberPhotoContainer}>
                    <div className={styles.memberPhoto}>
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className={styles.memberImage}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className={styles.photoPlaceholder}>
                        <FaUserFriends />
                      </div>
                    </div>
                    <div className={styles.photoOverlay}></div>
                  </div>
                  
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberPosition}>{member.position}</p>
                    
                    <div className={styles.memberMeta}>
                      <div className={styles.memberLocation}>
                        <FaMapMarkerAlt className={styles.metaIcon} />
                        <span>{member.location}</span>
                      </div>
    
                    </div>
                    
                    <p className={styles.memberBio}>{member.bio}</p>
                    
                    <div className={styles.expertiseList}>
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className={styles.expertiseTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className={`${styles.sliderButton} ${styles.sliderButtonNext}`}
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Slider Dots */}
          <div className={styles.sliderDots}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`${styles.sliderDot} ${currentSlide === index ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Slide Info */}
          <div className={styles.slideInfo}>
            Menampilkan {currentSlide * slidesToShow + 1}-{Math.min((currentSlide + 1) * slidesToShow, teamMembers.length)} dari {teamMembers.length} pengurus
          </div>
        </div>
      </section>

      {/* Mitra Section */}
      <section className={`section ${styles.partnersSection} ${isVisible ? styles.visible : ''}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Mitra & Jaringan Kami</h2>
            <p className={styles.sectionSubtitle}>
              Berkolaborasi dengan berbagai institusi untuk dampak yang lebih luas
            </p>
          </div>
          <div className={styles.partnersGrid}>
            {partners.map((partner, index) => (
              <div key={index} className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className={styles.partnerImage}
                    />
                  ) : (
                    <FaShieldAlt className={styles.partnerPlaceholder} />
                  )}
                </div>
                <div className={styles.partnerInfo}>
                  <h3 className={styles.partnerName}>{partner.name}</h3>
                  <span className={styles.partnerType}>{partner.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={`section ${styles.quoteSection} ${isVisible ? styles.visible : ''}`}>
        <div className="container">
          <div className={styles.quoteCard}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <blockquote className={styles.quoteText}>
              "Kebersihan adalah sebagian dari iman. Membersihkan masjid bukan hanya tentang 
              fisik bangunan, tetapi juga tentang membersihkan hati dan menyucikan niat 
              untuk ibadah yang lebih khusyuk."
            </blockquote>
            <div className={styles.quoteAuthor}>
              <div className={styles.authorInfo}>
                <strong>Coach Faisal Ramli</strong>
                <span>CEO Yayasan Sahabat Surga</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;