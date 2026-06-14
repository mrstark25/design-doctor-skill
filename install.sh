#!/usr/bin/env bash
# Design Doctor — installer
# Copies the skill + agent into your Claude Code config so any project can use them.
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLAUDE_DIR="${CLAUDE_HOME:-$HOME/.claude}"
SKILLS_DIR="$CLAUDE_DIR/skills"
AGENTS_DIR="$CLAUDE_DIR/agents"

echo "Design Doctor → installing into: $CLAUDE_DIR"
mkdir -p "$SKILLS_DIR" "$AGENTS_DIR"

# skill (folder with SKILL.md + references)
rm -rf "$SKILLS_DIR/design-doctor"
cp -R "$HERE/skills/design-doctor" "$SKILLS_DIR/design-doctor"
echo "  ✓ skill   → $SKILLS_DIR/design-doctor"

# agent
cp "$HERE/agents/design-auditor.md" "$AGENTS_DIR/design-auditor.md"
echo "  ✓ agent   → $AGENTS_DIR/design-auditor.md"

echo ""
echo "Installed. In Claude Code, run:  /design-doctor"
echo "Or ask: \"use design-doctor to redesign <url>\""
echo "(Restart Claude Code or start a new session so it picks up the new skill/agent.)"
