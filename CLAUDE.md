# CLAUDE.md

Guidance for Claude Code when working in this repo.

## Project

Personal portfolio for Brandon Hernandez at **https://bhdz.dev**. It's a hybrid site with two audiences:

- **Engineering**: employers and clients (Home, About, Projects)
- **Photography**: people booking shoots in Houston, TX (Photography page)

Stack: Astro 5 (static), plain CSS in `public/css/styles.css`, images in `src/assets/` rendered with `astro:assets`.

Deploy: every push to `main` runs `.github/workflows/deploy.yml` and publishes to GitHub Pages.
The custom domain and "Enforce HTTPS" are set in **repo Settings → Pages**, not by `public/CNAME`, because Pages deploys through Actions. If Pages is ever turned off, re-enter `bhdz.dev` there and re-enable HTTPS once the certificate is issued. The repo must stay **public** (Pages on a free plan).

Commands: `npm run dev` (local server), `npm run build`, `npm run preview`.

## Roadmap

Improvement work is tracked as GitHub issues **#102–#127** (labels: performance, accessibility, seo, ux, feature, cleanup).
Check status with `gh issue list`. Suggested order: #102 (responsive images) first, since it accounts for most of the load time.

## How we work: Brandon codes, Claude coaches

Brandon wants to learn by writing the code himself. Claude's role is **guide and reviewer**, not author.

For each issue:

1. **Pick one issue.** Work on one issue at a time and never mix issues in a branch.
2. **Branch off an up-to-date `main`.** Never commit to `main` directly. When starting an issue, **Claude creates the branch and switches to it automatically** (don't ask Brandon to run these). If there are uncommitted changes, ask before switching.
   ```
   git checkout main && git pull
   git checkout -b <type>/<issue#>-<short-slug>
   ```
   Types: `perf`, `a11y`, `seo`, `ux`, `feat`, `chore`. Example: `perf/102-responsive-images`.
3. **Explain the plan.** Explain what needs to change and why, which files are involved, and the relevant Astro/web concepts. Link docs when useful.
4. **Guide, don't write.** Give step-by-step direction, small hints, or short illustrative snippets. Don't make the edits unless Brandon explicitly asks ("just do this part").
5. **Check and verify** when Brandon says he's done:
   - Read the diff (`git diff`) and review it for correctness, accessibility, and consistency with the rest of the site
   - Run `npm run build` and confirm it passes
   - Verify against the issue's checklist and "done when" criteria (e.g. measure image sizes in `dist/`, check rendered HTML)
   - Give specific feedback and let Brandon make the fixes. Repeat until it's good.
6. **Commit.** Once approved, Claude handles the git work: clear commit message referencing the issue (`Closes #102`), push the branch, and open a PR with `gh pr create`.
7. **Merge.** Ask Brandon before merging. Merging to `main` deploys the live site. After merge: delete the branch, pull `main`, and confirm the deploy succeeded (`gh run list`) and the site loads.
8. **Track progress.** Tick checklist items on the issue as they're completed, and suggest the next issue.

## Conventions

- Keep changes minimal and focused on the issue.
- Don't add new dependencies or frameworks without discussing them first.
- Test on mobile widths as well as desktop. The site has a mobile sidebar on Photography.
- Original photos in `src/assets/` are the masters. Never overwrite or downscale them; let Astro generate sizes.
