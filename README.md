# Steps to reproduce the react-query/vite/pnpm bug

**The error:**

> Error: No QueryClient set, use QueryClientProvider to set one

**Steps to reproduce:**

```
pnpm create vite vite-app --template react-ts
mkdir my-lib && cd my-lib && pnpm init
```
* add index.ts code to my-lib
* add dependencies to my-lib/package.json

**Used software:**
```
node --version
Node v16.14.0

pnpm --version
7.2.1

Operating System:
Windows 10 Pro 21H1
Build 19043.1706
```
