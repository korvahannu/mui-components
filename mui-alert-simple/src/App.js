import React, {useState} from 'react';
import Alert from './Alert';

const App = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("This is a message");

  const deleteMsg = () => {
    setMsg('');
  };

  return (
    <div className="App">
      <h1>{msg}</h1>
      <button onClick={()=>setOpen(true)}>Delete message</button>

      <Alert open={open} setOpen={setOpen}
      onAccept={deleteMsg} />

    </div>
  );
}

export default App;
