CREATE DATABASE IF NOT EXISTS finalproject;
USE finalproject;

CREATE TABLE IF NOT EXISTS songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(45) NOT NULL,
  artist VARCHAR(45) NOT NULL
);

-- Insert initial data
INSERT INTO songs (title, artist) VALUES ('Sample Title', 'Sample Artist');
