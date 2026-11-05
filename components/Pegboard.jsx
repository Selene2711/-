// Pegboard.jsx - 洞洞板主界面，包含4类挂卡交互
// Dependencies: window object for globals

const { useState, useEffect, useRef } = React;

// 作品列表数据
const WORK_CATEGORIES = [
  { en: 'BRANDING', cn: '品牌设计', num: '01' },
  { en: 'POSTER', cn: '海报设计', num: '02' },
  { en: 'PACKAGING', cn: '包装设计', num: '03' },
  { en: 'CULTURAL & CREATIVE', cn: '文旅创意', num: '04' },
  { en: 'ILLUSTRATION DESIGN', cn: '插画设计', num: '05' },
];

// Pegboard Surface Component
function PegboardSurface() {
  return (
    <div className="pegboard-surface">
      <div className="pegboard-holes"></div>
      <div className="pegboard-grain"></div>
      <div className="pegboard-frame"></div>
    </div>
  );
}

// Hook / Ring components
function Hook() {
  return <div className="hook"></div>;
}

function Ring() {
  return <div className="ring"></div>;
}

// Works Card - 作品卡 (亚克力卡套)
function WorksCard({ onClick, workThumbs }) {
  return (
    <div className="hanging-card works-card" onClick={onClick} data-screen-label="works-card">
      <Hook />
      <Ring />
      <div className="acrylic-clip"></div>
      <div className="acrylic-holder">
        <div className="works-card-inner">
          <div className="works-card-header">
            <div className="works-card-number">01</div>
            <div className="works-card-title">SELECTED WORKS</div>
            <div className="works-card-title-cn">精 选 作 品</div>
            <div className="works-card-desc">
              A selection of projects in branding, packaging, poster & more.
            </div>
          </div>
          <div className="works-list">
            {WORK_CATEGORIES.slice(0, 5).map((cat, i) => (
              <div className="work-item" key={cat.en}>
                <div className="work-item-num">{cat.num}</div>
                <div className="work-item-text">
                  <div className="work-item-en">{cat.en}</div>
                  <div className="work-item-cn">{cat.cn}</div>
                </div>
                <div className="work-thumb-stack">
                  {workThumbs && workThumbs[i] && (
                    <img src={workThumbs[i]} alt="" className="work-thumb" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Badge Card - 工牌 (个人简介)
function BadgeCard({ onClick, avatarSrc }) {
  return (
    <div className="hanging-card badge-card" onClick={onClick} data-screen-label="badge-card">
      <Hook />
      <Ring />
      <div className="strap"></div>
      <div className="badge-fabric">
        <div className="badge-inner">
          <div className="badge-number-top">
            <span>02 ABOUT ME</span>
          </div>
          <div className="badge-header">
            <img
              src={avatarSrc}
              alt="石桢"
              className="badge-photo"
              onError={(e) => {
                e.target.style.background = 'var(--beige-200)';
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI4IiBmaWxsPSIjQzlCOThCIi8+PHBhdGggZD0iTTAgNTBDMCAzNS4wOTEyIDEyLjUzNSAyNCAyNiAyNEMzOS40NjUgMjQgNTIgMzUuMDkxMiA1MiA1MEgweiIgZmlsbD0iI0M5Qjk4QiIvPjwvc3ZnPg==';
              }}
            />
            <div className="badge-info">
              <div className="badge-name">石桢</div>
              <div className="badge-title">视觉传达设计</div>
              <div className="badge-num">ID: SHIZEN.001</div>
            </div>
          </div>
          <div className="badge-label">简 介 信 息</div>
          <div className="badge-section">
            <span>Work experience</span>
            <span className="badge-arrow">→</span>
          </div>
          <div className="badge-section">
            <span>Education</span>
            <span className="badge-arrow">→</span>
          </div>
          <div className="badge-section" style={{ borderBottom: 'none' }}>
            <span>VIEW CV</span>
            <span className="badge-arrow">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Envelope Card - 联系信封
function EnvelopeCard({ onClick }) {
  return (
    <div className="hanging-card envelope-card" onClick={onClick} data-screen-label="envelope-card">
      <Hook />
      <Ring />
      <div className="envelope-body">
        <div className="envelope-number">03</div>
        <div className="envelope-title">CONTACT</div>
        <div className="envelope-title-cn">联 系 方 法</div>
        <div className="envelope-details">
          <div className="envelope-detail-line">
            <span className="envelope-detail-icon">✉</span>
            <span>3337503245@qq.com</span>
          </div>
          <div className="envelope-detail-line">
            <span className="envelope-detail-icon">☏</span>
            <span>+86 13345820977</span>
          </div>
          <div className="envelope-detail-line">
            <span className="envelope-detail-icon">⌖</span>
            <span>湖州, 浙江</span>
          </div>
        </div>
        <div className="envelope-stamp">
          ☻
        </div>
        <div className="envelope-arrow">→</div>
      </div>
    </div>
  );
}

// Note Card - 便签吊牌
function NoteCard({ onClick }) {
  return (
    <div className="hanging-card note-card" onClick={onClick} data-screen-label="note-card">
      <Hook />
      <Ring />
      <div className="note-body">
        <div className="note-title">OPEN TO WORK</div>
        <div className="note-text">
          Let's create <em>something great</em> together!
        </div>
        <div className="note-barcode"></div>
        <div className="note-barcode-label">SHIZEN · 2026</div>
      </div>
    </div>
  );
}

// Plaque - 铭牌
function PortfolioPlaque() {
  return (
    <div className="plaque">
      <div className="plaque-title">DAWN × WN</div>
      <div className="plaque-sub">PORTFOLIO 2026</div>
    </div>
  );
}

// Main Pegboard Component
function PegboardView({
  onOpenWorks,
  onOpenAbout,
  onOpenContact,
  onOpenSkills,
  avatarSrc,
  workThumbs,
  cameraState,
}) {
  return (
    <div className={`pegboard-view camera-state-${cameraState}`}>
      <PegboardSurface />

      {/* 4 Hanging Cards */}
      <div className="cards-group">
        <WorksCard onClick={onOpenWorks} workThumbs={workThumbs} />
        <BadgeCard onClick={onOpenAbout} avatarSrc={avatarSrc} />
        <EnvelopeCard onClick={onOpenContact} />
        <NoteCard onClick={onOpenSkills} />
      </div>

      {/* Zoom indicator */}
      <div className="zoom-indicator">72% / 100%</div>
    </div>
  );
}

// Export to window
Object.assign(window, {
  PegboardView,
  PegboardSurface,
  WORK_CATEGORIES,
});
