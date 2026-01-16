import DottedMap from 'dotted-map';

const map = new DottedMap({ height: 60, grid: 'diagonal' });

const pin = map.addPin({
    lat: 40.73061,
    lng: -73.935242,
    data: { id: 'test-pin' },
    svgOptions: { color: 'red', radius: 0.4 },
});

console.log('Pin returned:', pin);

const points = map.getPoints();

// Find our pin
const foundPin = points.find(p => p.data && p.data.id === 'test-pin');
console.log('Found pin:', foundPin);

// Check bounds
const xs = points.map(p => p.x);
const ys = points.map(p => p.y);
const minX = Math.min(...xs);
const maxX = Math.max(...xs);
const minY = Math.min(...ys);
const maxY = Math.max(...ys);

console.log({ minX, maxX, minY, maxY });
