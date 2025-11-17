import React, { useState } from 'react';
import { FaSearch, FaExpand, FaPlay, FaInstagram } from 'react-icons/fa';
import styles from './Galeri.module.css';

import gambar1 from '../../assets/1.jpg';
import gambar2 from '../../assets/2.jpg';
import gambar3 from '../../assets/3.jpg';
import gambar4 from '../../assets/4.jpg';
import gambar5 from '../../assets/5.jpg';
import gambar6 from '../../assets/6.jpg';
import gambar7 from '../../assets/7.jpg';
import gambar8 from '../../assets/8.jpg';
import gambar9 from '../../assets/9.jpg';
import gambar10 from '../../assets/1.jpg';
import gambar11 from '../../assets/3.jpg';
import gambar12 from '../../assets/7.jpg';

const Galeri = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: 'Kegiatan Bersih Masjid 1',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-1',
      category: 'Pembersihan',
      image: gambar1,
      type: 'image'
    },
    {
      id: 2,
      title: 'Kegiatan Bersih Masjid 2',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-2',
      category: 'Relawan',
      image: gambar2,
      type: 'image'
    },
    {
      id: 3,
      title: 'Kegiatan Bersih Masjid 3',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-3',
      category: 'Kegiatan Sosial',
      image: gambar3,
      type: 'image'
    },
    {
      id: 4,
      title: 'Kegiatan Bersih Masjid 4',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-4',
      category: 'Pembersihan',
      image: gambar4,
      type: 'image'
    },
    {
      id: 5,
      title: 'Kegiatan Bersih Masjid 5',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-5',
      category: 'Relawan',
      image: gambar5,
      type: 'image'
    },
    {
      id: 6,
      title: 'Kegiatan Bersih Masjid 6',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-6',
      category: 'Kegiatan Sosial',
      image: gambar6,
      type: 'image'
    },
    {
      id: 7,
      title: 'Kegiatan Bersih Masjid 7',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-7',
      category: 'Pembersihan',
      image: gambar7,
      type: 'image'
    },
    {
      id: 8,
      title: 'Kegiatan Bersih Masjid 8',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-8',
      category: 'Relawan',
      image: gambar8,
      type: 'image'
    },
    {
      id: 9,
      title: 'Kegiatan Bersih Masjid 9',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-9',
      category: 'Kegiatan Sosial',
      image: gambar9,
      type: 'image'
    },
    {
      id: 10,
      title: 'Kegiatan Bersih Masjid 10',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-10',
      category: 'Pembersihan',
      image: gambar10,
      type: 'image'
    },
    {
      id: 11,
      title: 'Kegiatan Bersih Masjid 11',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-11',
      category: 'Relawan',
      image: gambar11,
      type: 'image'
    },
    {
      id: 12,
      title: 'Kegiatan Bersih Masjid 12',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-12',
      category: 'Kegiatan Sosial',
      image: gambar12,
      type: 'image'
    },
    {
      id: 13,
      title: 'Video Kegiatan Relawan',
      description: 'Video dokumentasi kegiatan relawan Masjid Kinclong di Instagram',
      category: 'Relawan',
      videoUrl: 'https://www.instagram.com/reel/DN3lUOB5OHE/?igsh=MWt4aTZnaGgyc3JtMg==',
      type: 'video',
      thumbnail: '/images/video-thumbnail.jpg' 
    }
  ];

  const categories = ['Semua', 'Pembersihan', 'Relawan', 'Kegiatan Sosial'];
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredImages = activeCategory === 'Semua' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Fungsi untuk handle external link
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Fungsi untuk render konten berdasarkan type
  const renderMediaContent = (item, isModal = false) => {
    if (item.type === 'video') {
      return (
        <div className={styles.videoContainer}>
          <div className={styles.videoPlaceholder}>
            <FaPlay className={styles.playIcon} />
            <FaInstagram className={styles.instagramIcon} />
            <div className={styles.videoOverlayText}>
              <p>Klik untuk membuka video di Instagram</p>
            </div>
          </div>
          {isModal && (
            <div className={styles.videoModalInfo}>
              <p className={styles.videoLinkNote}>
                Video tersedia di Instagram. Klik tombol di bawah untuk menonton:
              </p>
              <button 
                className={styles.instagramButton}
                onClick={() => handleExternalLink(item.videoUrl)}
              >
                <FaInstagram className={styles.instagramButtonIcon} />
                Buka di Instagram
              </button>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <img 
          src={item.image} 
          alt={item.title}
          className={isModal ? styles.modalImageActual : styles.galleryImage}
        />
      );
    }
  };

  return (
    <div className={styles.galeri}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Galeri Kegiatan</h1>
          <p className={styles.heroSubtitle}>
            Dokumentasi perjalanan kami dalam membersihkan dan memakmurkan masjid-masjid di Indonesia
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`section ${styles.filterSection}`}>
        <div className="container">
          <div className={styles.filterButtons}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          <div className={styles.galleryGrid}>
            {filteredImages.map(item => (
              <div 
                key={item.id} 
                className={`${styles.galleryItem} ${item.type === 'video' ? styles.videoItem : ''}`}
                onClick={() => openModal(item)}
              >
                <div className={styles.imageWrapper}>
                  {renderMediaContent(item)}
                  <div className={styles.imageOverlay}>
                    {item.type === 'video' ? (
                      <>
                        <FaPlay className={styles.expandIcon} />
                        <FaInstagram className={styles.instagramOverlayIcon} />
                      </>
                    ) : (
                      <FaExpand className={styles.expandIcon} />
                    )}
                  </div>
                  {item.type === 'video' && (
                    <div className={styles.videoBadge}>
                      <FaPlay className={styles.videoBadgeIcon} />
                      Video
                    </div>
                  )}
                </div>
                <div className={styles.imageInfo}>
                  <span className={styles.imageTitle}>{item.title}</span>
                  <span className={styles.imageCategory}>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <div className={`${styles.modalImage} ${selectedImage.type === 'video' ? styles.videoModal : ''}`}>
              {renderMediaContent(selectedImage, true)}
            </div>
            <div className={styles.modalInfo}>
              <h3 className={styles.modalTitle}>{selectedImage.title}</h3>
              <p className={styles.modalDescription}>{selectedImage.description}</p>
              <span className={styles.modalCategory}>{selectedImage.category}</span>
              {selectedImage.type === 'video' && (
                <div className={styles.videoActions}>
                  <button 
                    className={styles.instagramButton}
                    onClick={() => handleExternalLink(selectedImage.videoUrl)}
                  >
                    <FaInstagram className={styles.instagramButtonIcon} />
                    Tonton di Instagram
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeri;