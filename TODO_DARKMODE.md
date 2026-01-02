# Dark Mode Implementation Plan

## Step 1: Configuration

- [ ] Update tailwind.config.js - Enable darkMode: 'class'
- [ ] Add dark mode base styles to global.css

## Step 2: State Management (Redux)

- [ ] Update src/reducers/rootRed.ts - Add toggleDarkMode action
- [ ] Update src/reducers/store.ts - Add dark mode persistence with localStorage
- [ ] Update src/reducers/data.ts - Add dark mode translations

## Step 3: Components

- [ ] Update src/components/layout/Navbar.tsx - Add dark mode toggle button
- [ ] Update src/components/App.tsx - Pass dark mode state
- [ ] Update src/components/Main.tsx - Add dark mode wrapper classes

## Step 4: Page Components

- [ ] Update src/components/Home.tsx - Dark mode compatible
- [ ] Update src/components/Experiences.tsx - Dark mode compatible
- [ ] Update src/components/Services.tsx - Dark mode compatible
- [ ] Update src/components/Portfolios.tsx - Dark mode compatible
- [ ] Update src/components/Certificates.tsx - Dark mode compatible
- [ ] Update src/components/layout/Footer.tsx - Dark mode compatible

## Step 5: Testing & Verification

- [ ] Test dark mode toggle functionality
- [ ] Verify localStorage persistence
- [ ] Test all pages in both modes
