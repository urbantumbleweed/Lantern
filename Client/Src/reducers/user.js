'use strict';

const {extend} = require('lodash');

const {
    LOGIN_SUCCESS,
    LOGOUT,
    ADD_EMERGENCY_CONTACT,
    UPDATE_EMERGENCY_CONTACT_SUCCESS,
    UPDATE_ACCEPTABLE_DELAY,
    RESET_DELAY,
    PASSED_ETA,
    SET_PASSED_TIME_DELAY,
    PASSED_ACCEPTABLE_DELAY,
    LOAD_DELAY,
    SET_ON_TRIP,
    CLEAR_ON_TRIP,
    LOAD_EMERGENCY_CONTACT
} = require('../constants/action-types');

const initialState = {
  id: null,
  name: null,
  isLoggedIn: false,
  acceptableDelay: 15,
  emergencyContacts: [],
  onTrip: false,
  isPastETA: false,
  isOverdue: false
};

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case LOGIN_SUCCESS:
      return extend({}, state, {
        id: payload._id,
        name: payload.name,
        isLoggedIn: true,
      });
    case LOGOUT:
      return initialState;
    case LOAD_EMERGENCY_CONTACT:
      return extend({}, state, {
        emergencyContacts: payload
      });
    case LOAD_DELAY:
      return extend({}, state, {
        acceptableDelay: payload
      });
    case UPDATE_EMERGENCY_CONTACT_SUCCESS:
      return extend({}, state, {
        emergencyContacts: payload
      })
    case ADD_EMERGENCY_CONTACT:
      return extend({}, state, {
        emergencyContacts: state.emergencyContacts.concat([payload])
      });
    case UPDATE_ACCEPTABLE_DELAY:
      return extend({}, state, {
        acceptableDelay: payload
      });
    case RESET_DELAY:
      return extend({}, state, {
        isPastETA: false
      });
    case PASSED_ETA:
      return extend({}, state, {
        isPastETA: true
      });
    case SET_PASSED_TIME_DELAY:
      return extend({}, state, {
        acceptableDelay: payload
      });
    case SET_ON_TRIP:
    case CLEAR_ON_TRIP:
      return extend({}, state, {
        onTrip: payload.onTrip
      });
    case PASSED_ACCEPTABLE_DELAY:
      return extend({}, state, {
        isOverdue: true
      });
    default:
        return state;
  };
};
