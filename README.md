# Put this at: .github/workflows/snake.yml  (in your zahid397/zahid397 repo)
#
# It regenerates the animated contribution-snake SVG twice a day and pushes the
# result to a branch called "output". The README points at raw.githubusercontent
# on that branch, so the animation stays current without touching the README.
#
# Before relying on it: check the latest tag at github.com/Platane/snk and
# github.com/crazy-max/ghaction-github-pages, and bump the versions below if
# they have moved on. Pinned versions are not verified here.

name: Generate snake animation

on:
  schedule:
    - cron: "0 */12 * * *"
  workflow_dispatch:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  generate:
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - name: Generate snake SVGs
        uses: Platane/snk@v3
        id: snake
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark

      - name: Push to the output branch
        uses: crazy-max/ghaction-github-pages@v4
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
