# SPEC — The Most Boring Object, Reviewed in One Line

- Bounty: https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
- Prize: $2 (1st $2) — closes 27 Nov 00:25 WIB
- Gate: 1–200 characters

## Final text (137 characters)

> The paperclip held twelve pages together for a decade, got bent once, and was thrown away like it never mattered. No pension. No goodbye.

## Why this one wins (judge criteria)

1. **Review of a boring everyday object** — a paperclip is about as boring and everyday as an object gets.
2. **Laugh at a real, recognisable detail** — every paperclip really does get bent once and tossed; the joke comes from the object's own behaviour, not a gag that would fit anything.
3. **True** — the observation matches how paperclips actually live and die; the laugh arrives with recognition.
4. **One line, every word earning its place** — 137 characters; v2 switched to past tense so the line reads as the paperclip's whole thankless life.
5. **Turn lands fast and sharpens at the end** — the last four words ("No pension. No goodbye.") are the punchline: a lifetime of service, zero severance.

## Candidates rejected

- "The doorstop's entire career is standing still, and it still gets kicked every single day. Five stars. It never complains." — good, but "kicked every day" is a single gag stretched thin; the paperclip version has a full arc (decade of service → one bend → thrown away).
- "The rubber band has one job, snaps when you need it most, and spends the rest of its life holding together a drawer full of other rubber bands." — the drawer-of-rubber-bands image is nice, but the punchline is soft compared to "No pension. No goodbye."
- "The tea towel has absorbed three years of spills and has never once been thanked." — true, but it reads as a complaint about the object rather than a review; the paperclip's story is tighter and funnier.

## Verification

`node --experimental-strip-types main.ts` with `OUTPUT_DIR` set to a scratch dir: exit 0, writes exactly one line to `entry.txt`, 137 characters, inside the 1–200 gate.
