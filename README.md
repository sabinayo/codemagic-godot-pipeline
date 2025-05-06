# Codemagic Godot Pipeline

This repository contains the source code of the [Codemagic Godot Pipeline](https://sabinayo.github.io/codemagic-godot-pipeline/) website.  
This site provides step-by-step tutorials for compiling, exporting, and deploying Godot projects using Codemagic.

- Found a mistake? Report it in the [Issues](https://github.com/sabinayo/codemagic-godot-pipeline/issues) section.
- Need help? Visit or create a topic in the [Discussions](https://github.com/sabinayo/codemagic-godot-pipeline/discussions) section.


## Get the source code

Clone or download the repository to your local machine.
```bash
git clone https://github.com/sabinayo/codemagic-godot-pipeline.git
```

## Run the Website Locally (Development Mode)

Make sure you have [Vitepress](https://vitepress.dev/guide/getting-started#installation) and [Node.js](https://nodejs.org/) installed.  
Then run the following command from the root of the project directory:
```bash
npm run docs:dev
```

> You can also use `pnpm`, `yarn` or `bun`. See the [Vitepress Installation Guide](https://vitepress.dev/guide/getting-started) for more options.

This will start a live-reloading server where you can preview and edit the site in real-time.


## Build and preview Locally

Before deploying, you can test the production build locally by running the following command from the root of the project directory:
```bash
npm run docs:build && npm run docs:preview
```

> Learn more in the [VitePress Deploy Guide](https://vitepress.dev/guide/deploy#build-and-test-locally)


## Contributions

The best way to support the project is to share feedback, make a pull request, report issues, or give the repository a ⭐ if you find it useful.
Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file before submitting issues or pull requests.

Feel free to share your thoughts and suggestions!

