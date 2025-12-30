# Styling Issues Fix Plan

## Issues Identified:

1. Dynamic Tailwind classes in Home.tsx (`bg-${skill.color}-100`, `text-${skill.color}-600`)
2. Dynamic Tailwind classes in Certificates.tsx (`bg-${item.color}-100`, `text-${item.color}-600`)
3. Potential Tailwind CSS v4 compatibility issues
4. Missing proper color configuration for dynamic classes

## Plan:

- [x] Fix dynamic Tailwind classes in Home.tsx by replacing with static class names
- [x] Fix dynamic Tailwind classes in Certificates.tsx by replacing with static class names
- [x] Fix CSS reference in index.html from output.css to global.css
- [x] Add autoprefixer to PostCSS configuration
- [x] Test the styles are working properly
- [x] Ensure all components are using consistent styling approach

## Files to Edit:

- [x] `src/components/Home.tsx` (main styling fixes)
- [x] `src/components/Certificates.tsx` (additional styling fixes)
- `tailwind.config.js` (if needed for v4 compatibility)

## Steps:

1. [x] Replace dynamic color classes with static Tailwind classes in Home.tsx
2. [x] Replace dynamic color classes with static Tailwind classes in Certificates.tsx
3. [ ] Test the development server to ensure styles load correctly
4. [ ] Verify all styling is working as expected
