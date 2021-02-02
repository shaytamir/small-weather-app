export default class promisService {
  getDataAsPromis(data, err) {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      if (data.length > 0) {
        resolve(data);
      } else {
        reject(err);
      }
      // }, 1000);
    });
  }
}
