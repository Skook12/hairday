import Button from "../components/button";
import Container from "../components/container";
import Input from "../components/input";
import Text from "../components/text";
import CalendarIcon from "../assets/calendar.svg?react";
import UserIcon from "../assets/user-icon.svg?react";
import TimeSlotGroup from "./available-times";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import useSchedule from "../hooks/use-schedule";
import { type Schedule } from "../models/schedule";

const morningSlots = ["09:00", "10:00", "11:00", "12:00"];
const afternoonSlots = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const eveningSlots = ["19:00", "20:00", "21:00"];

export default function Sidebar() {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const { getTime, handleNewSchedule } = useSchedule();
  const [bookedTimes, setBookedTimes] = useState<Schedule[]>([]);
  const [date, setDate] = useState<string | null>();
  const [customer, setCustomer] = useState<string | null>();
  const formRef = useRef<HTMLFormElement>(null);

  function handleGetTimes(event: ChangeEvent<HTMLInputElement>) {
    const dateObject = event.target.valueAsDate;
    if (dateObject) {
      const formattedDate = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "UTC",
      }).format(dateObject);
      const times = getTime(formattedDate);
      if (times.length > 0) setBookedTimes(times);
      setDate(formattedDate);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      date !== null &&
      date !== undefined &&
      selectedTime !== undefined &&
      customer !== null &&
      customer !== undefined
    ) {
      handleNewSchedule(date, selectedTime, customer);
      setBookedTimes([
        ...bookedTimes,
        { id: "booked", date: date, time: selectedTime, customer: customer },
      ]);
    }
    setDate(null);
    setSelectedTime("");
    setCustomer(null);
    formRef.current?.reset();
    setBookedTimes([]);
  }
  return (
    <>
      <Container className="basis-1/3 bg-gray-700 p-25 rounded-xl">
        <form ref={formRef} onSubmit={handleSubmit}>
          <Text as="h1" variant="title-lg">
            Agende um atendimento
          </Text>
          <Text as="h3" className="mt-2">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </Text>
          <Text as="h2" variant="title-md" className=" mt-6">
            Data
          </Text>
          <Input
            icon={CalendarIcon}
            variant="text-md"
            type="date"
            className="mt-2"
            onChange={(e) => handleGetTimes(e)}
          />
          <Text as="h2" variant="title-md" className=" mt-6">
            Horários
          </Text>
          <TimeSlotGroup
            title="Manhã"
            times={morningSlots}
            selectedTime={selectedTime}
            bookedTimes={bookedTimes}
            onTimeSelect={setSelectedTime}
            date={date}
          />

          <TimeSlotGroup
            title="Tarde"
            times={afternoonSlots}
            selectedTime={selectedTime}
            bookedTimes={bookedTimes}
            onTimeSelect={setSelectedTime}
            date={date}
          />

          <TimeSlotGroup
            title="Noite"
            times={eveningSlots}
            selectedTime={selectedTime}
            bookedTimes={bookedTimes}
            onTimeSelect={setSelectedTime}
            date={date}
          />

          <Text as="h2" variant="title-md" className=" mt-6">
            Cliente
          </Text>
          <Input
            icon={UserIcon}
            variant="text-md"
            type="text"
            className="mt-2"
            placeholder="Nome do Cliente"
            onChange={(e) => setCustomer(e.target.value)}
          />
          <Button
            className="mt-8"
            disabled={!date || customer === "" || !selectedTime}
          >
            AGENDAR
          </Button>
        </form>
      </Container>
    </>
  );
}
