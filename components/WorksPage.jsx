// WorksPage.jsx - 作品列表页 + 详情面板
const { useState, useEffect } = React;

// 完整作品列表（含占位项目）
const ALL_WORKS = [
  // 真实项目（有图有文）
  {
    id: 'guxian',
    year: '2026',
    title: '古贤智韵',
    titleEn: 'ANCIENT SAGES',
    cat: '数媒静态设计',
    role: '项目负责人 / 主设计师',
    desc: '融合传统儒家文化元素与现代设计语言，面向中国大学生计算机设计大赛',
    image: 'https://aka.doubaocdn.com/s/UffkWNfgyh',
    imagesVertical: [
      'https://aka.doubaocdn.com/s/UffkWNfgyh',
      'https://aka.doubaocdn.com/s/6aexkQldnd',
      'https://aka.doubaocdn.com/s/FIkMbzyaUP',
      'https://aka.doubaocdn.com/s/pPAEWxUV47',
      'https://aka.doubaocdn.com/s/V2cU6hpjEf',
    ],
    date: '2025.04 – 2025.07',
    client: '中国大学生计算机设计大赛',
    result: '第十八届中国大学生计算机设计大赛 全国三等奖 / 浙江省二等奖 / 校级一等奖',
    detail: '主导3人团队全周期落地，制定每周迭代进度表、明确分工节点、协调创意对齐，提前1周完成提交；负责主视觉、参赛材料整理与现场答辩，将《论语》核心思想转化为可视化图形元素，平衡传统文化表达与现代审美需求。',
    theme: 2,
  },
  {
    id: 'gucheng',
    year: '2026',
    title: '菰城村文旅视觉',
    titleEn: 'GUCHENG VILLAGE',
    cat: '文旅创意设计',
    role: '主创设计师',
    desc: '面向湖州菰城村文旅推广，深挖地域文化符号做扁平化视觉转译',
    image: 'https://aka.doubaocdn.com/s/ko02M9itdw',
    imagesVertical: [
      'https://aka.doubaocdn.com/s/ko02M9itdw',
      'https://aka.doubaocdn.com/s/MzrV3vwUi4',
      'https://aka.doubaocdn.com/s/dmlOrMU4t5',
      'https://aka.doubaocdn.com/s/rZSRKggS4r',
      'https://aka.doubaocdn.com/s/jWu59967Te',
      'https://aka.doubaocdn.com/s/FRfVpUshUV',
      'https://aka.doubaocdn.com/s/7zhRAMBuoH',
    ],
    date: '2025.12 – 2026.05',
    client: '菰城村村委 / 设计大赛',
    result: '个人独立方案获大赛一等奖、优秀奖；团队作品累计获3个奖项',
    detail: '配合团队完成5款主题视觉，独立产出2套完整方案，分别适配线下宣传展板与新媒体传播。深挖古建筑、非遗民俗等地域文化符号做扁平化视觉转译。',
    theme: 1,
  },
  {
    id: 'stars',
    year: '2026',
    title: '听，星星在说话',
    titleEn: 'LISTEN, STARS SPEAK',
    cat: '公益海报设计',
    role: '项目负责人 / 主设计师',
    desc: '自闭症群体公益主题数媒静态设计，适配米兰设计周评审标准',
    image: 'https://aka.doubaocdn.com/s/PTDD7nc9E3',
    imagesVertical: [
      'https://aka.doubaocdn.com/s/PTDD7nc9E3',
      'https://aka.doubaocdn.com/s/YjwmKl7DJA',
      'https://aka.doubaocdn.com/s/msOh2ul8Iz',
      'https://aka.doubaocdn.com/s/dtXm2RxnBF',
    ],
    date: '2026.03 – 2026.05',
    client: '米兰设计周',
    result: '米兰设计周中国高校设计学科师生优秀作品展 浙江赛区三等奖',
    detail: '领导团队共同完成创意策划、元素提取到视觉落地全链路，高饱和配色结合抽象星星元素传递群体特征，迭代3版构图方案、调整元素层级与光影，解决公益主题同质化痛点，突出人文关怀。',
    theme: 4,
  },
  {
    id: 'badge',
    year: '2025',
    title: '空军工程大学徽章',
    titleEn: 'AFEU BADGE DESIGN',
    cat: '文创设计',
    role: '独立主设计师',
    desc: '空军工程大学装备管理与无人机工程学院院徽纪念徽章全案设计',
    image: 'https://aka.doubaocdn.com/s/iCrSDIzUPG',
    imagesVertical: [
      'https://aka.doubaocdn.com/s/iCrSDIzUPG',
      'https://aka.doubaocdn.com/s/MVcuDVADD1',
      'https://aka.doubaocdn.com/s/EuTlY05IwX',
      'https://aka.doubaocdn.com/s/86B9AWT8a4',
      'https://aka.doubaocdn.com/s/UYKTQIz5dI',
      'https://aka.doubaocdn.com/s/INPefc0Vjw',
    ],
    date: '2025.06 – 2025.09',
    client: '空军工程大学',
    result: '方案定稿量产，亮相2025长春航展官方展台展示派发',
    detail: '独立承接纪念徽章全案，以无人机机身作为核心视觉主体，搭配地球轮廓、五角星、学院名称环形字体构建圆形徽章版式；调试全套CMYK色值，输出分层源文件与多版尺寸效果图，对接校方修改、跟进工厂打样与刺绣工艺量产。',
    theme: 3,
  },
  // 占位项目（动效脚本中提到的序列）
  {
    id: 'maxam',
    year: '2026',
    title: '美加净·上海城市系列',
    titleEn: 'MAXAM Shanghai City Series',
    cat: '品牌视觉识别系统设计（VI）',
    role: '品牌视觉设计师 / 主设计师',
    desc: '以美加净经典品牌资产为根基，结合上海城市地标的霓虹气质，重塑一套完整可落地的品牌视觉手册',
    image: 'https://aka.doubaocdn.com/s/wbyRUua0WU',
    imagesVertical: [
      'https://aka.doubaocdn.com/s/wbyRUua0WU',
      'https://aka.doubaocdn.com/s/MBd1PFvVVQ',
      'https://aka.doubaocdn.com/s/IEUeMQuMnU',
      'https://aka.doubaocdn.com/s/DZvXGkR8uk',
      'https://aka.doubaocdn.com/s/Z9pOJ7OhDy',
      'https://aka.doubaocdn.com/s/kpmpUscnN1',
      'https://aka.doubaocdn.com/s/Eux4gje28i',
      'https://aka.doubaocdn.com/s/Iovlv9hJ9z',
      'https://aka.doubaocdn.com/s/iVzHi5srLH',
      'https://aka.doubaocdn.com/s/f99eNn1rku',
    ],
    date: '2026.03 – 2026.06',
    client: '美加净 MAXAM',
    result: '独立完成50页品牌视觉设计手册，涵盖标志规范、色彩规范、IP形象与全场景应用落地。',
    detail: '以美加净经典品牌资产为根基，结合上海城市地标的霓虹气质，重塑一套完整可落地的品牌视觉手册。从品牌标志、色彩体系、字体规范，到办公系统、企业环境、原创IP形象「沪芽芽」与广告物料，完成基础系统、应用系统、广告系统三大板块的统一视觉语言，让国民老品牌在都市语境中焕新。',
    theme: 5,
  },
  {
    id: 'tianyige-sweetj',
    year: '2025',
    title: '阁纳五福·阅见天一',
    titleEn: 'TIANYIGE SPRING FESTIVAL',
    cat: '新春快闪视觉设计',
    role: '视觉设计师 / 主设计师',
    desc: '以宁波天一阁古建筑与藏书文化为基底，融合五福民俗，选取西门、戏台、古籍等场景，融合天一阁、瑞兽等元素，结合"天一·生水"为IP，以插画AI设计打造五福IP新春快闪与轻量化视觉设计，做现代设计传播，兼顾潮玩、科普与实用价值。',
    image: 'https://aka.doubaocdn.com/s/DjN9W8OQCG',
    imagesVertical: [
      'https://aka.doubaocdn.com/s/DjN9W8OQCG',
      'https://aka.doubaocdn.com/s/O3ktcX9JMj',
      'https://aka.doubaocdn.com/s/O4bIkBYQRB',
    ],
    date: '2025',
    client: '天一阁',
    result: '完成五福IP新春快闪视觉设计，含主视觉海报、场景插画与轻量化传播物料。',
    detail: '以宁波天一阁古建筑与藏书文化为基底，融合五福民俗，选取西门、戏台、古籍等场景，融合天一阁、瑞兽等元素，结合"天一·生水"为IP，以插画AI设计打造五福IP新春快闪与轻量化视觉设计，做现代设计传播，兼顾潮玩、科普与实用价值。',
    theme: 5,
  },
  {
    id: 'shenkong',
    year: '2025',
    title: '深空絮语',
    titleEn: 'WHISPER OF DEEP SPACE',
    cat: 'IP衍生品包装设计',
    role: '视觉设计师 / 主设计师',
    desc: '本款《深空絮语》CD典藏礼盒为恋与深空IP春日限定原声典藏产品，对标官方《深空的回响》CD礼盒产品体系',
    image: 'https://aka.doubaocdn.com/s/cTLEjUr1hc',
    imagesVertical: [
      'https://aka.doubaocdn.com/s/cTLEjUr1hc',
      'https://aka.doubaocdn.com/s/1qbcJQDTHQ',
    ],
    date: '2025',
    client: '恋与深空 LOVE AND DEEPSPACE',
    result: '完成春日主题CD典藏礼盒全套包装设计，含刀版图、CD套装、收纳夹、心意卡、拍立得小卡、徽章、海报等系列物料，并完成多场景应用展示。',
    detail: '本款《深空絮语》CD典藏礼盒为恋与深空IP春日限定原声典藏产品，对标官方《深空的回响》CD礼盒产品体系，围绕春日花间茶会、郊野春游核心主题进行全系列视觉与内容企划，延续原作典藏礼盒精装工艺与配件规格，以春日氛围串联整套产品，打造兼具收藏价值、视听体验与故事氛围的限定原声礼盒。',
    theme: 5,
  },
];

