import Introduction from '@/components/Introduction'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      <Introduction />
      <Experience />
      <Education />
      <Projects />
    </div>
  )
}