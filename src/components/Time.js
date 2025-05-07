import React, { useState, useEffect } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - 75,
    y: window.innerHeight / 5
  });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Mouse dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch dragging
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setOffset({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPosition({ x: touch.clientX - offset.x, y: touch.clientY - offset.y });
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Time formatting
  const formatTime = () => {
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
    const timeString = currentTime.toLocaleTimeString([], options);
    const [time, period] = timeString.split(" ");
    const [hours, minutes, seconds] = time.split(":");
    return { hours, minutes, seconds, period };
  };

  // Date formatting
  const formatDate = () => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const dateString = currentTime.toLocaleDateString([], options);
    return dateString.split(",");
  };

  const { hours, minutes, seconds, period } = formatTime();
  const [weekday, monthDay, year] = formatDate();

  return (
    <div
      className="fixed z-50 select-none cursor-grab active:cursor-grabbing transition-transform duration-200"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: "none",
        transform: isHovered ? "scale(1.03)" : "scale(1)"
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        handleMouseUp();
        setIsHovered(false);
      }}
    >
      <div className="transition-all duration-300">
        <div className="flex flex-col items-center text-white font-mono">
          {/* Time display */}
          <div className="text-2xl font-light tracking-tighter">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{hours}</span>:
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{minutes}</span>:
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{seconds}</span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-1">{period}</span>
          </div>

          {/* Date display on hover */}
          <div className={`text-center transition-all duration-300 ${isHovered ? 'opacity-90 mt-2' : 'opacity-0 h-0'} backdrop-blur-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg p-[2px]`}>
            <div className="text-sm font-medium opacity-90">{weekday}</div>
            <div className="text-xs opacity-80">{monthDay}, {year}</div>
          </div>

          {/* Drag handle line */}
          <div className={`w-8 h-0.5 bg-white/30 rounded-full mt-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Time;
