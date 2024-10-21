import React from 'react';

function Spec({ id, user_name, spec, remove }) {
  return (
    <div className="spec">
      <h4>{user_name}</h4>
      <p>{spec}</p>
      <div>
        <button onClick={() => remove(id)}>حذف</button>
      </div>
    </div>
  );
}

export default Spec;
