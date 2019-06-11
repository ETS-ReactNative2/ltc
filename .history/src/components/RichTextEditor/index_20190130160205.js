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
  const [editorState, setEditorState] = useState(initialValue)

  return <Editor value={editorState} onChange={this.onChange} />
}
