import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";

const statuses = ["to do", "in progress", "done"];

const App = () => {
  const [data, setData] = React.useState([
    { title: "task 1", status: statuses[0], description: "test 1" },
    { title: "task 2", status: statuses[1], description: "test 2" },
    { title: "task 3", status: statuses[2], description: "test 3" },
  ]);

  const onEdit = ({ params, id }) => {
    const newData = data;
    newData[id] = params;
    setData(newData);
  };

  const onDelete = (key) => {
    setData((prevState) => prevState.filter((_, index) => index !== key));
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <List data={data} onDelete={onDelete} />}
        />
        <Route
          exact
          path="/add"
          render={(props) => (
            <Add
              {...props}
              statuses={statuses}
              onCreate={(task) => setData([...data, task])}
            />
          )}
        />
        <Route
          exact
          path="/:id"
          render={(props) => (
            <Edit {...props} data={data} statuses={statuses} onEdit={onEdit} />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
