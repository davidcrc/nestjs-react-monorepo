# Setup

- create folder apps and package.json file

  - run: npm init

  - create nest project, NO INSTALL , ctrl+c

  - create vite project: npm create vite

  - add workspace to package.json

  ```json
  {
    //...
    "workspaces": ["apps/*"]
  }
  ```

# Add turbo

```bash
npm i -D turbo
```

- create turbo.json

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "dev": {
      "cache": false
    }
  }
}
```

```bash
npx turbo run dev
```

- in this case update script for nestjs

```json
{
  "scripts": {
    "dev": "nest start --watch --preserveWatchOutput"
  }
}
```

- add to vite.config.ts ( for dev)

```ts
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
```

- ad to main api/src/main.ts

```ts
app.setGlobalPrefix("api");
```

- Now for build add to turbo.json

```json
{
  "pipeline": {
    //...
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}
```

- then, add to package.json, last pipeline

```json
{
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build"
  }
}
```

<!--  -->

# Add modules to API

```bash
npm install --save @nestjs/serve-static --workspace api
```

- i nestjs app.module add

```ts
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
```

- run: npm run build

<!--  -->

# Add Tailwind

- https://tailwindcss.com/docs/guides/vite

```bash
npm install --save-dev tailwindcss postcss autoprefixer --workspace client
```

```bash
cd apps/client && npx tailwindcss init -p && cd ../..
```

```bash
npm add --save-dev sass --workspace client
```

- rename App.css to App.scss, then copy @tailwind there

- remove Index.css and his imports

- Import App.scss en App.tsx

<!--  -->

# Add Mantine

```bash
npm install @mantine/core @mantine/hooks @mantine/notifications --workspace client
```

```bash
npm install --save-dev postcss postcss-preset-mantine postcss-simple-vars  --workspace client
```

- update postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },
  },
};
```

- add to main.tsx

```tsx
<MantineProvider>
  <Notifications>
    <App />
  </Notifications>
</MantineProvider>
```

<!--  -->

# Add react-router-dom

- check : https://github.com/mantinedev/vite-template

```bash
npm i react-router-dom --workspace client
```
