# Experiences Page Translation Fix

## Plan:

1. Add missing translations to `src/reducers/data.ts` for all language objects
2. Update `src/components/Experiences.tsx` to use the translated strings

## Status:

- [x] Add translations to data.ts
- [x] Update Experiences.tsx to use translated strings

## Changes Made:

1. Added the following translations to `data.ts` for all language objects (data, indoLang, sasakLang, arabicLang):

   - `expHeaderBadge`: Header badge text
   - `expHeaderDesc`: Header description
   - `expWorkDesc`: Work Experience description
   - `expEduDesc`: Education description
   - `skillsBadge`: Skills section badge
   - `expSkillsTitle`: Skills section title ("What I Do")
   - `expCtaTitle`: CTA section title ("Let's Work Together")
   - `expCtaDesc`: CTA section description
   - `ctaButton`: CTA button text ("Let's Connect")
   - Skill translations: `skillFullStack`, `skillNextJs`, `skillLaravel`, `skillSlicing`, `skillDatabase`, `skillApi`, `skillArchitecture`, `skillLeadership`

2. Updated `Experiences.tsx` to use translated strings:
   - Header badge and description
   - Work Experience and Education section descriptions
   - Skills section badge and title
   - All 8 skill items now use translated strings
   - CTA section title, description, and button
