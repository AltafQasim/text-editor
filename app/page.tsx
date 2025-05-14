import Editor from '@/components/Editor'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 bg-background text-foreground">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Tiptap Tex Editor</h1>
          <ModeToggle />
        </div>
        <Editor />
      </div>
    </main>
  )
}