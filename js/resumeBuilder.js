function formatElement(template, placeHolder, value) {
  return template.replace(placeHolder, value);
}

function appendFormattedElement(nodeSelector, template, placeHolder, value) {
  $(nodeSelector).append(
    formatElement(template, placeHolder, value)
  );
}

function preppendFormattedElement(nodeSelector, template, placeHolder, value) {
  $(nodeSelector).preppend(
    formatElement(template, placeHolder, value)
  );
}

appendFormattedElement(
  "#header", HTMLheaderName, "%data%", "Manuel Rivero"
);

appendFormattedElement(
  "#header", HTMLheaderRole, "%data%", "Web Developer"
);