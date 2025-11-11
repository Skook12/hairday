import Container from "../components/container";
import Appointment from "../core-components/appointment";
import Sidebar from "../core-components/sidebar";

export default function Home() {
  return (
    <Container className="flex min-h-full ">
      <Sidebar />
      <Appointment />
    </Container>
  );
}
