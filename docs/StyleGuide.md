# Linear Design System Style Guide

## Overview
This design system emulates Linear's clean, functional aesthetic with a focus on clarity, consistency, and user experience.

## Design Philosophy
- **Clarity over decoration**: Every element serves a purpose
- **Consistency**: Predictable patterns and behaviors
- **Accessibility**: High contrast ratios and keyboard navigation
- **Performance**: Lightweight animations and optimized rendering

## Color System

### Primary Palette
- **Gray Scale**: 50-900 range for text, backgrounds, and borders
- **Usage**: Primary interface elements, text hierarchy

### Accent Colors
- **Blue** (#3b82f6): Primary actions, links, focus states
- **Purple** (#8b5cf6): Secondary actions, user avatars
- **Green** (#10b981): Success states, positive metrics
- **Orange** (#f59e0b): Warning states, pending actions
- **Red** (#ef4444): Error states, destructive actions

### Semantic Usage
- **Backgrounds**: White primary, light gray secondary/tertiary
- **Text**: Dark primary, medium gray secondary, light gray tertiary
- **Borders**: Light gray for subtle divisions, medium for emphasis

## Typography

### Font Stack
- **Primary**: Inter (clean, readable, modern)
- **Monospace**: JetBrains Mono (code, technical content)

### Scale
- **Display**: 36px (page titles)
- **Heading**: 30px, 24px (section headers)
- **Body**: 18px, 16px (content)
- **Caption**: 14px, 12px (metadata, labels)

### Weight Guidelines
- **Bold (700)**: Page titles, important headings
- **Semibold (600)**: Section headers, active states
- **Medium (500)**: Labels, buttons, navigation
- **Regular (400)**: Body text, descriptions

## Spacing System

### 8px Grid System
- **4px**: Micro spacing (icon gaps)
- **8px**: Small spacing (form elements)
- **12px**: Medium spacing (component padding)
- **16px**: Standard spacing (card padding)
- **24px**: Large spacing (section gaps)
- **32px**: Extra large spacing (page margins)

## Component Guidelines

### Buttons
- **Primary**: Dark background, white text, subtle shadow
- **Secondary**: White background, dark text, border
- **Ghost**: Transparent background, hover state
- **Sizes**: Small (32px), Medium (40px), Large (48px)

### Cards
- **Default**: White background, light border
- **Elevated**: Added shadow for hierarchy
- **Outlined**: Transparent background, visible border

### Navigation
- **Sidebar**: Fixed width (280px), clean hierarchy
- **Active States**: Subtle background, accent indicator
- **Hover Effects**: Gentle background change, slight movement

## Interaction Principles

### Micro-animations
- **Duration**: 150-200ms for most interactions
- **Easing**: Power2.out for natural movement
- **Hover States**: Subtle elevation and color changes
- **Focus States**: Clear outline with accent color

### Responsive Behavior
- **Mobile First**: Progressive enhancement
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Navigation**: Collapsible sidebar on mobile

## Accessibility

### Contrast Ratios
- **Text**: Minimum 4.5:1 against backgrounds
- **Interactive Elements**: Minimum 3:1 for non-text
- **Focus Indicators**: 2px outline with high contrast

### Keyboard Navigation
- **Tab Order**: Logical flow through interface
- **Focus Management**: Clear visual indicators
- **Skip Links**: For screen reader users

## Implementation Notes

### CSS Architecture
- **Design Tokens**: CSS custom properties for consistency
- **Component Isolation**: Scoped styles per component
- **Utility Classes**: Common patterns for rapid development

### Performance
- **Font Loading**: Optimized web fonts with fallbacks
- **Animation**: Hardware-accelerated transforms
- **Bundle Size**: Modular imports to reduce payload

This design system prioritizes Linear's core values: clarity, functionality, and user focus while maintaining visual sophistication.