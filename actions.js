
export const SET_HOURLY_RATE = 'SET_HOURLY_RATE';

export function setHourlyRate(hourlyRate) {
  return { type: SET_HOURLY_RATE, hourlyRate };
}
