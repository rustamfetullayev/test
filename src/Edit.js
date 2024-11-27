import React from "react";

const Edit = ({
  match: {
    params: { id },
  },
  history: { goBack },
  data = [],
  statuses = [],
  onEdit,
}) => {
  const [params, setParams] = React.useReducer(
    (prevParams, newParams) => ({ ...prevParams, ...newParams }),
    {
      title: "",
      status: "",
      description: "",
    }
  );

  const getData = () => {
    setParams(data[id]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onEdit({ params, id });
    goBack();
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">
      <div className="col-md-6 offset-3">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label>Title</label>
            <input
              value={params.title}
              onChange={(e) => setParams({ title: e.target.value })}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Title</label>
            <select
              value={params.status}
              onChange={(e) => setParams({ status: e.target.value })}
              className="form-select"
            >
              <option value="">Select status</option>
              {statuses.map((row, key) => (
                <option value={row} key={key}>
                  {row}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label>Title</label>
            <textarea
              value={params.description}
              onChange={(e) => setParams({ description: e.target.value })}
              className="form-control"
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
