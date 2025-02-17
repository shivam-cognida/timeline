import React, { useState } from 'react';
import './Comp.css';
import Thread from './Thread';

function Comp() {
  const [expandedYear, setExpandedYear] = useState(null);
  const years = [2021, 2022, 2023, 2024]; // Reversed the order
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Sample thread data
  const threads = [
    {
      id: 1,
      name: "Project Alpha",
      color: "#ff6b6b", 
      tasks: [
        {
          id: 1,
          name: "Phase 1",
          startDate: "2022-03-15",
          endDate: "2022-06-20"
        },
        {
          id: 2,
          name: "Phase 2",
          startDate: "2022-07-01", 
          endDate: "2022-09-30"
        },
        {
          id: 3,
          name: "Phase 3",
          startDate: "2023-01-15",
          endDate: "2023-04-30"
        }
      ]
    },
    {
      id: 2,
      name: "Project Beta",
      color: "#4ecdc4",
      tasks: [
        {
          id: 4,
          name: "Research",
          startDate: "2022-01-10",
          endDate: "2022-04-30"
        },
        {
          id: 5,
          name: "Development",
          startDate: "2022-05-01",
          endDate: "2022-12-31"
        },
        {
          id: 6,
          name: "Testing",
          startDate: "2023-01-01",
          endDate: "2023-03-31"
        }
      ]
    },
    {
      id: 3,
      name: "Project Gamma",
      color: "#9b59b6",
      tasks: [
        {
          id: 7,
          name: "Planning",
          startDate: "2023-06-01",
          endDate: "2023-08-31"
        },
        {
          id: 8,
          name: "Implementation",
          startDate: "2023-09-01",
          endDate: "2024-02-28"
        },
        {
          id: 9,
          name: "Review",
          startDate: "2024-03-01",
          endDate: "2024-05-31"
        }
      ]
    },
    {
      id: 3,
      name: "Project Tomar",
      color: "#9b59b6",
      tasks: [
        {
          id: 7,
          name: "Born",
          startDate: "2021-02-01",
          endDate: "2021-04-31"
        },
        {
          id: 8,
          name: "ML",
          startDate: "2021-06-01",
          endDate: "2021-09-28"
        },
        {
          id: 9,
          name: "Dead",
          startDate: "2021-09-01",
          endDate: "2021-12-31"
        }
      ]
    }
  ];

  const handleYearClick = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        <div className="timeline-line">
          {years.map((year) => (
            <div key={year} className="year-section">
              {expandedYear === year ? (
                // Expanded view with months
                <>
                  <div className="year-circle" onClick={() => handleYearClick(year)}>
                    {year}
                  </div>
                  <div className="months-container">
                    {months.map((month) => (
                      <div key={month} className="month-circle">
                        {month}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                // Collapsed view
                <div className="year-circle" onClick={() => handleYearClick(year)}>
                  {year}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="threads-container">
        {threads.map(thread => (
          <Thread
            key={thread.id}
            threadData={thread}
            expandedYear={expandedYear}
            color={thread.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Comp;