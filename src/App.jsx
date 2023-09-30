import { useState } from 'react';
import Slider from 'react-slider';

const MIN = 100;
const MAX = 12000;
function App() {
  const [values, setValues] = useState([MIN, MAX]);
  console.log(values);
  return (
    <div className="min-h-[100vh] flex justify-center items-center bg-[#cdd9ed]">
      <div className="w-[100%] max-w-[320px] p-8 bg-[#fff] rounded-[8px]">
        <h3 className="text-2xl font-bold mb-3 text-[#3f4656]">
          Price <span className=" font-semibold">Range</span>
        </h3>
        <div className="text-[#275efe]">
          ${values[0]} - ${values[1]}
        </div>
        <small className="text-[14px] mt-2 block text-[#99a3b8]">
          Current Range: ${values[1] - values[0]}
        </small>
        <Slider
          className="w-full h-[4px] rounded-md bg-blue-400 mt-4"
          onChange={setValues}
          value={values}
          min={MIN}
          max={MAX}
        />
      </div>
    </div>
  );
}

export default App;
