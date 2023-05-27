# ATM Management System

This is an ATM Management System built using React, Tailwind CSS, Node.js, and MySQL. It allows users to perform various banking operations such as withdrawing cash, depositing money, checking account balances, and transferring funds between accounts.

## Features

- User authentication: Users can register and log in to the system to access their accounts.
- Account management: Users can view their account details, including the account balance and transaction history.
- Cash withdrawal: Users can withdraw cash from their accounts based on available balances.
- Cash deposit: Users can deposit cash into their accounts by specifying the amount.
- Transaction history: Users can view a record of their past transactions.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Node.js: A JavaScript runtime environment for server-side development.
- MySQL: An open-source relational database management system.

## Prerequisites

Before running the application, make sure you have the following software installed:

- Node.js: [Download Node.js](https://nodejs.org)
- MySQL: [Download MySQL](https://www.mysql.com/downloads/)
- Yarn : 

    ```bash
    npm i -g yarn
    ```

## Installation

1.  Clone the repository from GitHub:

    ```bash
    git clone https://github.com/iamevs/atm-management.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd atm-management
    ```

3.  Install the dependencies:

    ```bash
    yarn
    ```

4.  Create a MySQL database:

    - Open the MySQL command line or a MySQL client tool.
    - Run the following commands to create the database and the required tables:

    ```sql
    Create Database atm;

    
    CREATE TABLE User ( 
        accno INT PRIMARY KEY,
        name VARCHAR(255),
        ifsc VARCHAR(255),
        address VARCHAR(255),
        phoneno VARCHAR(255),
        age INT
    );
    
    CREATE TABLE Card (
        cardno INT PRIMARY KEY,
        accno INT,
        acctype VARCHAR(255),
        name_card VARCHAR(255),
        pin VARCHAR(255),
        bankname VARCHAR(255),
        expiredate DATE,
        cvv INT,
        balance DECIMAL(10, 2),
        FOREIGN KEY (accno) REFERENCES User(accno)
    );  
    
    CREATE TABLE Transaction (
        transid INT PRIMARY KEY AUTO_INCREMENT,
        cardno INT,
        transtype VARCHAR(255),
        amt DECIMAL(10, 2),
        date DATE,
        time TIME,
        FOREIGN KEY (cardno) REFERENCES Card(cardno)
    );
    ```

     Note: Make sure to configure your MySQL connection details in the project's database configuration file (`server/database.js`).

5. Start the application:

   ```bash
   yarn start
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access the ATM Management System.

## Usage

1. Register a new user account by providing a username and password.
2. Log in using your registered credentials.
3. Explore the available options in the system, such as viewing account details, making transactions, and checking transaction history.
4. Perform various operations like cash withdrawal, cash deposit, and fund transfers as needed.
5. Log out when you are finished using the system.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit your code.
4. Push your changes to your forked repository.
5. Submit a

pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions regarding this project, feel free to contact the author at [github.com/iamevs](https://github.com/iamevs).

**Happy banking!**
