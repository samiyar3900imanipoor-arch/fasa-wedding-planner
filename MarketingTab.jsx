import React from 'react';
import { marketingPhases, partners, firstTenCustomers } from '../data.js';
import { SectionHeader, Card, CardHeader, priorityBadge, NumberCircle } from './UI.jsx';

export default function MarketingTab() {
  return (
    <div>
      <SectionHeader title="📣 برنامه بازاریابی" sub="قبل از افتتاح تا ۹۰ روز بعد" />

      {marketingPhases.map((phase, i) => (
        <Card key={i}>
          <div style={{ background: phase.color, color: '#fff', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 13 }}>
            <span style={{ fontSize: 20 }}>{phase.icon}</span>
            <span>{phase.phase}</span>
          </div>
          <div style={{ padding: '10px 14px' }}>
            {phase.actions.map((a, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0', borderBottom: j < phase.actions.length - 1 ? '1px solid #f5f5f5' : 'none' }}>
                {priorityBadge(a.priority)}
                <span style={{ fontSize: 13 }}>{a.action}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}

      {/* Partners */}
      <Card>
        <CardHeader color="#6C5CE7" title="🤝 شرکای استراتژیک در فسا" />
        <div style={{ padding: '10px 14px' }}>
          {partners.map((item, i) => (
            <div key={i} style={{ padding: '8px 0', borderBottom: i < partners.length - 1 ? '1px solid #f5f5f5' : 'none' }}>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{item.partner}</div>
              <div style={{ fontSize: 12, color: '#636e72', marginTop: 3 }}>{item.strategy}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* First 10 customers */}
      <div style={{ background: '#f3f0ff', borderRadius: 12, padding: 14, marginTop: 4 }}>
        <div style={{ fontWeight: 700, color: '#6C5CE7', fontSize: 14, marginBottom: 10 }}>🎯 برنامه جذب اولین ۱۰ مشتری</div>
        {firstTenCustomers.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: i < firstTenCustomers.length - 1 ? '1px solid #e8e4ff' : 'none' }}>
            <NumberCircle n={item.step} color="#6C5CE7" />
            <div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{item.title}</div>
              <div style={{ fontSize: 12, color: '#555', marginTop: 3 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
