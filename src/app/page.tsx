import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logo}>
            ICN MARKET
          </div>
          <div className={styles.navLinks}>
            <Link href="#platform" className={styles.navLink}>Platform</Link>
            <Link href="#products" className={styles.navLink}>Products</Link>
            <Link href="#education" className={styles.navLink}>Education</Link>
            <Link href="#institute" className={styles.navLink}>Institute</Link>
          </div>
          <div>
            <button className="btn-secondary" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>Sign In</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="platform" className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={`${styles.animateFadeIn}`}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              Platform v2.0 Live
            </div>
            <h1 className={styles.heroTitle}>
              Trade smarter.<br />
              Grow everywhere.
            </h1>
            <p className={styles.heroSubtitle}>
              The institutional-grade terminal for modern market operators. Access neural bots, high-frequency indicators, and elite capital management setups.
            </p>
            <div className={styles.heroButtons}>
              <button className="btn-primary">
                Deploy Terminal
              </button>
              <button className="btn-secondary">
                View Documentation
              </button>
            </div>
          </div>
        </div>
        
        <div className={`container ${styles.heroVisual} ${styles.animateFadeIn} ${styles.delay200}`}>
          <div className={styles.heroVisualImage}>
            <Image 
              src="/images/hero-bg.jpg" 
              alt="Trading Terminal Dashboard" 
              fill 
              style={{objectFit: 'cover'}} 
              priority
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Algorithmic Arsenal.</h2>
            <p className={styles.sectionSubtitle}>High-frequency indicators and neural network bots engineered for institutional accuracy.</p>
          </div>

          <div className={styles.productsGrid}>
            <div className="card productCard">
              <div className={styles.productImageWrapper}>
                <Image 
                  src="/images/trading.jpg" 
                  alt="Pro TradingView Indicators" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <h3 className={styles.productTitle}>Pro Indicators</h3>
              <p className={styles.productText}>Accuracy-focused indicator packages engineered for sniper entries and flawless exits directly inside TradingView.</p>
              <div>
                <button className="btn-secondary">View Packages</button>
              </div>
            </div>

            <div className="card productCard">
              <div className={styles.productImageWrapper}>
                <Image 
                  src="/images/crypto.jpg" 
                  alt="Neural Forex Bots" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <h3 className={styles.productTitle}>Neural Bots</h3>
              <p className={styles.productText}>Deep-learning automated bot architectures built for aggressive scaling and capital protection at every tier.</p>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <span style={{fontWeight: 500}}>$100 — $5,000</span>
                <button className="btn-primary">Deploy</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Managed Services.</h2>
            <p className={styles.sectionSubtitle}>Scale your capital with professional management protocols and mirror trading networks.</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className="card serviceCard">
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4 className={styles.serviceTitle}>Fund Management</h4>
              <p>Institutional-grade profit-sharing execution for capital management. Executed on a strict 50/50 profit split protocol.</p>
            </div>

            <div className="card serviceCard">
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h4 className={styles.serviceTitle}>Mirror Trading</h4>
              <p>Zero-latency copy trading directly to your personal terminal environment from our master server nodes.</p>
            </div>

            <div className="card serviceCard">
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h4 className={styles.serviceTitle}>Cent Accounts</h4>
              <p>Low-scale algorithmic trading setups optimized for aggressive growth potential starting with minimal deposit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Education Protocol.</h2>
            <p className={styles.sectionSubtitle}>Build foundational logic and advanced predictive strategies to survive modern markets.</p>
          </div>

          <div className={styles.coursesGrid}>
            <div className="card">
              <div className={styles.courseLevel}>Phase 01</div>
              <h3 className={styles.sectionTitle} style={{fontSize: '2rem'}}>Baseline</h3>
              <p>Decode market structures, terminology, and foundational strategies to survive the volatility of modern exchanges.</p>
              <ul className={styles.courseList}>
                <li className={styles.courseItem}>Cryptographic Market Syntax</li>
                <li className={styles.courseItem}>Fiat Protocol Fundamentals</li>
                <li className={styles.courseItem}>Risk Mitigation Algorithms</li>
              </ul>
              <button className="btn-secondary" style={{width: '100%'}}>Unlock Baseline ($100)</button>
            </div>

            <div className="card">
              <div className={styles.courseLevel}>Phase 02</div>
              <h3 className={styles.sectionTitle} style={{fontSize: '2rem'}}>Advanced</h3>
              <p>Master deep-market analysis, predictive strategy building, and high-tier methods for unshakeable execution logic.</p>
              <ul className={styles.courseList}>
                <li className={styles.courseItem}>Advanced Predictive Analytics</li>
                <li className={styles.courseItem}>Algorithmic Strategy Dev</li>
                <li className={styles.courseItem}>Institutional Trade Planning</li>
              </ul>
              <button className="btn-primary" style={{width: '100%'}}>Unlock Advanced ($400)</button>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTE / ABOUT */}
      <section id="institute" className={styles.section} style={{borderBottom: 'none'}}>
        <div className="container">
          <div className="card" style={{position: 'relative', overflow: 'hidden', padding: '4rem'}}>
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0}}>
              <Image src="/images/cyber.jpg" fill style={{objectFit: 'cover', opacity: 0.15, filter: 'grayscale(100%)'}} alt="Background" />
            </div>
            <div style={{position: 'relative', zIndex: 1, maxWidth: '600px'}}>
              <h2 className={styles.sectionTitle}>The Institute.</h2>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>
                In a world experiencing an Artificial Intelligence Revolution, ICN Market Institute provides the infrastructure for you to extract value from the global financial grids directly from your terminal.
              </p>
              <p style={{color: '#fff', fontWeight: 500}}>
                Our mission is to deploy a massive network of elite, capable market operators armed with the tools to dominate financial landscapes.
              </p>
            </div>
          </div>

          <div className={styles.statsGrid}>
            <div className="card statCard">
              <div className={styles.statValue}>$7.5T</div>
              <div className={styles.statLabel}>Daily FX Turnover</div>
            </div>
            <div className="card statCard">
              <div className={styles.statValue}>10M+</div>
              <div className={styles.statLabel}>Global Operators</div>
            </div>
            <div className="card statCard">
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}>Institutional Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerLogo}>
                ICN MARKET
              </div>
              <p>Secure Terminal Connection.<br/>Encrypted Market Access.</p>
            </div>

            <div>
              <h4 className={styles.footerColTitle}>Platform</h4>
              <div className={styles.footerLinks}>
                <Link href="#" className={styles.footerLink}>Terminal</Link>
                <Link href="#" className={styles.footerLink}>Documentation</Link>
                <Link href="#" className={styles.footerLink}>Status</Link>
              </div>
            </div>

            <div>
              <h4 className={styles.footerColTitle}>Arsenal</h4>
              <div className={styles.footerLinks}>
                <Link href="#" className={styles.footerLink}>Neural Bots</Link>
                <Link href="#" className={styles.footerLink}>Indicators</Link>
                <Link href="#" className={styles.footerLink}>Mirror Nodes</Link>
              </div>
            </div>

            <div>
              <h4 className={styles.footerColTitle}>Updates</h4>
              <p style={{marginBottom: '1rem'}}>Receive the latest market insights.</p>
              <input type="email" placeholder="Email address" className={styles.newsletterInput} />
              <button className="btn-secondary" style={{width: '100%'}}>Subscribe</button>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2026 ICNM. All rights reserved.</p>
            <p>Designed for scale.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
