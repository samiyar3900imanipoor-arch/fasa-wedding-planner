import React from 'react';
import { equipmentPhase1, equipmentPhase2 } from '../data.js';
import { SectionHeader, Card } from './UI.jsx';

export default function EquipmentTab() {
  return (
    <div>
      <SectionHeader title="🛠 لیست تجهیزات" sub="فاز ۱ (ضروری) و فاز ۲ (توسعه)" />

      <div style={{ background: '#e6fff8', border: '2px solid #00B894', borderRadius: 12, padding: '12px 14px', marginBottom: 12 }}>
        <div style={{ fontWeight: 700, color: '#00B894' }}>✅ فاز اول – ضروری برای شروع</div>
        <div style={{ fontSize: 12, color: '#555', marginTop: 4 }}>بودجه تخمینی: ۱۵۰-۲۰۰ میلیون تومان</div>
      </div>

      {equipmentPhase1.map((cat, i) => (
        <Card key={i}>
          <div style={{ background: '#00B894', color: '#fff', padding: '8px 14px', fontSize: 13, fontWeight: 600 }}>{cat.category}</div>
          <div style={{ padding: '8px 14px' }}>
            {cat.items.map((item, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: j < cat.items.length - 1 ? '1px solid #f5f5f5' : 'none', fontSize: 13 }}>
                <span style={{ color: '#00B894', fontSize: 12, flexShrink: 0 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}

      <div style={{ background: '#fff8e6', border: '2px solid #FDCB6E', borderRadius: 12, padding: '12px 14px', margin: '20px 0 12px' }}>
        <div style={{ fontWeight: 700, color: '#e17055' }}>🔜 فاز دوم – پس از ۳-۶ ماه فعالیت</div>
        <div style={{ fontSize: 12, color: '#555', marginTop: 4 }}>بودجه تخمینی: ۲۰۰-۳۰۰ میلیون تومان</div>
      </div>

      {equipmentPhase2.map((cat, i) => (
        <Card key={i}>
          <div style={{ background: '#FDCB6E', color: '#fff', padding: '8px 14px', fontSize: 13, fontWeight: 600 }}>{cat.category}</div>
          <div style={{ padding: '8px 14px' }}>
            {cat.items.map((item, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: j < cat.items.length - 1 ? '1px solid #f5f5f5' : 'none', fontSize: 13 }}>
                <span style={{ color: '#FDCB6E', fontSize: 12, flexShrink: 0 }}>◦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
