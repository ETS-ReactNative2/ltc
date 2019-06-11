import * as React from 'react'

const { useState } = React

export default function RichTextEditor () {
  const [editorState, setEditorState] = useState(true)

  return <div>RichTextEditor</div>
}
