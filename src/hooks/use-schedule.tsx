import { type Schedule, SCHEDULE_KEY } from "../models/schedule";
import useLocalStorage from "use-local-storage";

export default function useSchedule() {
  const morningSlots = ["09:00", "10:00", "11:00", "12:00"];
  const afternoonSlots = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
  const eveningSlots = ["19:00", "20:00", "21:00"];
  const [schedule, setSchedule] = useLocalStorage<Schedule[]>(SCHEDULE_KEY, []);

  function getTime(date: string | null) {
    return schedule?.filter((item) => item.date === date);
  }

  function deleteSchedule(id: string) {
    setSchedule(schedule?.filter((item) => item.id !== id));
  }

  function handleNewSchedule(
    selectedDate: string,
    selectedTime: string,
    selectedCustomer: string
  ) {
    setSchedule([
      ...schedule,
      {
        id: Math.random().toString().substring(2, 9),
        date: selectedDate,
        time: selectedTime,
        customer: selectedCustomer,
      },
    ]);
  }

  function getMorningAppointments(date: string) {
    return schedule
      .filter((item) => morningSlots.includes(item.time) && item.date === date)
      .sort((a, b) => a.time.localeCompare(b.time));
  }

  function getAfternoonAppointments(date: string) {
    return schedule
      .filter(
        (item) => afternoonSlots.includes(item.time) && item.date === date
      )
      .sort((a, b) => a.time.localeCompare(b.time));
  }

  function getEveningAppointments(date: string) {
    return schedule
      .filter((item) => eveningSlots.includes(item.time) && item.date === date)
      .sort((a, b) => a.time.localeCompare(b.time));
  }
  return {
    getTime,
    schedule,
    deleteSchedule,
    handleNewSchedule,
    morningSlots,
    afternoonSlots,
    eveningSlots,
    getMorningAppointments,
    getAfternoonAppointments,
    getEveningAppointments,
  };
}
