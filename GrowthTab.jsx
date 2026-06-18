import React from 'react';
import { growthPlan } from '../data.js';
import { SectionHeader, Card, CardHeader, NumberCircle } from './UI.jsx';

export default function GrowthTab() {
  return (
    <div>
      <SectionHeader title="🚀 برنامه توسعه ۲ ساله" sub="از تشریفات تا مزون عروس" />

      {growthPlan.map((phase, i) => (
        <Card key={i}>
          <CardHeader color={phase.color} title={phase.period} />
          <div style={{ padding: '12px 14px' }}>
            {phase.milestones.map((m, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '7px 0', borderBottom: j < phase.milestones.length - 1 ? '1px solid #f5f5f5' : 'none' }}>
                <NumberCircle n={j + 1} color={phase.color} />
                <span style={{ fontSize: 13 }}>{m}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}

      <div style={{ background: 'linear-gradient(135deg,#6C5CE7,#a29bfe)', borderRadius: 12, padding: 20, color: '#fff' }}>
        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>🎯 هدف نهایی: مجموعه کامل عروسی فسا</div>
        <div style={{ fontSize: 13, lineHeight: 2.2 }}>
          <div>✦ دفتر تشریفات با ۱۰۰+ مراسم سالانه</div>
          <div>✦ مزون لباس عروس با ۵۰+ مدل</div>
          <div>✦ شبکه ۱۰+ همکار تخصصی (عکاس، گروه موسیقی، آرایش)</div>
          <div>✦ برند شناخته‌شده در استان فارس</div>
          <div>✦ درآمد ماهانه ۱۵۰-۲۰۰ میلیون تومان</div>
        </div>
      </div>
    </div>
  );
}
