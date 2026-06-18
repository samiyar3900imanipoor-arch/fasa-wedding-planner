import React from 'react';
import { scenarios } from '../data.js';
import { SectionHeader, Card } from './UI.jsx';

export default function FinanceTab() {
  return (
    <div>
      <SectionHeader title="📊 پیش‌بینی مالی ۶ ماه اول" sub="سه سناریو: بدبینانه، واقع‌بینانه، خوش‌بینانه" />

      {scenarios.map((sc, si) => {
        const totRev  = sc.months.reduce((s, m) => s + m.revenue, 0);
        const totCost = sc.months.reduce((s, m) => s + m.cost, 0);
        const totProf = sc.months.reduce((s, m) => s + m.profit, 0);
        return (
          <Card key={si}>
            <div style={{ background: sc.color, color: '#fff', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 14 }}>
                <span>{sc.icon}</span>
                <span>سناریو {sc.name}</span>
              </div>
              <span style={{ fontSize: 11, opacity: 0.9 }}>{sc.desc}</span>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr style={{ background: '#f8f9fa' }}>
                    <th style={{ padding: '8px 10px', fontSize: 12, textAlign: 'right' }}>ماه</th>
                    <th style={{ padding: '8px 10px', fontSize: 12, textAlign: 'center', color: '#00B894' }}>درآمد (م.ت)</th>
                    <th style={{ padding: '8px 10px', fontSize: 12, textAlign: 'center', color: '#e17055' }}>هزینه (م.ت)</th>
                    <th style={{ padding: '8px 10px', fontSize: 12, textAlign: 'center', color: '#6C5CE7' }}>سود/زیان</th>
                  </tr>
                </thead>
                <tbody>
                  {sc.months.map((m, i) => (
                    <tr key={i} style={{ borderTop: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '8px 10px', fontSize: 13, fontWeight: 600 }}>{m.month}</td>
                      <td style={{ padding: '8px 10px', textAlign: 'center', fontSize: 13, color: '#00B894', fontWeight: 600 }}>{m.revenue}</td>
                      <td style={{ padding: '8px 10px', textAlign: 'center', fontSize: 13, color: '#e17055', fontWeight: 600 }}>{m.cost}</td>
                      <td style={{ padding: '8px 10px', textAlign: 'center', fontSize: 13, fontWeight: 700, color: m.profit >= 0 ? '#00B894' : '#d63031' }}>
                        {m.profit >= 0 ? '+' : ''}{m.profit}
                      </td>
                    </tr>
                  ))}
                  <tr style={{ background: '#f8f9fa', fontWeight: 700, borderTop: '2px solid #eee' }}>
                    <td style={{ padding: '8px 10px', fontSize: 13 }}>جمع ۶ ماه</td>
                    <td style={{ padding: '8px 10px', textAlign: 'center', fontSize: 13, color: '#00B894' }}>{totRev}</td>
                    <td style={{ padding: '8px 10px', textAlign: 'center', fontSize: 13, color: '#e17055' }}>{totCost}</td>
                    <td style={{ padding: '8px 10px', textAlign: 'center', fontSize: 13, fontWeight: 700, color: totProf >= 0 ? '#00B894' : '#d63031' }}>
                      {totProf >= 0 ? '+' : ''}{totProf}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        );
      })}

      <div style={{ background: '#f3f0ff', borderRadius: 12, padding: 14 }}>
        <div style={{ fontWeight: 700, color: '#6C5CE7', fontSize: 14, marginBottom: 10 }}>💡 نکات مالی کلیدی</div>
        {[
          'پیش‌پرداخت ۴۰-۵۰٪ را از همان ابتدا جدی بگیرید',
          'هزینه هر مراسم را جداگانه حساب کنید (نه کلی)',
          'ذخیره اضطراری ۱۵۰ میلیون را تا ۱ سال اول دست نزنید',
          'از ماه سوم به بعد، ۲۰٪ سود را برای تجهیزات فاز ۲ کنار بگذارید',
          'یک حسابدار پاره‌وقت از همان ابتدا استخدام کنید',
        ].map((note, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, padding: '7px 0', fontSize: 13, borderBottom: i < 4 ? '1px solid #e8e4ff' : 'none' }}>
            <span style={{ color: '#6C5CE7', flexShrink: 0 }}>💜</span>
            <span>{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
