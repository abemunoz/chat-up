import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Welcome.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="outer">
      <div className="inner">
        <h1 className="heading">Welcome to ChatUp!</h1>
        <div>
          <input placeholder="Name" className="input" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="input top25" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button top25'} type="submit">Join</button>
        </Link>
      </div>
    </div>
  );
}
