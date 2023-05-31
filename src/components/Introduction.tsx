import React from 'react';

const Introduction = () => {
    return(
        <div className="mt-20 max-w-7xl mx-auto flex items-center justify-center text-white ">
            <div className="flex md:flex-row flex-col justify-center items-center">
  <div className="w-1/2 p-4">
    <h2 className="text-4xl font-bold mb-2 ">Explanation</h2>
    <p className="p-5">At ShotClockOracle, we utilize artificial intelligence and  statistics to predict game outcomes with a precision rate of 62.9%. The model considers a wide range of factors, including team performance, player statistics, and historical data. By crunching vast amounts of information, the model discovers trends that influence the outcome of NBA games. </p>
  </div>
  <div className="w-1/2 p-4 flex items-center justify-center">
        <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Home Team</th>
          <th className="px-4 py-2">Opposing Team</th>
          <th className="px-4 py-2">Computer Prediction</th>
          <th className="px-4 py-2">Actual Outcome</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">NYK</td>
          <td className="border px-4 py-2">HOU</td>
          <td className="border px-4 py-2">Win</td>
          <td className="border px-4 py-2">Win</td>

        </tr>
        <tr>
          <td className="border px-4 py-2">BRK</td>
          <td className="border px-4 py-2">WAS</td>
          <td className="border px-4 py-2">Loss</td>
          <td className="border px-4 py-2">Win</td>

        </tr>
        <tr>
          <td className="border px-4 py-2">TOR</td>
          <td className="border px-4 py-2">CLE</td>
          <td className="border px-4 py-2">Win</td>
          <td className="border px-4 py-2">Win</td>

        </tr>
        <tr>
          <td className="border px-4 py-2">UTA</td>
          <td className="border px-4 py-2">ORL</td>
          <td className="border px-4 py-2">Loss</td>
          <td className="border px-4 py-2">Win</td>

        </tr>
        <tr>
          <td className="border px-4 py-2">UTA</td>
          <td className="border px-4 py-2">SAS</td>
          <td className="border px-4 py-2">Win</td>
          <td className="border px-4 py-2">Win</td>

        </tr>
      </tbody>
    </table>
  </div>
</div>

        </div>
    )
    }
export default Introduction;