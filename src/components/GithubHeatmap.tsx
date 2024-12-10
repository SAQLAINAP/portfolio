// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import { subYears } from "date-fns";

// // Functional component with TypeScript
// const GithubHeatmap: React.FC = () => {
//   // Define the date range for the contributions heatmap
//   const endDate = new Date();
//   const startDate = subYears(endDate, 1);

//   // Tooltip formatting function
//   const selectTooltip = (contribution: { count: number; date: string } | null) => {
//     if (!contribution) {
//       return null;
//     }
//     return `${contribution.count} contributions on ${contribution.date}`;
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-lg font-bold mb-4">GitHub Contributions Heatmap</h2>
//       <div className="overflow-x-auto">
//         <GitHubCalendar
//           username="SAQLAINAP" // Replace with your GitHub username
//           colorScheme="dark"
//           blockSize={15}
//           blockMargin={5}
//           fontSize={14}
//           showWeekdayLabels={true}
//           // until={endDate} // Define the last date for contributions
//           transformData={(contributions) =>
//             contributions.filter((c) => new Date(c.date) >= startDate)
//           }
//           tooltip={selectTooltip} // Add tooltip functionality
//         />
//       </div>
//     </div>
//   );
// };

// export default GithubHeatmap;
