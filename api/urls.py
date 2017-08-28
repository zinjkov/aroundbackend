
from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'board/post', views.post_board_info),
    url(r'board/get_list', views.get_info_list),
    url(r'board/get_list_by_path', views.get_info_list_by_path),
    url(r'board/waypoints_list', views.get_waypoints),
    url(r'board/commands', views.get_commandJSON),
    url(r'board/count', views.get_count),
    url(r'team/list', views.get_team_list),
    url(r'gallery/list', views.get_gallery_list),
    url(r'gallery/photo/list', views.get_photo_list),

    url(r'waypoints/get/without', views.get_waypoints_without),
    url(r'waypoints/post/', views.post_waypoints),
    url(r'waypoints/update/', views.update_waypoints),
    url(r'waypoints/delete/', views.delete_waypoints),

    url(r'test_models', views.test_models)
]