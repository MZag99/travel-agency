/* SELECTORS */

export const getAllFilters = ({filters}) => filters;
/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');

// action creators
export const changeSearchPhrase = payload => { 
  return {
    payload, 
    type: CHANGE_PHRASE,
  };
};
export const changeDurationFrom = payload => { 
  return {
    payload, 
    type: CHANGE_DURATION_FROM,
  }; 
};
export const changeDurationTo = payload => { 
  return {
    payload,
    type: CHANGE_DURATION_TO,
  }; 
};
export const addTag = payload => {
  return {
    payload,
    type: ADD_TAG,
  };
};
export const removeTag = payload => {
  return {
    payload,
    type: REMOVE_TAG,
  };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DURATION_FROM:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: parseInt(action.payload),
        },
      }; 
    case CHANGE_DURATION_TO:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: parseInt(action.payload),
        },
      };
    case ADD_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags.slice(0, action.payload),
          ...statePart.tags.slice(action.payload + 1),
        ],
      };
    default:
      return statePart;
  }
}
