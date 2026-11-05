// Modals.jsx - 弹窗组件：About履历、Skills技能、Contact联系
const { useState, useEffect, useRef } = React;

// ===== About / CV Modal =====
function AboutModal({ onClose, avatarSrc }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          <div className="modal-header">
            <div className="modal-tag">02 · ABOUT ME</div>
            <h2 className="modal-title">CURRICULUM VITAE</h2>
            <div className="modal-title-cn">个 人 履 历</div>
          </div>

          {/* 基础信息 */}
          <div className="cv-section">
            <div className="cv-section-title">个人信息 · PERSONAL INFO</div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '20px', marginBottom: '16px' }}>
              <img
                src={avatarSrc}
                alt="石桢"
                style={{ width: '100%', borderRadius: '4px', border: '2px solid var(--beige-200)' }}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDEyMCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAiIGN5PSI0NSIgcj0iMjAiIGZpbGw9IiNDOUI5OEIvPjwvc3ZnPg==';
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--ink-500)', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>姓 名</div>
                    <div style={{ fontWeight: '700', fontFamily: 'var(--font-serif)', fontSize: '16px' }}>石桢</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--ink-500)', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>性 别</div>
                    <div style={{ fontWeight: '600' }}>女</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--ink-500)', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>年 龄</div>
                    <div style={{ fontWeight: '600' }}>20岁</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--ink-500)', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>籍 贯</div>
                    <div style={{ fontWeight: '600' }}>江西都昌</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--ink-500)', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>政治面貌</div>
                    <div style={{ fontWeight: '600' }}>共青团员</div>
                  </div>
                </div>
                <div style={{ marginTop: '4px' }}>
                  <div style={{ fontSize: '11px', color: 'var(--ink-500)', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>求职意向</div>
                  <div style={{ fontWeight: '600', color: 'var(--accent)' }}>视觉设计师 · 品牌设计师（实习）</div>
                </div>
                <div>
                    <div style={{ fontSize: '11px', color: 'var(--ink-500)', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}></div>
                    <div style={{ fontWeight: '500' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 教育经历 */}
          <div className="cv-section">
            <div className="cv-section-title">教育经历 · EDUCATION</div>
            <div className="cv-item">
              <div className="cv-item-date">2023 – 至今</div>
              <div className="cv-item-content">
                <h4>湖州学院 · 视觉传达设计（统招本科在读）</h4>
                <p>
                  <strong>主修课程：</strong>品牌设计、包装设计、标志设计、字体设计
                </p>
                <p style={{ marginTop: '6px', color: 'var(--accent)' }}>
                  学业荣誉：GPA均分4.20   2024-2025学年校级一等奖学金 · 学科竞赛奖学金 · 校级优秀学生干部
                </p>
              </div>
            </div>
          </div>


          {/* 荣誉证书 */}
          <div className="cv-section">
            <div className="cv-section-title">荣誉证书 · HONORS & AWARDS</div>
            <ul className="cv-honors-list">
              <li>第十八届中国大学生计算机设计大赛 — 全国三等奖</li>
              <li>2026年东方设计奖全国高校创新设计大赛数字文创赛道全国决赛三等奖</li>
              <li>第14届未来设计师·全国高校数字艺术设计大赛浙江赛区三等奖</li>
              <li>2026年米兰设计周中国高校设计学科师生优秀作品展浙江赛区三等奖</li>
              <li>大学生视觉艺术设计竞赛（UVADC）省级赛三等奖</li>
              <li>普通话二级乙等</li>
              <li>机动车驾驶证 C1</li>
            </ul>
          </div>

          {/* 项目/竞赛经历 */}
          <div className="cv-section">
            <div className="cv-section-title">项目/竞赛经历 · PROJECTS</div>

            <div className="cv-item">
              <div className="cv-item-date">2025.04 – 2025.07</div>
              <div className="cv-item-content">
                <h4>数媒静态设计《古贤智韵》创作项目</h4>
                <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>项目负责人、主设计师</p>
                <p><strong>项目背景：</strong>面向中国大学生计算机设计大赛参赛需求，需融合传统儒家文化元素与现代设计语言，打造兼具文化底蕴与创新性的数媒静态作品。</p>
                <p style={{ marginTop: '6px' }}><strong>核心贡献：</strong></p>
                <ul style={{ margin: '4px 0 8px 20px', fontSize: '13px', lineHeight: '1.7', color: 'var(--ink-700)' }}>
                  <li><strong>团队统筹管理：</strong>主导3人设计团队完成项目全周期落地，制定每周迭代进度表，明确分工节点，协调跨成员创意对齐，确保项目提前1周完成参赛提交。</li>
                  <li><strong>核心视觉创作：</strong>负责主视觉设计、参赛材料整理与现场答辩，将《论语》核心思想转化为可视化图形元素，平衡传统文化表达与现代审美需求。</li>
                </ul>
                <p><strong>项目成果：</strong>作品先后获得校级一等奖、浙江省二等奖、第十八届中国大学生计算机设计大赛全国三等奖。</p>
              </div>
            </div>

            <div className="cv-item">
              <div className="cv-item-date">2025.06 – 2025.09</div>
              <div className="cv-item-content">
                <h4>空军工程大学装备管理与无人机工程学院院徽纪念徽章设计项目</h4>
                <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>独立主设计师</p>
                <p><strong>项目背景：</strong>独立承接学院纪念徽章全案设计工作，紧扣无人机、装备管理专业内核搭建视觉体系。以无人机机身作为核心视觉主体，搭配地球轮廓、五角星、学院名称环形字体构建圆形徽章版式；精准调试全套 CMYK 色彩色值，输出分层源文件、多版尺寸迭代效果图。全程对接校方沟通修改方案，跟进工厂打样、刺绣工艺量产落地全流程。</p>
                <p style={{ marginTop: '6px' }}><strong>核心贡献：</strong>原创院徽纪念徽章设计方案落地量产，于2025长春航展官方展台展示派发，成为空军工程大学学院官方文创礼品。</p>
                <p><strong>项目成果：</strong>设计方案成功定稿量产，实物徽章亮相2025长春航展，现场对外展示、派发，同步纳入学院文创礼盒配套物料。</p>
              </div>
            </div>

            <div className="cv-item">
              <div className="cv-item-date">2025.12 – 2026.05</div>
              <div className="cv-item-content">
                <h4>菰城村文旅视觉创意设计项目</h4>
                <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>主创设计师、团队成员</p>
                <p><strong>项目背景：</strong>面向湖州菰城村文旅推广需求，需打造兼具地域文化辨识度与传播属性的视觉体系，适配乡村文旅宣传、赛事参展两类场景。</p>
                <p style={{ marginTop: '6px' }}><strong>核心贡献：</strong></p>
                <ul style={{ margin: '4px 0 8px 20px', fontSize: '13px', lineHeight: '1.7', color: 'var(--ink-700)' }}>
                  <li><strong>文化元素转化：</strong>深挖菰城村古建筑、非遗民俗等地域文化符号，完成扁平化视觉转译，兼顾设计美感与乡村传播的易理解性。</li>
                  <li><strong>方案创作输出：</strong>配合团队完成5款主题视觉作品设计，独立产出2套完整方案，分别适配线下宣传展板与新媒体传播场景。</li>
                </ul>
                <p><strong>项目成果：</strong>个人独立方案分别获得大赛一等奖、优秀奖，团队作品累计获得3个奖项，部分方案被菰城村村委采纳用于文旅宣传物料。</p>
              </div>
            </div>

            <div className="cv-item">
              <div className="cv-item-date">2025.10 – 2026.04</div>
              <div className="cv-item-content">
                <h4>视觉创意项目《阁纳五福·阅见天一》</h4>
                <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>项目负责人、主设计师</p>
                <p><strong>项目背景：</strong>以宁波天一阁藏书文化为基底，打造新春快闪 IP 视觉全案，面向文旅文创赛事，挖掘古籍建筑文化，实现传统文化年轻化转译，适配 NCDA 未来设计师大赛评审要求。</p>
                <p style={{ marginTop: '6px' }}><strong>核心贡献：</strong></p>
                <ul style={{ margin: '4px 0 8px 20px', fontSize: '13px', lineHeight: '1.7', color: 'var(--ink-700)' }}>
                  <li><strong>全链路视觉统筹：</strong>主导项目创意策划、建筑元素提取、主视觉插画、IP 形象、空间美陈与文创衍生品全套设计，串联平面插画、卡通 IP、线下装置、物料延展多维度内容。</li>
                  <li><strong>文化符号创新转化：</strong>提取天一阁西大门、秦氏支祠戏台、百鹅亭、和平堂四大标志性建筑，融合五福新春吉祥意象，以国潮插画语言重构古典藏书文化。</li>
                  <li><strong>多方案迭代优化：</strong>完成草图线稿、色稿、IP 三视图、表情包、落地物料多轮迭代，搭建完整色彩体系，兼顾展览观赏性、科普性与文创商业实用性。</li>
                </ul>
                <p><strong>项目成果：</strong>获第14届 NCDA 未来设计师·全国高校数字艺术设计大赛浙江赛区三等奖。</p>
              </div>
            </div>
          </div>

          {/* 核心优势 */}
          <div className="cv-section">
            <div className="cv-section-title">核心优势 · CORE STRENGTHS</div>
            <div style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--ink-700)' }}>
              <p>视觉传达设计专业在读，拥有国家级、省级、校级多级别设计赛事实战经验，熟悉平面、数媒、文旅类项目全流程设计，可协助团队完成项目。</p>
              <p style={{ marginTop: '10px' }}>擅长创意视觉、公益海报、文旅视觉及数字媒体平面设计，具备扎实的创意构思、色彩搭配、版式设计能力，作品可适配商业宣传、文旅推广、赛事参展等多元场景。</p>
              <p style={{ marginTop: '10px' }}>多次牵头负责设计项目，擅长团队分工、进度把控与跨方沟通，熟知赛事、展览、活动宣传类视觉物料制作规范，能高效推进项目落地。</p>
            </div>
          </div>
        </div>
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

// ===== Skills Modal =====
const SOFTWARE_SKILLS = [
  { name: 'Photoshop', level: '熟练', pct: 90, initial: 'Ps' },
  { name: 'Illustrator', level: '熟练', pct: 85, initial: 'Ai' },
  { name: 'CorelDRAW', level: '掌握', pct: 70, initial: 'Cd' },
  { name: 'Figma', level: '掌握', pct: 75, initial: 'Fg' },
  { name: 'Canva', level: '熟练', pct: 88, initial: 'Cv' },
];

const DESIGN_ABILITIES = [
  { name: '海报设计', desc: '公益海报 / 商业宣传 / 展览物料' },
  { name: '品牌视觉设计', desc: 'LOGO / VI系统 / 品牌延伸' },
  { name: '文旅创意设计', desc: '地域文化转译 / 文创产品' },
  { name: '数媒静态设计', desc: '新媒体配图 / 数字海报' },
  { name: '版式排版', desc: '书籍 / 画册 / 展览物料' },
  { name: '展览视觉', desc: '展板 / 导视 / 现场物料' },
];

function SkillsModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <div className="modal-header">
            <div className="modal-tag">04 · SKILLS</div>
            <h2 className="modal-title">DESIGN TOOLKIT</h2>
            <div className="modal-title-cn">设 计 技 能</div>
          </div>

          {/* 软件技能 - 横向轮播 */}
          <div className="cv-section">
            <div className="cv-section-title">设计软件 · SOFTWARE</div>
            <div className="skills-carousel">
              {SOFTWARE_SKILLS.map(skill => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-icon">{skill.initial}</div>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">{skill.level}</div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: `${skill.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 设计能力 */}
          <div className="cv-section" style={{ marginTop: '32px' }}>
            <div className="cv-section-title">设计能力 · DESIGN ABILITIES</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {DESIGN_ABILITIES.map(ab => (
                <div
                  key={ab.name}
                  style={{
                    padding: '16px',
                    background: 'var(--card-white)',
                    border: '1px solid var(--beige-200)',
                    borderRadius: '4px',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '14px', color: 'var(--ink-900)', marginBottom: '6px' }}>
                    {ab.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--ink-500)', lineHeight: '1.5' }}>
                    {ab.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== Contact Modal with Stamp Rotator =====
const STAMP_ITEMS = [
  { icon: '微', label: '微信', sub: 'WeChat', qr: 'assets/qr-wechat.png' },
  { icon: '红', label: '小红书', sub: 'RED', qr: 'assets/qr-xiaohongshu.png' },
  { icon: '@', label: '邮箱', sub: 'Email' },
];

function ContactModal({ onClose }) {
  const [activeStamp, setActiveStamp] = useState(0);
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSwitching(true);
      setTimeout(() => {
        setActiveStamp(prev => (prev + 1) % STAMP_ITEMS.length);
        setSwitching(false);
      }, 250);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (i) => {
    if (i === activeStamp) return;
    setSwitching(true);
    setTimeout(() => {
      setActiveStamp(i);
      setSwitching(false);
    }, 250);
  };

  const current = STAMP_ITEMS[activeStamp];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '540px' }}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <div className="modal-header">
            <div className="modal-tag">03 · CONTACT</div>
            <h2 className="modal-title">GET IN TOUCH</h2>
            <div className="modal-title-cn">联 系 我</div>
          </div>

          {/* Stamp Rotator */}
          <div className="stamp-rotator">
            <div className={`stamp-card ${switching ? 'switching' : ''}`}>
              <div className="stamp-icon">{current.icon}</div>
              <div className="stamp-label">{current.label}</div>
              <div style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: '#8B6914', letterSpacing: '0.1em', marginTop: '2px' }}>
                {current.sub}
              </div>
            </div>
            <div className="stamp-dots">
              {STAMP_ITEMS.map((_, i) => (
                <div
                  key={i}
                  className={`stamp-dot ${i === activeStamp ? 'active' : ''}`}
                  onClick={() => handleDotClick(i)}
                ></div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
            <div className="envelope-detail-line" style={{ fontSize: '13px', gap: '12px' }}>
              <span className="envelope-detail-icon">✉</span>
              <span>3337503245@qq.com</span>
            </div>
            <div className="envelope-detail-line" style={{ fontSize: '13px', gap: '12px' }}>
              <span className="envelope-detail-icon">⌖</span>
              <span>浙江 · 湖州</span>
            </div>
          </div>

          {current.qr && (
            <div style={{ marginTop: '28px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-500)', letterSpacing: '0.15em', marginBottom: '12px' }}>
                SCAN TO ADD ME
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '140px',
                  height: '140px',
                  padding: '10px',
                  background: '#fff',
                  border: '1px solid var(--beige-300)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
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
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-500)', letterSpacing: '0.1em' }}>
                  {current.label}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Export
Object.assign(window, {
  AboutModal,
  SkillsModal,
  ContactModal,
  SOFTWARE_SKILLS,
});
