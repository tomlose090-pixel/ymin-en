"use client";

import { useMemo, useState } from "react";

type ModuleKey = "统计" | "首页" | "产品中心" | "应用中心" | "设计工具" | "服务支持" | "关于永铭";

const modules: { key: ModuleKey; icon: string; children: string[] }[] = [
  { key: "统计", icon: "◔", children: ["数据概览", "访问趋势", "访客分析", "内容排行"] },
  { key: "首页", icon: "⌂", children: ["轮播图管理", "核心优势", "推荐产品", "合作伙伴"] },
  { key: "产品中心", icon: "◇", children: ["产品分类", "产品列表", "产品参数", "资料下载"] },
  { key: "应用中心", icon: "▦", children: ["应用分类", "应用案例", "行业方案", "客户案例"] },
  { key: "设计工具", icon: "✦", children: ["工具列表", "选型工具", "计算工具", "使用指南"] },
  { key: "服务支持", icon: "♧", children: ["服务项目", "技术支持", "常见问题", "联系表单"] },
  { key: "关于永铭", icon: "◎", children: ["企业介绍", "发展历程", "荣誉资质", "新闻动态"] },
];

const moduleRows: Record<Exclude<ModuleKey, "统计">, { title: string; category: string; status: string; time: string }[]> = {
  首页: [
    { title: "聚焦高可靠电容器解决方案", category: "首页轮播", status: "已发布", time: "2026-08-11 09:30" },
    { title: "让创新产品更快落地", category: "核心优势", status: "已发布", time: "2026-08-10 16:20" },
    { title: "新能源行业应用专题", category: "推荐内容", status: "草稿", time: "2026-08-09 14:10" },
  ],
  产品中心: [
    { title: "导电高分子固态铝电解电容器", category: "固态电容", status: "已发布", time: "2026-08-11 08:45" },
    { title: "车规级混合型电解电容器", category: "车规产品", status: "已发布", time: "2026-08-10 13:05" },
    { title: "多层陶瓷片式电容器", category: "陶瓷电容", status: "待审核", time: "2026-08-08 17:40" },
  ],
  应用中心: [
    { title: "新能源汽车电驱系统解决方案", category: "汽车电子", status: "已发布", time: "2026-08-11 10:15" },
    { title: "AI 服务器电源应用", category: "工业电源", status: "已发布", time: "2026-08-07 11:20" },
    { title: "光伏储能系统应用", category: "新能源", status: "草稿", time: "2026-08-05 15:55" },
  ],
  设计工具: [
    { title: "电容器智能选型工具", category: "选型工具", status: "已发布", time: "2026-08-11 09:00" },
    { title: "纹波电流计算器", category: "计算工具", status: "已发布", time: "2026-08-06 12:30" },
    { title: "寿命估算工具 2.0", category: "计算工具", status: "开发中", time: "2026-08-03 18:10" },
  ],
  服务支持: [
    { title: "产品选型与应用支持", category: "技术支持", status: "已发布", time: "2026-08-10 10:40" },
    { title: "样品申请服务", category: "客户服务", status: "已发布", time: "2026-08-08 09:25" },
    { title: "高频问题解答", category: "常见问题", status: "待审核", time: "2026-08-04 16:05" },
  ],
  关于永铭: [
    { title: "上海永铭电子股份有限公司", category: "企业介绍", status: "已发布", time: "2026-08-11 08:10" },
    { title: "永铭发展历程", category: "发展历程", status: "已发布", time: "2026-08-02 13:30" },
    { title: "2026 年度企业新闻", category: "新闻动态", status: "草稿", time: "2026-08-01 10:00" },
  ],
};

const trend = [36, 48, 62, 70, 56, 44, 52, 59, 68, 65, 47, 39, 51, 86, 42, 46, 61, 58, 41, 38, 64, 57, 88, 54, 49, 40, 34, 45, 52, 60];

