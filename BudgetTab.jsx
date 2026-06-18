import React from 'react';
import { budgetData } from '../data.js';
import { SectionHeader, Card, CardHeader } from './UI.jsx';

const TOTAL = 1500;
const ALLOCATED = 1023;
const REMAINING = TOTAL - ALLOCATED;
const PCT = Math.round((ALLOCATED / TOTAL) * 100);

export default function BudgetTab() {
  return (
    <div>
      <SectionHeader title="💰 بودجه‌بندی کامل" sub="تقسیم ۱.۵ میلیارد تومان" />

      {/* Summary */}
      <Card>
        <div style={{ padding: '14px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#6C5CE7' }}>{TOTAL.toLocaleString()}</div>
              <div style={{ fontSize: 11, color: '#636e72' }}>کل سرمایه (م.ت)</div>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#e17055' }}>{ALLOCATED.toLocaleString()}</div>
              <div style={{ fontSize: 11, color: '#636e72' }}>تخصیص‌یافته (م.ت)</div>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#00B894' }}>{REMAINING.toLocaleString()}</div>
              <div style={{ fontSize: 11, color: '#636e72' }}>مانده/انعطاف (م.ت)</div>
            </div>
          </div>
          <div style={{ background: '#f5f5f5', borderRadius: 8, height: 10, overflow: 'hidden', marginTop: 14 }}>
            <div style={{ width: `${PCT}%`, height: '100%', background: 'linear-gradient(to left,#6C5CE7,#a29bfe)', borderRadius: 8 }} />
          </div>
          <div style={{ textAlign: 'center', fontSize: 11, color: '#636e72', marginTop: 4 }}>{PCT}٪ از سرمایه برنامه‌ریزی شده</div>
        </div>
      </Card>

      {/* Categories */}
      {budgetData.map((cat, i) => {
        const total = cat.items.reduce((s, item) => s + item.amount, 0);
        return (
          <Card key={i}>
            <CardHeader color={cat.color} title={cat.category} sub={`${total} م.ت`} />
            <table>
              <tbody>
                {cat.items.map((item, j) => (
                  <tr key={j} style={{ borderTop: '1px solid #f5f5f5' }}>
                    <td style={{ padding: '9px 12px', fontSize: 12 }}>{item.name}</td>
                    <td style={{ padding: '9px 12px', fontSize: 11, color: '#999' }}>{item.note}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'left', fontWeight: 700, fontSize: 13, color: cat.color, whiteSpace: 'nowrap' }}>{item.amount} م.ت</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        );
      })}

      {/* Rent estimates */}
      <div style={{ background: '#fff9e6', border: '2px solid #FDCB6E', borderRadius: 12, padding: 14 }}>
        <div style={{ fontWeight: 700, color: '#e17055', marginBottom: 10, fontSize: 14 }}>⚠️ هزینه اجاره در فسا (تخمین ۱۴۰۴)</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            { label: 'ودیعه مغازه (۶۰-۸۰م²)', value: '۱۰۰-۲۰۰ م.ت' },
            { label: 'اجاره ماهانه مغازه',     value: '۱۰-۲۰ م.ت'  },
            { label: 'ودیعه خانه ۲ خوابه',    value: '۵۰-۱۰۰ م.ت' },
            { label: 'اجاره ماهانه خانه',      value: '۵-۱۰ م.ت'   },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 8, padding: '10px 12px' }}>
              <div style={{ fontSize: 11, color: '#636e72' }}>{item.label}</div>
              <div style={{ fontWeight: 700, color: '#e17055', marginTop: 3 }}>{item.value}</div>
            </div>
          ))}
        </div>
        <p style={{ margin: '10px 0 0', fontSize: 11, color: '#636e72' }}>* قیمت‌ها بسته به موقعیت و سال ساخت متفاوت است. با چند مشاور محلی مشورت کنید.</p>
      </div>
    </div>
  );
}
