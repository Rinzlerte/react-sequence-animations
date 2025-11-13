import { Container } from "@/components/ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export const DummySection = () => {
  return (
    <section className="py-16 px-6 h-dvh flex items-center flex-col">
        <Container>
            <SectionTitle text="Dummy Section"/>
        </Container>
    </section>
  )
}
