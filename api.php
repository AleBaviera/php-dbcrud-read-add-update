<?php
  header('Content-type: application/json');

    $servername = 'localhost';
    $username = 'root';
    $password = 'root';
    $dbname = 'BarDB';

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn -> connect_error) {

      var_dump('error');
      var_dump($conn);
      die();
    }

    $query = 'SELECT *
              FROM bevande';

    $res = $conn -> query($query);

    if ($res && $res -> num_rows > 0) {
      $drinks = [];
      while($row = $res -> fetch_assoc()) {
        // var_dump($row);
        $drinks[] = $row;
      }
    }

    $conn->close();

  echo json_encode($drinks);
?>
