const categoryThemes = {
  creative: {
    pattern: 'aurora',
    dark: {
      gradient: ['#240046', '#312e81', '#020617'],
      accent: '#f5b8ff',
      accentStrong: '#ec4899',
      accentSoft: 'rgba(244, 114, 182, 0.45)',
      heading: '#f8fafc',
      muted: '#d1d5db',
      cardBg: 'rgba(255, 255, 255, 0.1)',
      cardBorder: 'rgba(216, 180, 254, 0.28)',
      overlayA: 'rgba(168, 85, 247, 0.2)',
      overlayB: 'rgba(236, 72, 153, 0.18)',
      particles: ['rgba(217, 70, 239, 0.35)', 'rgba(244, 114, 182, 0.3)', 'rgba(129, 140, 248, 0.3)'],
    },
    light: {
      gradient: ['#faf5ff', '#fdf2f8', '#eef2ff'],
      accent: '#a21caf',
      accentStrong: '#db2777',
      accentSoft: 'rgba(192, 38, 211, 0.35)',
      heading: '#1f2937',
      muted: '#4b5563',
      cardBg: 'rgba(255, 255, 255, 0.7)',
      cardBorder: 'rgba(216, 180, 254, 0.8)',
      overlayA: 'rgba(196, 181, 253, 0.35)',
      overlayB: 'rgba(244, 114, 182, 0.25)',
      particles: ['rgba(216, 180, 254, 0.5)', 'rgba(244, 114, 182, 0.45)', 'rgba(129, 140, 248, 0.35)'],
    },
    subAccents: {
      dark: [
        { accent: '#f5b8ff', accentStrong: '#ec4899' },
        { accent: '#c4b5fd', accentStrong: '#8b5cf6' },
        { accent: '#93c5fd', accentStrong: '#3b82f6' },
        { accent: '#67e8f9', accentStrong: '#06b6d4' },
        { accent: '#fda4af', accentStrong: '#fb7185' },
        { accent: '#fdba74', accentStrong: '#f97316' },
      ],
      light: [
        { accent: '#a21caf', accentStrong: '#db2777' },
        { accent: '#6d28d9', accentStrong: '#7c3aed' },
        { accent: '#1d4ed8', accentStrong: '#2563eb' },
        { accent: '#0e7490', accentStrong: '#0891b2' },
        { accent: '#be123c', accentStrong: '#e11d48' },
        { accent: '#c2410c', accentStrong: '#ea580c' },
      ],
    },
  },
  productivity: {
    pattern: 'waves',
    dark: {
      gradient: ['#042f2e', '#0f172a', '#020617'],
      accent: '#67e8f9',
      accentStrong: '#06b6d4',
      accentSoft: 'rgba(34, 211, 238, 0.45)',
      heading: '#f8fafc',
      muted: '#cbd5e1',
      cardBg: 'rgba(255, 255, 255, 0.09)',
      cardBorder: 'rgba(103, 232, 249, 0.28)',
      overlayA: 'rgba(20, 184, 166, 0.2)',
      overlayB: 'rgba(56, 189, 248, 0.2)',
      particles: ['rgba(34, 211, 238, 0.35)', 'rgba(45, 212, 191, 0.3)', 'rgba(56, 189, 248, 0.26)'],
    },
    light: {
      gradient: ['#ecfeff', '#eff6ff', '#f0fdfa'],
      accent: '#0f766e',
      accentStrong: '#0891b2',
      accentSoft: 'rgba(15, 118, 110, 0.35)',
      heading: '#1f2937',
      muted: '#4b5563',
      cardBg: 'rgba(255, 255, 255, 0.72)',
      cardBorder: 'rgba(165, 243, 252, 0.75)',
      overlayA: 'rgba(45, 212, 191, 0.25)',
      overlayB: 'rgba(56, 189, 248, 0.2)',
      particles: ['rgba(56, 189, 248, 0.4)', 'rgba(45, 212, 191, 0.4)', 'rgba(125, 211, 252, 0.35)'],
    },
    subAccents: {
      dark: [
        { accent: '#67e8f9', accentStrong: '#06b6d4' },
        { accent: '#5eead4', accentStrong: '#14b8a6' },
        { accent: '#7dd3fc', accentStrong: '#0ea5e9' },
        { accent: '#86efac', accentStrong: '#22c55e' },
      ],
      light: [
        { accent: '#0f766e', accentStrong: '#0891b2' },
        { accent: '#0f766e', accentStrong: '#14b8a6' },
        { accent: '#0369a1', accentStrong: '#0284c7' },
        { accent: '#166534', accentStrong: '#16a34a' },
      ],
    },
  },
  'code-development': {
    pattern: 'grid',
    dark: {
      gradient: ['#0b2246', '#1e1b4b', '#020617'],
      accent: '#93c5fd',
      accentStrong: '#3b82f6',
      accentSoft: 'rgba(59, 130, 246, 0.42)',
      heading: '#f8fafc',
      muted: '#cbd5e1',
      cardBg: 'rgba(255, 255, 255, 0.08)',
      cardBorder: 'rgba(147, 197, 253, 0.27)',
      overlayA: 'rgba(59, 130, 246, 0.22)',
      overlayB: 'rgba(99, 102, 241, 0.2)',
      particles: ['rgba(59, 130, 246, 0.3)', 'rgba(14, 165, 233, 0.3)', 'rgba(99, 102, 241, 0.3)'],
    },
    light: {
      gradient: ['#eff6ff', '#f0f9ff', '#eef2ff'],
      accent: '#1d4ed8',
      accentStrong: '#2563eb',
      accentSoft: 'rgba(37, 99, 235, 0.35)',
      heading: '#111827',
      muted: '#4b5563',
      cardBg: 'rgba(255, 255, 255, 0.75)',
      cardBorder: 'rgba(147, 197, 253, 0.72)',
      overlayA: 'rgba(96, 165, 250, 0.24)',
      overlayB: 'rgba(129, 140, 248, 0.2)',
      particles: ['rgba(96, 165, 250, 0.42)', 'rgba(14, 165, 233, 0.34)', 'rgba(129, 140, 248, 0.35)'],
    },
    subAccents: {
      dark: [
        { accent: '#93c5fd', accentStrong: '#3b82f6' },
        { accent: '#7dd3fc', accentStrong: '#0ea5e9' },
        { accent: '#a5b4fc', accentStrong: '#6366f1' },
        { accent: '#60a5fa', accentStrong: '#2563eb' },
      ],
      light: [
        { accent: '#1d4ed8', accentStrong: '#2563eb' },
        { accent: '#0369a1', accentStrong: '#0284c7' },
        { accent: '#4338ca', accentStrong: '#6366f1' },
        { accent: '#1e40af', accentStrong: '#2563eb' },
      ],
    },
  },
  analytics: {
    pattern: 'mesh',
    dark: {
      gradient: ['#1e1b4b', '#111827', '#020617'],
      accent: '#a5b4fc',
      accentStrong: '#6366f1',
      accentSoft: 'rgba(129, 140, 248, 0.42)',
      heading: '#f8fafc',
      muted: '#cbd5e1',
      cardBg: 'rgba(255, 255, 255, 0.09)',
      cardBorder: 'rgba(165, 180, 252, 0.3)',
      overlayA: 'rgba(99, 102, 241, 0.22)',
      overlayB: 'rgba(56, 189, 248, 0.18)',
      particles: ['rgba(129, 140, 248, 0.34)', 'rgba(56, 189, 248, 0.24)', 'rgba(168, 85, 247, 0.25)'],
    },
    light: {
      gradient: ['#eef2ff', '#eff6ff', '#f5f3ff'],
      accent: '#4338ca',
      accentStrong: '#4f46e5',
      accentSoft: 'rgba(79, 70, 229, 0.35)',
      heading: '#111827',
      muted: '#4b5563',
      cardBg: 'rgba(255, 255, 255, 0.73)',
      cardBorder: 'rgba(165, 180, 252, 0.75)',
      overlayA: 'rgba(129, 140, 248, 0.25)',
      overlayB: 'rgba(125, 211, 252, 0.2)',
      particles: ['rgba(129, 140, 248, 0.38)', 'rgba(125, 211, 252, 0.3)', 'rgba(196, 181, 253, 0.35)'],
    },
    subAccents: {
      dark: [
        { accent: '#a5b4fc', accentStrong: '#6366f1' },
        { accent: '#7dd3fc', accentStrong: '#0ea5e9' },
        { accent: '#d8b4fe', accentStrong: '#a855f7' },
      ],
      light: [
        { accent: '#4338ca', accentStrong: '#4f46e5' },
        { accent: '#0369a1', accentStrong: '#0284c7' },
        { accent: '#7e22ce', accentStrong: '#9333ea' },
      ],
    },
  },
  education: {
    pattern: 'bloom',
    dark: {
      gradient: ['#052e16', '#0f172a', '#020617'],
      accent: '#86efac',
      accentStrong: '#22c55e',
      accentSoft: 'rgba(74, 222, 128, 0.42)',
      heading: '#f8fafc',
      muted: '#d1d5db',
      cardBg: 'rgba(255, 255, 255, 0.1)',
      cardBorder: 'rgba(134, 239, 172, 0.28)',
      overlayA: 'rgba(34, 197, 94, 0.2)',
      overlayB: 'rgba(16, 185, 129, 0.2)',
      particles: ['rgba(74, 222, 128, 0.33)', 'rgba(16, 185, 129, 0.3)', 'rgba(187, 247, 208, 0.2)'],
    },
    light: {
      gradient: ['#f0fdf4', '#ecfdf5', '#f0fdfa'],
      accent: '#166534',
      accentStrong: '#16a34a',
      accentSoft: 'rgba(22, 163, 74, 0.34)',
      heading: '#1f2937',
      muted: '#4b5563',
      cardBg: 'rgba(255, 255, 255, 0.72)',
      cardBorder: 'rgba(134, 239, 172, 0.72)',
      overlayA: 'rgba(74, 222, 128, 0.22)',
      overlayB: 'rgba(45, 212, 191, 0.18)',
      particles: ['rgba(74, 222, 128, 0.36)', 'rgba(16, 185, 129, 0.3)', 'rgba(187, 247, 208, 0.28)'],
    },
    subAccents: {
      dark: [
        { accent: '#86efac', accentStrong: '#22c55e' },
        { accent: '#5eead4', accentStrong: '#14b8a6' },
        { accent: '#bef264', accentStrong: '#84cc16' },
      ],
      light: [
        { accent: '#166534', accentStrong: '#16a34a' },
        { accent: '#0f766e', accentStrong: '#14b8a6' },
        { accent: '#4d7c0f', accentStrong: '#65a30d' },
      ],
    },
  },
  business: {
    pattern: 'sunset',
    dark: {
      gradient: ['#7c2d12', '#451a03', '#020617'],
      accent: '#fdba74',
      accentStrong: '#f59e0b',
      accentSoft: 'rgba(251, 191, 36, 0.45)',
      heading: '#f8fafc',
      muted: '#d1d5db',
      cardBg: 'rgba(255, 255, 255, 0.1)',
      cardBorder: 'rgba(251, 191, 36, 0.28)',
      overlayA: 'rgba(251, 146, 60, 0.22)',
      overlayB: 'rgba(245, 158, 11, 0.2)',
      particles: ['rgba(251, 146, 60, 0.35)', 'rgba(250, 204, 21, 0.27)', 'rgba(245, 158, 11, 0.25)'],
    },
    light: {
      gradient: ['#fff7ed', '#fef3c7', '#fffbeb'],
      accent: '#c2410c',
      accentStrong: '#f59e0b',
      accentSoft: 'rgba(234, 88, 12, 0.35)',
      heading: '#1f2937',
      muted: '#4b5563',
      cardBg: 'rgba(255, 255, 255, 0.74)',
      cardBorder: 'rgba(251, 191, 36, 0.72)',
      overlayA: 'rgba(251, 146, 60, 0.2)',
      overlayB: 'rgba(250, 204, 21, 0.2)',
      particles: ['rgba(251, 146, 60, 0.35)', 'rgba(250, 204, 21, 0.35)', 'rgba(245, 158, 11, 0.3)'],
    },
    subAccents: {
      dark: [
        { accent: '#fdba74', accentStrong: '#f97316' },
        { accent: '#fcd34d', accentStrong: '#f59e0b' },
        { accent: '#fca5a5', accentStrong: '#ef4444' },
      ],
      light: [
        { accent: '#c2410c', accentStrong: '#ea580c' },
        { accent: '#b45309', accentStrong: '#d97706' },
        { accent: '#be123c', accentStrong: '#e11d48' },
      ],
    },
  },
  default: {
    pattern: 'mesh',
    dark: {
      gradient: ['#1e293b', '#0f172a', '#020617'],
      accent: '#60a5fa',
      accentStrong: '#3b82f6',
      accentSoft: 'rgba(96, 165, 250, 0.4)',
      heading: '#f8fafc',
      muted: '#cbd5e1',
      cardBg: 'rgba(255, 255, 255, 0.08)',
      cardBorder: 'rgba(148, 163, 184, 0.32)',
      overlayA: 'rgba(59, 130, 246, 0.2)',
      overlayB: 'rgba(148, 163, 184, 0.18)',
      particles: ['rgba(96, 165, 250, 0.32)', 'rgba(148, 163, 184, 0.3)', 'rgba(59, 130, 246, 0.26)'],
    },
    light: {
      gradient: ['#f8fafc', '#eff6ff', '#f1f5f9'],
      accent: '#2563eb',
      accentStrong: '#3b82f6',
      accentSoft: 'rgba(59, 130, 246, 0.35)',
      heading: '#111827',
      muted: '#4b5563',
      cardBg: 'rgba(255, 255, 255, 0.72)',
      cardBorder: 'rgba(203, 213, 225, 0.8)',
      overlayA: 'rgba(96, 165, 250, 0.2)',
      overlayB: 'rgba(203, 213, 225, 0.25)',
      particles: ['rgba(96, 165, 250, 0.35)', 'rgba(148, 163, 184, 0.32)', 'rgba(59, 130, 246, 0.28)'],
    },
    subAccents: {
      dark: [{ accent: '#60a5fa', accentStrong: '#3b82f6' }],
      light: [{ accent: '#2563eb', accentStrong: '#3b82f6' }],
    },
  },
};

