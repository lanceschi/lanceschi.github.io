---
title: Draft post support in Gatsby how to
date: "2019-11-23T17:47:03.284Z"
description: Adding draft post support to Gatsby starter blog how to
tags: ["javascript"]
---

[GatsbyJS][GatsbyJS-site] together with [Gatsby starter blog][gatsby-starter-blog] represent a marvellous publishing tool. It does definetely lack though the *out-of-the-box* capability of managing and filtering-out blog post with an user defined *draft* status.

Checking out over the internet you'll find various approaches to overcome this limitation.

the one suggested by [Janosh Riebesell][janosh-post] is my favourite. It is pretty straightforward and it consists only in adding a single line of code that leverages on `NODE_ENV` environmental variable to `gatsby-config.js` config file:

```javascript
ignore: process.env.NODE_ENV === `production` && [`**/draft-*`]
```

Basically it rules out from production build all those filenames with a `draft-` prefix.

Here you'll find an excerpt of an edited `gatsby-config.js`:


```javascript
module.exports = {

  ...

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
        ignore: process.env.NODE_ENV === `production` && [`**/draft-*`]
      },
    },

```


<br />

As a reference, you'll find the original [Janosh Riebesell][janosh-site] post [here][janosh-post]


[GatsbyJS-site]: https://www.gatsbyjs.org/

[gatsby-starter-blog]: https://github.com/gatsbyjs/gatsby-starter-blog

[janosh-post]: https://janosh.io/blog/exclude-drafts-from-production


[janosh-site]: https://janosh.io/blog/exclude-drafts-from-production