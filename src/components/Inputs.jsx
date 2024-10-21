import React, { useEffect, useState } from 'react';
import { Plus } from 'react-feather';
import { useSpecs } from './SpecsContext';
let Users = ['ابو عاصي', 'عبوهاب', 'عصام', 'الادمن الرايق'];

function Inputs() {
  let [user, setUser] = useState(Users[0]);
  let [spec, setSpec] = useState('');
  let [error, setError] = useState(false);
  let { addSpec, message } = useSpecs();

  useEffect(() => {
    if (user === 'الادمن الرايق') {
      let pass = window.prompt('هات كلمة السر');
      if (pass !== 'gygy4321') {
        alert('اختار اسمك زي الناس');
        setUser(Users[0]);
      }
    }
  }, [user]);

  let handleSubmit = () => {
    if (spec === '' || user === '') {
      setError(true);
    } else {
      setError(false);
      addSpec(user, spec);
    }
  };

  return (
    <div className="inputs">
      <div className="name">
        <p className="label">اختار اسمك</p>
        <div className="select">
          <select
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="name_select"
          >
            {Users.map((user, index) => (
              <option key={index} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="spec_area">
        <p className="label">قول اللي انت عايزه</p>
        <textarea
          value={spec}
          onChange={(e) => setSpec(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={handleSubmit} className="add__btn">
          <Plus size={20} /> ضيف رأيك
        </button>
        {error && (
          <p style={{ color: 'red' }}>متسيبش حاجة فاضية اكتب اي حاجة</p>
        )}
      </div>
      {message && <p className="msg">{message}</p>}
    </div>
  );
}

export default Inputs;
