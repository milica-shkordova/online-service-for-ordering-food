import React, { useState } from "react";
import "./style.scss";
import { month, weekDay } from "../../constants/constants";

interface Props {
    startDay: Date;
    moveCalendar: (move: "forward" | "back") => void;
    selectedDayValue: (selectedDayValue: Date) => void;
}

const WeeklyCalendar: React.FC<Props> = ({
    startDay,
    moveCalendar,
    selectedDayValue,
}) => {
    const today = new Date();
    const [selectedDay, setSelectedDay] = useState<Date>(startDay);

    const renderWeek = () => {
        const week = [0, 1, 2, 3, 4, 5, 6];
        return week.map((dayNumber) => {
            let day = new Date(startDay.toString());
            day.setDate(day.getDate() + dayNumber);

            return (
                <div
                    className={`dayBox ${
                        day.setHours(0, 0, 0, 0).toString() ===
                            selectedDay.setHours(0, 0, 0, 0).toString() &&
                        "active"
                    }`}
                    key={dayNumber}
                    onClick={() => {
                        setSelectedDay(day);
                        selectedDayValue(day);
                    }}
                >
                    <p className="day">
                        {day.setHours(0, 0, 0, 0).toString() ===
                        today.setHours(0, 0, 0, 0).toString()
                            ? "ДЕНЕС"
                            : weekDay[day.getDay()]}
                    </p>
                    <p className="number">{day.getDate()}</p>
                    <p className="month">{month[day.getMonth()]}</p>
                </div>
            );
        });
    };

    return (
        <div className="weeklyCalendar">
            <i
                className="fa-solid fa-chevron-left"
                onClick={() => moveCalendar("back")}
            />
            <div className="calendar">{renderWeek()}</div>
            <i
                className="fa-solid fa-chevron-right"
                onClick={() => moveCalendar("forward")}
            />
        </div>
    );
};

export default WeeklyCalendar;
