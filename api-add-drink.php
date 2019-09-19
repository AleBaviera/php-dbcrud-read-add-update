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
    $id = $_GET['id'];
    $newType = $_GET['tipo'];
    $newBrand = $_GET['marca'];
    $newPrice = $_GET['prezzo'];
    $newDate = $_GET['scadenza'];
    $query = 'INSERT INTO bevande
              (tipo, marca, prezzo, scadenza)
              VALUES ("' . $newType . '", "' . $newBrand . '",'. $newPrice.',"'. $newDate .'")
              ';
    
    $res = $conn -> query($query);



    $conn->close();

  echo json_encode($res);
?>
