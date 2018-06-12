# React Boilerplate

Here's my working React boilerplate. Aside from running a basic, local development server with [Browsersync](https://browsersync.io/), this project structure assumes the server side of things is being handled elsewhere. Also, no Redux or state management here.

If you're looking for a full-stack boilerplate with React, state management, server, database and the whole shabang, check out my [MERN boilerplate](https://github.com/themeblvd/mern-boilerplate).

## Quick Start

1. Clone this repository.
2. Install the dependencies by running `npm install`.
3. Run `npm run start` to start the development server and watch for changes.

*Note: Browsersync will automatically find an available port and open it up in your web browser.*

## Project Structure

* `public/` - Final build, for both development and production (see notes below).
    * `assets/` - All static assets, organized by filetype.
    * `index.html` - The single static webpage that should be served.
* `src/` - **React app source files.**
    * `assets/` - Assets like images, SCSS, etc, organized by filetype.
    * `components/` - React components.
    * `index.js` - Entry point for Webpack to compile final build.
    * `index.html` - HTML template for single page.
* `server.js` - Runs the development server.

**Why is there no separate `/build` directory, like with [create-react-app](https://github.com/facebook/create-react-app)?**

Because this project structure assumes no server-side functionality, I've made the decision to simplify all compiling to a single `/public` directory. However, the result of the files here does depend on if we're in development or production.

**And how does that effect the development to production workflow?**

Running `npm run start` or `npm run build` will produce the development state of the static application files within `/public` while you're working. And when you're read to publish your changes into production, you can run `npm run build:prod`, which will re-build the files within `/public`, and then just move those files off to where they need to go.

Another approach. Alternately, if you're using a service like [Netlify](https://www.netlify.com/), you can incorporate this into your continuous integration. Whether your project exists locally on your computer or it's receiving changes on Netlify from your Github repo, the `/public` directory is what is served. So, for example, from you local machine you can run `npm run build`, but on Netlify, you'll tell it to run `npm run build:prod`.

## Terminal Commands

### Primary Commands

These are the commands you'll use the most.

* `npm run start` - Start development server, watch for changes & continuously build into the `/public` directory.
* `npm run build:prod` - Re-build the `/public` directory for production.

### Additional Commands

Here are some additional commands that come in handy.

* `npm run watch` - Watch for changes & continuously build into the `/public` directory.
* `npm run build` - Build development files once.
* `npm run server` - Run the development server.
* `npm run js-lint` - Check for JavaScript linting errors.
* `npm run js-lint:fix` - Allow JavaScript linter to fix what it can, automatically.

*Note: `npm run start` essentially encompasses the first three commands above. But when debugging issues, it may be helpful to know you can run those commands separately.*
