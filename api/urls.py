
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

    url(r'test_models', views.test_models)
]