import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles, Stars, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import styles from './Hero3D.module.css';

const MosqueModel = () => {
  const mosqueRef = useRef();
  const domeRef = useRef();
  const minaretRefs = [useRef(), useRef(), useRef(), useRef()];

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (mosqueRef.current) {
      mosqueRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
    }
    if (domeRef.current) {
      domeRef.current.position.y = Math.sin(time * 0.3) * 0.02 + 1.2;
    }
    
    // Animate minarets
    minaretRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.position.y = Math.sin(time * 0.4 + index) * 0.03 + 0.8;
      }
    });
  });

  return (
    <group ref={mosqueRef}>
      {/* Main Platform */}
      <mesh position={[0, -0.3, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial 
          color="#2c5530" 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Main Building Base */}
      <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.8, 1.8]} />
        <meshStandardMaterial 
          color="#1b5e20" 
          roughness={0.4} 
          metalness={0.3}
        />
      </mesh>

      {/* Main Building Upper */}
      <mesh position={[0, 0.7, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.6, 1.5]} />
        <meshStandardMaterial 
          color="#2e7d32" 
          roughness={0.3} 
          metalness={0.4}
        />
      </mesh>

      {/* Architectural Details - Stripes */}
      <mesh position={[0, 0.4, 0.91]} castShadow>
        <boxGeometry args={[2.3, 0.05, 0.02]} />
        <meshStandardMaterial color="#c8a951" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.5, 0.91]} castShadow>
        <boxGeometry args={[2.3, 0.05, 0.02]} />
        <meshStandardMaterial color="#c8a951" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Main Dome */}
      <mesh ref={domeRef} position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.7, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial 
          color="#388e3c" 
          roughness={0.2} 
          metalness={0.5}
          emissive="#1b5e20"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Dome Gold Finial */}
      <mesh position={[0, 1.9, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.05, 0.3, 16]} />
        <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.1} />
      </mesh>
      <mesh position={[0, 2.05, 0]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.1} />
      </mesh>

      {/* Minarets */}
      {[
        { position: [-1.8, 0.8, 1.2] },
        { position: [1.8, 0.8, 1.2] },
        { position: [-1.8, 0.8, -1.2] },
        { position: [1.8, 0.8, -1.2] }
      ].map((minaret, index) => (
        <group key={index} position={minaret.position}>
          <mesh ref={minaretRefs[index]} castShadow>
            <cylinderGeometry args={[0.12, 0.15, 1.2, 16]} />
            <meshStandardMaterial 
              color="#1b5e20" 
              roughness={0.3} 
              metalness={0.4}
            />
          </mesh>
          
          {/* Minaret Balcony */}
          <mesh position={[0, 0.8, 0]} castShadow>
            <cylinderGeometry args={[0.18, 0.18, 0.1, 16]} />
            <meshStandardMaterial color="#c8a951" metalness={0.7} roughness={0.3} />
          </mesh>
          
          {/* Minaret Spire */}
          <mesh position={[0, 1.45, 0]} castShadow>
            <coneGeometry args={[0.08, 0.4, 16]} />
            <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* Entrance Arch */}
      <mesh position={[0, 0.5, 0.91]} castShadow>
        <boxGeometry args={[1.2, 1, 0.1]} />
        <meshStandardMaterial 
          color="#4caf50" 
          roughness={0.4} 
          metalness={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Decorative Elements - Islamic Patterns */}
      <mesh position={[0.8, 0.8, 0.76]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <boxGeometry args={[0.3, 0.05, 0.02]} />
        <meshStandardMaterial color="#c8a951" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.8, 0.8, 0.76]} rotation={[0, 0, -Math.PI / 4]} castShadow>
        <boxGeometry args={[0.3, 0.05, 0.02]} />
        <meshStandardMaterial color="#c8a951" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Floating Islamic Elements */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[2.5, 1.5, 0]} rotation={[0, 0, Math.PI / 6]}>
          <ringGeometry args={[0.3, 0.4, 8]} />
          <meshStandardMaterial 
            color="#c8a951" 
            side={THREE.DoubleSide}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh position={[-2.5, 1.2, 1]} rotation={[Math.PI / 4, 0, -Math.PI / 6]}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial 
            color="#4caf50"
            metalness={0.6}
            roughness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
};

const Hero3D = () => {
  // Fungsi untuk menangani link eksternal
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const donasiLink = "https://masjidkinclong.biolinku.biz.id/donasi-masjid-kinclong-99?fbclid=PAZXh0bgNhZW0CMTEAAacvccDbJgb9KYSNp7NJLVz7WxIRhH0AZcKnZlKMI5OgBZDny6aw15N-huDo";

  return (
    <div className={styles.hero3D}>
      <Canvas
        camera={{ position: [6, 3, 6], fov: 45 }}
        shadows
        className={styles.canvas}
      >
        {/* Gradient Background */}
        <color attach="background" args={['#0f172a']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#4ade80" />
        <pointLight position={[5, 3, 5]} intensity={0.3} color="#60a5fa" />
        
        {/* Hemisphere Light for natural outdoor feel */}
        <hemisphereLight 
          skyColor="#4ade80" 
          groundColor="#1e40af" 
          intensity={0.5} 
        />

        {/* Scene Elements */}
        <MosqueModel />
        
        {/* Magical Particles */}
        <Sparkles 
          count={200} 
          scale={[15, 8, 15]} 
          size={3} 
          speed={0.4} 
          color="#4ade80"
        />
        
        {/* Floating Stars */}
        <Stars 
          radius={100} 
          depth={50} 
          count={2000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={0.5}
        />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
          maxDistance={12}
          minDistance={4}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
      
      <div className={styles.heroContent}>
        <div className={styles.logoWrapper}>
          <h1 className={styles.heroTitle}>Masjid Kinclong</h1>
        </div>
        
        <p className={styles.heroSubtitle}>
          Kinclongin Masjid Kita Biar Allah Kinclongin Hidup Kita
          Sekarang Sudah Waktunya Anak Muda Bergerak,
          Kalau Bukan Kita Siapa Lagi
          Kalau Bukan Sekarang Kapan Lagi
        </p>
        
        <div className={styles.ctaSection}>
          <button 
            onClick={() => handleExternalLink(donasiLink)}
            className={`${styles.ctaButton} ${styles.ctaPrimary}`}
          >
            Yuk bergabung jadi donatur dalam gerakan <br /> bersih masjid ini 1 Masjid 1 Keluarga
          </button>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2000+</span>
              <span className={styles.statLabel}>Masjid Terbantu</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Duta Aktif</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15</span>
              <span className={styles.statLabel}>Wilayah</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}></div>
      </div>
    </div>
  );
};

export default Hero3D;