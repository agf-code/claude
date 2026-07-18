# Golf — Tiger, your personal coach

**Tiger** is a Claude Code subagent that coaches your golf game across stats &
scoring, swing & technique, practice plans, and the mental/strategy side. It
lives at `.claude/agents/tiger.md`.

Because subagents start with no memory each time, Tiger keeps its memory in
this folder and reads it at the start of every session:

- **`profile.md`** — who you are as a golfer (handicap, misses, bag, goals).
- **`rounds.md`** — a log of your rounds and stats.
- **`practice-log.md`** — what you've practiced.
- **`coaching-notes.md`** — Tiger's running notes and your current focus.

## How to use it
Just talk to it: `@tiger`. For example:
- "@tiger help me get started" → it onboards you.
- "@tiger I shot 88 today, hit 6 fairways and three-putted four times" → it
  logs the round and tells you what to work on.
- "@tiger give me a 30-minute practice plan" → targeted drills.
- "@tiger how should I play a tight par 4 with water left?" → strategy.

Tiger maintains every file in this folder for you — you never have to edit them
by hand (though you can; they're plain markdown).
