function initDemoChart() {
  const container = document.getElementById('chart');
  if (!container) return;
  container.innerHTML = ''; // clear placeholder

  // Create a simple SVG line using basic DOM SVG (no external libs)
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 600 300');
  svg.style.width = '100%';
  svg.style.height = '100%';

  // demo data
  const data = [100, 130, 120, 150, 170, 190, 210];

  // draw polyline
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((v,i) => {
    const x = 50 + (i * 80);
    const y = 250 - ( (v - min) / (max - min) * 200 );
    return `${x},${y}`;
  }).join(' ');

  const poly = document.createElementNS(ns, 'polyline');
  poly.setAttribute('points', points);
  poly.setAttribute('fill', 'none');
  poly.setAttribute('stroke', '#2b7cff');
  poly.setAttribute('stroke-width', '3');
  svg.appendChild(poly);

  container.appendChild(svg);
}
window.initDemoChart = initDemoChart;
