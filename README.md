# Vite template

## Init template

https://vitejs.dev/guide/

```
npm init vite@latest vite-template -- --template react-ts
```

## mdx

https://mdxjs.com/packages/rollup/

```
npm install -D @mdx-js/rollup@next
```

- Update package with `"type": "module",`.
- Add mdx to `vite.config.ts`.
- Update `src/` with mdx demo

## Router

```
npm install react-router-dom
```

- Update `src/App.tsx` with router

## Eslint

```
npx eslint --init
```

```
npm install -D eslint-plugin-react-hooks
```

- update `eslintrc.cjs` to include hooks
