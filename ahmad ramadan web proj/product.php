<?php
session_start();

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

$products = [
    [
        'id' => 1,
        'name' => "Equipment",
        'price' => 100,
        'image' => "nature.jpg"
    ],
   
      
];

if (isset($_POST['show_products'])) {
     echo "<style>"
        .product-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
        }
        .product {
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 1rem;
            width: 220px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            text-align: center;
        }
      
        
    "</style>"

     "<div class='product-list'>";
    foreach ($products as $product) {
        echo "<div class='product'>";
        echo "<img src='{$product['image']}' alt='{$product['name']}'>";
        echo "<h3>{$product['name']}</h3>";
        echo "<p>\${$product['price']}</p>";
        echo "</div>";
    }
    echo "</div>";
}
?>
