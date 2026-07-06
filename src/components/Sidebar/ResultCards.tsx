// type Props = {
//   elapsed: number;
//   degree: number;
//   harmonic: number;
// };

// export default function ResultCards({
//   elapsed,
//   degree,
//   harmonic,
// }: Props) {
//   const cards = [
//     {
//       title: "Elapsed Days",
//       value: elapsed.toFixed(4),
//       icon: "⏳",
//       border: "border-yellow-500",
//       text: "text-yellow-400",
//       glow: "hover:shadow-yellow-500/30",
//     },
//     {
//       title: "Degree",
//       value: `${degree.toFixed(4)}°`,
//       icon: "📐",
//       border: "border-cyan-500",
//       text: "text-cyan-400",
//       glow: "hover:shadow-cyan-500/30",
//     },
//     {
//       title: "Nearest Harmonic",
//       value: `${harmonic.toFixed(2)}°`,
//       icon: "✨",
//       border: "border-green-500",
//       text: "text-green-400",
//       glow: "hover:shadow-green-500/30",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
//       {cards.map((card) => (
//         <div
//           key={card.title}
//           className={`
//             rounded-3xl
//             border
//             ${card.border}
//             bg-gradient-to-br
//             from-slate-900
//             via-slate-900
//             to-slate-800
//             p-5
//             shadow-xl
//             transition-all
//             duration-300
//             hover:-translate-y-1
//             hover:scale-[1.02]
//             ${card.glow}
//           `}
//         >
//           <div className="flex items-center gap-4">

//             {/* Icon */}

//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-3xl">
//               {card.icon}
//             </div>

//             {/* Text */}

//             <div className="min-w-0 flex-1">

//               <p className="text-xs font-medium uppercase tracking-widest text-slate-400 sm:text-sm">
//                 {card.title}
//               </p>

//               <h2
//                 className={`mt-2 break-words text-2xl font-bold sm:text-3xl ${card.text}`}
//               >
//                 {card.value}
//               </h2>

//             </div>

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

type Props = {
  elapsed: number;
  degree: number;
  harmonic: number;
};

export default function ResultCards({
  elapsed,
  degree,
  harmonic,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

      <h2 className="mb-6 text-xl font-bold text-cyan-400">
        RESULTS
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between rounded-lg bg-slate-800 p-4">
          <span className="text-slate-400">
            ⏳ Elapsed Days
          </span>

          <span className="text-2xl font-bold text-yellow-400">
            {elapsed.toFixed(4)}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-slate-800 p-4">
          <span className="text-slate-400">
            📐 Degree
          </span>

          <span className="text-2xl font-bold text-cyan-400">
            {degree.toFixed(4)}°
          </span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-slate-800 p-4">
          <span className="text-slate-400">
            ✨ Nearest Harmonic
          </span>

          <span className="text-2xl font-bold text-green-400">
            {harmonic.toFixed(2)}°
          </span>
        </div>

      </div>

    </div>
  );
}