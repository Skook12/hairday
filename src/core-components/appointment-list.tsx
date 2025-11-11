import Container from "../components/container";
import SunIcon from "../assets/sun.svg?react";
import AfternoonIcon from "../assets/afternoon.svg?react";
import MoonIcon from "../assets/moon.svg?react";
import Icon from "../components/icon";
import Text from "../components/text";
import type { Schedule } from "../models/schedule";
import useSchedule from "../hooks/use-schedule";
import TrashIcon from "../assets/trash.svg?react";

interface AppointmentListProps {
  period: String;
  appoitment?: Schedule[];
}

export default function AppointmentList({
  period,
  appoitment,
}: AppointmentListProps) {
  const { deleteSchedule } = useSchedule();
  return (
    <Container className="rounded-lg border border-gray-600 mt-6">
      <div className="flex justify-between border-b border-gray-600 p-6">
        <div className="flex gap-4 ">
          <Icon
            svg={
              period === "morning"
                ? SunIcon
                : period === "afternoon"
                ? AfternoonIcon
                : MoonIcon
            }
          />
          <Text>
            {period === "morning"
              ? "Morning"
              : period === "afternoon"
              ? "Afternoon"
              : "Night"}
          </Text>
        </div>
        <Text>
          {period === "morning"
            ? "9h-12h"
            : period === "afternoon"
            ? "13h-18h"
            : "19h-21h"}
        </Text>
      </div>

      {(appoitment?.length == 0 || !appoitment) && (
        <div className="flex justify-between p-6">
          <div className="flex gap-4">
            <Text as="h3" variant="text-md">
              No appointments available for this period.
            </Text>
          </div>
        </div>
      )}

      {appoitment?.map((item) => (
        <div
          key={item.time + "appoitment"}
          className="flex items-center justify-between p-6"
        >
          <div className="flex  gap-4">
            <Text as="h2" variant="title-md">
              {item.time}
            </Text>
            <Text as="h3" variant="text-md">
              {item.customer}
            </Text>
          </div>
          <Icon
            svg={TrashIcon}
            className="cursor-pointer"
            onClick={() => deleteSchedule(item.id)}
          />
        </div>
      ))}
    </Container>
  );
}
