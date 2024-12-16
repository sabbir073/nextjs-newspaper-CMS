"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const TailwindDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const currentDate = new Date();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    const todayInDhaka = new Date(
      today.toLocaleDateString("en-CA", { timeZone: "Asia/Dhaka" })
    );
    const dateInDhaka = new Date(
      date.toLocaleDateString("en-CA", { timeZone: "Asia/Dhaka" })
    );
    return dateInDhaka.getTime() === todayInDhaka.getTime();
  };

  const isSelected = (date: Date) =>
    selectedDate?.toLocaleDateString("en-CA", { timeZone: "Asia/Dhaka" }) ===
    date.toLocaleDateString("en-CA", { timeZone: "Asia/Dhaka" });

    return (
        <div className="w-full">
          <div className="bg-white shadow-lg rounded-lg px-3 py-5">
            <div className="flex items-center justify-center border bg-base-content shadow-md rounded-xl py-1 mb-4">
              <div className="text-white text-xl px-4 cursor-pointer">পুরোনো নিউজ আর্কাইভ</div>
            </div>
            <div className="relative">
              {/* Input Wrapper */}
              <div className="flex items-center border border-gray-300 rounded-lg py-2 px-3 transition focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                {/* Calendar Icon */}
                <FaCalendarAlt className="text-gray-500 mr-3" />
                {/* Date Input */}
                <DatePicker
                  selected={selectedDate}
                  locale={'bn-BD'}
                  closeOnScroll={true}
                  onChange={handleDateChange}
                  placeholderText="তারিখ নির্বাচন করুন"
                  dateFormat="d MMMM yyyy"
                  maxDate={currentDate} // Disable future dates
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="w-full outline-none text-xl font-medium placeholder-gray-400"
                  popperClassName="react-datepicker-popper"
                  calendarClassName="bg-white border border-gray-300 rounded-lg shadow-lg w-full"
                  dayClassName={(date) => {
                    const selected = isSelected(date);
                    const today = isToday(date);
    
                    return `w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg transition-all ${
                      selected
                        ? "bg-blue-500 text-white"
                        : today
                        ? "bg-blue-100 text-blue-500"
                        : "hover:bg-gray-100 text-gray-700"
                    }`;
                  }}
                  weekDayClassName={() =>
                    "text-gray-500 font-medium text-sm w-10 flex justify-center"
                  }
                  renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                  }) => (
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
                      {/* Left Arrow */}
                      <div className="pr-2">
                        <button
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                          className="text-gray-700 hover:text-blue-500 text-xl"
                        >
                          &lt;
                        </button>
                      </div>
                      {/* Month and Year Dropdowns */}
                      <div className="flex items-center gap-2">
                        <select
                          value={date.getFullYear()}
                          onChange={({ target: { value } }) =>
                            changeYear(Number(value))
                          }
                          className="bg-transparent text-gray-700 hover:bg-gray-100 rounded-md py-1 px-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {Array.from(
                            { length: currentDate.getFullYear() - 2022 },
                            (_, i) => {
                              const year = 2023 + i;
                              return (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              );
                            }
                          )}
                        </select>
                        <select
                          value={date.getMonth()}
                          onChange={({ target: { value } }) =>
                            changeMonth(Number(value))
                          }
                          className="bg-transparent text-gray-700 hover:bg-gray-100 rounded-md py-1 px-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {Array.from({ length: 12 }, (_, i) => {
                            const isFutureMonth =
                              date.getFullYear() === currentDate.getFullYear() &&
                              i > currentDate.getMonth();
                            return (
                              <option
                                key={i}
                                value={i}
                                disabled={isFutureMonth} // Disable future months
                              >
                                {new Date(0, i).toLocaleString("default", {
                                  month: "long",
                                })}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      {/* Right Arrow */}
                      <div className="pl-2">
                        <button
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                          className="text-gray-700 hover:text-blue-500 text-xl"
                        >
                          &gt;
                        </button>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
            <button
              onClick={() =>
                console.log(
                  selectedDate
                    ? selectedDate.toLocaleDateString("en-CA", { timeZone: "Asia/Dhaka" })
                    : "No date selected"
                )
              }
              className="btn text-xl font-medium mt-3 w-full"
            >
              খুঁজুন
            </button>
          </div>
        </div>
      );
};

export default TailwindDatePicker;
