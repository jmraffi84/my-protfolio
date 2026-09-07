import Projects from './projects';
import Sidebar from './sidebar';
import Skills from './skills';


export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 h-full mr-2  rounded-md my-4 p-2 md:ml-3 mb-4  ">
        <Sidebar />
        <div className="flex-1 bg-mauve-800 p-4 rounded-md min-h-75">
          <Skills />
        </div>
        <div className="flex-1 bg-mauve-800 rounded-md min-h-75 w-full">
          <Projects />
        </div>
      </div>
    </>
  );
}