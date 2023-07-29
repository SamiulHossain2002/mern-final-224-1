import React from "react";

const AllUsers = () => {
  return (
    <div>
      <div>
        <caption>
          <h3>All users: Informations not for All</h3>
        </caption>
      </div>
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
              <td>M***</td>
              <td>02-**-2**3</td>
              <td>Good Quality</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>J***b</td>
              <td>05-**-2***</td>
              <td>Best grade</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>La***</td>
              <td>0*-0*-2***</td>
              <td>Good</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
