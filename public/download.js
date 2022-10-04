function downloadFile(json) {
    const elt = document.createElement('a');
    const filename = `iss_location_${json.timestamp}.json`;
    const file = JSON.stringify(json, null, '\t');

    elt.href = 'data:application/json;charset=utf-8,' + file;
    elt.target = '_blank';
    elt.download = filename;
    elt.click();
}