function WorkGridCard({ work, onClick }) {
  return (
    <div className="work-card-grid" onClick={() => onClick(work)}>
      <img src={work.image} alt={work.title} className="work-card-img contain" />
      <div className="work-card-body">
        <div className="work-card-cat">{work.cat.toUpperCase()}</div>
        <div className="work-card-title">{work.title}</div>
        <div className="work-card-desc">{work.desc}</div>
      </div>
    </div>
  );
}

function DetailPanel({ work, onClose, onPrev, onNext, total, currentIndex }) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    setGalleryIndex(0);
  }, [work?.id]);

  const hasGallery = work?.images && work.images.length > 1;

  const handleGalleryPrev = (e) => {
    e.stopPropagation();
    if (!hasGallery) return;
    setGalleryIndex(prev => (prev - 1 + work.images.length) % work.images.length);
  };

  const handleGalleryNext = (e) => {
    e.stopPropagation();
    if (!hasGallery) return;
    setGalleryIndex(prev => (prev + 1) % work.images.length);
  };

  const handleScroll = (e) => {
    const el = e.currentTarget;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setGalleryIndex(idx);
  };

  if (!work) return null;

  return (
    <div className="detail-panel" onClick={onClose}>
      <div className="detail-content" onClick={(e) => e.stopPropagation()}>
        <div className="detail-image-side">
          <button className="detail-close" onClick={onClose}>×</button>
          {hasGallery && (
            <button className="detail-nav prev" onClick={handleGalleryPrev}>‹</button>
          )}
          {!hasGallery && (
            <button className="detail-nav prev" onClick={onPrev}>‹</button>
          )}
          {hasGallery && (
            <button className="detail-nav next" onClick={handleGalleryNext}>›</button>
          )}
          {!hasGallery && (
            <button className="detail-nav next" onClick={onNext}>›</button>
          )}

          {hasGallery ? (
            <div className="detail-image-scroll">
              <div
                className="detail-gallery"
                ref={galleryRef}
                onScroll={handleScroll}
              >
                {work.images.map((src, i) => (
                  <div key={i} className="detail-gallery-slide">
                    <img
                      src={src}
                      alt={`${work.title} ${i + 1}`}
                      className="detail-main-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : work.imagesVertical ? (
            <div className="detail-image-scroll">
              <div className="detail-vertical-images">
                {work.imagesVertical.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${work.title} ${i + 1}`}
                    className="detail-main-image contain"
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="detail-image-scroll">
              <img src={work.image} alt={work.title} className={`detail-main-image ${(work.id === 'guxian' || work.id === 'gucheng' || work.id === 'stars' || work.id === 'badge') ? 'contain' : ''}`} />
            </div>
          )}

          {hasGallery && (
            <div className="detail-gallery-dots">
              {work.images.map((_, i) => (
                <div
                  key={i}
                  className={`detail-gallery-dot ${i === galleryIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryIndex(i);
                    if (galleryRef.current) {
                      galleryRef.current.scrollTo({ left: i * galleryRef.current.clientWidth, behavior: 'smooth' });
                    }
                  }}
                />
              ))}
            </div>
          )}

          {hasGallery && (
            <div className="detail-gallery-counter">
              {galleryIndex + 1} / {work.images.length}
            </div>
          )}
        </div>
        <div className={`detail-info-side theme-${work.theme || 1}`}>
          <div className="detail-year">{work.year} · {work.date}</div>
          <h3 className="detail-title">{work.title}</h3>
          <div className="detail-subtitle">{work.titleEn}</div>

          <div className="detail-section">
            <div className="detail-section-label">项目类别</div>
            <div className="detail-section-text">{work.cat}</div>
          </div>

          <div className="detail-section">
            <div className="detail-section-label">项目简介</div>
            <div className="detail-section-text">{work.detail}</div>
          </div>

          <div className="detail-result">
            <div className="detail-result-label">✦ 项目成果</div>
            <div className="detail-result-text">{work.result}</div>
          </div>

          <div className="detail-meta-grid">
            <div className="detail-meta-item">
              <span className="detail-meta-label">ROLE</span>
              <span className="detail-meta-value">{work.role}</span>
            </div>
            <div className="detail-meta-item">
              <span className="detail-meta-label">CLIENT</span>
              <span className="detail-meta-value">{work.client}</span>
            </div>
          </div>

          <div style={{
            marginTop: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--ink-400)',
            textAlign: 'center',
            letterSpacing: '0.15em',
          }}>
            {currentIndex + 1} / {total}
          </div>
        </div>
      </div>
    </div>
  );
}

