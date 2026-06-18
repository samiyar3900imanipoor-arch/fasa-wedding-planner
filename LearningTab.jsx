import React from 'react';
import { learningPlan, tehranConnections } from '../data.js';
import { SectionHeader, Card, CardHeader } from './UI.jsx';

export default function LearningTab() {
  return (
    <div>
      <SectionHeader title="📚 برنامه یادگیری ۴ ماهه" sub="در دفتر تشریفات تهران" />

      {learningPlan.map((m, i) => (
        <Card key={i}>
          <div style={{ background: m.color, color: '#fff', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 26 }}>{m.icon}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{m.month}</div>
              <div style={{ fontSize: 11, opacity: 0.9 }}>{m.title}</div>
            </div>
          </div>
          <div style={{ padding: '12px 14px' }}>
            <div style={{ fontWeight: 700, color: m.color, fontSize: 13, marginBottom: 8 }}>✅ مهارت‌های هدف</div>
            {m.skills.map((s, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '5px 0', borderBottom: j < m.skills.length - 1 ? '1px solid #f5f5f5' : 'none', fontSize: 13 }}>
                <span style={{ color: m.color, flexShrink: 0 }}>●</span>
                <span>{s}</span>
              </div>
            ))}
            <div style={{ fontWeight: 700, color: '#636e72', fontSize: 13, margin: '12px 0 8px' }}>❓ سؤالاتی که باید بپرسید</div>
            {m.questions.map((q, j) => (
              <div key={j} style={{ background: '#f8f9fa', borderRadius: 8, padding: '8px 10px', marginBottom: 6, fontSize: 12, color: '#444' }}>{q}</div>
            ))}
          </div>
        </Card>
      ))}

      <div style={{ background: '#e6fff8', border: '2px solid #00B894', borderRadius: 12, padding: 14 }}>
        <div style={{ fontWeight: 700, color: '#00B894', marginBottom: 10, fontSize: 14 }}>🤝 ارتباطاتی که باید در تهران بسازید</div>
        {tehranConnections.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: i < tehranConnections.length - 1 ? '1px solid #c3f5e8' : 'none' }}>
            <span style={{ fontWeight: 700, color: '#00B894', minWidth: 22, flexShrink: 0 }}>{i + 1}.</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{item.who}</div>
              <div style={{ fontSize: 12, color: '#636e72' }}>{item.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
