<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        h1 {
            color: #4CAF50;
            margin-top: 50px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            margin-top: 20px;
        }
        button:hover {
            background-color: #45a049;
        }
        p {
            font-size: 18px;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <h1>Bem-vindo ao meu Projeto JavaScript</h1>
    <button onclick="mostrarSaudacao()">Clique aqui</button>
    
    <p id="mensagem"></p>

    <script>
        // Função que será executada quando o botão for clicado
        function mostrarSaudacao() {
            var mensagem = "Olá, seja bem-vindo ao mundo do JavaScript!";
            document.getElementById("mensagem").innerHTML = mensagem;
        }
    </script>

</body>
</html>
