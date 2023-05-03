# Module Federation - React Router DOM nested routers

# Dashboard app

```js
name: "dashboard",
filename: "remoteEntry.js",
remotes: {},
exposes: {
  "./DashboardIndex": "./src/bootstrap",
},
shared: {
  ...deps,
  react: {
    singleton: true,
    requiredVersion: deps.react,
  },
  "react-dom": {
    singleton: true,
    requiredVersion: deps["react-dom"],
  },
},
```

<br>

# Running the demo

1. Install deps: `npm install`.
2. Start apps: `npm run start`.

Visit http://localhost:8081 to navigate `dashboard` app.

<br>

# Credit

Create using https://github.com/jherr/create-mf-app.
