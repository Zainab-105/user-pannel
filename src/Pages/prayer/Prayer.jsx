import React from 'react';
import './prayer.css';

export default function Prayer() {
  return (
    <div className="bg-prayer">
      <div className="container-fluid">
        <div className="container mx-auto p-5">
          <div className="heading">
            <h2>Prayer Times</h2>
          </div>
          <table className="times">
            <tbody>
              <tr>
                <td>FAJAR</td>
                <td>5:38 AM</td>
              </tr>
              <tr>
                <td>SUNRISE</td>
                <td>7:02 AM</td>
              </tr>
              <tr>
                <td>DUHUR</td>
                <td>12:20 PM</td>
              </tr>
              <tr>
                <td>ASAR</td>
                <td>3:17 PM</td>
              </tr>
              <tr>
                <td>MAGHRIB</td>
                <td>5:38 PM</td>
              </tr>
              <tr>
                <td>ISHA</td>
                <td>7:02 PM</td>
              </tr>
              <tr>
                <td>QIYAM</td>
                <td>2:06 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
