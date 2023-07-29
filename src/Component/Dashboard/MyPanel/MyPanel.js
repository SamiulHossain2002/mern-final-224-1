import React from "react";

const MyPanel = () => {
  return (
    <div>
      <caption>
        <h3>My Panel</h3>
      </caption>
      <div>
        <div>
          <table className="table w-75" border="5">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">First</th>
                <th scope="col">date</th>
                <th scope="col">Review</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>02-05-2023</td>
                <td>Good Quality</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>05-04-2023</td>
                <td>Best grade</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry </td>
                <td>02-04-2023</td>
                <td>Good</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPanel;
