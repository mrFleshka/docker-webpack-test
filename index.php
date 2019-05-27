<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>webpack Patterns</title>
    <link rel="stylesheet" href="/dist/bundle.css">
</head>
<body>
<h1>Test webpack-dev-server</h1>
<p>Debug:</p>
<pre>
    <?php
    $debug = [
            'IP' => $_SERVER['HTTP_X_REAL_IP'],
            'HOST' => $_SERVER['HTTP_HOST'],
            'USER_AGENT' => $_SERVER['HTTP_USER_AGENT']
    ];
    print_r($debug);
    ?>
</pre>
<p>$_SERVER</p>
<pre>
    <?php
    print_r($_SERVER);
    ?>
</pre>
<script src="/dist/bundle.js"></script>
</body>
</html>