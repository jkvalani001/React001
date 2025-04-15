import { useState, useCallback, useEffect,useRef} from 'react';
import './index.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef=useRef(null);

  // Password generation logic
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Default characters

    if (numberAllowed) str += '0123456789'; // Add numbers if allowed
    if (characterAllowed) str += '!@#$%^&*()-=+{}[]~`<>?/|'; // Add special characters if allowed

    // Generate the password by randomly selecting characters
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, characterAllowed, passwordGenerator])

  // Handle checkbox changes for both number and character inputs
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    if (id === 'numberInput') {
      setNumberAllowed(checked); // Update numberAllowed state
    }
    if (id === 'charInput') {
      setCharAllowed(checked); // Update characterAllowed state
    }
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 p-2 my-8 bg-gray-800 text-orange-500 text-xl">
        <h1 className="text-white text-center text-xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 text-white bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="password"
            readOnly
            ref={passwordRef} // Reference to the password input field
          />


          <button
            onClick={passwordGenerator}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
          >
            Generate
          </button>

            <button
            onClick={copyPasswordToClipboard}
                className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 transition-all duration-200"
              >
                Copy
              </button>

              {/* Generate Button - still functional */}
              
        </div>

        <div className="p-4 bg-gray-100 rounded">
          <div className="bg-white p-3 rounded shadow">
            <label className="text-sm">Length: {length}</label>
            <input
              type="range"
              min="6"
              max="100"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full mt-2 accent-blue-500"
            />
          </div>
        </div>

        {/* Checkbox for Allow Number Input */}
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="numberInput"
            checked={numberAllowed}
            onChange={handleCheckboxChange} // Handle change for number input
            className="mr-2"
          />
          <label htmlFor="numberInput" className="text-sm">Allow Number Input</label>
        </div>

        {/* Checkbox for Allow Special Characters */}
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="charInput"
            checked={characterAllowed}
            onChange={handleCheckboxChange} // Handle change for special characters input
            className="mr-2"
          />
          <label htmlFor="charInput" className="text-sm">Allow Special Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
