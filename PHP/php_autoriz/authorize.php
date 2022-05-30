<?$_SESSION['try'] = 0;
session_start();

 // данные были отправлены формой?
 if($_POST['Submit']){
     // проверяем данные на правильность... в данном случае 
     // имя пользователя и пароль вписан прямо в код, 
     // целесообразней было бы проверить логин/пароль в базе 
     // данных и при совпадении дать доступ пользователю...
    if(($_SESSION['try'] < 3) && ($_POST['user_name']=="cleo")&&($_POST['user_pass']=="password"))
    {
        // запоминаем имя пользователя
        $_SESSION['logged_user'] = $_POST['user_name'];
    // и переправляем его на <секретную> страницу...
        header("Location: secretplace.php");
        exit;
    }
    if ($_SESSION['try'] < 3)
    {
        echo "Повторите попытку ";
        echo $_SESSION['try'];
        $_SESSION['try'] += 1;
    }
    if ($_SESSION['try'] == 3)
    {
        echo "Повторите попытку через 15 секунд ";
        echo $_SESSION['try'];
    
        $_SESSION['try'] = 0;
    }



 }
 // если что-то было не так, то польз-ль получит сообщение об ошибке.
 ?>
<html>
      <head>
     <title>Вводи пароль</title>
     <meta charset="utf-8"/>
 </head>
<body>
 <p> Вы ввели неверный пароль! </p>
 <?php 
    sleep(15);
 ?>
 </body>
</html>
