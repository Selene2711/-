// ContactPage.jsx - 联系我页面
const { useState, useEffect } = React;

const STAMP_ITEMS = [
  { icon: '微', label: '微信', sub: 'WeChat', qr: 'assets/qr-wechat.png' },
  { icon: '红', label: '小红书', sub: 'RED / Xiaohongshu', color: '#FF4D4F', qr: 'assets/qr-xiaohongshu.png' },
  { icon: '@', label: '邮箱', sub: 'Email', color: '#3A6EA5' },
];

function ContactPage({ navLinks, currentView, onNavigate }) {
  const [activeStamp, setActiveStamp] = useState(0);
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSwitching(true);
      setTimeout(() => {
        setActiveStamp(prev => (prev + 1) % STAMP_ITEMS.length);
        setSwitching(false);
      }, 250);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const current = STAMP_ITEMS[activeStamp];

  return (
    <div className="home-page">
      <nav className="top-nav" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="top-nav-logo" onClick={() => onNavigate('pegboard')}>
          SHIZEN
        </div>
        <ul className="top-nav-links">
          {navLinks.map(link => (
            <li
              key={link.key}
              className={`top-nav-link ${currentView === link.key ? 'active' : ''}`}
              onClick={() => onNavigate(link.key)}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </nav>

      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-left">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '12px' }}>
              03 / GET IN TOUCH
            </div>
            <h2>Let's create<br />something great.</h2>
            <div className="contact-left-sub">一起做有意义的设计吧</div>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">✉</div>
                <div className="contact-info-text">
                  <span className="contact-info-label">EMAIL</span>
                  <span className="contact-info-value">
                    3337503245@qq.com
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">⌖</div>
                <div className="contact-info-text">
                  <span className="contact-info-label">LOCATION</span>
                  <span className="contact-info-value">浙江 · 湖州 / 杭州</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">☏</div>
                <div className="contact-info-text">
                  <span className="contact-info-label">PHONE</span>
                  <span className="contact-info-value">
                    +86 13345820977
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">◔</div>
                <div className="contact-info-text">
                  <span className="contact-info-label">AVAILABILITY</span>
                  <span className="contact-info-value">接受实习合作 · 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* 信封 + 邮票轮换 */}
          <div className="envelope-large">
            <div style={{ textAlign: 'center', marginTop: '8px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--ink-900)' }}>CONTACT</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--ink-500)', letterSpacing: '0.2em', fontWeight: '600', marginTop: '2px' }}>
                联 系 方 法
              </div>
            </div>

            <div className="stamp-rotator">
              <div
                className={`stamp-card ${switching ? 'switching' : ''}`}
                style={{
                  background: current.color || 'var(--stamp-yellow)',
                  borderColor: current.color ? `${current.color}dd` : '#D4A930',
                }}
              >
                <div className="stamp-icon" style={{ color: current.color ? 'white' : '#6B5010' }}>
                  {current.icon}
                </div>
                <div className="stamp-label" style={{ color: current.color ? 'white' : '#6B5010' }}>
                  {current.label}
                </div>
                <div style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: current.color ? 'rgba(255,255,255,0.8)' : '#8B6914', letterSpacing: '0.1em', marginTop: '2px' }}>
                  {current.sub}
                </div>
              </div>
              <div className="stamp-dots">
                {STAMP_ITEMS.map((_, i) => (
                  <div
                    key={i}
                    className={`stamp-dot ${i === activeStamp ? 'active' : ''}`}
                    onClick={() => {
                      if (i === activeStamp) return;
                      setSwitching(true);
                      setTimeout(() => {
                        setActiveStamp(i);
                        setSwitching(false);
                      }, 250);
                    }}
                    style={{ cursor: 'pointer' }}
                  ></div>
                ))}
              </div>
            </div>

              {current.qr && (
                <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-500)', letterSpacing: '0.15em', marginBottom: '10px' }}>
                    SCAN TO ADD ME
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '130px',
                      height: '130px',
                      padding: '8px',
                      background: '#fff',
                      border: '1px solid var(--beige-300)',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <img
                        src={current.qr}
                        alt={current.label}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block',
                        }}
                      />
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-500)', letterSpacing: '0.1em' }}>
                      {current.label}
                    </div>
                  </div>
                </div>
              )}

            <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-400)', letterSpacing: '0.1em' }}>
              SHIZEN · VISUAL DESIGN · 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export
Object.assign(window, {
  ContactPage,
});
