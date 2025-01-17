# Next.js 15 App Crash on Client-Side Navigation

This repository demonstrates a bug in Next.js 15 where the app crashes on client-side navigation with a `TypeError: Cannot read properties of undefined (reading 'pathname')` error.  The issue occurs when navigating between pages within the application.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate between pages in the application (e.g., using links or the browser's back/forward buttons).  The error should occur.

## Solution

A potential solution and workaround for this issue may be to ensure proper handling of the `router` object, specifically checking for its existence or using conditional rendering to prevent accessing it before it's fully initialized.  However, the underlying cause in Next.js itself may require further investigation or updates from the Next.js team.

