export const MINIMUM_NOTICE_MS = 60 * 60 * 1000;
export const pickupTimes = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'];
export function canPickUp(date: string, time: string, now = Date.now()): boolean {
  return new Date(`${date}T${time}:00+04:00`).getTime() >= now + MINIMUM_NOTICE_MS;
}
