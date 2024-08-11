import Introduction from '@/components/Introduction'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Introduction />
      <Experience />
      <Education />
    </main>
  )
}