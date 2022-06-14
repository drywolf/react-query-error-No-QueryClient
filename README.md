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

* add / replace code in vite-app
* add dependencies to vite-app/package.json

* add `pnpm-workspace.yaml` and run `pnpm install` in root directory

* `cd vite-app`
* `pnpm dev` ... react-query works ok in browser ✅
    * see http://localhost:3000/
* `pnpm build && pnpm preview` ... react-query fails with error in browser ⛔
    * see http://localhost:4173/

*Note:*
If you uncomment the line `const data = useData_inViteApp();` in `App.tsx` instead of the original one, then `pnpm build && pnpm preview` works without error. It seems that the error happens only if the hook function is put into another module that is linked via pnpm workspace.

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
