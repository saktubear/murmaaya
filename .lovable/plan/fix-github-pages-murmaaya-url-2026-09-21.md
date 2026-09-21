# Fix GitHub Pages `/murmaaya` URL

## Changes
- Set the production asset base to `/murmaaya/` while keeping local preview paths working.
- Configure the app router with the same base path instead of redirecting `/murmaaya` to `/`.
- Add GitHub Pages’ standard SPA fallback so refreshing `/murmaaya/` does not return a hosting-level 404.
- Preserve the current page design and content.

## Verification
- Build the production site and confirm its generated asset URLs include `/murmaaya/`.
- Serve the production output locally and open `/murmaaya/` to confirm the page renders.
