<?php

function obterSiglaPorNumero($ufNumero) {
    $ufNumeros = array(
        11 => 'RO', 12 => 'AC', 13 => 'AM', 14 => 'RR', 15 => 'PA', 16 => 'AP', 17 => 'TO',
        21 => 'MA', 22 => 'PI', 23 => 'CE', 24 => 'RN', 25 => 'PB', 26 => 'PE', 27 => 'AL',
        28 => 'SE', 29 => 'BA', 31 => 'MG', 32 => 'ES', 33 => 'RJ', 35 => 'SP', 41 => 'PR',
        42 => 'SC', 43 => 'RS', 50 => 'MS', 51 => 'MT', 52 => 'GO', 53 => 'DF'
    );
    return isset($ufNumeros[$ufNumero]) ? $ufNumeros[$ufNumero] : '';
}

function salvarEmJson($municipiosPorEstado) {
    $jsonString = json_encode($municipiosPorEstado, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    file_put_contents('municipios_por_estado.json', $jsonString);
}

function obterMunicipios($ufs) {
    $baseURL = "/api/v1/localidades/estados/%d/municipios";
    $municipiosPorEstado = array();

    foreach ($ufs as $ufNumero) {
        $ufSigla = obterSiglaPorNumero($ufNumero);

        try {
            $url = "https://servicodados.ibge.gov.br" . sprintf($baseURL, $ufNumero);
            $headers = array('User-Agent: insomnia/8.4.0');

            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

            if ($httpCode == 200) {
                $data = json_decode($response, true);
                $municipios = array_column($data, 'nome');
                $municipiosPorEstado[$ufSigla] = $municipios;
            } else {
                echo "Falha ao obter dados para $ufSigla. Código de resposta: $httpCode\n";
            }

            curl_close($ch);
        } catch (Exception $e) {
            echo "Falha ao obter dados para $ufSigla. Erro: " . $e->getMessage() . "\n";
        }
    }

    return $municipiosPorEstado;
}

$ufs = array(11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 41, 42, 43, 50, 51, 52, 53);
$municipiosPorEstado = obterMunicipios($ufs);
salvarEmJson($municipiosPorEstado);

?>
