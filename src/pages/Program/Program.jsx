import React, { useState } from 'react';
import { 
  FaBroom, 
  FaUsers, 
  FaHandHoldingHeart, 
  FaSeedling, 
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaUserPlus,
  FaRocket,
  FaStar,
  FaAward
} from 'react-icons/fa';
import ProgramCard from '../../components/ProgramCard/ProgramCard.jsx';
import styles from './Program.module.css';

const Program = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      title: 'Program Bersih Masjid',
      description: 'Program rutin pembersihan dan perawatan masjid-masjid di berbagai daerah dengan melibatkan relawan dan masyarakat setempat untuk menciptakan lingkungan ibadah yang bersih dan nyaman.',
      icon: <FaBroom />,
      features: [
        'Pembersihan rutin mingguan/bulanan',
        'Perawatan fasilitas masjid',
        'Penataan lingkungan masjid',
        'Edukasi kebersihan bagi jamaah',
        'Standar kebersihan profesional',
        'Peralatan kebersihan lengkap'
      ],
      stats: { masjid: '2000+', relawan: '30+', kota: '15+' },
      gradient: 'from-green-500 to-emerald-500',
      duration: '2-4 jam/sesi',
      location: 'Seluruh Indonesia'
    },
    {
      title: 'Pemberdayaan Relawan',
      description: 'Melatih dan memberdayakan relawan dengan berbagai keterampilan untuk mendukung program kebersihan masjid dan pengembangan diri.',
      icon: <FaUsers />,
      features: [
        'Pelatihan manajemen kebersihan',
        'Pengembangan soft skills',
        'Jaringan relawan nasional',
        'Program kepemimpinan',
        'Sertifikasi relawan',
        'Kesempatan karir sosial'
      ],
      stats: { alumni: '1,500+', pelatihan: '100+', sertifikat: '95%' },
      gradient: 'from-blue-500 to-cyan-500',
      duration: 'Program 6 bulan',
      location: 'Online & Offline'
    },
    {
      title: 'Donasi & Support',
      description: 'Program penggalangan dana dan bantuan untuk mendukung operasional pembersihan masjid dan kegiatan sosial dengan transparansi penuh.',
      icon: <FaHandHoldingHeart />,
      features: [
        'Donasi rutin bulanan',
        'Bantuan peralatan kebersihan',
        'Sponsorship program',
        'Transparansi laporan keuangan',
        'Program wakaf',
        'Laporan real-time donasi'
      ],
      stats: { donatur: '5,000+', dana: '2.5M+', transparansi: '100%' },
      gradient: 'from-purple-500 to-pink-500',
      duration: 'Terus menerus',
      location: 'Platform Digital'
    },
    {
      title: 'Kegiatan Sosial',
      description: 'Berbagai kegiatan sosial yang mendukung pemberdayaan masyarakat sekitar masjid dan penguatan ukhuwah islamiyah.',
      icon: <FaSeedling />,
      features: [
        'Bakti sosial masyarakat',
        'Program edukasi anak',
        'Bantuan untuk mustahik',
        'Kegiatan ramadan & hari besar',
        'Santunan anak yatim',
        'Program beasiswa'
      ],
      stats: { penerima: '25,000+', kegiatan: '300+', daerah: '75+' },
      gradient: 'from-orange-500 to-amber-500',
      duration: 'Bervariasi',
      location: 'Komunitas Lokal'
    }
  ];

  const benefits = [
    {
      icon: <FaAward />,
      title: 'Sertifikasi',
      description: 'Dapatkan sertifikat pengakuan atas kontribusi Anda'
    },
    {
      icon: <FaStar />,
      title: 'Pengembangan Diri',
      description: 'Kesempatan mengembangkan skill dan jaringan'
    },
    {
      icon: <FaRocket />,
      title: 'Karier Sosial',
      description: 'Peluang berkarir di bidang sosial dan kemanusiaan'
    },
    {
      icon: <FaUserPlus />,
      title: 'Jaringan Luas',
      description: 'Bergabung dengan komunitas relawan nasional'
    }
  ];

  return (
    <div className={styles.program}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Program <span className={styles.highlight}>Unggulan</span> Kami
            </h1>
            <p className={styles.heroSubtitle}>
              Berbagai program terstruktur untuk mewujudkan masjid yang bersih, 
              memberdayakan masyarakat, dan menebar kebaikan berkelanjutan
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>4</div>
                <div className={styles.statLabel}>Program Utama</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>150+</div>
                <div className={styles.statLabel}>Masjid Terbantu</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>200+</div>
                <div className={styles.statLabel}>Relawan Aktif</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </section>

      <section className={styles.navigationSection}>
        <div className="container">
          <div className={styles.programNavigation}>
            {programs.map((program, index) => (
              <button
                key={index}
                className={`${styles.navButton} ${activeProgram === index ? styles.active : ''}`}
                onClick={() => setActiveProgram(index)}
              >
                <div className={styles.navIcon}>{program.icon}</div>
                <span className={styles.navText}>{program.title}</span>
                <div className={styles.navIndicator}></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.featuredContent}>
            <div className={styles.featuredInfo}>
              <div className={styles.programHeader}>
                <div className={`${styles.programIcon} ${styles[programs[activeProgram].gradient.replace(/\s+/g, '')]}`}>
                  {programs[activeProgram].icon}
                </div>
                <div>
                  <h2 className={styles.programTitle}>{programs[activeProgram].title}</h2>
                  <div className={styles.programMeta}>
                    <div className={styles.metaItem}>
                      <FaClock className={styles.metaIcon} />
                      <span>{programs[activeProgram].duration}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FaMapMarkerAlt className={styles.metaIcon} />
                      <span>{programs[activeProgram].location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className={styles.programDescription}>
                {programs[activeProgram].description}
              </p>

              <div className={styles.programStats}>
                {Object.entries(programs[activeProgram].stats).map(([key, value]) => (
                  <div key={key} className={styles.statItem}>
                    <div className={styles.statValue}>{value}</div>
                    <div className={styles.statLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                  </div>
                ))}
              </div>

              <div className={styles.featuresList}>
                <h3 className={styles.featuresTitle}>Fitur Program:</h3>
                <div className={styles.featuresGrid}>
                  {programs[activeProgram].features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <FaCheckCircle className={styles.featureIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.actionButtons}>
                <button className={styles.primaryButton}>
                  <span>Daftar Sekarang</span>
                  <FaArrowRight className={styles.buttonIcon} />
                </button>
                <button className={styles.secondaryButton}>
                  <span>Info Detail</span>
                </button>
              </div>
            </div>

            <div className={styles.featuredVisual}>
              <div className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <h3 className={styles.visualTitle}>Impact Story</h3>
                  <div className={styles.impactBadge}>Success</div>
                </div>
                <div className={styles.visualContent}>
                  <div className={styles.impactStats}>
                    <div className={styles.impactStat}>
                      <div className={styles.impactNumber}>98%</div>
                      <div className={styles.impactLabel}>Kepuasan Jamaah</div>
                    </div>
                    <div className={styles.impactStat}>
                      <div className={styles.impactNumber}>4.9/5</div>
                      <div className={styles.impactLabel}>Rating Program</div>
                    </div>
                  </div>
                  <p className={styles.impactDescription}>
                    Program ini telah mengubah banyak masjid menjadi tempat ibadah 
                    yang lebih bersih, nyaman, dan representatif bagi jamaah.
                  </p>
                  <div className={styles.testimonial}>
                    <div className={styles.quoteIcon}>"</div>
                    <p className={styles.testimonialText}>
                      Berkat program ini, masjid kami sekarang menjadi tempat yang 
                      sangat nyaman untuk beribadah dan bermasyarakat.
                    </p>
                    <div className={styles.testimonialAuthor}>
                      <strong>Pak Ahmad</strong>
                      <span>Takmir Masjid Al-Ikhlas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Programs Grid */}
      <section className={`section ${styles.programsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Semua Program Kami</h2>
            <p className={styles.sectionSubtitle}>
              Jelajahi berbagai program unggulan yang kami sediakan untuk kemasjidan Indonesia
            </p>
          </div>
          <div className={styles.programsGrid}>
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                icon={program.icon}
                features={program.features}
                gradient={program.gradient}
                stats={program.stats}
                isActive={activeProgram === index}
                onSelect={() => setActiveProgram(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Manfaat Bergabung</h2>
            <p className={styles.sectionSubtitle}>
              Keuntungan yang akan Anda dapatkan ketika bergabung dengan program kami
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className={`section ${styles.joinSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Cara Bergabung</h2>
            <p className={styles.sectionSubtitle}>
              Ikuti langkah-langkah mudah berikut untuk menjadi bagian dari perubahan
            </p>
          </div>
          <div className={styles.joinSteps}>
            <div className={styles.joinStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Registrasi</h3>
                <p className={styles.stepDescription}>
                  Isi formulir pendaftaran online atau datang langsung ke kantor kami
                </p>
              </div>
              <div className={styles.stepConnector}></div>
            </div>
            <div className={styles.joinStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Orientasi</h3>
                <p className={styles.stepDescription}>
                  Ikuti sesi orientasi untuk memahami visi, misi, dan program kami
                </p>
              </div>
              <div className={styles.stepConnector}></div>
            </div>
            <div className={styles.joinStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Aksi Nyata</h3>
                <p className={styles.stepDescription}>
                  Mulai berpartisipasi dalam program dan kegiatan yang sesuai dengan minat Anda
                </p>
              </div>
              <div className={styles.stepConnector}></div>
            </div>
            <div className={styles.joinStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Pengembangan</h3>
                <p className={styles.stepDescription}>
                  Tingkatkan kontribusi dan ambil peran lebih besar dalam organisasi
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Siap Membuat Perubahan?</h3>
              <p className={styles.ctaDescription}>
                Bergabunglah dengan ribuan relawan lainnya dan jadilah bagian dari 
                gerakan membersihkan masjid-masjid di Indonesia.
              </p>
              <div className={styles.ctaButtons}>
                <button className={styles.ctaButtonPrimary}>
                  <FaUserPlus className={styles.buttonIcon} />
                  <span>Daftar Sekarang</span>
                  <FaArrowRight className={styles.arrowIcon} />
                </button>
                <button className={styles.ctaButtonSecondary}>
                  <span>Lihat Jadwal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;