
<?php

SELECT * FROM `userdata` WHERE 1<?phpif ($_SERVER['REQUEST_METHOD'] === 'POST') {    $name = $_POST['name'] LIMIT 0, 25
    //   Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $category = $_POST['catagory'];
    $number = $_POST['number'];
    $message = $_POST['message'];

    //   Send the email
    // $to = "Info@gpbs.in";
    $to = "architectured82@gmail.com";
    $subject = "Enquiry from $name";
    $message = "Name: $name\nEmail: $email\nCategory: $category\nNumber: $number\nmessage: $message";
    $headers = "From: $email";
    mail($to, $subject, $message, $headers);
    //   Redirect to the thank you page
    header('Location: index.html');
}

?>