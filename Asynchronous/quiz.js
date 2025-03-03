import { API, sampleErrorData, sampleSuccessData } from "./api.js";

function processData(data) {
  // Menggunakan Promise.all untuk menjalankan semua pemanggilan API.fetch secara paralel
  return Promise.all(
    data.map((item) => {
      return API.fetch(item.delay, item.simulateError)
        .then((response) => response)
        .catch((error) => {
          // Jika terjadi error, bangkitkan error tersebut
          throw new Error(`Error from delay ${item.delay}`);
        });
    })
  );
}

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']
