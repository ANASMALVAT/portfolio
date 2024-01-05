import Intro from '@/components/intro'
import Divider from '@/components/divider'
import About from '@/components/about'
import Projects from '@/components/project/projects'
import Skills from '@/components/skills'
import Education from '@/components/education'
import Experience from '@/components/experience'
export default function Home() {
  
  return (
    <main className="flex flex-col items-center  px-4" >
      <Intro />
      <Divider/>
      <About/>
      <Education />
      <Experience />
      <Projects/>
      <Skills />
    </main>
  )
}
