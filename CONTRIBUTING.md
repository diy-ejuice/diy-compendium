# Contribution Guidelines

Please note that all contributors are bound to abide by the [Code of Conduct](https://github.com/diy-ejuice/diy-compendium/blob/master/CODE-OF-CONDUCT.md). If you do not agree with this policy, please do not open issues or pull requests against this repository.

## Overview

This project is only possible with the contributions of the community. If you have time, we need help with the following:

- Creation of new pages
- Editing/revision of existing pages
- Translation into other languages

## Markdown

This project formats its content using [Markdown](https://www.markdownguide.org/getting-started/). Specifically, it uses [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/), which in turn uses [remark](https://remark.js.org/) to convert the Markdown into HTML. See markdownguide.org for [basic](https://www.markdownguide.org/basic-syntax/) and [extended](https://www.markdownguide.org/extended-syntax/) syntax guides.

There is one extra feature of Markdown that we use not normally covered in online guides. At the beginning of Markdown files, you may notice something like this near the top:

```
---
path: '/some/path'
title: 'A Document'
slug: 'sft'
---

# Here's a Heading
```

This is referred to as ["front matter,"](https://jekyllrb.com/docs/front-matter/) metadata that goes "in front" of the content itself. You create front matter by adding a block of three dashes with [YAML](https://yaml.org/spec/1.2/spec.html#id2761803) inside to the beginning of your document. This is only necessary when creating a new page.

Don't delete front matter from a document! It's required to build the page - any Markdown file without appropriate front matter will be skipped during the build. Adding multiple front matter sections to a document is also something to be avoided.

## How to Contribute

Each page on the site is rendered from a Markdown file that exists in this source code. The [docs directory](https://github.com/diy-ejuice/diy-compendium/tree/master/src/docs) is the home for these files.

### Code

- Fork this repository
- Push feature branches to your fork
- Open pull requests against this repository for your feature branches

### Content

- Click on the document you want to edit from the [docs directory](https://github.com/diy-ejuice/diy-compendium/tree/master/src/docs)
- Click "Raw"
- Select all and then copy to clipboard
- Open [StackEdit](https://stackedit.io/app)
- Paste document contents
- Edit
- Copy document contents
- Send to an editor
