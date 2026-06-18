import { useState, useRef } from 'react';
import { TABS } from './data.js';
import GanttTab     from './components/GanttTab.jsx';
import MonthlyTab   from './components/MonthlyTab.jsx';
import BudgetTab    from './components/BudgetTab.jsx';
import LearningTab  from './components/LearningTab.jsx';
import MarketingTab from './components/MarketingTab.jsx';
import EquipmentTab from './components/EquipmentTab.jsx';
import LegalTab     from './components/LegalTab.jsx';
import FinanceTab   from './components/FinanceTab.jsx';
import RiskTab      from './components/RiskTab.jsx';
import GrowthTab    from './components/GrowthTab.jsx';

const TAB_MAP = {
  gantt:     <GanttTab />,
  monthly:   <MonthlyTab />,
  budget:    <BudgetTab />,
  learning:  <LearningTab />,
  marketing: <MarketingTab />,
  equipment: <EquipmentTab />,
  legal:     <LegalTab />,
  finance:   <FinanceTab />,
  risk:      <RiskTab />,
  growth:    <GrowthTab />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('gantt');
  const tabsRef = useRef(null);

  const handleTab = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // scroll tab strip so active tab is visible
    const btn = tabsRef.current?.querySelector(`[data-id="${id}"]`);
    if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div style={{ fontFamily: "'Tahoma','Arial',sans-serif", background: '#f8f9fa', minHeight: '100vh', color: '#2d3436', direction: 'rtl' }}>

      {/* ─── Header ─── */}
      <div style={{ background: 'linear-gradient(135deg,#6C5CE7 0%,#a29bfe 100%)', color: '#fff', padding: 'calc(env(safe-area-inset-top,16px) + 16px) 16px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: 32, marginBottom: 6 }}>💍</div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>نقشه راه تشریفات فسا</h1>
        <p style={{ margin: '6px 0 12px', fontSize: 12, opacity: 0.9 }}>برنامه جامع عملیاتی | شهریور ۱۴۰۴ تا بهمن ۱۴۰۴</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
          {[
            { label: 'سرمایه اولیه', value: '۱.۵ میلیارد' },
            { label: 'زمان آماده‌سازی', value: '۷ ماه' },
            { label: 'هدف افتتاح', value: 'بهمن ۱۴۰۴' },
          ].map(item => (
            <div key={item.label} style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '6px 12px', fontSize: 12, textAlign: 'center' }}>
              <div style={{ opacity: 0.85 }}>{item.label}</div>
              <div style={{ fontWeight: 700 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Tab Strip ─── */}
      <div ref={tabsRef} style={{ background: '#fff', borderBottom: '2px solid #eee', overflowX: 'auto', whiteSpace: 'nowrap', WebkitOverflowScrolling: 'touch', padding: '0 4px', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            data-id={tab.id}
            onClick={() => handleTab(tab.id)}
            style={{
              display: 'inline-block',
              padding: '12px 13px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: 12,
              fontFamily: 'inherit',
              color: activeTab === tab.id ? '#6C5CE7' : '#636e72',
              fontWeight: activeTab === tab.id ? 700 : 400,
              borderBottom: activeTab === tab.id ? '3px solid #6C5CE7' : '3px solid transparent',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ─── Content ─── */}
      <div style={{ padding: '16px', maxWidth: 640, margin: '0 auto', paddingBottom: 'calc(env(safe-area-inset-bottom,20px) + 20px)' }}>
        {TAB_MAP[activeTab]}
      </div>

      <div style={{ textAlign: 'center', padding: '16px 0 40px', color: '#bbb', fontSize: 11 }}>
        نقشه راه تشریفات فسا 💍
      </div>
    </div>
  );
}
