import React from 'react';
import { phases } from '../data.js';
import { SectionHeader, priorityBadge } from './UI.jsx';

export default function GanttTab() {
  return (
    <div>
      <SectionHeader title="📅 گانت چارت کامل" sub="از شهریور ۱۴۰۴ تا بهمن ۱۴۰۴" />
      {phases.map((phase) => (
        <div key={phase.id} style={{ marginBottom: 20 }}>
          <div style={{
            background: phase.color, color: '#fff', padding: '10px 14px',
            borderRadius: '12px 12px 0 0', display: 'flex',
            justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, fontSize: 13,
          }}>
            <span>{phase.title}</span>
            <span style={{ fontSize: 11, opacity: 0.9 }}>{phase.period}</span>
          </div>
          <div style={{
            background: '#fff', borderRadius: '0 0 12px 12px',
            border: `1px solid ${phase.color}33`, overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: phase.bg }}>
                  <th style={{ padding: '8px 12px', textAlign: 'right', fontSize: 12, fontWeight: 600, width: '50%' }}>وظیفه</th>
                  <th style={{ padding: '8px 12px', textAlign: 'center', fontSize: 12, fontWeight: 600, width: '20%' }}>شروع</th>
                  <th style={{ padding: '8px 12px', textAlign: 'center', fontSize: 12, fontWeight: 600, width: '30%' }}>اولویت</th>
                </tr>
              </thead>
              <tbody>
                {phase.tasks.map((t, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '9px 12px', fontSize: 12 }}>{t.task}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'center', fontSize: 11, color: '#636e72' }}>{t.start}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'center' }}>{priorityBadge(t.priority)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
