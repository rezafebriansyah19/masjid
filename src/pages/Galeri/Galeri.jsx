import React, { useState } from 'react';
import { FaSearch, FaExpand } from 'react-icons/fa';
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
      image: gambar1
    },
    {
      id: 2,
      title: 'Kegiatan Bersih Masjid 2',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-2',
      category: 'Relawan',
      image: gambar2
    },
    {
      id: 3,
      title: 'Kegiatan Bersih Masjid 3',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-3',
      category: 'Kegiatan Sosial',
      image: gambar3
    },
    {
      id: 4,
      title: 'Kegiatan Bersih Masjid 4',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-4',
      category: 'Pembersihan',
      image: gambar4
    },
    {
      id: 5,
      title: 'Kegiatan Bersih Masjid 5',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-5',
      category: 'Relawan',
      image: gambar5
    },
    {
      id: 6,
      title: 'Kegiatan Bersih Masjid 6',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-6',
      category: 'Kegiatan Sosial',
      image: gambar6
    },
    {
      id: 7,
      title: 'Kegiatan Bersih Masjid 7',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-7',
      category: 'Pembersihan',
      image: gambar7
    },
    {
      id: 8,
      title: 'Kegiatan Bersih Masjid 8',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-8',
      category: 'Relawan',
      image: gambar8
    },
    {
      id: 9,
      title: 'Kegiatan Bersih Masjid 9',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-9',
      category: 'Kegiatan Sosial',
      image: gambar9
    },
    {
      id: 10,
      title: 'Kegiatan Bersih Masjid 10',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-10',
      category: 'Pembersihan',
      image: gambar10
    },
    {
      id: 11,
      title: 'Kegiatan Bersih Masjid 11',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-11',
      category: 'Relawan',
      image: gambar11
    },
    {
      id: 12,
      title: 'Kegiatan Bersih Masjid 12',
      description: 'Foto dokumentasi kegiatan pembersihan masjid ke-12',
      category: 'Kegiatan Sosial',
      image: gambar12
    }
  ];

  const categories = ['Semua', 'Pembersihan', 'Relawan', 'Kegiatan Sosial'];
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredImages = activeCategory === 'Semua' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className={styles.galleryItem}
                onClick={() => openModal(image)}
              >
                <div className={styles.imageWrapper}>
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <FaExpand className={styles.expandIcon} />
                  </div>
                </div>
                <div className={styles.imageInfo}>
                  <span className={styles.imageTitle}>{image.title}</span>
                  <span className={styles.imageCategory}>{image.category}</span>
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
            <div className={styles.modalImage}>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className={styles.modalImageActual}
              />
            </div>
            <div className={styles.modalInfo}>
              <h3 className={styles.modalTitle}>{selectedImage.title}</h3>
              <p className={styles.modalDescription}>{selectedImage.description}</p>
              <span className={styles.modalCategory}>{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeri;