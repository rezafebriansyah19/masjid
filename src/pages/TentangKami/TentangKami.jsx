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
  FaUserFriends,
  FaExternalLinkAlt
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
import yayasan_cita from '../../assets/yayasan_cita.jpg';

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

  // Fungsi untuk handle external link
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const teamMembers = [
    { 
      name: 'Coach Faisal Ramli', 
      position: 'CEO Yayasan Sahabat Surga', 
      bio: 'Pendiri dan penggerak utama Yayasan Sahabat Surga. Memiliki visi besar dalam memberdayakan masyarakat melalui program kebersihan masjid.',
      expertise: ['Leadership', 'Strategic Planning', 'Community Development'],
      photo: '/images/team/faisal-ramli.jpeg',
      location: 'Tanggerang',
      joinDate: '2024',
      externalLink: 'https://www.instagram.com/coachfaisalramli?igsh=MTVmYzBxMHI1NWdjNw=='
    },
    { 
      name: 'Eva Wardah', 
      position: 'PJ Masjid Kinclong Nasional & Leader MK Depok', 
      bio: 'Memimpin gerakan Masjid Kinclong secara nasional sekaligus mengkoordinasi kegiatan di Depok.',
      expertise: ['National Coordination', 'Team Management', 'Program Execution'],
      photo: '/images/team/eva-wardah.jpg',
      location: 'Depok',
      joinDate: '2024',
      externalLink: 'https://masjidkinclongdepok.biolinku.biz.id/' 
    },
    { 
      name: 'Irwandi', 
      position: 'Leader MK Pasangkayu', 
      bio: 'Menggerakkan program Masjid Kinclong di wilayah Pasangkayu dengan dedikasi tinggi.',
      expertise: ['Regional Leadership', 'Community Engagement', 'Local Coordination'],
      photo: '/images/team/Irwandi.jpg',
      location: 'Pasangkayu',
      joinDate: '2024',
      externalLink: 'https://masjidkinclongpasangkayu.biolinku.biz.id/' 
    },
    { 
      name: 'Syukri Jadas', 
      position: 'Leader MK Palu', 
      bio: 'Memimpin kegiatan pembersihan masjid di Palu dan sekitarnya dengan semangat gotong royong.',
      expertise: ['Disaster Area Management', 'Volunteer Coordination', 'Rehabilitation'],
      photo: '/images/team/syukri-jadas.jpg',
      location: 'Palu',
      joinDate: '2024',
      externalLink: 'https://masjidkinclongpalu.biolinku.biz.id/'
    },
    { 
      name: 'Irgie', 
      position: 'Leader MK Malang', 
      bio: 'Mengkoordinasi relawan dan kegiatan Masjid Kinclong di kota Malang.',
      expertise: ['Youth Engagement', 'Event Organization', 'Digital Marketing'],
      photo: '/images/team/irgie.jpg',
      location: 'Malang',
      joinDate: '2024',
      externalLink: 'https://masjidkinclongmalang.biolinku.biz.id/'
    },
    { 
      name: 'H. Maman', 
      position: 'Leader MK Karawang', 
      bio: 'Memimpin gerakan Masjid Kinclong di Karawang dengan fokus pada masjid-masjid tradisional.',
      expertise: ['Traditional Community', 'Local Wisdom', 'Sustainable Program'],
      photo: '/images/team/h-maman.jpg',
      location: 'Karawang',
      joinDate: '2024',
      externalLink: 'https://masjidkinclongkarawang.biolinku.biz.id/'
    },
    { 
      name: 'Firmansyah', 
      position: 'Leader MK Cianjur', 
      bio: 'Menggerakkan program di Cianjur dengan pendekatan kearifan lokal.',
      expertise: ['Local Adaptation', 'Cultural Approach', 'Rural Development'],
      photo: '/images/team/firmansyah.jpg',
      location: 'Cianjur',
      joinDate: '2024',
      externalLink: 'https://masjidkinclongcianjur.biolinku.biz.id/'
    },
    { 
      name: 'Nurul Hidayat', 
      position: 'Leader MK Jatinangor', 
      bio: 'Memimpin kegiatan di kawasan Jatinangor yang didominasi oleh kampus dan mahasiswa.',
      expertise: ['Campus Movement', 'Student Engagement', 'Academic Collaboration'],
      photo: '/images/team/nurul-hidayat.jpg',
      location: 'Jatinangor',
      joinDate: '2025',
      externalLink: 'https://masjidkinclongjatinangor.biolinku.biz.id/'
    },
    { 
      name: 'Farhan Maulana', 
      position: 'Leader MK Gorontalo', 
      bio: 'Mengembangkan program Masjid Kinclong di wilayah Gorontalo dengan semangat kebersamaan.',
      expertise: ['Eastern Indonesia', 'Cultural Integration', 'Remote Area'],
      photo: '/images/team/farhan-maulana.jpg',
      location: 'Gorontalo',
      joinDate: '2025',
      externalLink: 'https://masjidkinclonggorontalo.biolinku.biz.id/'
    },
    { 
      name: 'Wildan', 
      position: 'Leader MK Sukabumi', 
      bio: 'Memimpin gerakan di Sukabumi dengan fokus pada masjid-masjid bersejarah.',
      expertise: ['Heritage Conservation', 'Tourism Integration', 'Historical Sites'],
      photo: '/images/team/wildan.jpg',
      location: 'Sukabumi',
      joinDate: '2024',
      externalLink: 'https://masjidkinclongsukabumi.biolinku.biz.id/'
    },
    { 
      name: 'Fauzan Al Mumayyiz', 
      position: 'Leader MK Makassar', 
      bio: 'Mengkoordinasi kegiatan di Makassar dengan pendekatan urban community development.',
      expertise: ['Urban Development', 'Metropolitan Strategy', 'Multi-cultural'],
      photo: '/images/team/fauzan-al-mumayyiz.jpg',
      location: 'Makassar',
      joinDate: '2025',
      externalLink: 'https://masjidkinclongmakassar.biolinku.biz.id/'
    },
    { 
      name: 'Adil', 
      position: 'Leader MK Yogyakarta', 
      bio: 'Memimpin program di Yogyakarta dengan kekhasan budaya dan pendidikan.',
      expertise: ['Cultural City', 'Educational Approach', 'Student City'],
      photo: '/images/team/adil.jpg',
      location: 'Yogyakarta',
      joinDate: '2024',
      externalLink: 'https://masjidkinclongyogyakarta.biolinku.biz.id/'
    },
    { 
      name: 'Ade Faisal', 
      position: 'Leader MK Garut', 
      bio: 'Menggerakkan kegiatan di Garut dengan fokus pada masjid-masjid pedesaan.',
      expertise: ['Rural Development', 'Agricultural Community', 'Traditional Values'],
      photo: '/images/team/ade-faisal.jpg',
      location: 'Garut',
      joinDate: '2024',
      externalLink: 'https://masjidkinclonggarut.biolinku.biz.id/'
    },
    { 
      name: 'Ilham', 
      position: 'Leader MK Prabumulih', 
      bio: 'Memimpin program di Prabumulih dengan semangat perubahan positif.',
      expertise: ['Small City Development', 'Community Mobilization', 'Local Innovation'],
      photo: '/images/team/ilham.jpg',
      location: 'Prabumulih',
      joinDate: '2025',
      externalLink: 'https://masjidkinclongprabumulih.biolinku.biz.id/'
    },
    { 
      name: 'Fahril', 
      position: 'Leader MK Klaten', 
      bio: 'Mengkoordinasi kegiatan Masjid Kinclong di Klaten dan sekitarnya.',
      expertise: ['Central Java', 'Traditional Community', 'Sustainable Practice'],
      photo: '/images/team/fahril.jpg',
      location: 'Klaten',
      joinDate: '2025',
      externalLink: 'https://masjidkinclongklaten.biolinku.biz.id/'
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
    { name: 'Pejuang Masjid Kinclong', type: 'Pejuang', logo: Logo1, externalLink: "https://sahabatmasjid.biolinku.biz.id/" },
    { name: 'Laz Abulyatama Indonesia', type: 'Lembaga Zakat Nasional', logo: Logo2, externalLink: 'https://www.instagram.com/abulyatama.indonesia?igsh=bWZld3IzMnhpNWxt' },
    { name: 'WPI', type: 'Wakaf Peradaban', logo: Logo3, externalLink: 'https://www.instagram.com/wakafperadaban?igsh=MW8wNWJraTEzbTdzMw==' },
    { name: 'Keluarga 3000', type: 'Donatur', logo: Logo4, externalLink: 'https://bit.ly/Keluarga3000'},
    { name: 'Sahabat Surga', type: 'Yayasan', logo: Logo5, externalLink: 'https://www.instagram.com/yayasansahabatsurga?igsh=MW81ZHlmam5uNzE2Mw==' },
    { name: 'Miracle Gold', type: 'Mitra Strategis', logo: Logo6, externalLink: 'https://www.instagram.com/miraclegold.official?igsh=MTB6aGpwYzUwd2lrbQ==' },
    { name: 'RQ PPA', type: 'Pendidikan', logo: Logo7, externalLink : 'https://www.instagram.com/rumah.quran.ppa?igsh=MWFwancxOXRvNmV1eA==' },
    { name: 'Sedekah Listrik', type: 'Program', logo: Logo8, externalLink: 'https://cahayapelosoknegeri.biolinku.biz.id/' },
    { name: 'Yayasan Cita Amanat Martadiredja', type: 'Yayasan', logo: yayasan_cita, externalLink: 'https://citaamanatmartadiredja.id' },
  ];

  const milestones = [
    { year: '2024', event: 'Inisiasi Program', description: 'Masjid Konclong resmi berdiri tanggal 1 Juni 2024' },
    { year: '2025', event: 'Program Nasional', description: 'Meluncurkan program masjid kinclong Nasional tersebar di 15 kota' },
    { year: '2025', event: 'Ekspansi Duta Masjid Kinclong', description: 'Menjaring duta dari berbagai daerah' },
    { year: '2025', event: 'Digital Platform', description: 'Meluncurkan platform digital' },
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

  // Fungsi untuk handle klik foto member
  const handleMemberPhotoClick = (member) => {
    if (member.externalLink) {
      handleExternalLink(member.externalLink);
    }
  };

  // Fungsi untuk handle klik partner logo
  const handlePartnerClick = (partner) => {
    if (partner.externalLink) {
      handleExternalLink(partner.externalLink);
    }
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
                <div className={styles.statNumber}>1+</div>
                <div className={styles.statLabel}>Tahun Pengalaman</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>15</div>
                <div className={styles.statLabel}>Kota/Kabupaten</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>30+</div>
                <div className={styles.statLabel}>Duta Aktif</div>
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
                    <span>2000+ Masjid dibersihkan</span>
                  </div>
                  <div className={styles.achievementItem}>
                    <FaCheckCircle className={styles.achievementCheck} />
                    <span>30+ Duta aktif</span>
                  </div>
                  <div className={styles.achievementItem}>
                    <FaCheckCircle className={styles.achievementCheck} />
                    <span>15 Kota/Kabupaten</span>
                  </div>
                  <div className={styles.achievementItem}>
                    <FaCheckCircle className={styles.achievementCheck} />
                    <span>2000+ Jamaah terbantu</span>
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
                  <div 
                    className={`${styles.memberPhotoContainer} ${member.externalLink ? styles.clickablePhoto : ''}`}
                    onClick={() => handleMemberPhotoClick(member)}
                  >
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
                    {member.externalLink && (
                      <div className={styles.externalLinkIndicator}>
                        <FaExternalLinkAlt />
                      </div>
                    )}
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
              <div 
                key={index} 
                className={`${styles.partnerCard} ${partner.externalLink ? styles.clickablePartner : ''}`}
                onClick={() => handlePartnerClick(partner)}
              >
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
                  {partner.externalLink && (
                    <div className={styles.partnerExternalLinkIndicator}>
                    </div>
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