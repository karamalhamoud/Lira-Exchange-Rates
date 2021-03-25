<?php
header('Access-Control-Allow-Origin: *');
$CurrencyCode = $_GET['CurrencyCode'];

if($CurrencyCode == "LBP"){
    
    $url = "https://lirarate.com/wp-json/lirarate/v2/rates?currency=LBP&_ver=t" . time()*1000;

    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $headers = array(
    "authority: lirarate.com",
    "authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGlyYXJhdGUuY29tIiwiaWF0IjoxNTkzMDI3NzQ2LCJuYmYiOjE1OTMwMjc3NDYsImV4cCI6MTYyNTE2ODU0NiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMiJ9fX0.cVv8n9ZLnrv02rgqTUSM_eOOtnsEN5ITHFxXqmjgYwo",
    "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
    "referer: https://lirarate.com/",
    );
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

    $resp = curl_exec($curl);
    curl_close($curl);
    $json = json_decode($resp, true);
    $sell_array = $json["sell"];
    $buy_array = $json["buy"];

    $sell = number_format(end($sell_array)[1]);
    $buy = number_format(end($buy_array)[1]);
    $last_update = time_elapsed_string(end($buy_array)[0]);

    array_pop($buy_array); 
    $old = end($buy_array)[1];
    if($buy > $old){
        $change = "up";
    }else{
        $change = "down";
    }

    echo json_encode(array(
            'buy' => "$buy",
            'sell' => "$sell",
            'change' => "$change",
            'last_update' => "$last_update"
    ));

}else if($CurrencyCode == "SYP"){

    $url = "https://sp-today.com/app_api/cur_damascus.json";

    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    
    $resp = curl_exec($curl);
    curl_close($curl);
    $json = json_decode($resp, true);
    $usd_array = $json[0];
    $sell = number_format($usd_array["bid"]);
    $buy = number_format($usd_array["ask"]);
    $last_update = time_elapsed_string((time()-100)*1000);
    $arrow = $usd_array["arrow"];
    if($arrow == "0"){
        $change = "down";
    }else{
        $change = "up";
    }
  
    
    echo json_encode(array(
            'buy' => "$buy",
            'sell' => "$sell",
            'change' => "$change",
            'last_update' => "$last_update"
    ));
}








function time_elapsed_string($ptime)
{
    $ptime = $ptime/1000;
    $etime = time() - $ptime;

    if ($etime < 1)
    {
        return '0 seconds';
    }

    $a = array( 365 * 24 * 60 * 60  =>  'year',
                 30 * 24 * 60 * 60  =>  'month',
                      24 * 60 * 60  =>  'day',
                           60 * 60  =>  'hour',
                                60  =>  'minute',
                                 1  =>  'second'
                );
    $a_plural = array( 'year'   => 'years',
                       'month'  => 'months',
                       'day'    => 'days',
                       'hour'   => 'hours',
                       'minute' => 'minutes',
                       'second' => 'seconds'
                );

    foreach ($a as $secs => $str)
    {
        $d = $etime / $secs;
        if ($d >= 1)
        {
            $r = round($d);
            return $r . ' ' . ($r > 1 ? $a_plural[$str] : $str) . ' ago';
        }
    }
}