function Dashboard() {
  return (
    <>
      <section className="metric-grid">
        {[
          ["昨日浏览量", "3,286", "PV", "#8b6fea"],
          ["昨日访客量", "1,748", "IP", "#00b894"],
          ["表单询盘", "546", "条", "#1769e8"],
          ["收录页面", "907", "页", "#ff856f"],
          ["服务剩余", "368", "天", "#08abc4"],
        ].map(([label, value, unit, color]) => (
          <article className="metric" key={label} style={{ "--accent": color } as React.CSSProperties}>
            <div className="metric-icon">⌁</div><div><strong>{value}</strong><span>{unit}</span><p>{label}</p></div>
          </article>
        ))}
      </section>

      <section className="info-grid">
        <article className="card solution-card">
          <div className="card-head"><h3>官网方案信息</h3><span className="soft-badge">运行正常</span></div>
          <dl><div><dt>公司名称</dt><dd>上海永铭电子股份有限公司</dd></div><div><dt>后台版本</dt><dd>YMIN CMS 企业版</dd></div><div><dt>最近更新</dt><dd>2026-08-11 09:32</dd></div></dl>
        </article>
        <article className="card compact-stat">
          <div className="card-head"><h3>网站访问量统计</h3><button className="text-btn">详情</button></div>
          <div><span>累计浏览量</span><strong>286,214 <small>PV</small></strong></div><div><span>累计访客量</span><strong>132,908 <small>IP</small></strong></div><div><span>询盘转化率</span><strong>0.41 <small>%</small></strong></div>
        </article>
        <article className="card compact-stat">
          <div className="card-head"><h3>内容发布概况</h3><button className="text-btn">管理</button></div>
          <div><span>产品总数</span><strong>114</strong></div><div><span>应用案例</span><strong>67</strong></div><div><span>新闻动态</span><strong>34</strong></div>
        </article>
      </section>

      <section className="chart-grid">
        <article className="card trend-card">
          <div className="card-head"><div><h3>30 天访问量统计</h3><p>访客趋势保持稳定，较上月增长 12.6%</p></div><div className="range"><button className="active">30 天</button><button>90 天</button></div></div>
          <div className="chart-area">
            <div className="y-labels"><span>1500</span><span>1000</span><span>500</span><span>0</span></div>
            <div className="bars">{trend.map((value, i) => <div className="bar-col" key={i}><i style={{ height: `${value}%` }} /><b style={{ bottom: `${value}%` }} /></div>)}</div>
          </div>
          <div className="chart-legend"><span><i className="dot blue" />独立访客（IP）</span><span><i className="dot gray" />浏览次数（PV）</span></div>
        </article>
        <article className="card country-card">
          <div className="card-head"><div><h3>访客国家统计</h3><p>近 30 天访问来源</p></div></div>
          <div className="country-content"><div className="donut"><span>126</span><small>国家/地区</small></div><ul><li><i className="us" />中国 <b>42.5%</b></li><li><i className="in" />美国 <b>24.5%</b></li><li><i className="de" />印度 <b>12.6%</b></li><li><i className="other" />其他 <b>20.4%</b></li></ul></div>
        </article>
      </section>

      <section className="bottom-grid">
        <article className="card"><div className="card-head"><h3>最新内容</h3><button className="text-btn">查看全部</button></div><div className="mini-list"><div><span className="list-icon">产</span><p>车规级电容器系列更新<small>产品中心 · 18 分钟前</small></p><b className="status live">已发布</b></div><div><span className="list-icon cyan">案</span><p>工业电源应用方案<small>应用中心 · 2 小时前</small></p><b className="status draft">草稿</b></div></div></article>
        <article className="card"><div className="card-head"><h3>待办事项</h3><span className="count-badge">5</span></div><div className="todo"><label><input type="checkbox" /> 审核 3 条产品内容</label><label><input type="checkbox" /> 回复 2 条客户询盘</label><label><input type="checkbox" /> 更新首页轮播图</label></div></article>
      </section>
    </>
  );
}

