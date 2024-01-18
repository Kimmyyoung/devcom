
export const fetchEventIds = async (): Promise<string[]> => {
  // Assume you are fetching event IDs from an API or some data source
  const response = await fetch('https://devcom-0cbe786b171a.herokuapp.com/events');
  const data = await response.json();

  // Assuming the API response is an array of strings representing event IDs
  return data.eventIds;
};



export const fetchEventData = async (eventId: string): Promise<any> => {
  // Assume you are fetching event data from an API or some data source
  const response = await fetch(`https://devcom-0cbe786b171a.herokuapp.com/events${eventId}`);
  const data = await response.json();

  // Assuming the API response contains the detailed event data
  return data.eventData;
};

