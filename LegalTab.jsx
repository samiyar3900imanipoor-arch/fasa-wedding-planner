import React from 'react';
import { legalSteps } from '../data.js';
import { SectionHeader, Card } from './UI.jsx';

export default function LegalTab() {
  return (
    <div>
      <SectionHeader title="📋 ثبت کسب‌وکار و مجوزها" sub="مراحل قانونی لازم در ایران" />

      {legalSteps.map((item, i) => (
        <Card key={i}>
          <div style={{ background: item.color, color: '#fff', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, fontSize: 13 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ background: 'rgba(255,255,255,0.3)', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>{item.step}</span>
              <span>{item.title}</span>
            </div>
            <span style={{ fontSize: 11, opacity: 0.9, flexShrink: 0 }}>{item.when}</span>
          </div>
          <div style={{ padding: '10px 14px' }}>
            {item.details.map((d, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '5px 0', fontSize: 13, borderBottom: j < item.details.length - 1 ? '1px solid #f5f5f5' : 'none' }}>
                <span style={{ color: item.color, flexShrink: 0 }}>←</span>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}

      <div style={{ background: '#ffecec', border: '2px solid #e17055', borderRadius: 12, padding: 14 }}>
        <div style={{ fontWeight: 700, color: '#d63031', marginBottom: 8, fontSize: 14 }}>⚠️ نکات مهم قانونی</div>
        {[
          'تمام قراردادها با مشتریان باید کتبی و با مبلغ مشخص باشد',
          'حتماً از ابتدا حساب شخصی و کسب‌وکار را جدا نگه دارید',
          'بیمه مسئولیت مدنی برای مراسم‌ها را بررسی کنید',
          'با یک حسابدار محلی از همان ابتدا همکاری کنید',
        ].map((note, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '6px 0', fontSize: 13, borderBottom: i < 3 ? '1px solid #ffd5d5' : 'none' }}>
            <span style={{ color: '#d63031', flexShrink: 0 }}>←</span>
            <span>{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