function WorksPage({ navLinks, currentView, onNavigate }) {
  const [selectedWork, setSelectedWork] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (work) => {
    const idx = ALL_WORKS.findIndex(w => w.id === work.id);
    setCurrentIndex(idx);
    setSelectedWork(work);
  };

  const handleClose = () => {
    setSelectedWork(null);
  };

  const handlePrev = () => {
    const newIdx = (currentIndex - 1 + ALL_WORKS.length) % ALL_WORKS.length;
    setCurrentIndex(newIdx);
    setSelectedWork(ALL_WORKS[newIdx]);
  };

  const handleNext = () => {
    const newIdx = (currentIndex + 1) % ALL_WORKS.length;
    setCurrentIndex(newIdx);
    setSelectedWork(ALL_WORKS[newIdx]);
  };

  // 键盘左右箭头
  useEffect(() => {
    if (!selectedWork) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedWork, currentIndex]);

  return (
    <div className="works-page">
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

      <section className="works-section">
        <div className="section-heading">
          <span className="section-num">ALL WORKS / {ALL_WORKS.length}</span>
          <h2 className="section-title">作品集</h2>
          <span className="section-title-cn">PORTFOLIO</span>
        </div>

        <div className="works-grid">
          {ALL_WORKS.map(work => (
            <WorkGridCard key={work.id} work={work} onClick={handleOpen} />
          ))}
        </div>
      </section>

      {selectedWork && (
        <DetailPanel
          work={selectedWork}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
          total={ALL_WORKS.length}
          currentIndex={currentIndex}
        />
      )}
    </div>
  );
}

// Export
Object.assign(window, {
  WorksPage,
  DetailPanel,
  ALL_WORKS,
});
