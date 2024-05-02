let saveData = JSON.parse(localStorage.getItem('saveData')) || [];
const containerElement = document.querySelector('.save-data-container');

function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data).then(buffer => {
    return Array.prototype.map.call(new Uint8Array(buffer), (bit) => {
      return ('00' + bit.toString(16)).slice(-2);
    }).join('');
  });
}

async function hashPassword(password) {
  return await sha256(password);
}

// Function to update display
const updateDisplay = () => {
  let displayHTML = '<ul>'; // Start unordered list
  saveData.forEach((data) => {
    const { id, username } = data;

    displayHTML += `
      <li class="container2 slide-top" onclick="openPassConfirm(${id})">
        ${username.toUpperCase()}
        <div class="input-pass-confirm" id="input-pass-confirm${id}">
          <form onSubmit="continueGame(${id})">
            <label style="font-size: 12px" for="confirm-password">Enter Password:</label>
            <input type="password" id="confirm-password${id}">
            <div style="font-size: 12px" >
              Enter
            </div>
            <div style="color:red; font-size: 12px" onclick="deleteData(${id})">Delete Saved Data</div>
          </form>
        </div>
      </li>
    `;
  });
  displayHTML += '</ul>'; // End unordered list
  containerElement.innerHTML = displayHTML;

  if (saveData.length < 3) {
    containerElement.innerHTML += `
      <a class="container2 slide-top" onclick="openTable()">
        New Game
        <div class="input-name">
          <label for="username">Enter Name:</label>
          <input type="text" id="username">
          <label for="password">Enter Password:</label>
          <input type="password" id="password">
          <div onclick="enteredData()">
            Enter
          </div>
        </div>
      </a>
    `;
  }
}


updateDisplay();

let textFieldActive = false;

const openTable = () => {
  if (!textFieldActive) {
    document.querySelector('.input-name').style.display = 'flex';
    textFieldActive = true;
  } else {
    document.querySelector('.input-name').style.display = 'none';
    textFieldActive = false;
  }
}

const passConfirmFieldActive = {};

const openPassConfirm = (id) => {
  if (!passConfirmFieldActive[id]) {
    document.getElementById(`input-pass-confirm${id}`).style.display = 'flex';
    passConfirmFieldActive[id] = true;
  } else {
    document.getElementById(`input-pass-confirm${id}`).style.display = 'none';
    passConfirmFieldActive[id] = false;
  }
};


const enteredData = async () => {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const hashedPassword = await hashPassword(password);

  saveData.push({
    id: saveData.length > 0 ? saveData[saveData.length - 1].id + 1 : 1,
    username: username,
    password: hashedPassword,
    tutoriallevel: 0,
    storylevel: 0,
    highscore: 0,
    overallkills: 0,
    highscorekills: 0,
    login: 0,
  });

  localStorage.setItem('saveData', JSON.stringify(saveData));
  updateDisplay();
}


const continueGame = async (id) => {
  const storedData = saveData.find(data => data.id === id);
  if (!storedData) {
    alert("User not found!");
    return;
  }

  const enteredPassword = document.getElementById(`confirm-password${id}`).value;

  const hashedEnteredPassword = await hashPassword(enteredPassword);

  if (hashedEnteredPassword === storedData.password) {
    window.location.href = 'modeSelect.html';
    document.cookie = `sessionId=${storedData.id}; path=/`;
  } else {
    alert("Wrong password! Please try again.");
  }
}



const deleteData = (id) => {
  saveData = saveData.filter(item => item.id !== id);
  localStorage.setItem('saveData', JSON.stringify(saveData));

  updateDisplay();
}
