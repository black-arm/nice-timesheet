
import React from 'react';

const Timesheet: React.FC = () => {
  return (
    <div>
      <h1>Timesheet Page</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Hours Worked</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023-10-01</td>
            <td>8</td>
            <td>Development</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Timesheet;