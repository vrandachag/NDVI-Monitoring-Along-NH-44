// 1. Define NH44 segment manually (near central India example)
var nh44 = ee.Geometry.LineString([
  [78.5, 22.7],
  [78.7, 22.9]
]);

// Buffer (2 km)
var buffer = nh44.buffer(2000);

Map.centerObject(nh44, 9);
Map.addLayer(nh44, {color: 'red'}, 'NH44 Segment');
Map.addLayer(buffer, {color: 'blue'}, 'Buffer');

// 2. NDVI Function
function addNDVI(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
  return image.addBands(ndvi);
}

// Cloud mask
function maskS2(image) {
  var scl = image.select('SCL');

  var mask = scl.neq(3)  // cloud shadow
              .and(scl.neq(7))  // cloud low prob
              .and(scl.neq(8))  // cloud medium prob
              .and(scl.neq(9))  // cloud high prob
              .and(scl.neq(10)) // cirrus
              .and(scl.neq(11)); // snow

  return image.updateMask(mask).divide(10000);
}
// 3. NDVI collection
function getNDVI(start, end) {
  return ee.ImageCollection('COPERNICUS/S2_SR')
    .filterDate(start, end)
    .filterBounds(buffer)
    .map(maskS2)
    .map(addNDVI)
    .select('NDVI')
    .mean()
    .clip(buffer);
}

// 4. Time periods
var ndvi_2024_H1 = getNDVI('2024-01-01', '2024-06-30');
var ndvi_2024_H2 = getNDVI('2024-07-01', '2024-12-31');

var ndvi_2025_H1 = getNDVI('2025-01-01', '2025-06-30');
var ndvi_2025_H2 = getNDVI('2025-07-01', '2025-12-31');

// Visualization
var vis = {min: 0, max: 1, palette: ['red', 'yellow', 'green']};

Map.addLayer(ndvi_2024_H1, vis, '2024 H1');
Map.addLayer(ndvi_2025_H1, vis, '2025 H1');

// 5. Stats
function getStats(image, name) {
  var stats = image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: buffer,
    scale: 10,
    maxPixels: 1e13
  });
  print(name, stats);
}

getStats(ndvi_2024_H1, '2024 H1');
getStats(ndvi_2025_H1, '2025 H1');
getStats(ndvi_2024_H2, '2024 H2');
getStats(ndvi_2025_H2, '2025 H2');
