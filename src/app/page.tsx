"use client";
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  const candlesticks = Array.from({ length: 40 }).map((_, i) => {
    const height = Math.random() * 60 + 20;
    const yOffset = Math.sin(i * 0.3) * 30;
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
            <Link href="#courses" className={styles.navLink}>Courses</Link>
            <Link href="#testimonials" className={styles.navLink}>Testimonials</Link>
            <Link href="#contact" className={styles.navLink}>Contact</Link>
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
        <div className={styles.heroVisuals}>
          <div className={styles.topGlow}></div>
          <div className={styles.radarRings}></div>
          <div className={styles.candlesticks}>
            {candlesticks.map((c, i) => (
              <div key={i} className={styles.candle} style={{ height: `${c.height}px`, transform: `translateY(${c.yOffset}px)` }}>
                <style jsx>{`div::before { top: -${c.wickTop}px; bottom: -${c.wickBottom}px; }`}</style>
              </div>
            ))}
          </div>
          <div className={styles.centerElement}>
            <svg className={styles.centerIcon} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4M7 13l3-3 4 4 3-3"/></svg>
          </div>
          <div className={`${styles.floatingCoin} ${styles.coin1}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          <div className={`${styles.floatingCoin} ${styles.coin2}`}>₿</div>
          <div className={`${styles.floatingCoin} ${styles.coin3}`}>Ł</div>
          <div className={`${styles.floatingCoin} ${styles.coin4}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Welcome to ICN Market Education Platform</h1>
          <p className={styles.heroSubtitle}>
           Let's start your trading journey to become a professional trader.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary}>
              Get Started
              <div className={styles.btnArrow}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </button>
            <button className={styles.btnSecondary}>
              View More
              <div className={styles.btnArrow}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className={`${styles.section} ${styles.sectionDarker}`}>
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>About ICN Market <br/> <span style={{color: 'var(--accent-blue)'}}>Institute.</span></h2>
            <p>
              In a world experiencing an Artificial Intelligence Revolution, ICN Market provides the infrastructure for you to extract value from the global financial grids directly from your terminal. We engineer the highest grade indicators, bots, and educational architectures.
            </p>
            <div className={styles.visionMission}>
              <div className={styles.vmBox}>
                <h4>Our Vision</h4>
                <p>Raise yourself, upgrade mankind. Focus on rapid personal transformation.</p>
              </div>
              <div className={styles.vmBox}>
                <h4>Our Mission</h4>
                <p>Create two million elite entrepreneurs and market operators by 2030.</p>
              </div>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <div className={`glass ${styles.card}`} style={{padding: '4rem 2rem', border: '1px solid var(--accent-blue)'}}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="1" style={{marginBottom: '2rem'}}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>Join The Revolution</h3>
              <p style={{color: 'var(--text-muted)'}}>Join thousands of active operators deployed on global markets.</p>
            </div>
            <div className={styles.topGlow} style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', zIndex: -1}}></div>
          </div>
        </div>
      </section>

      {/* TRADING / PRODUCTS SECTION */}
      <section id="trading" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Products & Services</h2>
            <p className={styles.heroSubtitle}>Professional tools and managed services for every level of trader.</p>
          </div>

          <div className={styles.grid}>
            <div className={`glass ${styles.card}`}>
              <div className={styles.cardIcon}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
              <h3 className={styles.cardTitle}>Trading Indicators</h3>
              <p className={styles.cardText}>High-frequency accuracy-focused indicator packages engineered for sniper entries and flawless exits directly inside TradingView.</p>
            </div>
            
            <div className={`glass ${styles.card}`}>
              <div className={styles.cardIcon}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
              <h3 className={styles.cardTitle}>Neural Forex Bots</h3>
              <p className={styles.cardText}>Deep-learning automated bot architectures built for aggressive scaling and capital protection starting at minimal tiers.</p>
            </div>

            <div className={`glass ${styles.card}`}>
              <div className={styles.cardIcon}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <h3 className={styles.cardTitle}>PAAM Accounts</h3>
              <p className={styles.cardText}>Institutional-grade profit-sharing execution for capital management executed on a strictly regulated 50/50 split protocol.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className={`${styles.section} ${styles.sectionDarker}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Education Phase</h2>
            <p className={styles.heroSubtitle}>Decode market structures and master deep-market analysis.</p>
          </div>

          <div className={styles.grid} style={{gridTemplateColumns: '1fr 1fr'}}>
            <div className={`glass ${styles.card} ${styles.courseCard}`}>
              <span className={styles.courseBadge}>Phase 1 - Baseline</span>
              <h3 className={styles.cardTitle} style={{fontSize: '2rem'}}>Foundations</h3>
              <p className={styles.cardText}>Survive the volatility of modern exchanges.</p>
              
              <ul className={styles.courseList}>
                <li className={styles.courseItem}><svg width="20" height="20" fill="var(--accent-blue)" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Cryptographic Market Syntax</li>
                <li className={styles.courseItem}><svg width="20" height="20" fill="var(--accent-blue)" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Fiat Protocol Fundamentals</li>
                <li className={styles.courseItem}><svg width="20" height="20" fill="var(--accent-blue)" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Risk Mitigation Algorithms</li>
              </ul>
              
              <div className={styles.coursePrice}>$100</div>
              <button className={styles.btnSecondary} style={{width: '100%', justifyContent: 'center'}}>Enroll Now</button>
            </div>

            <div className={`glass ${styles.card} ${styles.courseCard}`} style={{borderColor: 'var(--accent-blue)'}}>
              <span className={styles.courseBadge} style={{background: 'var(--accent-blue)', color: '#000'}}>Phase 2 - Advanced</span>
              <h3 className={styles.cardTitle} style={{fontSize: '2rem'}}>Neural Dev</h3>
              <p className={styles.cardText}>Unshakeable execution logic and institutional planning.</p>
              
              <ul className={styles.courseList}>
                <li className={styles.courseItem}><svg width="20" height="20" fill="var(--accent-blue)" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Advanced Predictive Analytics</li>
                <li className={styles.courseItem}><svg width="20" height="20" fill="var(--accent-blue)" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Algorithmic Strategy Dev</li>
                <li className={styles.courseItem}><svg width="20" height="20" fill="var(--accent-blue)" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Institutional Trade Planning</li>
              </ul>
              
              <div className={styles.coursePrice}>$400</div>
              <button className={styles.btnPrimary} style={{width: '100%', justifyContent: 'center'}}>Enroll Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What Operators Say</h2>
            <p className={styles.heroSubtitle}>Trusted by thousands of successful market operators globally.</p>
          </div>

          <div className={styles.grid}>
            <div className={`glass ${styles.card} ${styles.testimonialCard}`}>
              <div className={styles.stars}>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className={styles.cardText}>"The PAAM accounts have fundamentally changed how I scale capital. The 50/50 protocol ensures institutional alignment."</p>
              <div className={styles.clientInfo}>
                <div className={styles.clientAvatar}></div>
                <div>
                  <div className={styles.clientName}>Sarah Jenkins</div>
                  <div className={styles.clientRole}>Forex Trader</div>
                </div>
              </div>
            </div>

            <div className={`glass ${styles.card} ${styles.testimonialCard}`}>
              <div className={styles.stars}>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className={styles.cardText}>"Phase 2 Neural Dev course completely decoded market structures for me. I finally understand predictive analytics."</p>
              <div className={styles.clientInfo}>
                <div className={styles.clientAvatar}></div>
                <div>
                  <div className={styles.clientName}>David Chen</div>
                  <div className={styles.clientRole}>Crypto Analyst</div>
                </div>
              </div>
            </div>

            <div className={`glass ${styles.card} ${styles.testimonialCard}`}>
              <div className={styles.stars}>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className={styles.cardText}>"The Trading Indicators are absolutely sniper accurate. I've stopped guessing and started executing with high frequency."</p>
              <div className={styles.clientInfo}>
                <div className={styles.clientAvatar}></div>
                <div>
                  <div className={styles.clientName}>Marcus Thorne</div>
                  <div className={styles.clientRole}>Day Trader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className={`${styles.section} ${styles.sectionDarker}`}>
        <div className={`container ${styles.contactGrid}`}>
          <div>
            <h2 className={styles.sectionTitle}>Initialize <br/><span style={{color: 'var(--accent-blue)'}}>Connection.</span></h2>
            <p className={styles.cardText} style={{marginBottom: '2rem'}}>
              Ready to upgrade your market access? Contact our deployment team to gain access to neural bots, institutional indicators, and elite training.
            </p>
            <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
              <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <div className={styles.btnArrow} style={{background: 'rgba(0,183,255,0.1)', color: 'var(--accent-blue)'}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span>support@icnmarket.online</span>
              </div>
            </div>
          </div>
          
          <div className={`glass ${styles.card}`} style={{textAlign: 'left', padding: '3rem'}}>
            <form className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <label style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Operator Name</label>
                <input type="text" className={styles.input} placeholder="John Doe" />
              </div>
              <div className={styles.inputGroup}>
                <label style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Encrypted Email</label>
                <input type="email" className={styles.input} placeholder="john@domain.com" />
              </div>
              <div className={styles.inputGroup}>
                <label style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Transmission</label>
                <textarea className={styles.input} placeholder="How can we help you scale?"></textarea>
              </div>
              <button className={styles.btnPrimary} style={{justifyContent: 'center', marginTop: '1rem'}}>Send Transmission</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.footerCol}>
            <div className={styles.logo} style={{marginBottom: '1.5rem', width: '50px', height: '50px'}}>
               <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <p className={styles.cardText} style={{maxWidth: '300px'}}>Secure Terminal Connection. Encrypted Market Access.</p>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Platform Quick Links</h4>
            <div className={styles.footerLinks}>
              <Link href="#about" className={styles.footerLink}>About Institute</Link>
              <Link href="#trading" className={styles.footerLink}>Trading Arsenal</Link>
              <Link href="#courses" className={styles.footerLink}>Education Protocol</Link>
              <Link href="#testimonials" className={styles.footerLink}>Operator Reviews</Link>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4>Legal</h4>
            <div className={styles.footerLinks}>
              <Link href="#" className={styles.footerLink}>Terms of Service</Link>
              <Link href="#" className={styles.footerLink}>Privacy Policy</Link>
              <Link href="#" className={styles.footerLink}>Risk Disclosure</Link>
            </div>
          </div>
        </div>
        
        <div className={`container ${styles.footerBottom}`}>
          <p>© 2026 ICN Market Institute. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
