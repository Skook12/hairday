import Text from "../components/text";
import Button from "../components/button";
import type { Schedule } from "../models/schedule";

interface TimeSlotGroupProps {
  title: string;
  times: string[];
  selectedTime: string;
  bookedTimes: Schedule[] | undefined;
  onTimeSelect: (time: string) => void;
  date: string | null | undefined;
}

export default function TimeSlotGroup({
  title,
  times,
  bookedTimes,
  onTimeSelect,
  date,
}: TimeSlotGroupProps) {
  return (
    <>
      <Text as="h3" variant="text-sm" className=" mt-4">
        {title}
      </Text>
      <div className="grid grid-cols-4 gap-3 mt-2">
        {times.map((time) => {
          const isDisabled = bookedTimes?.some(
            (schedule) => schedule.time === time
          );

          return (
            <Button
              key={time + "time"}
              type="button"
              size="sm"
              variant="secondary"
              disabled={isDisabled || !date}
              onClick={() => onTimeSelect(time)}
            >
              {time}
            </Button>
          );
        })}
      </div>
    </>
  );
}
