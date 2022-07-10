---
title: 🔥 Create a Tutorial
---

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Tutorial

Create a markdown file at `docs/category/subcategory/mytutorial.md`:

```md title="docs/category/subcategory/mytutorial.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at `http://localhost:3000/docs/category/subcategory/mytutorial`.

## Configure the Sidebar

The site will automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/my-tutorial.md" {1-4}
---
sidebar_label: 'My Tutorial!'
sidebar_position: 3
---

# Hello

This is my **first tutorial**!
```