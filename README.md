# Trading Terminal

A Bloomberg-inspired personal market research terminal focused on fast stock research, watchlists, fundamentals, news, and decision support.

## MVP

- Market dashboard and watchlist
- Symbol search and stock detail pages
- Price history charts
- Fundamental metrics and financial statements
- Company news feed
- Insider transactions
- Research workspace with bull case, bear case, catalysts, risks, and valuation notes
- Provider abstraction so market-data APIs can be swapped without rewriting the UI

## Principles

- Research and decision support first; not automated execution
- Never expose provider API keys in the browser
- Clearly label delayed/stale data
- Keep data provenance visible
- Start simple and expand toward a personal Bloomberg-like terminal

## Planned stack

- React + TypeScript + Vite
- Server-side API/proxy layer for market-data credentials
- Pluggable market-data providers
- Local watchlist/preferences initially; persistent database later

## Status

Initial project bootstrap in progress.
