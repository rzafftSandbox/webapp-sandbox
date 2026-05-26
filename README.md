# Web App Sandbox (ASP.NET Core + React JS)

## Setup

Create backend folder (ASP.NET Core): `dotnet new webapi -o backend`

```
================================================================================================================
(base) ryanzafft@Ryans-MacBook-Pro-3 webapp-sandbox % dotnet new webapi -o backend
The template "ASP.NET Core Web API" was created successfully.

Processing post-creation actions...
Restoring /Users/ryanzafft/code/webapp-sandbox/backend/backend.csproj:
Restore succeeded.
================================================================================================================
```

Create frontend folder (React JS): `npm create vite@latest frontend -- --template react`

```
================================================================================================================
(base) ryanzafft@Ryans-MacBook-Pro-3 webapp-sandbox % npm create vite@latest frontend -- --template react

> npx
> create-vite frontend --template react

│
◇  Install with npm and start now?
│  No
│
◇  Scaffolding project in /Users/ryanzafft/code/webapp-sandbox/frontend...
│
└  Done. Now run:

  cd frontend
  npm install
  npm run dev
================================================================================================================
```

## Run Frontend 

```
cd frontend
npm install
npm run dev
```

When you execute 'npm run dev', npm does the following:
1. Opens `package.json` and reads the 'scripts' section and see's that 'dev' maps to the command 'vite', so it runs that. 
2. Vite starts up and reads `vite.config.js` which tells Vite - "we are running a react project, activate teh react plugin". This plugin is what lets Vite understand `.jsx` files (which are not plain JavaScript - they contain HTML like syntax called JSX). 
3. Vite spins up a local server and starts it, usually at `http://localhost:5173` and prints it to the terminal.
4. When you open the URL, the browser asks the Vite server for a page. Vite serves `index.html`
5. The browser sees the empty `<div id="root">` and loads the referenced script at `/src/main.jsx`.

## Run Backend

```
cd backend
dotnet run
```

## Tutorial notes

#### Using Leaflet

1. Install the necessary pacakges;

```
cd frontend
npm install leaflet react-leaflet
```

* 'leaflet' is the core map library
* 'react-leaflet' is the react wrapper that lets you use leaflet as react components
