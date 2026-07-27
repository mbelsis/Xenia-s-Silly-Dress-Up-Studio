# Deploying

The game is live at **https://xenias-dress-up-studio.vercel.app**

It is a plain static site — no build step, no server code. Vercel just serves
the files in this folder exactly as they are.

| | |
|---|---|
| Vercel project | `xenias-dress-up-studio` |
| Vercel account | `mbelsis17-2590` |
| Dashboard | `npx vercel open` |

---

## The short version

After changing anything:

```bash
node --check js/<file>.js            # syntax-check whatever you edited
npx vercel deploy --prod --yes       # ship it
```

That's it. The new version is live in about 20 seconds, at the same URL.

---

## The full loop

### 1. Edit, then look at it locally

```bash
python3 -m http.server 8321          # then open http://localhost:8321
```

Leave this running while you work. **Reload with ⌘⇧R** (hard reload) — a
normal reload can show you the previous version, because the service worker
caches the whole game so it works offline.

### 2. Syntax-check any JavaScript you touched

```bash
node --check js/wardrobe.js
```

There are no tests and no build step, so this is the only automatic safety
net. A stray comma in a data file will otherwise break the whole game.

### 3. If you added or removed a *file*, bump the service worker

Only when the **file list** changes — a new `js/something.js`, a new icon.
Editing an existing file needs nothing.

In `sw.js`:

```js
const CACHE = "dressup-v4";   // -> "dressup-v5"
```

...and add the new file to the `SHELL` array below it. Forget this and people
who already have the game installed keep the old file list offline.

### 4. Deploy

```bash
npx vercel deploy --prod --yes
```

`--prod` publishes to the real URL. Without it you get a private preview URL
instead, which is handy if you want to check something before it goes live:

```bash
npx vercel deploy                    # preview only, not public
```

### 5. Check it

Open https://xenias-dress-up-studio.vercel.app and **hard reload** (⌘⇧R).

On the iPad, if the installed app still looks old: close it from the app
switcher and reopen. The service worker checks for updates on every launch,
so it should be current on the second open at the latest.

---

## Automatic deploys (worth setting up once)

Right now every deploy is manual, because the Vercel account was created with
a Google login and has no GitHub connection. Connecting one means **every
`git push` deploys by itself** and you never run a deploy command again.

1. Vercel → **Settings → Authentication** → add a **GitHub** login connection
2. Vercel → the `xenias-dress-up-studio` project → **Settings → Git** →
   connect `mbelsis/Xenia-s-Silly-Dress-Up-Studio`
3. From then on: `git push` is the deploy

---

## When something goes wrong

**Put the previous version back, right now:**

```bash
npx vercel rollback
```

**See what's been deployed:**

```bash
npx vercel ls                        # recent deployments
npx vercel inspect <url>             # detail on one of them
```

**"I deployed but the site looks the same."** Almost always browser or
service-worker caching, not a failed deploy. Confirm the deploy itself is new
with `npx vercel ls`, then hard reload (⌘⇧R). On iOS, close and reopen the
installed app.

**Nuclear option for a stuck browser:** DevTools → Application →
Service Workers → *Unregister*, then reload.

---

## Adding a custom domain later

Nothing about the current setup blocks this and no redeploy is needed.

```bash
npx vercel domains add <yourdomain.com>
```

...or do it in the dashboard under **Settings → Domains**, then point the
domain's DNS at Vercel as it instructs. The `.vercel.app` URL keeps working
alongside the new one. The domain registration itself costs money
(~$10–20/year); everything else here stays free.

---

## Things to leave alone

- **`.vercel/`** — the local link to the Vercel project. Machine-specific.
- **`.env.local`** — contains a short-lived Vercel token.

Both are in `.gitignore`. Never commit them, and never paste their contents
anywhere. If you ever do leak a token, revoke it under
**Vercel → Settings → Authentication**.

---

## Cost

Free, with a lot of room. The Hobby plan is the free tier, and the whole game
is ~375 KB of static files with no server code, no image optimization and no
database — the two things that normally generate a Vercel bill.

| Hobby monthly allowance | What this game uses |
|---|---|
| 100 GB data transfer | ~140 KB per fresh visit → ~700,000 visits |
| 1M edge requests | ~13 requests per load → ~77,000 loads (~2,500/day) |
| 1M function invocations | 0 — there is no server code |

The one real condition: **Hobby is for non-commercial personal use only.** A
free game for one kid is squarely within that. Ads, payments or anything
commercial would need the paid Pro plan.

See `INSTALL.md` for installing the game as an app on a phone or tablet.
