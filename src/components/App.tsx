import * as React from "react";

import "../styles/App.scss";

const Loader = () => <div>Loading...</div>;

export const App = () => {
  let [data, setData] = React.useState<{}>();

  React.useEffect(() => {
    setTimeout(()=> {setData('Hello World');}, 700);
  }, []);

  const showLoader = !data;
  return (
    <div className="App">
      {showLoader && <Loader />}
      {!showLoader && data }
    </div>
  );
};

export default App;
