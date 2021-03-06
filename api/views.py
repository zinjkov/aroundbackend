import traceback
import os
from django.http import JsonResponse
from tracker import models as trModels
from datetime import datetime

import json
import base64


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[-1].strip()
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

# Create your views here.


def upload_image_handle(imginb64):
    if imginb64 == '0':
        return 'media/board/#'
    b = base64.b64decode(imginb64.encode('utf-8'))
    path = 'media/board/' + str(datetime.now()).\
        replace(':', '_').replace('.', '_').\
        replace('-', '_') + '.jpg'
    f = open(path, 'wb')
    f.write(b)
    return path


def post_board_info(request):
    try:
        u = (request.body.decode('utf-8'))
        payload = json.loads(u)['data']
        info = trModels.BoardInfo()
        info.id_path = trModels.Path.objects.latest('id')
        info.latitude_gps = payload['latitude_gps']
        info.longitude_gps = payload['longitude_gps']
        info.altitude_gps = payload['altitude_gps']
        info.yaw_gps = payload['yaw_gps']
        info.ip_client = get_client_ip(request)
        info.hdop_gps = payload['hdop_gps']
        info.satellites_gps = payload['satellites_gps']
        info.speed_gps = payload['speed_gps']
        info.save()
    except:
        print(request.body)
        traceback.print_exc()
        return JsonResponse({'status': 'error'}, status=500)
    return JsonResponse({'status': 'ok'}, status=201)


def get_info_list(request):
    last_path = trModels.Path.objects.order_by('-id')[:1]
    obj = trModels.BoardInfo.objects.values().filter(id_path=last_path)
    response = {
        "data": list(obj)
    }
    return JsonResponse(response)


def test_models(request):
    obj = trModels.BoardInfo.objects.values()
    response = {
        "data": list(obj)
    }
    return JsonResponse(response)


def get_path_list(request):
    obj = trModels.Path.objects.values()
    response = {
        "data": list(obj)
    }
    return JsonResponse(response)


def get_info_list_by_path(request):
    try:
        path = trModels.Path.objects.filter(id=int(request.GET['path_id'])).get()
        obj = trModels.Path.objects.values().filter(id_path=path)
        response = {
            "data": list(obj)
        }
    except:
        response = {
            "status": "error"
        }
    return JsonResponse(response)


def get_waypoints(request):
    data = trModels.Waypoint.objects.select_for_update().filter(sended=False)
    obj = data.values('longitude', 'latitude').all()
    response = {
        "data": list(obj)
    }
    # data.update(sended=True)
    return JsonResponse(response)


def get_commandJSON(request):
    data = trModels.CommandJSON.objects.select_for_update().filter(sended=False)
    obj = data.values('JSON').all()
    response = {
        "data": list(obj)
    }
    data.update(sended=True)
    return JsonResponse(response)


def get_count(request):
    respounse = {
        "data": trModels.BoardInfo.objects.count()
    }
    return JsonResponse(respounse)


def get_info_by_count(request):
    i = int(request.GET['item'])
    obj = trModels.BoardInfo.objects.values()[i:i+1].get()
    respounse = {
        "data": obj
    }
    # print data
    return JsonResponse(respounse)


def get_team_list(request):
    response = {
        "data": list(trModels.Team.objects.values())
    }
    return JsonResponse(response)


def get_gallery_list(request):
    response = {
        "data": list(trModels.Gallery.objects.values('id', 'cover', 'name'))
    }
    return JsonResponse(response)


def get_photo_list(request):
    id = int(request.GET['id'])
    path = trModels.Gallery.objects.get(id=id).path
    dirpath = os.getcwd() + '/' + path
    photolist = os.listdir(dirpath)
    data = [path + photo for photo in photolist]
    response = {
         "data": data
    }
    return JsonResponse(response)


def get_waypoints_without(request):
    data = trModels.Waypoint.objects
    obj = data.values('longitude', 'latitude').all()
    obj = list(obj)
    obj = [{'lng': item['longitude'], 'lat':item['latitude']} for item in obj]
    response = {
        "data": list(obj)
    }

    return JsonResponse(response)


def post_waypoints(request):
    try:
        payload = json.loads(request.body.decode('utf-8'))
    except:
        return JsonResponse({'data': 'error'}, status=500)
    trModels.Waypoint.objects.all().delete()
    for item in payload['path']:
        command = trModels.Waypoint()
        command.longitude = item['lng']
        command.latitude = item['lat']
        command.save()

    respounse = {
        "data": "success"
    }

    return JsonResponse(respounse, status=201)


def update_waypoints(request):
    trModels.Waypoint.objects.select_for_update().update(sended=False)
    return JsonResponse({'status': 'ok'})


def delete_waypoints(request):
    trModels.Waypoint.objects.all().delete()
    return JsonResponse({'status': 'ok'})


def get_info_board_last_path(request):
    last_path = trModels.Path.objects.order_by('-id')[:1]
    obj = trModels.BoardInfo.objects.values().filter(id_path=last_path)
    response = {
        "data": list(obj)
    }
    return JsonResponse(response)


def confirm_get_waypoints(request):

    if request.GET['status'] == 'ok':
        data = trModels.Waypoint.objects.select_for_update().filter(sended=False)
        data.update(sended=True)
        return JsonResponse({'status': 'ok'})
    return JsonResponse({'status': 'fail'}, status=500)


