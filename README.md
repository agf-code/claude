# Personal agents

A collection of personal AI coaches and assistants, built as Claude Code
skills and invoked via slash commands.

| Skill  | Invoke    | Role                                     |
|--------|-----------|------------------------------------------|
| Tiger  | `/tiger`  | Golf coach (tracks your game in `golf/`) |
| Sammy  | `/sammy`  | Dietitian & nutrition coach              |
| Max    | `/max`    | Personal trainer                         |
| Jarvis | `/jarvis` | Chief-of-staff                           |

Each skill lives in `.claude/skills/<name>/SKILL.md`. Naming follows the
convention in `.claude/CLAUDE.md`: a memorable, personable name per skill.

Capitalized aliases (`/Tiger`, `/Sammy`, `/Max`, `/Jarvis`) live in
`.claude/commands/` and delegate to the lowercase skills, so invoking an agent
still works when a mobile/desktop keyboard auto-capitalizes the first word of a
message.

**Tiger** additionally keeps persistent memory in `golf/` (your profile, round
log, practice log, and coaching notes) so its coaching is personalized and
builds over time.
