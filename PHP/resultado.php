<?php
$resultado = '';
$error = '';
$valor1 = '';
$valor2 = '';
$operador = '';
$operacion_texto = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $valor1 = isset($_POST['valor1']) ? floatval($_POST['valor1']) : 0;
    $valor2 = isset($_POST['valor2']) ? floatval($_POST['valor2']) : 0;
    $operador = isset($_POST['operador']) ? $_POST['operador'] : '';

    switch ($operador) {
        case 'suma':
            $resultado = $valor1 + $valor2;
            $operacion_texto = '+';
            break;
        case 'resta':
            $resultado = $valor1 - $valor2;
            $operacion_texto = '-';
            break;
        case 'multiplicacion':
            $resultado = $valor1 * $valor2;
            $operacion_texto = '×';
            break;
        case 'division':
            if ($valor2 == 0) {
                $error = 'Error: No se puede dividir entre cero.';
            } else {
                $resultado = $valor1 / $valor2;
            }
            $operacion_texto = '÷';
            break;
        default:
            $error = 'Operación no válida.';
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora PHP Unificada</title>
    <style>
        :root {
            --bg: #0f172a;
            --panel: #111827;
            --panel-soft: #1f2937;
            --primary: #8b5cf6;
            --primary-dark: #7c3aed;
            --secondary: #22c55e;
            --text: #e5e7eb;
            --muted: #9ca3af;
            --shadow: rgba(0, 0, 0, 0.25);
        }

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #0f172a, #1e293b 40%, #312e81);
            color: var(--text);
        }

        .calculadora {
            width: min(90%, 420px);
            background: rgba(17, 24, 39, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            padding: 30px 24px;
            box-shadow: 0 20px 45px var(--shadow);
        }

        h1 {
            margin: 0 0 20px;
            text-align: center;
            font-size: 2rem;
            color: #f8fafc;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        label {
            display: block;
            font-weight: 600;
            color: var(--text);
        }

        select,
        input[type="number"] {
            width: 100%;
            padding: 12px 14px;
            border: 1px solid #374151;
            border-radius: 10px;
            background: var(--panel-soft);
            color: var(--text);
            font-size: 1rem;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        select:focus,
        input[type="number"]:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.25);
        }

        .botones {
            display: flex;
            gap: 12px;
            margin-top: 10px;
        }

        a.btn-reset,
        input[type="submit"] {
            flex: 1;
            padding: 12px 16px;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            transition: transform 0.2s ease, opacity 0.2s ease;
        }

        a.btn-reset:hover,
        input[type="submit"]:hover {
            transform: translateY(-1px);
        }

        a.btn-reset {
            background: #374151;
            color: var(--text);
        }

        input[type="submit"] {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
        }

        .resultado-box {
            background: var(--panel-soft);
            padding: 14px;
            border-radius: 10px;
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary);
            text-align: center;
            margin-top: 10px;
        }

        .error {
            color: #ef4444;
            font-weight: bold;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="calculadora">
        <h1>Calculadora</h1>
        <form action="" method="post">
            <label for="operador">Selecciona la operación:</label>
            <select id="operador" name="operador">
                <option value="suma" <?php if($operador=='suma') echo 'selected'; ?>>Suma</option>
                <option value="resta" <?php if($operador=='resta') echo 'selected'; ?>>Resta</option>
                <option value="multiplicacion" <?php if($operador=='multiplicacion') echo 'selected'; ?>>Multiplicación</option>
                <option value="division" <?php if($operador=='division') echo 'selected'; ?>>División</option>
            </select>

            <label for="valor1">Ingresa tu primer número:</label>
            <input type="number" id="valor1" name="valor1" step="any" value="<?php echo htmlspecialchars($valor1); ?>" required>

            <label for="valor2">Ingresa tu segundo valor:</label>
            <input type="number" id="valor2" name="valor2" step="any" value="<?php echo htmlspecialchars($valor2); ?>" required>

            <div class="botones">
                <a href="" class="btn-reset">Borrar</a>
                <input type="submit" value="Calcular">
            </div>
        </form>

        <?php if ($_SERVER['REQUEST_METHOD'] == 'POST'): ?>
            <div style="margin-top: 20px;">
                <?php if (!empty($error)): ?>
                    <p class="error"><?php echo $error; ?></p>
                <?php else: ?>
                    <p style="text-align: center; margin: 5px 0; color: var(--muted);"><?php echo "$valor1 $operacion_texto $valor2 ="; ?></p>
                    <div class="resultado-box"><?php echo $resultado; ?></div>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    </div>
</body>
</html>