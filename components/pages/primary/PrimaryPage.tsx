import {DummySection} from "@/components/shared/DummySection";
import Primaryanimation from "@/components/animations/PrimaryAnimation";

const PrimaryPage = () => {
  return (
    <article >
      <Primaryanimation />
         <div className="min-h-[200dvh] bg-white">
          <DummySection />
          <DummySection />
          </div>
    </article>
  )
}

export default PrimaryPage