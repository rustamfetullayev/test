import React from "react";
import { Link } from "react-router-dom";

const List = ({ data = [], onDelete }) => {
  return (
    <>
      <Link to="/add" className="btn btn-success">
        Create new one
      </Link>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {data.map((row, key) => (
            <tr key={key}>
              <td>{row.title}</td>
              <td>{row.description}</td>
              <td>{row.status}</td>
              <td>
                <Link to={`/${key}`}>Edit</Link>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(key)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
