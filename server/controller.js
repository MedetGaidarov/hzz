const fs = require('fs');

const saveDataToFile = async (username, password) => {
  try {
    // Save data to a file
    fs.appendFile('data.txt', `Username: ${username}, Password: ${password}\n`, (err) => {
      if (err) throw err;
      console.log('Data saved to file!');
    });
    return { success: true, message: 'Data saved to file!' };
  } catch (error) {
    console.error('Error occurred:', error);
    return { success: false, message: 'Failed to save data to file' };
  }
};

module.exports = { saveDataToFile };
