# Getting the game onto an iPad

The game is a web app, so it installs to the Home Screen like a normal app —
icon, full screen, no Safari bars. Three routes, easiest first.

---

## Route 1 — Try it right now over Wi-Fi (2 minutes, nothing to sign up for)

Good for playing today. The iPad must be on the same Wi-Fi as the Mac, and the
Mac must stay awake with the server running.

1. On the Mac, in the game folder:
   ```bash
   python3 -m http.server 8321
   ```
2. On the iPad, open **Safari** and go to:
   ```
   http://192.168.1.40:8321
   ```
   (That is this Mac's address on your network. If it ever changes, find it
   again with `ipconfig getifaddr en0`.)
3. Tap the **Share** button (square with an arrow) → **Add to Home Screen** →
   **Add**.

You now have the icon on the Home Screen and it opens full screen.

**Limit:** iOS only allows offline caching on `https://`, so over a plain Wi-Fi
address the game still needs the Mac's server running each time. For a version
that works anywhere with no Mac, use Route 2.

---

## Route 2 — Put it online for free, then install (10 minutes) ← recommended

Gives a permanent `https://` link, so the game works **anywhere, offline,
forever**, on any number of devices, with no Mac involved.

Any free static host works. With Vercel:

```bash
npm i -g vercel     # once
cd /Users/meletis.belsis/Documents/GitHub/game
vercel              # follow the prompts; accept the defaults
vercel --prod       # publish
```

Netlify (`npm i -g netlify-cli && netlify deploy --prod`) and GitHub Pages work
just as well.

Then on the iPad: open the `https://…` link in Safari → **Share** → **Add to
Home Screen**.

Because it is served over HTTPS, the service worker (`sw.js`) caches the whole
game on first open, so after that it launches with no internet at all — on a
plane, in the car, anywhere.

**Note:** this makes the game reachable by anyone with the link. There is no
personal data in it — photo characters live only in the browser on the device
that made them and are never uploaded.

---

## Route 3 — A real native app in the App Store

Only needed if you want it *in the App Store* rather than on your own devices.

Requirements:
- **Xcode** (free, ~7 GB, from the Mac App Store) — not currently installed
- An **Apple Developer account**: free works for installing on your own iPad
  (the app expires after 7 days and needs a re-install), $99/year for TestFlight
  and the App Store

Steps:
```bash
cd /Users/meletis.belsis/Documents/GitHub/game
npm init -y
npm i @capacitor/core @capacitor/cli @capacitor/ios
npx cap init "Silly Dress-Up Studio" com.yourname.dressup --web-dir .
npx cap add ios
npx cap open ios          # opens Xcode
```
In Xcode: pick your iPad as the run target, set the Signing team to your Apple
ID, press ▶. See the roadmap in DESIGN.md for the iPad polish pass (landscape
lock, safe-area padding) worth doing before an App Store submission.

---

## Which to pick

| | Route 1 | Route 2 | Route 3 |
|---|---|---|---|
| Time | 2 min | 10 min | a few hours |
| Needs the Mac running | yes | no | no |
| Works offline | no | yes | yes |
| Costs | free | free | free / $99 a year |
| In the App Store | no | no | yes |

Route 2 is the sweet spot for family use. Route 3 only matters if you want
other people to download it.
