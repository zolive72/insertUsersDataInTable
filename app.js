const tableBody = document.querySelector('tbody');

const url = 'https://jsonplaceholder.typicode.com/users';

const insertUsersDataInDOM = userData => {
  const [id, name, username, email, phone] = userData;

  tableBody.innerHTML += `
  <tr>
    <th scope="row">${id}</th>
          <td>${name}</td>
          <td>${username}</td>
          <td>${email}</td>
          <td>${phone}</td>
  </tr>
  `
}

const getUsersData = async () => {
  try {
    const response = await fetch(url);
    
    if (response.status === 404) {
      throw new Error('Error 404')
    }

    if (!response.ok) {
      throw new Error('Não foi possivel obter os dados')
    }
    
    const data = await response.json();
    
    return data;    
  } catch (error) {
    document.body.innerText = error.message;
    document.body.style.color = 'red'
    document.body.style.fontSize = '25px'
  }
}

const showUsersData = async () => {
  const data = await getUsersData();

  data.forEach(({ id, name, username, email, phone }) =>
    insertUsersDataInDOM([id, name, username, email, phone]))
}

showUsersData();
