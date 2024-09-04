import React from "react";
import { format, eachDayOfInterval, startOfMonth, endOfMonth } from "date-fns";

const IndianMahuratCalendar = () => {
  const today = new Date();
  const start = startOfMonth(today);
  const end = endOfMonth(today);
  const days = eachDayOfInterval({ start, end });

  return (
    <div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        <div className="font-bold">Su</div>
        <div className="font-bold">Mo</div>
        <div className="font-bold">Tu</div>
        <div className="font-bold">We</div>
        <div className="font-bold">Th</div>
        <div className="font-bold">Fr</div>
        <div className="font-bold">Sa</div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div key={index} className="p-2 border rounded-md">
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndianMahuratCalendar;
