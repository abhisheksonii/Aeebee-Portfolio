import Introduction from '@/components/Introduction'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      <Introduction />
      <Experience />
      <Projects />
      <Education />
    </div>
  )
}