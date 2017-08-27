from django.contrib import admin
from tracker import models
# Register your models here.

@admin.register(models.Path)
class PathAdmin(admin.ModelAdmin):
    pass


@admin.register(models.BoardInfo)
class BoardInfoAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Waypoint)
class WaypointAdmin(admin.ModelAdmin):
    pass


@admin.register(models.CommandJSON)
class CommandJSONAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Team)
class TeamAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Gallery)
class GalleryAdmin(admin.ModelAdmin):
    pass