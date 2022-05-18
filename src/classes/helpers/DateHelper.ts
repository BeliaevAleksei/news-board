import dayjs from 'dayjs'

// import dayjs, { ConfigType, QUnitType } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
require('dayjs/locale/ru')
// import utc from 'dayjs/plugin/utc'
// import isBetween from 'dayjs/plugin/isBetween'
// import advancedFormat from 'dayjs/plugin/advancedFormat'

// dayjs.extend(advancedFormat)
dayjs.extend(relativeTime)
dayjs.locale('ru')
// dayjs.extend(utc)
// dayjs.extend(isBetween)

// export const toLocalFormat = (value: ConfigType) => {
//   return toFormat(value, 'YYYY-MM-DD')
// }

// export const toFormat = (value: ConfigType, template: string) => {
//   let result = ''
//   if (value) {
//     result = dayjs(value).format(template)
//   }
//   return result
// }

// export const dayjsUTC = (value?: ConfigType) => {
//   return dayjs(value).utc()
// }

// export const toUTC = (value: ConfigType, formatString = 'YYYY-MM-DD') => {
//   let result = ''
//   if (value) {
//     result = dayjs(value)
//       .utc()
//       .format(formatString)
//   }
//   return result
// }

// export const dateIsBetween = (
//   value: ConfigType,
//   start: ConfigType,
//   end: ConfigType
// ) => dayjs(value).isBetween(dayjs(start), dayjs(end))

// export const toStartOfTheDay = (day: Date) => {
//   day.setMilliseconds(0)
//   day.setSeconds(0)
//   day.setMinutes(0)
//   day.setHours(0)
//   const fromDateTime = day
//     .toJSON()
//     .split('.')[0]
//     .replace('T', ' ')
//   return fromDateTime
// }

// export const getStartUtcDay = (date: Date) => {
//   const copyDate = new Date(date.getTime())
//   copyDate.setHours(0)
//   copyDate.setMinutes(0)
//   copyDate.setSeconds(0)
//   return dayjs(copyDate)
//     .utc()
//     .format()
// }

export const getFormatDate = (date: any, type: string) => {
  const now = dayjs()
  // const getTimeZone = now.utcOffset() / 60
  // const oldDate = new Date(date)
  // oldDate.setHours(oldDate.getHours() + getTimeZone)
  const old = dayjs(date)
  switch (type) {
    case 'ago':
      return old.from(now) // sample '2 days ago'
    case 'date':
      return old.format('MMM Do YYYY') // sample 'Mar 23th 2019'
    case 'time':
      return old.format('HH:mm') // sample '18:03'
    case 'full':
      return old.format('MMM DD YYYY | HH:mm') // sample 'Mar 23 2019 | 18:03'
    case 'dayMonth':
      return old.format('D MMMM') // sample '23 February'
    case 'short':
      return old.format('DD.MM')
  }
  return
}

// export const getDiff = (
//   date1String: string,
//   date2String: string,
//   unit: QUnitType
// ) => {
//   const date1 = dayjs(date1String)
//   const date2 = dayjs(date2String)
//   return date1.diff(date2, unit)
// }

// export const getWTZDate = (date?: string) => {
//   if (date && date.includes('Z')) {
//     return new Date(date)
//   }
//   const getTimeZone = dayjs().utcOffset() / 60
//   const oldDate = date ? new Date(date) : new Date()
//   oldDate.setHours(oldDate.getHours() + getTimeZone)
//   return oldDate
// }

// export const getWOTZDate = (date?: string) => {
//   const getTimeZone = dayjs().utcOffset() / 60
//   const oldDate = date ? new Date(date) : new Date()
//   oldDate.setHours(oldDate.getHours() - getTimeZone)
//   return oldDate
// }

// export const getMinutes = (ms: number): number =>
//   Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))

// export const getSeconds = (ms: number): number =>
//   Math.floor((ms % (1000 * 60)) / 1000)

// export const getMilliseconds = (minutes: number) => minutes * 60 * 1000

// export const addHours = (date: Date, hours: number) =>
//   new Date(date.getTime() + hours * 60 * 60 * 1000)
