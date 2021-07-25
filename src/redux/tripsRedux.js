/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

function compareCost(a, b) {
  const costa = a.cost.replace('$','');
  const costb = b.cost.replace('$','');
  if(parseInt(costa) < parseInt(costb)){
    return -1;
  }
  if(parseInt(costa) > parseInt(costb)){
    return 1;
  }
  return 0;
}

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  output = output.filter(trip => trip.days <= filters.duration.to && trip.days >= filters.duration.from);
  // TODO - filter by tags
  if(filters.tags.length > 0){
    const matching = [];
    for(let trip of output){
      let flag = filters.tags.length;
      for(let tag of filters.tags){
        if(trip.tags.indexOf(tag) != -1){
          flag--;
        }
      }
      if(flag == 0){
        matching.push(trip);
      }
    }
    output = matching;
  }
  // TODO - sort by cost descending (most expensive goes first)
  output.sort(compareCost).reverse();
  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
