
# Stage 1 – UX + structure

**1. Navigation & layout**

Goals: Make it obvious where people are and what they can do.
	•	Global navbar (top)
	•	Left: small logo / app name (QR-Gen or whatever you land on).
	•	Centre/right:
	•	Home
	•	New QR
	•	My QRs
	•	Far right: auth area:
	•	“Sign in / Sign up” when logged out
	•	Avatar / email + dropdown when logged in (Profile / Logout).
	•	Home icon / brand button
	•	Link the logo to /.
	•	Add a small home icon (Lucide Home or similar) on mobile in the nav.
	•	Consistent shell
	•	Make sure /, /qr/new, /qr, /login, /signup all share:
	•	same background (bg-base-200),
	•	same max width (max-w-5xl mx-auto),
	•	consistent top padding (e.g. pt-8 under navbar).

⸻

**2. Home page as a proper “landing”**

Right now you’ve got the builder and list pretty solid – home can sell it.

On /:
	•	Hero section
	•	Title: “Create and save QR codes in seconds”
	•	Sub: “Generate QR codes, save them to your personal vault, and keep everything organised by category.”
	•	CTA buttons:
	•	New QR (primary → /qr/new)
	•	View my QRs (secondary → /qr, disabled/ghost when logged out or nudging login)
	•	3–4 simple feature highlights
	•	“Instant QR generation”
	•	“Saved vault with categories”
	•	“Guest mode with one free QR”
	•	“Download as PNG or PDF”

This doesn’t need to be fancy – just enough to explain the value if someone lands cold.

⸻

**3. UX polish on QR flows**

You’re close already – just refine the edges:

On /qr/new:
	•	Make the “Target URL” field super prominent:
	•	Larger label + helper text:
“Paste any link – document, page, booking form, etc.”
	•	Add small helper text under the label:
	•	For example:
“Your QR will link directly to this URL.”
	•	Make the primary CTA obvious:
	•	e.g. a single Save & Download button (internally: save → download PNG).

On /qr:
	•	You already have:
	•	Category multi-filter
	•	Card actions (copy / visit / edit / delete)
	•	Add small UX details:
	•	When no items match filter → message: “No QR codes match this filter. Try selecting fewer categories.”
	•	Show total count: “Showing 8 QR codes”.

⸻

# Stage 2 – Auth & “vault” experience

**4. Authentication UX**

You already have BetterAuth + login/signup pages. Now make the front-end feel deliberate:
	•	Sign in buttons
	•	Use consistent DaisyUI buttons:
	•	btn btn-primary for email/password login.
	•	btn btn-outline with Google icon for Google sign in.
	•	Clearly label:
“Continue with Google” / “Sign in with email”.
	•	Error & loading handling
	•	Show a small btn loading state while auth requests are in flight.
	•	Display friendly errors (“Incorrect email or password”, “Something went wrong, please try again”).
	•	Logged-out nudges
	•	You already show a toast telling guests to log in to save QRs.
	•	Add a small inline banner on /qr/new and /qr for guests:
	•	“You’re using guest mode. Create a free account to save your QR vault across devices.”
	•	Sign up / Sign in buttons.

⸻

**5. Guest mode & upgrade moment**

You’ve implemented a nice guest limit. Let’s make it feel intentional:
	•	Guest badge
	•	On /qr/new when not logged in, show a small pill at the top:
Guest mode · 1 saved QR
	•	Upgrade CTA after limit
	•	When they hit the limit:
	•	Show the toast (already done).
	•	Also show an inline card under the form:
“You’ve used your free guest QR. Create a free account to unlock unlimited QR saving.”

This gives you a clear “aha → upgrade” flow without feeling like a nag.

⸻

###Stage 3 – Power-user features & refinement

Once the basics feel polished, these are nice v1.1 / v2 upgrades.

**6. QR management improvements**
	•	Search / filter by text
	•	Input above the grid on /qr:
“Search by label or URL…”
	•	Client-side filter on label and targetUrl.
	•	Sort options
	•	Simple dropdown:
	•	Newest first (default)
	•	Oldest first
	•	A–Z by label
	•	Combine with your existing category filter for a really usable vault.
	•	Pagination or “Load more”
	•	Once you have > 30–50 QRs, add either:
	•	Load more button (client-side)
	•	Or server-side pagination with page query param.

⸻

**7. Visual polish & consistency**
	•	Card design
	•	Make sure QrCard uses:
	•	consistent padding,
	•	fixed QR size,
	•	labels truncated nicely (you already improved URLs).
	•	Add tiny “category badge” that matches the colours from your CATEGORY_BUTTON_CLASSES.
	•	Toasts
	•	Define 2–3 consistent variants:
	•	success → green
	•	error → red
	•	info → blue
	•	Reuse for:
	•	“QR saved”
	•	“URL copied to clipboard”
	•	“Deleted successfully”
	•	“Guest limit reached”
	•	Icons
	•	Use a coherent set (e.g. Lucide):
	•	Trash, Pencil, Copy, External link, Plus, Home, User, Log in/out.
	•	This alone makes things feel “producty”.

⸻

**8. Accessibility & keyboard use**

Low-effort, high-value pass:
	•	Ensure all buttons have aria-label where the icon alone isn’t obvious.
	•	Make sure dropdown and menu controls are keyboard focusable and usable (shadcn/daisyUI helps a lot here).
	•	Check colour contrast for your theme (especially for selected category buttons).

⸻

**9. “Ready to show people” checklist**

Before you call it “launchable”, run through:
	•	Navbar present and consistent across all pages.
	•	Home page explains what the app does and has clear CTAs.
	•	/qr/new is obvious: what to paste, what happens when you click.
	•	/qr works well with:
	•	category multi filter,
	•	search (optional),
	•	clear empty and error states.
	•	Guests can:
	•	generate a QR,
	•	see the limit messaging,
	•	understand why they should sign up.
	•	Sign in/up works cleanly and feels intentional (no rough edges or cryptic errors).
	•	On mobile:
	•	Nav works,
	•	QR cards look neat,
	•	dropdown is usable.

⸻
