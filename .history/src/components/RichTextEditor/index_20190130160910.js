import * as React from 'react'
import { Editor } from 'slate-react'

import { Value } from 'slate'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.'
              }
            ]
          }
        ]
      }
    ]
  }
})

const { useState } = React

export default function RichTextEditor () {
  const [editorState, setEditorState] = useState({ value: initialValue })

  // eslint-disable-next-line no-console
  console.log('initialValue', initialValue)
  // eslint-disable-next-line no-console
  console.log('editorState', editorState)

  return (
    <Editor
      value={editorState}
      onChange={({ value }) => setEditorState({ value })}
    />
  )
}
