"use client"

import React, { useCallback } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Blockquote from '@tiptap/extension-blockquote'
import Placeholder from '@tiptap/extension-placeholder'
import { Markdown } from 'tiptap-markdown'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { common, createLowlight } from 'lowlight'
import Toolbar from './Toolbar'

const lowlight = createLowlight(common)

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
        code: {
          HTMLAttributes: {
            class: 'bg-muted text-muted-foreground px-1.5 py-0.5 rounded font-mono',
          },
        },
        codeBlock: false,
      }),
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: 'javascript',
        languageClassPrefix: 'language-',
      }),
      Blockquote,
      Underline,
      Placeholder.configure({
        placeholder: 'Start writing...',
      }),
      Markdown.configure({
        html: true,
        transformPastedText: true,
        transformCopiedText: true,
      }),
    ],
    content: '# Hello!',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none',
      },
    },
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <div className="border rounded-lg overflow-hidden bg-card shadow-sm">
        <Toolbar editor={editor} />
        <EditorContent editor={editor} className="p-4" />
      </div>
      <div className="border rounded-lg overflow-hidden bg-card shadow-sm mt-3 p-3">
        <h2 className="font-semibold">HTML Output:</h2>
          {editor ? editor.getHTML() : ''}
      </div>
    </>
  )
}

export default Editor