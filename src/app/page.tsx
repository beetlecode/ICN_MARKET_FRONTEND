"use client";
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  // Generate random candlesticks for background effect
  const candlesticks = Array.from({ length: 40 }).map((_, i) => {
    const height = Math.random() * 60 + 20; // 20px to 80px
    const yOffset = Math.sin(i * 0.3) * 30; // Sine wave pattern
    const wickTop = Math.random() * 15 + 5;
    const wickBottom = Math.random() * 15 + 5;
    return { height, yOffset, wickTop, wickBottom };
  });

  return (
    <main className={styles.main}>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div className={styles.navLinks}>
            <Link href="#" className={styles.navLink} style={{color: 'var(--accent-blue)'}}>Home</Link>
            <Link href="#about" className={styles.navLink}>About Us</Link>
            <Link href="#trading" className={styles.navLink}>Trading</Link>
            <Link href="#testimonials" className={styles.navLink}>Testimonials</Link>
            <Link href="#contact" className={styles.navLink}>Contact Us</Link>
          </div>
          <button className={styles.btnSignIn}>
            Sign In
            <div className={styles.btnArrow}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        
        {/* Visual Background Elements */}
        <div className={styles.heroVisuals}>
          <div className={styles.topGlow}></div>
          <div className={styles.radarRings}></div>
          
          <div className={styles.candlesticks}>
            {candlesticks.map((c, i) => (
              <div key={i} className={styles.candle} style={{
                height: `${c.height}px`,
                transform: `translateY(${c.yOffset}px)`
              }}>
                <style jsx>{`
                  div::before {
                    top: -${c.wickTop}px;
                    bottom: -${c.wickBottom}px;
                  }
                `}</style>
              </div>
            ))}
          </div>

          <div className={styles.centerElement}>
            <svg className={styles.centerIcon} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4M7 13l3-3 4 4 3-3"/></svg>
          </div>

          {/* Floating Coins */}
          <div className={`${styles.floatingCoin} ${styles.coin1}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div className={`${styles.floatingCoin} ${styles.coin2}`}>
            ₿
          </div>
          <div className={`${styles.floatingCoin} ${styles.coin3}`}>
            Ł
          </div>
          <div className={`${styles.floatingCoin} ${styles.coin4}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>We Help Beginners, Traders, Pros</h1>
          <p className={styles.heroSubtitle}>
            Track, Analyze, And Improve Your Relationships With Our Easy-To-Use Platform Designed For Individuals And Therapists.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary}>
              Get Started
              <div className={styles.btnArrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </button>
            <button className={styles.btnSecondary}>
              View More
              <div className={styles.btnArrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SECTIONS MATCHING THE THEME */}
      <section id="trading" className={styles.section} style={{background: 'rgba(0,0,0,0.3)', position: 'relative', zIndex: 10}}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Master The Markets</h2>
            <p className={styles.heroSubtitle}>Professional tools and services for every level of trader.</p>
          </div>

          <div className={styles.grid}>
            <div className={`glass ${styles.card}`}>
              <div className={styles.cardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3 className={styles.cardTitle}>Trading Indicators</h3>
              <p className={styles.cardText}>High-frequency accuracy-focused indicator packages engineered for sniper entries and flawless exits.</p>
            </div>
            
            <div className={`glass ${styles.card}`}>
              <div className={styles.cardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 className={styles.cardTitle}>AI Trading Bots</h3>
              <p className={styles.cardText}>Deep-learning automated bot architectures built for aggressive scaling and capital protection.</p>
            </div>

            <div className={`glass ${styles.card}`}>
              <div className={styles.cardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className={styles.cardTitle}>Fund Management</h3>
              <p className={styles.cardText}>Institutional-grade profit-sharing execution for capital management executed on a 50/50 split protocol.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.section} style={{paddingBottom: '3rem'}}>
        <div className="container" style={{textAlign: 'center', color: 'var(--text-muted)'}}>
          <div className={styles.logo} style={{margin: '0 auto 1.5rem', width: '50px', height: '50px'}}>
             <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <p>© 2026 ICN Market. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
