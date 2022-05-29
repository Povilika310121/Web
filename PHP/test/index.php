<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Тест</title>
    <link rel="stylesheet" href="st.css">
</head>
<body>
<p>Ты тут зарегистрирован?</p>
<p>Введи логин и проверь - зарегестрирован ли ты на этом сайте </p>
<form method="post">
    <input type="text" name="login" placeholder="Ваш логин">
    <input type="submit" size="40" name="start" value="Проверить">
</form>

    <div><?php
            $login = "не определено";
            $f = 0;
            $arr ['ivanov_aa'] = 'Иванов Иван';
            $arr ['kondratenko_da'] = 'Кондратенко Данко';
            $arr ['kotik_kot'] = 'Домашний кот Марик';
        
            if(isset($_POST["login"])){
                $login = $_POST["login"];
            }
            foreach($arr as $key => $value){ 
                if($login == $key){
                    echo "Добро пожаловать: $value <br>";
                    $f=1; ?>

                    <p>Проверим пароль </p>
                    <form method="post">
                    <input type="text" size="12" maxlength="12" name="Password" placeholder="Ваш пароль"><br />
                    <input type="submit" size="40" name="start" value="Проверить">
                    </form>

                <div>
                <?php 
                    $pass = "не определено";
                    $fl = 0;
                    $pasw ['ivanov_aa'] = '1234';
                    $pasw ['kondratenko_da'] = '5678';
                    $pasw ['kotik_kot'] = 'мяу';
                    
                    if(isset($_POST["Password"])){
                        $pass = $_POST["Password"];
                    }
                    // echo "Добро пожаловать: $login <br>";
                    foreach($pasw as $key => $value){ 
                        if($pass == $key){
                            echo "Всё хорошо <br>";
                            $fl=1;}
                        }
                    if($fl==0){
                        echo "Неправильный пароль <br>";
                    } 
                ?>
                </div>
            <?
                }
            }
            if($f==0){
                echo "Вы не зарегистрированный пользователь!<br>";
            }
            ?>
    </div>
</body>
</html>