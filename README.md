# نقشه راه تشریفات فسا 💍

برنامه جامع عملیاتی راه‌اندازی دفتر تشریفات در فسا

## راه‌اندازی محلی

```bash
npm install
npm run dev
```

## Build برای Production

```bash
npm run build
npm run preview
```

## استقرار روی Vercel

### روش ۱ — آپلود مستقیم (سریع‌ترین)
1. به [vercel.com](https://vercel.com) بروید و لاگین کنید
2. روی **Add New → Project** کلیک کنید
3. گزینه **Deploy from CLI** یا **Import Git Repository** را انتخاب کنید

### روش ۲ — از طریق GitHub
1. یک ریپازیتوری جدید در GitHub بسازید
2. کدها را پوش کنید:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/your-username/fasa-wedding.git
   git push -u origin main
   ```
3. در Vercel → Import → ریپازیتوری را انتخاب کنید
4. Framework: **Vite** — Vercel خودکار تشخیص می‌دهد
5. Deploy!

### روش ۳ — Vercel CLI
```bash
npm i -g vercel
vercel
```

## ساختار پروژه

```
fasa-wedding/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── UI.jsx          # کامپوننت‌های مشترک
│   │   ├── GanttTab.jsx
│   │   ├── MonthlyTab.jsx
│   │   ├── BudgetTab.jsx
│   │   ├── LearningTab.jsx
│   │   ├── MarketingTab.jsx
│   │   ├── EquipmentTab.jsx
│   │   ├── LegalTab.jsx
│   │   ├── FinanceTab.jsx
│   │   ├── RiskTab.jsx
│   │   └── GrowthTab.jsx
│   ├── App.jsx
│   ├── data.js             # تمام داده‌های برنامه
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## Add to Home Screen (آیفون)

1. لینک Vercel را در Safari آیفون باز کنید
2. دکمه Share (مربع با فلش) را بزنید
3. **Add to Home Screen** را انتخاب کنید
4. نام را وارد کنید و **Add** را بزنید
