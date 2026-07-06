// type Props = {
//   currentDegree: number;
// };

// const harmonics = [
//   0,
//   11.25,
//   22.5,
//   33.75,
//   45,
//   56.25,
//   60,
//   67.5,
//   78.75,
//   90,
//   101.25,
//   112.5,
//   120,
//   123.75,
//   135,
//   146.25,
//   157.5,
//   168.75,
//   180,
//   191.25,
//   202.5,
//   213.75,
//   225,
//   236.25,
//   240,
//   247.5,
//   258.75,
//   270,
//   281.25,
//   292.5,
//   300,
//   303.75,
//   315,
//   326.25,
//   337.5,
//   348.75,
// ];

// export default function HarmonicTable({
//   currentDegree,
// }: Props) {
//   // Find nearest important degree
//   const nearest = harmonics.reduce((prev, curr) =>
//     Math.abs(curr - currentDegree) <
//     Math.abs(prev - currentDegree)
//       ? curr
//       : prev
//   );

//   return (
//     <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

//       <h2 className="mb-5 text-xl font-bold text-cyan-400">
//         Important Degrees
//       </h2>

//       <div className="max-h-[430px] overflow-y-auto">

//         <table className="w-full border-collapse">

//           <thead className="sticky top-0 bg-slate-900">

//             <tr className="border-b border-slate-700">

//               <th className="py-3 text-left text-cyan-400">
//                 Sr.
//               </th>

//               <th className="py-3 text-left text-cyan-400">
//                 Degree (°)
//               </th>

//             </tr>

//           </thead>

//           <tbody>

//             {harmonics.map((value, index) => {

//               const active = value === nearest;

//               return (

//                 <tr
//                   key={value}
//                   className={`border-b border-slate-800 transition-all duration-200
//                   ${
//                     active
//                       ? "bg-yellow-500/20 text-yellow-400 font-bold"
//                       : "hover:bg-slate-800"
//                   }`}
//                 >

//                   <td className="py-3">
//                     {index + 1}
//                   </td>

//                   <td className="py-3">
//                     {value.toFixed(2)}°
//                   </td>

//                 </tr>

//               );

//             })}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// }

type Props = {
  currentDegree: number;
};

const harmonics = [
  0,11.25,22.5,33.75,45,56.25,60,67.5,78.75,90,
  101.25,112.5,120,123.75,135,146.25,157.5,
  168.75,180,191.25,202.5,213.75,225,236.25,
  240,247.5,258.75,270,281.25,292.5,300,
  303.75,315,326.25,337.5,348.75
];

export default function HarmonicTable({
  currentDegree,
}: Props) {

  const nearest = harmonics.reduce((prev, curr) =>
    Math.abs(curr-currentDegree) <
    Math.abs(prev-currentDegree)
      ? curr
      : prev
  );

  return (

    <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">

      <h2 className="mb-4 text-lg font-bold text-cyan-400">
        IMPORTANT DEGREES
      </h2>

      {/* <div className="flex gap-2 overflow-x-auto pb-2"> */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-9">

        {/* {harmonics.map((d,i)=>(

          <div
            key={d}
            className={`min-w-[75px] rounded-lg border px-3 py-2 text-center transition
            ${
              d===nearest
                ? "border-yellow-500 bg-yellow-500/20 text-yellow-400"
                :"border-slate-700 bg-slate-800 text-slate-300"
            }`}
          >

            <div className="text-xs text-slate-500">
              {i+1}
            </div>

            <div className="font-semibold">
              {d.toFixed(2)}°
            </div>

          </div>

        ))} */}
        {harmonics.map((degree, index) => {

  const active = degree === nearest;

  return (

    <div
      key={degree}
      className={`rounded-lg border p-3 text-center transition-all
      ${
        active
          ? "border-yellow-500 bg-yellow-500/20 text-yellow-400"
          : "border-slate-700 bg-slate-800 text-white"
      }`}
    >

      <div className="text-xs text-slate-500">
        {index + 1}
      </div>

      <div className="mt-1 text-lg font-bold">
        {degree.toFixed(2)}°
      </div>

    </div>

  );

})}

      </div>

    </div>

  );
}