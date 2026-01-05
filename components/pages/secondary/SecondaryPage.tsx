import {DummySection} from "@/components/shared/DummySection";
import SecondaryAnimation from "@/components/animations/SecondaryAnimation";

const SecondaryPage = () => {
  return (
     <article>
        <SecondaryAnimation />
         <div className="min-h-[200dvh] bg-white">
            <DummySection />
            <DummySection />
        </div>
    </article>
  )
}

export default SecondaryPage