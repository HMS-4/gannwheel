// export interface DegreeResult {
//   elapsedDays: number;
//   degree: number;
// }

// function isLeapYear(year: number) {
//   return (
//     (year % 4 === 0 && year % 100 !== 0) ||
//     year % 400 === 0
//   );
// }

// export function calculateDegree(
//   equinox: string,
//   current: string
// ): DegreeResult {
//   const start = new Date(`${equinox}T23:59:00`);
//   const end = new Date(`${current}T23:59:00`);

//   const elapsedDays =
//     (end.getTime() - start.getTime()) /
//     (1000 * 60 * 60 * 24);

//   const daysInYear = isLeapYear(start.getFullYear())
//     ? 366
//     : 365.25;

//   let degree = (elapsedDays / daysInYear) * 360;

//   // Keep between 0 and 360
//   degree = ((degree % 360) + 360) % 360;

//   return {
//     elapsedDays,
//     degree,
//   };
// }

/////////////////22222222222

// export interface DegreeResult {
//   elapsedDays: number;
//   degree: number;
// }

// export function calculateDegree(
//   equinox: string,
//   current: string
// ): DegreeResult {

//   const start = new Date(`${equinox}T23:59:00`);
//   const end = new Date(`${current}T23:59:00`);

//   const elapsedDays =
//     (end.getTime() - start.getTime()) /
//     (1000 * 60 * 60 * 24);

//   // Same equinox next year
//   const nextEquinox = new Date(start);
//   nextEquinox.setFullYear(start.getFullYear() + 1);

//   // Actual cycle length
//   const cycleDays =
//     (nextEquinox.getTime() - start.getTime()) /
//     (1000 * 60 * 60 * 24);

//   let degree = (elapsedDays / cycleDays) * 360;

//   // Keep between 0° and 360°
//   degree = ((degree % 360) + 360) % 360;

//   return {
//     elapsedDays,
//     degree,
//   };
// }

export interface DegreeResult {
  elapsedDays: number;
  degree: number;
}

function isLeapYear(year: number) {
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0
  );
}

export function calculateDegree(
  equinox: string,
  current: string
): DegreeResult {

  const start = new Date(`${equinox}T23:59:00`);
  const end = new Date(`${current}T23:59:00`);

  const elapsedDays =
    (end.getTime() - start.getTime()) /
    (1000 * 60 * 60 * 24);

  // IMPORTANT:
  // Use Current Date's year to decide divisor
  const daysInYear = isLeapYear(end.getFullYear())
    ? 366
    : 365.25;

  let degree = (elapsedDays / daysInYear) * 360;

  degree = ((degree % 360) + 360) % 360;

  return {
    elapsedDays,
    degree,
  };
}