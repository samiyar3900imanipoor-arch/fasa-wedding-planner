import React from 'react';
import { risks } from '../data.js';
import { SectionHeader } from './UI.jsx';

const probBadge = (p) => {
  const map = {
    'بالا':   { bg: '#ffecec', color: '#d63031', label: 'احتمال: بالا' },
    'متوسط':  { bg: '#fff8e6', color: '#e17055', label: 'احتمال: متوسط' },
    'پایین':  { bg: '#f0fff4', color: '#00B894', label: 'احتمال: پایین' },
  };
  const st = map[p] || map['متوسط'];
  return (
    <span style={{ padding: '2px 9px', borderRadius: 20, fontSize: 11, fontWeight: 600, background: st.bg, color: st.color, whiteSpace: 'nowrap', flexShrink: 0 }}>
      {st.label}
    </span>
  );
};

export default function RiskTab() {
  return (
    <div>
      <SectionHeader title="⚠️ تحلیل ریسک‌ها" sub="مهم‌ترین ریسک‌ها و راه‌حل‌ها" />

      {risks.map((risk, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: 12, marginBottom: 12, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderRight: `4px solid ${risk.color}` }}>
          <div style={{ padding: '12px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{risk.risk}</div>
              {probBadge(risk.probability)}
            </div>
            <div style={{ fontSize: 12, color: '#555', background: '#f8f9fa', borderRadius: 8, padding: '8px 10px' }}>
              <span style={{ color: '#00B894', fontWeight: 600 }}>راه‌حل: </span>{risk.solution}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
