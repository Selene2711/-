// App.jsx - 主应用组件，整合所有视图与状态管理
const { useState, useEffect, useRef } = React;

// 导航链接
const NAV_LINKS = [
  { key: 'pegboard', label: '洞洞板' },
  { key: 'home', label: '首页' },
  { key: 'works', label: '作品' },
  { key: 'contact', label: '联系' },
];

// 作品缩略图（用于洞洞板作品卡）
const WORK_THUMBS = [
  'https://aka.doubaocdn.com/s/wbyRUua0WU',
  'https://aka.doubaocdn.com/s/UffkWNfgyh',
  'https://aka.doubaocdn.com/s/cTLEjUr1hc',
  'https://aka.doubaocdn.com/s/ko02M9itdw',
  'https://aka.doubaocdn.com/s/PTDD7nc9E3',
];

const AVATAR_SRC = 'assets/avatar.png';

function App() {
  // Tweaks
  const [t, setTweak] = useTweaks(typeof TWEAK_DEFAULTS !== 'undefined' ? TWEAK_DEFAULTS : {
    accentColor: '#C67B5C',
    pegboardWarmth: 1,
    swayAmount: 1,
    motionEnabled: true,
  });

  // View state: 'pegboard' | 'home' | 'works' | 'contact'
  const [currentView, setCurrentView] = useState('pegboard');
  const [showOpening, setShowOpening] = useState(true);
  const [cameraState, setCameraState] = useState('zoom'); // 'zoom' | 'wide'
  const [transitioning, setTransitioning] = useState(false);

  // Modal states
  const [modal, setModal] = useState(null); // 'about' | 'skills' | 'contact' | 'works'

  // Detail panel (from works page / home page)
  const [detailWork, setDetailWork] = useState(null);
  const [detailIndex, setDetailIndex] = useState(0);
  const [allWorks, setAllWorks] = useState([]);

  // Opening animation sequence
  useEffect(() => {
    // Logo shows 0-1.8s
    // Pegboard fades in at 1.5s
    // Camera zoom state starts zoomed in
    // Camera zooms out at ~3.2s to reveal all cards
    const zoomTimer = setTimeout(() => {
      setCameraState('wide');
    }, 3200);

    const openingTimer = setTimeout(() => {
      setShowOpening(false);
    }, 1800);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(openingTimer);
    };
  }, []);

  // Load works data when needed
  useEffect(() => {
    if (typeof ALL_WORKS !== 'undefined') {
      setAllWorks(ALL_WORKS);
    }
  }, []);

  const handleNavigate = (view) => {
    if (view === currentView) return;
    setTransitioning(true);
    setModal(null);
    setDetailWork(null);

    setTimeout(() => {
      setCurrentView(view);
      setTransitioning(false);
    }, 300);
  };

  const handleOpenWorks = () => {
    // Click works card -> navigate to works page
    handleNavigate('works');
  };

  const handleOpenAbout = () => {
    setModal('about');
  };

  const handleOpenContact = () => {
    setModal('contact');
  };

  const handleOpenSkills = () => {
    setModal('skills');
  };

  const handleCloseModal = () => {
    setModal(null);
  };

  const handleOpenDetail = (work) => {
    if (typeof ALL_WORKS !== 'undefined') {
      const idx = ALL_WORKS.findIndex(w => w.id === work.id);
      setDetailIndex(idx >= 0 ? idx : 0);
    }
    setDetailWork(work);
  };

  const handleCloseDetail = () => {
    setDetailWork(null);
  };

  const handlePrevDetail = () => {
    if (typeof ALL_WORKS === 'undefined') return;
    const newIdx = (detailIndex - 1 + ALL_WORKS.length) % ALL_WORKS.length;
    setDetailIndex(newIdx);
    setDetailWork(ALL_WORKS[newIdx]);
  };

  const handleNextDetail = () => {
    if (typeof ALL_WORKS === 'undefined') return;
    const newIdx = (detailIndex + 1) % ALL_WORKS.length;
    setDetailIndex(newIdx);
    setDetailWork(ALL_WORKS[newIdx]);
  };

  return (
    <div
      className="app-container"
      style={{
        '--accent': t.accentColor || '#C67B5C',
        '--accent-dark': shadeColor(t.accentColor || '#C67B5C', -20),
        '--accent-light': shadeColor(t.accentColor || '#C67B5C', 20),
      }}
    >
      {/* Opening Logo */}
      {showOpening && (
        <div className="opening-screen">
          <div className="opening-logo">
            SHIZEN
            <span className="logo-sub">PERSONAL PORTFOLIO</span>
          </div>
        </div>
      )}

      {/* Pegboard View */}
      <div className={`app-view ${currentView !== 'pegboard' || transitioning ? 'hidden' : ''}`}>
        <PegboardView
          onOpenWorks={handleOpenWorks}
          onOpenAbout={handleOpenAbout}
          onOpenContact={handleOpenContact}
          onOpenSkills={handleOpenSkills}
          avatarSrc={AVATAR_SRC}
          workThumbs={WORK_THUMBS}
          cameraState={cameraState}
        />
      </div>

      {/* Home View */}
      <div className={`app-view ${currentView !== 'home' || transitioning ? 'hidden' : ''}`}>
        {currentView === 'home' && (
          <HomePage
            onOpenDetail={handleOpenDetail}
            navLinks={NAV_LINKS}
            currentView={currentView}
            onNavigate={handleNavigate}
          />
        )}
      </div>

      {/* Works View */}
      <div className={`app-view ${currentView !== 'works' || transitioning ? 'hidden' : ''}`}>
        {currentView === 'works' && (
          <WorksPage
            navLinks={NAV_LINKS}
            currentView={currentView}
            onNavigate={handleNavigate}
          />
        )}
      </div>

      {/* Contact View */}
      <div className={`app-view ${currentView !== 'contact' || transitioning ? 'hidden' : ''}`}>
        {currentView === 'contact' && (
          <ContactPage
            navLinks={NAV_LINKS}
            currentView={currentView}
            onNavigate={handleNavigate}
          />
        )}
      </div>

      {/* Modals */}
      {modal === 'about' && (
        <AboutModal onClose={handleCloseModal} avatarSrc={AVATAR_SRC} />
      )}
      {modal === 'skills' && (
        <SkillsModal onClose={handleCloseModal} />
      )}
      {modal === 'contact' && (
        <ContactModal onClose={handleCloseModal} />
      )}

      {/* Detail Panel (shared between home and works views) */}
      {detailWork && typeof DetailPanel !== 'undefined' && (
        <DetailPanel
          work={detailWork}
          onClose={handleCloseDetail}
          onPrev={handlePrevDetail}
          onNext={handleNextDetail}
          total={allWorks.length || (typeof ALL_WORKS !== 'undefined' ? ALL_WORKS.length : 0)}
          currentIndex={detailIndex}
        />
      )}

      {/* Tweaks Panel */}
      {typeof TweaksPanel !== 'undefined' && typeof useTweaks !== 'undefined' && (
        <TweaksPanel title="风格">
          <TweakSection label="配色" />
          <TweakColor
            label="强调色"
            value={t.accentColor}
            options={['#C67B5C', '#6B8E6E', '#3A6EA5', '#8B6AAA', '#C7442F']}
            onChange={(v) => setTweak('accentColor', v)}
          />
          <TweakSection label="动效" />
          <TweakToggle
            label="启用动效"
            value={t.motionEnabled !== false}
            onChange={(v) => setTweak('motionEnabled', v)}
          />
          <TweakSlider
            label="摆动幅度"
            value={t.swayAmount || 1}
            min={0}
            max={2}
            step={0.1}
            unit="×"
            onChange={(v) => setTweak('swayAmount', v)}
          />
        </TweaksPanel>
      )}
    </div>
  );
}

// Helper: shade color by percent
function shadeColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1);
}

// Export to window
Object.assign(window, {
  App,
  NAV_LINKS,
  WORK_THUMBS,
  AVATAR_SRC,
});

// Render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
