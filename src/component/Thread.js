import React from 'react';
import './Thread.css';

const Thread = ({ 
  threadData, 
  expandedYear, 
  color = "#666" // default color if not provided
}) => {
  const getTasksForYear = (year) => {
    return threadData.tasks.filter(task => {
      const startYear = new Date(task.startDate).getFullYear();
      const endYear = new Date(task.endDate).getFullYear();
      return startYear === year || endYear === year;
    });
  };

  const getTaskPosition = (date, year) => {
    const taskDate = new Date(date);
    const month = taskDate.getMonth();
    // Calculate base position for the year (40px per collapsed year + initial offset)
    const years = [2021, 2022, 2023, 2024];
    const yearIndex = years.indexOf(year);
    const yearOffset = yearIndex * 66 + 10;
    
    // Add month position within the expanded year
    // Added 40px initial offset to align with the first month
    const monthPosition = (month * 46) + 46;
    
    return yearOffset + monthPosition;
  };

  return (
    <div className="thread-container">
      <div className="thread-name">{threadData.name}</div>
      <div className="thread-line" style={{ backgroundColor: color }}>
        {expandedYear && (
          <div className="thread-expanded-section">
            {getTasksForYear(expandedYear).map(task => {
              const startPos = getTaskPosition(task.startDate, expandedYear);
              const endPos = getTaskPosition(task.endDate, expandedYear);
              const height = endPos - startPos;

              return (
                <div 
                  key={task.id}
                  className="task-section"
                  style={{
                    top: `${startPos}px`,
                    height: `${height}px`,
                    backgroundColor: color
                  }}
                >
                  <div className="task-mark start" style={{ backgroundColor: color }}/>
                  <div className="task-name">{task.name}</div>
                  <div className="task-mark end" style={{ backgroundColor: color }}/>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Thread;