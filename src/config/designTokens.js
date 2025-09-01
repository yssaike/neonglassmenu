// Fritaero Design System - Fresh, Airy, Modern
export const colors = {
  // Primary palette - Fresh and airy
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  
  // Accent colors - Vibrant and energetic
  accent: {
    coral: '#ff6b6b',
    mint: '#51cf66',
    lavender: '#845ef7',
    sunshine: '#ffd43b',
    peach: '#ff8787',
    ocean: '#339af0'
  },
  
  // Neutral palette - Warm and inviting
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717'
  },
  
  // Semantic colors
  background: {
    primary: '#f0f0f3',
    secondary: '#e6e7eb',
    tertiary: '#d1d9e6',
    accent: '#fafafa'
  },
  
  text: {
    primary: '#2d3748',
    secondary: '#4a5568',
    tertiary: '#718096',
    inverse: '#ffffff',
    accent: '#0ea5e9'
  },
  
  border: {
    light: '#d1d9e6',
    medium: '#b8c5d1',
    dark: '#9fb3c8',
    accent: '#bae6fd'
  }
};

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace']
  },
  
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem'     // 48px
  },
  
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  }
};

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  '2xl': '2rem',   // 32px
  '3xl': '3rem',   // 48px
  '4xl': '4rem',   // 64px
  '5xl': '6rem'    // 96px
};

export const borderRadius = {
  none: '0',
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  '2xl': '1.5rem', // 24px
  full: '9999px'
};

export const shadows = {
  none: 'none',
  sm: '4px 4px 8px rgba(163, 177, 198, 0.15), -4px -4px 8px rgba(255, 255, 255, 0.7)',
  md: '6px 6px 12px rgba(163, 177, 198, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.8)',
  lg: '8px 8px 16px rgba(163, 177, 198, 0.25), -8px -8px 16px rgba(255, 255, 255, 0.9)',
  xl: '12px 12px 24px rgba(163, 177, 198, 0.3), -12px -12px 24px rgba(255, 255, 255, 1)',
  inset: 'inset 4px 4px 8px rgba(163, 177, 198, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.8)',
  glow: '0 0 20px rgba(14, 165, 233, 0.3)',
  // Neuromorphic specific shadows
  neuro: {
    raised: '6px 6px 12px rgba(163, 177, 198, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.8)',
    pressed: 'inset 3px 3px 6px rgba(163, 177, 198, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.8)',
    floating: '8px 8px 16px rgba(163, 177, 198, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.9)',
    subtle: '2px 2px 4px rgba(163, 177, 198, 0.1), -2px -2px 4px rgba(255, 255, 255, 0.6)'
  }
};

export const animation = {
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms'
  },
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  }
};