var dataKey = 'code-journal-data';
var data = readData();
function readData() {
    var data;
    var localData = localStorage.getItem(dataKey);
    if (localData) {
        data = JSON.parse(localData);
    }
    else {
        data = {
            view: 'entry-form',
            entries: [],
            editing: null,
            nextEntryId: 1,
        };
    }
    return data;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- exported
function writeData() {
    var dataJSON = JSON.stringify(data);
    localStorage.setItem(dataKey, dataJSON);
}
