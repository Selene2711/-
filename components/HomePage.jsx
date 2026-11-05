// HomePage.jsx - 首页个人简介 + 精选作品列表
const { useState, useEffect, useRef } = React;

// 作品列表数据
const HOME_WORKS = [
  {
    id: 'guxian',
    year: '2026',
    title: '古贤智韵',
    titleEn: 'ANCIENT SAGES',
    cat: '数媒静态设计 · 赛事',
    role: '项目负责人 / 主设计师',
    desc: '融合传统儒家文化元素与现代设计语言，面向中国大学生计算机设计大赛',
    image: 'https://aka.doubaocdn.com/s/UffkWNfgyh',
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
    cat: '文旅创意设计 · 竞赛',
    role: '主创设计师',
    desc: '面向湖州菰城村文旅推广，深挖古建筑、非遗民俗等地域文化符号做扁平化视觉转译',
    image: 'https://aka.doubaocdn.com/s/ko02M9itdw',
    date: '2025.12 – 2026.05',
    client: '菰城村村委 / 设计大赛',
    result: '个人独立方案获大赛一等奖、优秀奖；团队作品累计获3个奖项；部分方案被村委采纳用于文旅宣传物料',
    detail: '配合团队完成5款主题视觉，独立产出2套完整方案，分别适配线下宣传展板与新媒体传播。深挖古建筑、非遗民俗等地域文化符号做扁平化视觉转译。',
    theme: 1,
  },
  {
    id: 'stars',
    year: '2026',
    title: '听，星星在说话',
    titleEn: 'LISTEN, STARS SPEAK',
    cat: '公益海报设计 · 赛事',
    role: '项目负责人 / 主设计师',
    desc: '自闭症群体公益主题参赛的数媒静态设计作品，适配米兰设计周评审标准',
    image: 'https://aka.doubaocdn.com/s/PTDD7nc9E3',
    date: '2026.03 – 2026.05',
    client: '米兰设计周',
    result: '米兰设计周中国高校设计学科师生优秀作品展 浙江赛区三等奖',
    detail: '独立完成创意策划、元素提取到视觉落地全链路，低饱和莫兰迪配色结合抽象星星元素传递群体特征，迭代3版构图方案、调整元素层级与光影，解决公益主题同质化痛点，突出人文关怀。',
    theme: 4,
  },
  {
    id: 'badge',
    year: '2025',
    title: '空军工程大学徽章',
    titleEn: 'AFEU BADGE DESIGN',
    cat: '文创设计 · 商业项目',
    role: '独立主设计师',
    desc: '空军工程大学装备管理与无人机工程学院院徽纪念徽章全案设计',
    image: 'https://aka.doubaocdn.com/s/iCrSDIzUPG',
    date: '2025.06 – 2025.09',
    client: '空军工程大学',
    result: '方案定稿量产，实物徽章亮相2025长春航展官方展台展示派发，成为学院官方文创礼品',
    detail: '独立承接纪念徽章全案，以无人机机身作为核心视觉主体，搭配地球轮廓、五角星、学院名称环形字体构建圆形徽章版式；调试全套CMYK色值，输出分层源文件与多版尺寸效果图，对接校方修改、跟进工厂打样与刺绣工艺量产。',
    theme: 3,
  },
  {
    id: 'maxam',
    year: '2026',
    title: '美加净·上海城市系列',
    titleEn: 'MAXAM Shanghai City Series',
    cat: '品牌视觉识别系统设计（VI）',
    role: '品牌视觉设计师 / 主设计师',
    desc: '以美加净经典品牌资产为根基，结合上海城市地标的霓虹气质，重塑一套完整可落地的品牌视觉手册',
    image: 'https://aka.doubaocdn.com/s/wbyRUua0WU',
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
    date: '2025',
    client: '恋与深空 LOVE AND DEEPSPACE',
    result: '完成春日主题CD典藏礼盒全套包装设计，含刀版图、CD套装、收纳夹、心意卡、拍立得小卡、徽章、海报等系列物料，并完成多场景应用展示。',
    detail: '本款《深空絮语》CD典藏礼盒为恋与深空IP春日限定原声典藏产品，对标官方《深空的回响》CD礼盒产品体系，围绕春日花间茶会、郊野春游核心主题进行全系列视觉与内容企划，延续原作典藏礼盒精装工艺与配件规格，以春日氛围串联整套产品，打造兼具收藏价值、视听体验与故事氛围的限定原声礼盒。',
    theme: 5,
  },
];

function HomeHero({ onExploreWorks }) {
  return (
    <section className="home-hero">
      <div className="hero-meta">SELENE · VISUAL DESIGN PORTFOLIO · 2026</div>
      <h1 className="hero-title">SELENE.</h1>
      <div className="hero-subtitle">石桢 · 视觉传达设计师</div>
      <p className="hero-desc">
        视觉传达设计专业在读，拥有国家级、省级、校级多级别设计赛事实战经验。
        擅长创意视觉、公益海报、文旅视觉及数字媒体平面设计，
        可独立完成平面、数媒、文旅类项目全流程设计。
      </p>
      <div className="hero-scroll-indicator">
        SCROLL
        <br />
        ↓
      </div>
    </section>
  );
}

function WorkRow({ work, onOpen, onHover, onLeave, hoverPos }) {
  return (
    <div
      className="work-row"
      onClick={() => onOpen(work)}
      onMouseEnter={(e) => onHover(work, e)}
      onMouseMove={(e) => onHover(work, e)}
      onMouseLeave={onLeave}
    >
      <div className="work-row-year">{work.year}</div>
      <div className="work-row-info">
        <div className="work-row-title">{work.title}</div>
        <div className="work-row-cat">{work.cat}</div>
      </div>
      <div className="work-row-role">{work.role}</div>
      <div className="work-row-arrow">→</div>
    </div>
  );
}

function WorkPreviewCard({ work, position, visible }) {
  if (!work) return null;
  return (
    <div
      className={`work-preview-card ${visible ? 'visible' : ''}`}
      style={{
        left: position.x + 20,
        top: position.y - 60,
      }}
    >
      <div className="work-preview-header">
        <span>{work.year}</span>
        <span>{work.titleEn}</span>
      </div>
      <img src={work.image} alt={work.title} className="work-preview-img cover" />
      <div className="work-preview-footer">{work.title}</div>
    </div>
  );
}

function HomePage({ onOpenDetail, navLinks, currentView, onNavigate }) {
  const [hoveredWork, setHoveredWork] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [previewVisible, setPreviewVisible] = useState(false);

  const handleHover = (work, e) => {
    setHoveredWork(work);
    setHoverPos({ x: e.clientX, y: e.clientY });
    setPreviewVisible(true);
  };

  const handleLeave = () => {
    setPreviewVisible(false);
  };

  return (
    <div className="home-page">
      {/* Top Nav */}
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

      <HomeHero />

      <section className="works-section">
        <div className="section-heading">
          <span className="section-num">01 / WORKS</span>
          <h2 className="section-title">SELECTED WORKS</h2>
          <span className="section-title-cn">精选作品</span>
        </div>

        {HOME_WORKS.map(work => (
          <WorkRow
            key={work.id}
            work={work}
            onOpen={onOpenDetail}
            onHover={handleHover}
            onLeave={handleLeave}
            hoverPos={hoverPos}
          />
        ))}
      </section>

      {/* Hover preview */}
      <WorkPreviewCard
        work={hoveredWork}
        position={hoverPos}
        visible={previewVisible}
      />
    </div>
  );
}

// Export
Object.assign(window, {
  HomePage,
  HOME_WORKS,
  WorkPreviewCard,
});
