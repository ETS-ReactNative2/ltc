import * as React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { contains, replace, toLower } from 'ramda'

import { figureTypes } from '../../../../constants'

import Runkit from './Runkit'
import Sandbox from './Sandbox'
import Source from './Source'

const highlightLines = (linesToHighlight = []) => lineNumber =>
  (contains(lineNumber, linesToHighlight)
    ? {
      style: {
        display: 'block',
        backgroundColor: 'hsla(224, 0%, 50%, 0.1)',
        margin: '0 -0.5rem',
        padding: '0 0.5rem'
      }
    }
    : { display: 'block' })

const setLineNumberStyle = () => ({
  display: 'block',
  margin: 0,
  padding: 0,
  textAlign: 'right'
})

function parseLinesToHighlight (linesToHighlight) {
  try {
    return JSON.parse(linesToHighlight)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    return []
  }
}

export default function FigContent ({
  begin_line_numbering_at: beginLineNumberingAt,
  children: [child] = [],
  figure_type: figureType,
  language,
  lines_to_highlight: linesToHighlight,
  show_line_numbers: showLineNumbers,
  source,
  title,
  url
}) {
  const lang = language ? replace(/_/g, '', toLower(language)) : undefined
  const { data } = child || {}

  switch (figureType) {
    case figureTypes.CODE:
      return (
        <>
          <Source>{source}</Source>
          <SyntaxHighlighter
            language={lang}
            style={solarizedlight}
            wrapLines
            customStyle={{ padding: '0.5rem', fontSize: '0.9rem' }}
            lineProps={highlightLines(parseLinesToHighlight(linesToHighlight))}
            lineNumberStyle={setLineNumberStyle}
            showLineNumbers={showLineNumbers}
            startingLineNumber={parseInt(beginLineNumberingAt || 1, 10)}
          >
            {replace(/\\n/g, '\n', data)}
          </SyntaxHighlighter>
        </>
      )
    case figureTypes.RUNKIT:
      return <Runkit title={title} source={data} />
    case figureTypes.SANDBOX:
      return <Sandbox url={url} />
    default:
      return null
  }
}
