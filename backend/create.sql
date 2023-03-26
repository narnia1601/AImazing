CREATE DATABASE finances;
USE finances;

CREATE TABLE transactions (
  id INT(11) NOT NULL AUTO_INCREMENT,
  amount INT(11) NOT NULL,
  date DATE NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO transactions (amount, date)
VALUES (100, '2023-03-01'),
       (200, '2023-03-02'),
       (300, '2023-03-03'),
       (400, '2023-03-04'),
       (500, '2023-03-05');
