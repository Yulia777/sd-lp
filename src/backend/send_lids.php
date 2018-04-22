<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $arrRequest = json_decode($_POST["data"], true);

    if (!empty($arrRequest)) {
        switch ($arrRequest['type']) {
            case 'email':
                if(CEvent::Send("GET-IDEA_LP", SITE_ID, [
                    'NAME'=>iconv('utf-8','cp1251',$arrRequest['name']),
                    'PHONE'=>$arrRequest['phone'],
                    'EMAIL'=>$arrRequest['email']
                ])){
                    echo json_encode(['response'=>true]);
                }
                break;
            case 'callback':
                if(CEvent::Send("CALLBACK_LP", SITE_ID, [
                    'NAME'=>iconv('utf-8','cp1251',$arrRequest['name']),
                    'PHONE'=>$arrRequest['phone'],
                    'MESSAGE'=>$arrRequest['message']
                ])){
                    echo json_encode(['response'=>true]);
                }
                break;
            case 'order-category':
                if(CEvent::Send("MAKE_ORDER", SITE_ID, [
                    'NAME'=>iconv('utf-8','cp1251',$arrRequest['name']),
                    'EMAIL'=>$arrRequest['name'],
                    'PHONE'=>$arrRequest['phone'],
                    'MESSAGE'=>$arrRequest['message']
                ])){
                    echo json_encode(['response'=>true]);
                }
                break;
            case 'recommendations':
                if(CEvent::Send("FORM_MINI", SITE_ID, [
                    'NAME'=>iconv('utf-8','cp1251',$arrRequest['EMAIL']),
                    'PHONE'=>$arrRequest['phone'],
                    'EMAIL'=>$arrRequest['email']
                ])){
                    echo json_encode(['response'=>true]);
                }
                break;
            case 'examples':
                if(CEvent::Send("GET-EXAMPLE_LP", SITE_ID, [
                    'NAME'=>iconv('utf-8','cp1251',$arrRequest['name']),
                    'PHONE'=>$arrRequest['phone'],
                    'MESSAGE'=>$arrRequest['message']
                ])){
                    echo json_encode(['response'=>true]);
                }
                break;
            case 'visualization':
                if(CEvent::Send("VISUALISATION_LP", SITE_ID, [
                    'NAME'=>iconv('utf-8','cp1251',$arrRequest['name']),
                    'PHONE'=>$arrRequest['phone'],
                    'MESSAGE'=>$arrRequest['message']
                ])){
                    echo json_encode(['response'=>true]);
                }
                break;
            case 'presentation':
                if(CEvent::Send("PRESENTATION_LP", SITE_ID, [
                    'NAME'=>iconv('utf-8','cp1251',$arrRequest['name']),
                    'PHONE'=>$arrRequest['phone'],
                    'MESSAGE'=>$arrRequest['message']
                ])){
                    echo json_encode(['response'=>true]);
                }
                break;
            case 'scheme':
                if(CEvent::Send("SCHEME_LP", SITE_ID, [
                    'NAME'=>iconv('utf-8','cp1251',$arrRequest['name']),
                    'PHONE'=>$arrRequest['phone'],
                    'MESSAGE'=>$arrRequest['message']
                ])){
                    echo json_encode(['response'=>true]);
                }
                break;
            case 'questions':
                if(CEvent::Send("QUESTIONS_LP", SITE_ID, [
                    'NAME'=>iconv('utf-8','cp1251',$arrRequest['name']),
                    'PHONE'=>$arrRequest['phone'],
                    'MESSAGE'=>$arrRequest['message']
                ])){
                    echo json_encode(['response'=>true]);
                }
                break;
        }
    } else {
        echo json_encode(["response" => false]);
    }
}