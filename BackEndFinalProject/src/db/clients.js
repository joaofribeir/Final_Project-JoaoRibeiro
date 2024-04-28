const connection = require('../db/connection');

async function getClientsFromDatabase() {
	const sql = 'SELECT * FROM clients';

	const response = await connection.promise().query(sql);

	const result = response[0];
	return result;
}

async function getClientByIDFromDatabase(id) {
	const sql = 'SELECT * FROM clients WHERE client_id = ?';

	const params = [id];

	const response = await connection.promise().query(sql, params);
	const result = response[0];
	const client = result[0];

	return client;
}

async function insertNewClientToDatabase(client) {
	const sql = 'INSERT INTO clients VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, NULL, NULL) ';
	const params = [client.client_username, client.password, client.tin, client.client_name, client.email, client.city, client.country];

	const response = await connection.promise().query(sql, params);

	return response;
}

async function updateClientFromDatabase(client, id) {
	const sql = 'UPDATE clients SET client_username = ?, password = ?, tin = ?, client_name = ?, email = ?, city = ?, country = ? WHERE client_id = ?';

	const params = [client.client_username, client.password, client.tin, client.client_name, client.email, client.city, client.country, id];

	const response = await connection.promise().query(sql, params);

	return response;
}

async function deleteClientFromDatabase(id) {
	const sql = 'DELETE FROM clients WHERE client_id = ?';

	const response = await connection.promise().query(sql, id);

	return response;
}

module.exports = {
	getClientsFromDatabase,
	getClientByIDFromDatabase,
	insertNewClientToDatabase,
	updateClientFromDatabase,
	deleteClientFromDatabase,
};
