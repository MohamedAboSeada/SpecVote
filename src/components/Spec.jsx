import React from 'react';

// Define color constants
const COLORS = {
  BLUE: '#313B72',
  GREEN: '#62A87C',
  LIGHT_GREEN: '#6A3E37',
  TOMATO: 'tomato',
};

const styles = [
  {
    border: `2px solid ${COLORS.BLUE}`,
    boxShadow: `-3px 3px 0 ${COLORS.BLUE}`,
  },
  {
    border: `2px solid ${COLORS.GREEN}`,
    boxShadow: `-3px 3px 0 ${COLORS.GREEN}`,
  },
  {
    border: `2px solid ${COLORS.LIGHT_GREEN}`,
    boxShadow: `-3px 3px 0 ${COLORS.LIGHT_GREEN}`,
  },
  {
    border: `2px solid ${COLORS.TOMATO}`,
    boxShadow: `-3px 3px 0 ${COLORS.TOMATO}`,
  },
];

const buttonStyles = [
  {
    backgroundColor: COLORS.BLUE,
    color: 'white',
    border: '2px solid white',
    boxShadow: `-3px 3px 0 ${COLORS.BLUE}`,
  },
  {
    backgroundColor: COLORS.GREEN,
    color: 'white',
    border: '2px solid white',
    boxShadow: `-3px 3px 0 ${COLORS.GREEN}`,
  },
  {
    backgroundColor: COLORS.LIGHT_GREEN,
    color: 'white',
    border: '2px solid white',
    boxShadow: `-3px 3px 0 ${COLORS.LIGHT_GREEN}`,
  },
  {
    backgroundColor: COLORS.TOMATO,
    color: 'white',
    border: '2px solid white',
    boxShadow: `-3px 3px 0 ${COLORS.TOMATO}`,
  },
];

function matchStyle(name) {
  if (name === 'ابو عاصي') {
    return styles[0];
  } else if (name === 'عبوهاب') {
    return styles[1];
  } else if (name === 'عصام') {
    return styles[2];
  } else if (name === 'الادمن الرايق') {
    return styles[3];
  }
  return {}; // Default style in case no match is found
}

function matchButtonStyle(name) {
  if (name === 'ابو عاصي') {
    return buttonStyles[0];
  } else if (name === 'عبوهاب') {
    return buttonStyles[1];
  } else if (name === 'عصام') {
    return buttonStyles[2];
  } else if (name === 'الادمن الرايق') {
    return buttonStyles[3];
  }
  return {}; // Default button style in case no match is found
}

function Spec({ id, user_name, spec, remove }) {
  return (
    <div style={matchStyle(user_name)} className="spec">
      <h4>{user_name}</h4>
      <p>{spec}</p>
      <div>
        <button style={matchButtonStyle(user_name)} onClick={() => remove(id)}>
          حذف
        </button>
      </div>
    </div>
  );
}

export default Spec;
