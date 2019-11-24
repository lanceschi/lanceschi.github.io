import * as React from 'react'
//import styled from 'styled-components'
//import {tagToPath} from '../utils/paths'

// https://erikaybar.name/adding-tags-to-a-gatsby-blog
// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/
// https://janosh.io/blog/use-dark-mode

export function TagsList({tags, ...otherProps}) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <ul className="Taglist" {...otherProps}>
      {tags.map(tag => (
        <li key={tag}>
          <a key={tag} href="https://google.com">
            {tag}
          </a>
        </li>
      ))}
    </ul>
  )
}

//<a key={tag} href={tagToPath(tag)}></a>