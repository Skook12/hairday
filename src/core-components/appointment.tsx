import Container from "../components/container";
import Input from "../components/input";
import Text from "../components/text";
import AppointmentList from "./appointment-list";
import CalendarIcon from "../assets/calendar.svg?react";
import useSchedule from "../hooks/use-schedule";
import { useEffect, useState, type ChangeEvent } from "react";
import { type Schedule } from "../models/schedule";

export default function Appointment() {
  const {
    getMorningAppointments,
    getAfternoonAppointments,
    getEveningAppointments,
    schedule,
  } = useSchedule();

  const [morningAppointments, setMorningAppointments] = useState<Schedule[]>();
  const [afternoonAppointments, setAfternoonAppointments] =
    useState<Schedule[]>();
  const [eveningAppointments, setEveningAppointments] = useState<Schedule[]>();
  const [date, setDate] = useState<string | null>();

  const updateAppointments = (formattedDate: string) => {
    setMorningAppointments(getMorningAppointments(formattedDate));
    setEveningAppointments(getEveningAppointments(formattedDate));
    setAfternoonAppointments(getAfternoonAppointments(formattedDate));
  };

  function handleGetAppointments(event: ChangeEvent<HTMLInputElement>) {
    const dateObject = event.target.valueAsDate;
    if (dateObject) {
      const formattedDate = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "UTC",
      }).format(dateObject);
      setDate(formattedDate);
      updateAppointments(formattedDate);
    }
  }

  useEffect(() => {
    if (date) {
      updateAppointments(date);
    }
  }, [schedule]);
  return (
    <>
      <Container className="basis-2/3 p-25">
        <div className="flex justify-between">
          <div>
            <Text as="h1" variant="title-lg">
              Your schedule
            </Text>
            <Text as="h3" className="mt-2">
              Check your scheduled haircuts by day.
            </Text>
          </div>
          <Input
            className="basis-1/10"
            icon={CalendarIcon}
            type="date"
            onChange={(e) => handleGetAppointments(e)}
          />
        </div>
        <AppointmentList period="morning" appoitment={morningAppointments} />
        <AppointmentList
          period="afternoon"
          appoitment={afternoonAppointments}
        />
        <AppointmentList period="night" appoitment={eveningAppointments} />
      </Container>
    </>
  );
}
