import React from 'react';
import { monthlyPlan, weeklyPlan } from '../data.js';
import { SectionHeader, Card, CardHeader } from './UI.jsx';

export default function MonthlyTab() {
  return (
    <div>
      <SectionHeader title="🗓 برنامه ماهانه" sub="هر ماه یک تمرکز اصلی دارد" />

      {monthlyPlan.map((m, i) => (
        <Card key={i}>
          <CardHeader color={m.color} title={`${m.icon} ${m.month}`} sub={`تمرکز: ${m.focus}`} />
          <div style={{ padding: '12px 14px' }}>
            {m.tasks.map((t, j) => (
              <div key={j} style={{
                display: 'flex', alignItems: 'flex-start', gap: 8,
                padding: '6px 0',
                borderBottom: j < m.tasks.length - 1 ? '1px solid #f5f5f5' : 'none',
                fontSize: 13,
              }}>
                <span style={{ color: m.color, fontWeight: 700, flexShrink: 0 }}>◆</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}

      <div style={{ background: '#f3f0ff', borderRadius: 12, padding: 14, marginTop: 8 }}>
        <div style={{ fontWeight: 700, color: '#6C5CE7', fontSize: 14, marginBottom: 12 }}>
          📆 نمونه برنامه هفتگی (در دوره تهران)
        </div>
        {weeklyPlan.map((d, i) => (
          <div key={i} style={{
            display: 'flex', gap: 10, padding: '8px 0',
            borderBottom: i < weeklyPlan.length - 1 ? '1px solid #e8e4ff' : 'none',
          }}>
            <span style={{ fontWeight: 700, color: '#6C5CE7', minWidth: 70, fontSize: 13, flexShrink: 0 }}>{d.day}</span>
            <span style={{ fontSize: 13, color: '#444' }}>{d.tasks}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
