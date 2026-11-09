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
Check status with `gh issue list`. #102 (responsive images) is done. Current focus: #103, the move to Tailwind.

**Styling decision (Nov 2026):** the site is moving from Bootstrap (CDN) + `public/css/styles.css` to **Tailwind CSS** via the official Astro integration. Brandon chose it for its open-source templates and component libraries. Rebuild the current look first, page by page, and refine the design later. New styling should use Tailwind classes, not new rules in `styles.css`.

**Where we left off:** branch `ux/103-tailwind`, Stage 1, step 1: Brandon runs `npx astro add tailwind`, then Claude guides importing `src/styles/global.css` in `Layout.astro`. Tick the #103 checklist as stages finish.

**Design and content advice:** since the whole look is being rebuilt, Brandon wants Claude to act as a design and content advisor too, not just a code reviewer. When planning each page, bring suggestions based on what strong current portfolios do (engineering and photography): layout and typography, new pages or sections worth adding (e.g. case studies, a dedicated contact page, a photography client/booking flow), and missing information. Research current examples when useful, recommend one direction, and turn agreed ideas into GitHub issues. Brandon still writes the code.

### PR grouping

Default is **one issue = one branch = one PR**, with all of that issue's steps in the same PR (`Closes #N`). Exception: small, related housekeeping issues that touch the same files can share one branch and PR (`Closes #A, closes #B`). Larger or visually risky changes always get their own PR.

Planned groups (update as issues close):

| PR | Issues | Why grouped |
|---|---|---|
| Responsive images | #102 | Done (#130, #132) |
| Tailwind migration | #103, #62 | Header refactor happens as part of the rebuild. Big, so it ships in stages (setup + layout, pages, cleanup), one PR per stage |
| Housekeeping | #126, #106, #111, #78, #79 | Unused files, logo, right-click removal, footer year and footer links: all small edits to Layout/Footer/assets |
| SEO basics | #116, #117, #118 | All `<head>` tags in `Layout.astro`; sitemap needs the `site` URL from #116 |
| Small a11y fixes | #113, #114 | Reduced motion CSS + alt text, both small |
| Engineering contact | #122, #123 | Resume link and contact options, same pages |
| Own PR each | #104, #105, #107, #108, #109, #110, #112, #115, #119, #120, #121, #124, #125, #127 | Bigger, or likely to change how the site looks |

## How we work: Brandon codes, Claude coaches

Brandon wants to learn by writing the code himself. Claude's role is **guide and reviewer**, not author.

For each issue:

1. **Pick one issue** (or one planned group from the PR grouping table). Don't mix unrelated issues in a branch.
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
