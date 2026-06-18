import React from 'react';

export const s = {
  card: {
    background: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  cardHeader: (color) => ({
    background: color,
    color: '#fff',
    padding: '10px 14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: 13,
  }),
  cardBody: {
    padding: '12px 14px',
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 8,
    padding: '7px 0',
    borderBottom: '1px solid #f5f5f5',
    fontSize: 13,
  },
  infoBox: (bg, border) => ({
    background: bg,
    border: border ? `2px solid ${border}` : 'none',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  }),
  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 4,
  },
  sectionSub: {
    color: '#636e72',
    fontSize: 12,
    marginBottom: 16,
  },
};

export function Badge({ type, children }) {
  const styles = {
    urgent: { background: '#ffecec', color: '#d63031' },
    high:   { background: '#fff8e6', color: '#e17055' },
    mid:    { background: '#f0fff4', color: '#00B894' },
  };
  return (
    <span style={{
      padding: '2px 9px',
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      ...styles[type],
    }}>
      {children}
    </span>
  );
}

export function priorityBadge(p) {
  if (p === 'فوری') return <Badge type="urgent">{p}</Badge>;
  if (p === 'بالا')  return <Badge type="high">{p}</Badge>;
  return <Badge type="mid">{p}</Badge>;
}

export function Card({ children, style }) {
  return <div style={{ ...s.card, ...style }}>{children}</div>;
}

export function CardHeader({ color, title, sub }) {
  return (
    <div style={s.cardHeader(color)}>
      <span>{title}</span>
      {sub && <span style={{ fontSize: 11, opacity: 0.9 }}>{sub}</span>}
    </div>
  );
}

export function SectionHeader({ title, sub }) {
  return (
    <>
      <div style={s.sectionTitle}>{title}</div>
      <div style={s.sectionSub}>{sub}</div>
    </>
  );
}

export function NumberCircle({ n, color }) {
  return (
    <span style={{
      background: color,
      color: '#fff',
      borderRadius: '50%',
      width: 22,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 700,
      flexShrink: 0,
    }}>{n}</span>
  );
}
