module.exports = {
    content: [
      "./index.html",
      "./pages/**/*.{html,js}",
      "./components/**/*.{html,js}",
      "./src/**/*.{html,js}"
    ],
    theme: {
      extend: {
        colors: {
          // Primary Colors - Trust and Technical Competence
          primary: {
            DEFAULT: "#2563EB", // blue-600
            50: "#EFF6FF", // blue-50
            100: "#DBEAFE", // blue-100
            200: "#BFDBFE", // blue-200
            300: "#93C5FD", // blue-300
            400: "#60A5FA", // blue-400
            500: "#3B82F6", // blue-500
            600: "#2563EB", // blue-600
            700: "#1D4ED8", // blue-700
            800: "#1E40AF", // blue-800
            900: "#1E3A8A", // blue-900
          },
          // Secondary Colors - Growth and Positive Outcomes
          secondary: {
            DEFAULT: "#059669", // emerald-600
            50: "#ECFDF5", // emerald-50
            100: "#D1FAE5", // emerald-100
            200: "#A7F3D0", // emerald-200
            300: "#6EE7B7", // emerald-300
            400: "#34D399", // emerald-400
            500: "#10B981", // emerald-500
            600: "#059669", // emerald-600
            700: "#047857", // emerald-700
            800: "#065F46", // emerald-800
            900: "#064E3B", // emerald-900
          },
          // Accent Colors - Premium Differentiation
          accent: {
            DEFAULT: "#7C3AED", // violet-600
            50: "#F5F3FF", // violet-50
            100: "#EDE9FE", // violet-100
            200: "#DDD6FE", // violet-200
            300: "#C4B5FD", // violet-300
            400: "#A78BFA", // violet-400
            500: "#8B5CF6", // violet-500
            600: "#7C3AED", // violet-600
            700: "#6D28D9", // violet-700
            800: "#5B21B6", // violet-800
            900: "#4C1D95", // violet-900
          },
          // Background Colors
          background: "#F9FAFB", // gray-50
          surface: "#FFFFFF", // white
          // Text Colors
          text: {
            primary: "#111827", // gray-900
            secondary: "#6B7280", // gray-500
            tertiary: "#9CA3AF", // gray-400
          },
          // Semantic Colors
          success: {
            DEFAULT: "#10B981", // emerald-500
            light: "#D1FAE5", // emerald-100
          },
          warning: {
            DEFAULT: "#F59E0B", // amber-500
            light: "#FEF3C7", // amber-100
          },
          error: {
            DEFAULT: "#EF4444", // red-500
            light: "#FEE2E2", // red-100
          },
          // Border Colors
          border: {
            DEFAULT: "#E5E7EB", // gray-200
            light: "#F3F4F6", // gray-100
          },
        },
        fontFamily: {
          headline: ['Outfit', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
          cta: ['Outfit', 'sans-serif'],
          mono: ['SF Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        },
        fontSize: {
          // Display Sizes
          'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
          'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
          'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
          'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
          // Headline Sizes
          'h1': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
          'h2': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
          'h3': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
          'h4': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
          // Body Sizes
          'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
          'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
          'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
          'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
        },
        borderRadius: {
          'xl': '12px',
          '2xl': '16px',
          '3xl': '24px',
        },
        boxShadow: {
          'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          'interactive': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        },
        backdropBlur: {
          'glass': '10px',
        },
        transitionDuration: {
          '300': '300ms',
        },
        transitionTimingFunction: {
          'ease': 'ease',
          'ease-in-out': 'ease-in-out',
        },
        scale: {
          '102': '1.02',
          '105': '1.05',
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
        },
        maxWidth: {
          '8xl': '88rem',
          '9xl': '96rem',
        },
        animation: {
          'fade-in': 'fadeIn 300ms ease-in-out',
          'slide-up': 'slideUp 300ms ease-in-out',
          'scale-in': 'scaleIn 300ms ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.95)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }