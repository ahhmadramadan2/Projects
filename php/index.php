<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .repeatp{padding:5px;
        margin :5px;
    border :1px ,grey ,solid;

}
    </style>
</head>
<body>
    <div>
    <h1> this is my php page </h1>
    </div>
    <header>

</header>
<main>
<?php
echo "<h2> php is fun </h2>" ;
echo "hello world <br>";
echo "<p class = 'cards'> this is a paragragh</p>";

?>
<?php
for($i = 0 ; $i<100 ; $i++){
echo "<h2> this is the line" .$i. "</h2>";
}
?>
<?php
for($i = 10 ; $i>0 ; $i--){
    if($i==0){
    echo "no more monkies jumping";
    break;
}
  echo "<p class='repeatp'>".$i."little monkies jumping on the bed<br> one fell off<br>";
  echo $i-1 ."little monkies jumping on the bed </p>";
}
?>

</main>

</body>
</html>