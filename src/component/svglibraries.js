import React from 'react';

function importAll(r) {
  let svgs = {};
  r.keys().forEach((key) => {
    const fileName = key.replace('./', '').replace('.svg', '');
    svgs[fileName] = r(key).default;
  });
  return svgs;
}

const svgs = importAll(require.context('../svg', false, /\.svg$/));

const SvgGallery = () => (
  <div>
    {Object.keys(svgs).map((key) => (
      <div key={key}>
        <h3>{key}</h3>
        <img src={svgs[key]} alt={key} />
      </div>
    ))}
  </div>
);

export default SvgGallery;
