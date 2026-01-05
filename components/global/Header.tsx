import { Container } from "../ui/Container"
import { NavMenu } from "./NavMenu"

export const Header = () => {
  return (
    <header className="mt-7 px-6 py-4 bg-white shadow-sm fixed left-8 right-8 top-4 z-50 rounded-lg">
        <Container>
          <nav className="pointer-events-auto "style={{zIndex: `200`}}>
            <div className="relative transition-shadow duration-200 flex flex-start items-center gap-10">
                <NavMenu />
                <h3 className="text-2xl">Scroll animated hero section</h3>
            </div>
        </nav>
        </Container>
    </header>
  )
} 
