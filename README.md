# Xpert Factor Web Application

Factoring and invoice finance software

# Tech Stack

**NodeJs:** (&ge; 14.14.0)

**App state management:** Redux(RTQ)

**Forms:** react-hook-forms

**Form Validation:** @hookform/resolvers & yup

**Component/Design system library:** MUI

## Installation

The web application is made with nextJs.

- First of all make sure you have installed Node and npm / yarn

**Yarn package manager is recommended**

```http
 yarn install
```

- After installing the modules run your project with following command:

```http
 yarn dev
```

- Congratulations!! You have successfully run the project. Visit http://localhost:3000/ (opens new window)to check it in your browser.

## Folder Structure Conventions

> Folder structure options and naming conventions for software projects

# Project Directory Structure

This repository contains the following directory structure:

- **public**: Static assets

  - `images`: Image files
  - `locales`: Translation files
  - Other files

- **src**: Source code

  - `@core`: Template's core files
  - `@fake-db`: Fake Database for mocking axios requests (Fake API Calls)
  - `configs`: Configuration files
    - `acl.ts`: Access Control file/configurations
    - `auth.ts`: Authentication file/configurations
    - `i18n.ts`: i18n configurations and initialization
    - `themeConfig.ts`: Template configurations
  - `context`: Context files
  - `hooks`: Custom hooks
  - `layouts`: Layout files
    - `components`: Layout components
    - `UserLayout.tsx`: File responsible for rendering the layout & template
    - `UserThemeOptions.ts`: Theming file to override core theming
  - `navigation`: Static navigation menu files
    - `horizontal`: Horizontal navigation
    - `vertical`: Vertical navigation
  - `pages`: View files that render pages

    Here is an exemple of a page structure :

    - Module 1
      - Module 1 [id] : This directory holds individual instances or items of "Module 1,"
      - Module 1 Flow : This folder is responsible for the creation and editing processes of "Module 1."
      - Module 1 List : The "Module 1 List" directory contains components and files related to displaying a list or overview of all "Module 1" items.
    - `_app.tsx`: Main file responsible for rendering the layout
    - `_document.tsx`: HTML document & emotions configurations
    - `index.tsx`: Application entry file

  - `store`: Redux store
  - `types`: TypeScript types (only in the TypeScript version)
  - `views`: View files included in the pages folder
  - `modules`: The "modules" folder in this project contains modular components that are organized based on different features and functionalities. Each module typically groups related components, services, and resources to make the codebase more organized and maintainable.

    Here is an overview of what you can find within the "modules" folder:

    - Module 1
      - Module 1 components
      - Module 1 interfaces
      - Module 1 stroe
      - Module 1 view

- **styles**: Global styling

- `.env`: Environment file

- `.eslintrc.json`: ESLint configurations (Linting code)

- `.gitignore`: Gitignore file to specify which files and folders to ignore in version control

- `.npmrc`: Node configuration file

- `.nvmrc`: nvm (Node Version Manager) configuration file

- `.prettierrc.js`: Prettier configurations for code formatting in the editor

- `next.config.js`: Next.js configurations

- `next.d.ts`: Next.js global types configurations

- `package.json`: Dependencies required to run the template

- `tsconfig.json`: TypeScript configurations
