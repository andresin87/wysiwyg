export default function userMentionsCallBack() {
  return new Promise(
    (resolve, reject) => {
      const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://randomuser.me/api/?results=20&inc=name');
      console.log('fghjkl');
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          const r = JSON.parse(xhr.response).results.map((e) => ({
            text: `${e.name.first}${capitalize(e.name.last)}`.replace(/\s/g, ''),
            value: `${e.name.first}${capitalize(e.name.last)}`.replace(/\s/g, ''),
            url: `http://www.twitter.com/${e.name.first}${capitalize(e.name.last)}`.replace(/\s/g, ''),
          }));
          console.log(r);
          resolve(r);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText,
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      };
      xhr.send();
    }
  );
}

export const sampleArray = [
  { text: 'apple', value: 'apple', url: 'apple' },
  { text: 'banana', value: 'banana', url: 'banana' },
  { text: 'cherry', value: 'cherry', url: 'cherry' },
  { text: 'durian', value: 'durian', url: 'durian' },
  { text: 'eggfruit', value: 'eggfruit', url: 'eggfruit' },
  { text: 'fig', value: 'fig', url: 'fig' },
  { text: 'grapefruit', value: 'grapefruit', url: 'grapefruit' },
  { text: 'honeydew', value: 'honeydew', url: 'honeydew' },
];
