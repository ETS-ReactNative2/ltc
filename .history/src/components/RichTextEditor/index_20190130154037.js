import * as React from 'react'

import { Editor, EditorState } from 'draft-js'

import './index.css'

const { useState } = React

export default function RichTextEditor () {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const handleChange = state => setEditorState({ state })

  return <Editor editorState={editorState} onChange={handleChange} />
}