const patternCycle = ['aurora', 'grid', 'mesh', 'bloom', 'sunset', 'waves'];
const motionCycle = ['drift', 'orbit', 'pulse'];

const hashString = (value = '') =>
  Array.from(value).reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) % 1000003, 0);

export const getCategoryTheme = (categoryId, isDarkMode, subcategoryId = '') => {
  const source = categoryThemes[categoryId] ?? categoryThemes.default;
  const modeKey = isDarkMode ? 'dark' : 'light';
  const baseMode = source[modeKey];

  const variantIndex =
    subcategoryId && source.subAccents[modeKey].length > 0
      ? hashString(subcategoryId) % source.subAccents[modeKey].length
      : 0;

  const selectedAccent = source.subAccents[modeKey][variantIndex] ?? {
    accent: baseMode.accent,
    accentStrong: baseMode.accentStrong,
  };

  const patternIndex = subcategoryId ? hashString(`${categoryId}-${subcategoryId}`) % patternCycle.length : -1;
  const motionIndex = subcategoryId ? hashString(`${subcategoryId}-${categoryId}`) % motionCycle.length : 0;

  const pattern = patternIndex >= 0 ? patternCycle[patternIndex] : source.pattern;
  const motion = motionCycle[motionIndex];

  return {
    pattern,
    motion,
    cssVars: {
      '--theme-gradient-start': baseMode.gradient[0],
      '--theme-gradient-middle': baseMode.gradient[1],
      '--theme-gradient-end': baseMode.gradient[2],
      '--theme-accent': selectedAccent.accent,
      '--theme-accent-strong': selectedAccent.accentStrong,
      '--theme-accent-soft': baseMode.accentSoft,
      '--theme-heading': baseMode.heading,
      '--theme-muted': baseMode.muted,
      '--theme-card-bg': baseMode.cardBg,
      '--theme-card-border': baseMode.cardBorder,
      '--theme-overlay-a': baseMode.overlayA,
      '--theme-overlay-b': baseMode.overlayB,
      '--theme-particle-a': baseMode.particles[0],
      '--theme-particle-b': baseMode.particles[1],
      '--theme-particle-c': baseMode.particles[2],
      '--theme-glow-color': baseMode.accentSoft,
    },
  };
};

export default categoryThemes;