function ModulePage({ active, sub }: { active: Exclude<ModuleKey, "统计">; sub: string }) {
  const rows = moduleRows[active];
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => rows.filter((row) => row.title.includes(query) || row.category.includes(query)), [rows, query]);
  return (
    <section className="module-page">
      <div className="module-summary">
        <div><p>{active}</p><h2>{sub}</h2><span>管理官网中的{sub}内容，支持新增、编辑、发布与排序。</span></div>
        <button className="primary-btn" onClick={() => alert(`新建${sub}`)}>＋ 新建内容</button>
      </div>
      <div className="summary-strip"><div><span>全部内容</span><strong>{rows.length + 18}</strong></div><div><span>已发布</span><strong>{rows.length + 12}</strong></div><div><span>草稿箱</span><strong>4</strong></div><div><span>本月更新</span><strong>9</strong></div></div>
      <article className="card table-card">
        <div className="table-tools"><div className="search"><span>⌕</span><input aria-label="搜索内容" placeholder="搜索标题或分类" value={query} onChange={(e) => setQuery(e.target.value)} /></div><div><button className="outline-btn">筛选</button><button className="outline-btn">排序</button></div></div>
        <div className="table-wrap"><table><thead><tr><th><input type="checkbox" aria-label="全选" /></th><th>内容标题</th><th>所属分类</th><th>状态</th><th>更新时间</th><th>操作</th></tr></thead><tbody>{filtered.map((row) => <tr key={row.title}><td><input type="checkbox" aria-label={`选择${row.title}`} /></td><td><strong>{row.title}</strong></td><td>{row.category}</td><td><span className={`status ${row.status === "已发布" ? "live" : "draft"}`}>{row.status}</span></td><td>{row.time}</td><td><button className="action-btn">编辑</button><button className="more-btn">•••</button></td></tr>)}</tbody></table>{filtered.length === 0 && <div className="empty">没有找到匹配内容</div>}</div>
        <div className="pagination"><span>共 {filtered.length} 条</span><div><button disabled>‹</button><button className="current">1</button><button>2</button><button>›</button></div></div>
      </article>
    </section>
  );
}

export default function Home() {
  const [active, setActive] = useState<ModuleKey>("统计");
  const [sub, setSub] = useState("数据概览");
  const [collapsed, setCollapsed] = useState(false);
  const current = modules.find((item) => item.key === active)!;
  const activate = (key: ModuleKey) => { setActive(key); setSub(modules.find((item) => item.key === key)!.children[0]); };

  return (
    <div className={`admin-shell ${collapsed ? "collapsed" : ""}`}>
      <aside className="main-nav">
        <div className="brand"><span>Y</span><strong>永铭</strong></div>
        <nav>{modules.map((item) => <button key={item.key} className={active === item.key ? "active" : ""} onClick={() => activate(item.key)}><span className="nav-icon">{item.icon}</span><em>{item.key}</em></button>)}</nav>
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)} aria-label="折叠菜单">{collapsed ? "›" : "‹"}</button>
      </aside>

      <aside className="sub-nav">
        <div className="sub-title"><span className="sub-logo">{current.icon}</span><div><strong>{active}</strong><small>YMIN ADMIN</small></div></div>
        <nav>{current.children.map((item) => <button key={item} className={sub === item ? "active" : ""} onClick={() => setSub(item)}><i />{item}<span>›</span></button>)}</nav>
        <div className="help-card"><span>?</span><p>需要帮助？<small>查看后台使用指南</small></p></div>
      </aside>

      <main>
        <header className="topbar"><div><button className="mobile-menu" onClick={() => setCollapsed(!collapsed)}>☰</button><span>官网后台</span><b>/</b><strong>{active}</strong><b>/</b><em>{sub}</em></div><div className="user-area"><button aria-label="搜索">⌕</button><button aria-label="通知" className="notice">♢<i /></button><span className="avatar">YM</span><div><strong>管理员</strong><small>超级管理员</small></div><span>⌄</span></div></header>
        <div className="content"><div className="page-heading"><div><h1>{active === "统计" ? "数据概览" : sub}</h1><p>{active === "统计" ? "欢迎回来，这是永铭官网今日的运营概况。" : `${active} / ${sub}`}</p></div><span className="date">2026年8月11日 · 星期二</span></div>{active === "统计" ? <Dashboard /> : <ModulePage active={active} sub={sub} />}</div>
      </main>
    </div>
  );
}
