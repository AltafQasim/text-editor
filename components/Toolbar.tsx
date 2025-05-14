"use client"

import React from 'react'
import { type Editor } from '@tiptap/react'
import { Toggle } from "@/components/ui/toggle"
import { 
  Bold, 
  Italic, 
  Underline, 
  Heading1, 
  Heading2, 
  List, 
  ListOrdered,
  Code,
  Strikethrough,
  MinusSquare,
  WrapText,
  Terminal,
  Heading3,
  TextQuote,
  Undo,
  Redo,
} from 'lucide-react'

interface ToolbarProps {
  editor: Editor | null
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="border-b p-2 flex flex-wrap gap-2 bg-muted">
      <Toggle
        size="sm"
        pressed={editor.isActive('undo')}
        onPressedChange={() => editor.chain().undo().run()}
        aria-label="Toggle bold"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <Undo className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('redo')}
        onPressedChange={() => editor.chain().redo().run()}
        aria-label="Toggle bold"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <Redo className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        aria-label="Toggle bold"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        aria-label="Toggle italic"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('underline')}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        aria-label="Toggle underline"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <Underline className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        aria-label="Toggle strikethrough"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 1 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        aria-label="Toggle h1"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <Heading1 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 2 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        aria-label="Toggle h2"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <Heading2 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 3 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        aria-label="Toggle h3"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <Heading3 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        aria-label="Toggle bullet list"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('orderedList')}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        aria-label="Toggle ordered list"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('code')}
        onPressedChange={() => editor.chain().focus().toggleCode().run()}
        aria-label="Toggle inline code"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <Code className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('blockquote')}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
        aria-label="Toggle inline blockquote"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <TextQuote className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('codeBlock')}
        onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
        aria-label="Toggle code block"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <Terminal className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        onPressedChange={() => editor.chain().focus().setHorizontalRule().run()}
        aria-label="Insert horizontal rule"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <MinusSquare className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        onPressedChange={() => editor.chain().focus().setHardBreak().run()}
        aria-label="Insert hard break"
        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <WrapText className="h-4 w-4" />
      </Toggle>
    </div>
  )
}

export default Toolbar