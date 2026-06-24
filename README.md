# DevTool CLI

A powerful command-line toolkit built with Node.js to automate repetitive development tasks and improve developer productivity.

## Overview

DevTool CLI is a developer productivity tool that helps automate common tasks such as generating React components, creating API modules, generating Express routes, creating environment files, managing Git operations, and organizing files.

The goal of this project is to reduce boilerplate code, speed up development workflows, and provide reusable automation tools for developers.

## Features

### Security Utilities

* Generate secure random passwords

### React Utilities

* Generate React components instantly

### Backend Utilities

* Generate API module structure
* Generate Express CRUD routes
* Generate environment files

### Git Utilities

* View repository status
* Commit and push changes
* View repository information

### File Management

* Organize files by type
* Clean empty folders

### Documentation

* Generate project README files

---

## Available Commands

### Generate Password

```bash
devtool password 16
```

### Generate React Component

```bash
devtool component Navbar
```

### Generate API Module

```bash
devtool api users
```

Generated structure:

```text
users/
├── controller.js
├── service.js
├── route.js
└── model.js
```

### Generate CRUD Routes

```bash
devtool route products
```

### Generate Environment File

```bash
devtool env
```

### Organize Files

```bash
devtool organize ./Downloads
```

### View Git Status

```bash
devtool git-status
```

### Commit and Push Changes

```bash
devtool commit "fixed navbar responsiveness"
```

### Repository Information

```bash
devtool repo-info
```

### Generate README

```bash
devtool readme
```

---

## Technologies Used

* Node.js
* Commander.js
* Chalk
* File System (fs)
* Path Module
* Child Process

---

## Installation

Clone the repository:

```bash
git clone https://github.com/divyani-joshi/devtool-cli.git
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
node index.js --help
```

Create global command:

```bash
npm link
```

Use globally:

```bash
devtool --help
```

---

## Project Structure

```text
devtool-cli/
│
├── commands/
│   ├── password.js
│   ├── component.js
│   ├── api.js
│   ├── route.js
│   ├── env.js
│   ├── organize.js
│   ├── clean.js
│   ├── git.js
│   ├── commit.js
│   ├── repoInfo.js
│   └── readme.js
│
├── index.js
├── package.json
└── README.md
```

---

## Learning Outcomes

Through this project, I gained hands-on experience with:

* Building command-line applications
* Node.js core modules
* File system operations
* Process automation
* Git integration
* Package configuration
* CLI argument parsing using Commander.js

---

## Future Enhancements

* MERN project scaffolding
* React project generator
* AI-powered commit message generator
* Code explanation utility
* Error debugging assistant
* NPM package publishing

---

## Author

**Divyani Joshi**

Full Stack Developer


---

## License

MIT License
