"use client";

import React, { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FaCalendarAlt } from "react-icons/fa";

const TailwindDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close the popover if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date ?? null);
    setIsOpen(false); // Hide the calendar after choosing a date
  };

  return (
    <div className="w-full">
      <div className="bg-white shadow-lg rounded-lg px-3 py-5">
        <div className="flex items-center justify-center border bg-base-content shadow-md rounded-xl py-1 mb-4">
          <div className="text-white text-xl px-4 cursor-pointer">
            পুরোনো নিউজ আর্কাইভ
          </div>
        </div>

        {/* Input Wrapper */}
        <div className="relative">
          <div
            className="flex items-center border border-gray-300 rounded-lg py-2 px-3 transition focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FaCalendarAlt className="text-gray-500 mr-3" />
            <input
              readOnly
              className="w-full outline-none text-xl font-medium placeholder-gray-400 bg-transparent"
              placeholder="তারিখ নির্বাচন করুন"
              value={
                selectedDate
                  ? selectedDate.toLocaleDateString("bn-BD", {
                      timeZone: "Asia/Dhaka",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : ""
              }
            />
          </div>

          {/* Popover container */}
          {isOpen && (
            <div
              ref={popoverRef}
              className="absolute z-20 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-full left-0 p-2"
            >
              <DayPicker
                mode="single"
                selected={selectedDate ?? undefined}
                onSelect={handleDateChange}
                // 1) Show Month & Year as dropdown
                captionLayout="dropdown"
                timeZone="Asia/Dhaka"
                weekStartsOn={0}
                disabled={{ after: new Date(), before:  new Date(2024, 10, 1)}}
              />
            </div>
          )}
        </div>

        <button
          onClick={() =>
            console.log(
              selectedDate
                ? selectedDate.toLocaleDateString("en-CA", {
                    timeZone: "Asia/Dhaka",
                  })
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
