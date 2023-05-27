# ATM Management System (Server)

[![GitHub license](https://img.shields.io/github/license/iamevs/atm-management)](https://github.com/iamevs/atm-management-system/blob/main/LICENSE) 

[![GitHub stars](https://img.shields.io/github/stars/iamevs/atm-management)](https://github.com/iamevs/atm-management-system/stargazers)

[![GitHub issues](https://img.shields.io/github/issues/iamevs/atm-management)](https://github.com/iamevs/atm-management-system/issues)

[![GitHub forks](https://img.shields.io/github/forks/iamevs/atm-management)](https://github.com/iamevs/atm-management-system/network)

This is the server-side of the ATM Management System built using Node.js and MySQL. It provides the necessary APIs and database connectivity for the ATM Management System.

## Features

- User authentication: Provides APIs for user login.
- Account management: Supports to fetch account details, and transaction history.
- Transaction handling: Enables performing cash withdrawals, cash deposits.

## Technologies Used

- Node.js: A JavaScript runtime environment for server-side development.
- Express.js: A web application framework for Node.js.
- MySQL: An open-source relational database management system.

## Prerequisites

Before running the server, make sure you have the following software installed:

- Node.js: [Download Node.js](https://nodejs.org)
- MySQL: [Download MySQL](https://www.mysql.com/downloads/)

## Installation

   ### 1. Clone the repository from GitHub:
 ```bash
 git clone https://github.com/iamevs/atm-management.git
 ```

   ### 2. Navigate to the server directory:

   ```bash
   cd atm-management/server
   ```

   ### 3. Install the dependencies:

   ```bash
   yarn
   ```

   ### 4. Configure the database connection:

   - Open the `.env` file.
   - Enter the `host`, `user`, `password`, and `database` fields with your MySQL connection details.

   ### 5. Start the server:
   ```bash
   yarn dev
   ```

   The server will start running on `http://localhost:8001`.

## API Documentation


### Account Routes

- `GET /api/selectusers/:accno`: 
    Get account details for a specific account ID.

### Transaction Routes

- `POST /api/transactions/:accno`: 
    Details of the transactions done on the account number
- `POST /api/withdraw/:accno`: 
    Update the balance for withdrawal and add the transaction in the transaction table.
- `POST /api/Deposit/:accno`: 
    Viseversa to withdraw , modify the balance and add the transaction in the transaction table. 


## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

   1. Fork the repository.
   2. Create a new branch for your feature or bug fix.
   3. Make the necessary changes and commit your code.
   4. Push your changes to your forked repository.
   5. Submit a pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions regarding this project, feel free to contact the author at [iamevs](https://github.com/iamevs).
