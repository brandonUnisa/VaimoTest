<!doctype html>
<html xmlns:v-popover="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>VAIMO STORE</title>
        <link rel="stylesheet" href="dist/app.css" />
    </head>
    <body>
        <div class="blue-banner-top">
        </div>
        <div id="app">
            <div class="md-layout">
                <div class="md-layout-item">
                    <img src="img/LogoMain.png" class="logo" alt="Vaimo Store">
                </div>
                <div class="md-layout-item"></div>
                <div class="md-layout-item">
                    <button v-popover:shopping-cart class="shopping-cart-container">Toggle popover</button>
                    <popover name="shopping-cart">
                        Hello
                    </popover>
                </div>
            </div>
            <div class="md-layout">
                
            </div>
        </div>
        <script src="dist/app.js"></script>
    </body>
</html>