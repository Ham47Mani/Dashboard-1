const setMode = mode => {
  return {
    type: 'theme/SET_MODE',
    payload: mode
  }
}

const setColor = color => {
  return {
    type: 'theme/SET_COLOR',
    payload: color
  }
}

const getTheme = _ => { 
  return {type : 'theme/GET_THEME'}
}

const exportDefault = {
  setMode,
  setColor,
  getTheme
}

export default exportDefault;