import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { ContributionDay } from '../types';

// Helper to generate mock contribution data for the last year
const generateContributionData = (): ContributionDay[] => {
  const data: ContributionDay[] = [];
  const now = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(now.getFullYear() - 1);

  for (let d = oneYearAgo; d <= now; d.setDate(d.getDate() + 1)) {
    // Random level between 0 and 4, weighted towards 0 and 1
    const rand = Math.random();
    let level: 0 | 1 | 2 | 3 | 4 = 0;
    if (rand > 0.9) level = 4;
    else if (rand > 0.7) level = 3;
    else if (rand > 0.5) level = 2;
    else if (rand > 0.2) level = 1;

    data.push({
      date: d.toISOString().split('T')[0],
      count: level * 3, // Mock count
      level: level
    });
  }
  return data;
};

const ContributionGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const data = generateContributionData();
    const cellSize = 11;
    const cellGap = 3;
    const weekWidth = cellSize + cellGap;
    
    // Clear previous
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current);
    
    // Color scale mirroring GitHub's green theme
    const colorMap = {
      0: '#161b22', // Empty
      1: '#0e4429',
      2: '#006d32',
      3: '#26a641',
      4: '#39d353',
    };

    // Calculate layout
    // We display 52 weeks (approx)
    const weeksToDisplay = 53;
    const height = 7 * (cellSize + cellGap); // 7 days a week
    const width = weeksToDisplay * weekWidth;

    svg.attr("width", "100%")
       .attr("viewBox", `0 0 ${width + 30} ${height + 20}`)
       .attr("preserveAspectRatio", "xMinYMin meet");

    const g = svg.append("g").attr("transform", "translate(20, 0)");

    // Days grouping by week
    // We need to figure out where to start. 
    // The first data point might not be a Sunday.
    const firstDate = new Date(data[0].date);
    const dayOfWeekOffset = firstDate.getDay(); // 0 is Sunday

    data.forEach((d, i) => {
        const totalIndex = i + dayOfWeekOffset;
        const weekIndex = Math.floor(totalIndex / 7);
        const dayIndex = totalIndex % 7;

        if (weekIndex < weeksToDisplay) {
            g.append("rect")
             .attr("width", cellSize)
             .attr("height", cellSize)
             .attr("x", weekIndex * weekWidth)
             .attr("y", dayIndex * (cellSize + cellGap))
             .attr("rx", 2)
             .attr("ry", 2)
             .attr("fill", colorMap[d.level])
             .append("title")
             .text(`${d.count} contributions on ${d.date}`);
        }
    });

    // Add Mon/Wed/Fri labels
    const days = ["Mon", "Wed", "Fri"];
    const dayLabelsY = [1, 3, 5].map(d => d * (cellSize + cellGap) + cellSize - 2);
    
    const textG = svg.append("g");
    days.forEach((day, i) => {
        textG.append("text")
            .attr("x", 0)
            .attr("y", dayLabelsY[i])
            .text(day)
            .attr("font-size", "9px")
            .attr("fill", "#8b949e");
    });

  }, []);

  return (
    <div className="w-full border border-github-border rounded-md p-4 bg-github-bg mt-6 overflow-hidden">
      <h3 className="text-base font-normal mb-2 text-github-text">1,234 contributions in the last year</h3>
      <div className="overflow-x-auto">
        <svg ref={svgRef} className="block min-w-[700px]"></svg>
      </div>
      <div className="flex items-center justify-between mt-2 text-xs text-github-muted">
         <a href="#" className="hover:text-github-accent hover:underline">Learn how we count contributions</a>
         <div className="flex items-center gap-1">
           <span>Less</span>
           <span className="w-3 h-3 rounded-sm bg-[#161b22]"></span>
           <span className="w-3 h-3 rounded-sm bg-[#0e4429]"></span>
           <span className="w-3 h-3 rounded-sm bg-[#006d32]"></span>
           <span className="w-3 h-3 rounded-sm bg-[#26a641]"></span>
           <span className="w-3 h-3 rounded-sm bg-[#39d353]"></span>
           <span>More</span>
         </div>
      </div>
    </div>
  );
};

export default ContributionGraph;