let propertyTimeout;

window.wallpaperPropertyListener = {
  applyUserProperties: function (newProperties) {
    if (propertyTimeout) clearTimeout(propertyTimeout);
    setTimeout(propertyHandler, 1000, newProperties);
  }
};

const expand = (s) => s.split(' ').map((n) => Math.ceil(n * 255)).join(',');

function propertyHandler (newProperties) {
  for (let property in newProperties) {
    if (property === 'schemecolor') continue;
    const rgb = expand(newProperties[property].value);
		document.body.style.setProperty('--' + property, `rgb(${rgb})`);
  }
}