import * as React from 'react'
import Parser from 'html-react-parser'
import domToReact from 'html-react-parser/lib/dom-to-react'

import Aside from './Aside'
import Badges from './Badges'
import BreadcrumbTrail from './BreadcrumbTrail'
import Centered from './Centered'
import Chunk from './Chunk'
import ContentPane from './Chunk/ContentPane'
import FigurePane from './Chunk/FigurePane'
import Drawer from './Drawer'
import Faq from './Faq'
import Figure from './Figure'
import FigCaption from './Figure/FigCaption'
import FigContent from './Figure/FigContent'
import Image from './Figure/FigContent/Image'
import FooterBar from './FooterBar'
import FooterBarNav from './FooterBar/FooterBarNav'
import Hero from './Hero'
import HomeCards from './HomeCards'
import HomeSteps from './HomeSteps'
import { Div, H1, H2, H3, Span } from './Html'
import Icon from './Icon'
import Link from './Link'
import LinkExternal from './Link/LinkExternal'
import Logo from './Logo'
import Main from './Main'
import SelfDoc from './SelfDoc'
import SiteMap from './SiteMap'
import Step from './Step'
import TableOfContents from './TableOfContents'
import TitleBar from './TitleBar'
import TitleBarNav from './TitleBar/TitleBarNav'
import TitleBarTitle from './TitleBar/TitleBarTitle'

const parserOptions = data => ({
  replace: domNode => {
    const { attribs = {}, children, name } = domNode
    const { breadcrumbTrail, page, pathMap, rowIdMap } = data || {}
    const { placement: p, ...attrs } = attribs
    const placement = p ? { [p]: 'true' } : {}

    switch (name) {
      case 'a':
        return (
          <LinkExternal {...attrs} target='_blank'>
            {domToReact(children, parserOptions(data))}
          </LinkExternal>
        )
      case 'abbr':
        return (
          <SelfDoc {...attrs}>
            {domToReact(children, parserOptions(data))}
          </SelfDoc>
        )
      case 'aside':
        return (
          <Aside {...attrs}>
            {domToReact(children, parserOptions(data))}
          </Aside>
        )
      case 'badges-toc':
        return (
          <Badges page={page} pathMap={pathMap} {...attrs} {...placement} />
        )
      case 'breadcrumb-trail':
        return <BreadcrumbTrail breadcrumbTrail={breadcrumbTrail} />
      case 'centered':
        return (
          <Centered {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </Centered>
        )
      case 'chunk':
        return (
          <Chunk {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </Chunk>
        )
      case 'content-pane':
        return (
          <ContentPane {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </ContentPane>
        )
      case 'drawer':
        return <Drawer page={page} pathMap={pathMap} {...attrs} />
      case 'div':
        return (
          <Div {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </Div>
        )
      case 'faq':
        return <Faq page={page} pathMap={pathMap} />
      case 'figcaption':
        return (
          <FigCaption {...attrs}>
            {domToReact(children, parserOptions(data))}
          </FigCaption>
        )
      case 'figure':
        return (
          <Figure {...attrs}>
            {domToReact(children, parserOptions(data))}
          </Figure>
        )
      case 'figure-pane':
        return (
          <FigurePane {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </FigurePane>
        )
      case 'figure-image':
        return <Image {...attrs} />
      case 'figure-text':
        return (
          <FigContent page={page} pathMap={pathMap} {...attrs}>
            {children}
          </FigContent>
        )
      case 'footer-bar':
        return (
          <FooterBar {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </FooterBar>
        )
      case 'footer-bar-nav':
        return (
          <FooterBarNav {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </FooterBarNav>
        )
      case 'h1':
        return (
          <H1 {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </H1>
        )
      case 'h2':
        return (
          <H2 {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </H2>
        )
      case 'h3':
        return (
          <H3 {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </H3>
        )
      case 'hero':
        return (
          <Hero {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </Hero>
        )
      case 'home-cards':
        return (
          <HomeCards {...attrs} {...placement} pathMap={pathMap}>
            {domToReact(children, parserOptions(data))}
          </HomeCards>
        )
      case 'home-steps':
        return (
          <HomeSteps {...attrs} {...placement} pathMap={pathMap}>
            {domToReact(children, parserOptions(data))}
          </HomeSteps>
        )
      case 'icon':
        return <Icon {...attrs} {...placement} />
      case 'link':
        return (
          <Link
            {...attrs}
            placement={placement}
            page={page}
            pathMap={pathMap}
            rowIdMap={rowIdMap}
          />
        )
      case 'main':
        return (
          <Main {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </Main>
        )
      case 'rabbit-hole':
        console.log(JSON.stringify(attrs))
        console.table(attrs)
        return (
          <Div {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </Div>
        )
      case 'site-map':
        return <SiteMap page={page} pathMap={pathMap} />
      case 'span':
        return (
          <Span {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </Span>
        )
      case 'step':
        return <Step page={page} pathMap={pathMap} data={data} />
      case 'table-of-contents':
        return (
          <TableOfContents
            page={page}
            pathMap={pathMap}
            {...attrs}
            {...placement}
          />
        )
      case 'title-bar':
        return (
          <TitleBar {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </TitleBar>
        )
      case 'title-bar-logo':
        return <Logo {...attrs} {...placement} />
      case 'title-bar-title':
        return (
          <TitleBarTitle {...attrs} {...placement}>
            {page.title}
          </TitleBarTitle>
        )
      case 'title-bar-nav':
        return (
          <TitleBarNav {...attrs} {...placement}>
            {domToReact(children, parserOptions(data))}
          </TitleBarNav>
        )
      default:
    }
  }
})

Reactify.defaultProps = {
  html: ''
}

export default function Reactify ({ html = '', ...data }) {
  return <>{Parser(html, parserOptions(data))}</>
}
