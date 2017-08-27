from django.db import models

# Create your models here.


class Path(models.Model):
    name = models.CharField(blank=True, null=True, max_length=255)
    created_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        verbose_name = "Путь"
        verbose_name_plural = "Пути"


class BoardInfo(models.Model):
    image = models.CharField(blank=True, null=True, max_length=255)
    longitude_gps = models.FloatField()
    latitude_gps = models.FloatField()
    vcc = models.FloatField(blank=True, null=True)
    yaw_compass = models.FloatField(blank=True, null=True)
    altitude_gps = models.FloatField(blank=True, null=True)
    yaw_gps = models.FloatField(blank=True, null=True)
    speed_gps = models.FloatField(blank=True, null=True)
    satellites_gps = models.FloatField(blank=True, null=True)
    hdop_gps = models.FloatField(blank=True, null=True)
    latitude_point = models.FloatField(blank=True, null=True)
    longitude_point = models.FloatField(blank=True, null=True)
    ip_client = models.CharField(blank=True, null=True, max_length=255)
    id_path = models.ForeignKey(Path, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        verbose_name = "информация с лодкки"
        verbose_name_plural = "информация с лодкки"


class Waypoint(models.Model):
    longitude = models.FloatField()
    latitude = models.FloatField()
    sended = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        verbose_name = "Waypoint"
        verbose_name_plural = "Waypoints"


class CommandJSON(models.Model):
    JSON = models.TextField()
    sended = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        verbose_name = "Command json"
        verbose_name_plural = "Commands json"


class Team(models.Model):
    name = models.CharField(max_length=255)
    avatar = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        verbose_name = "Член команды"
        verbose_name_plural = "Команда"


class Gallery(models.Model):
    name = models.CharField(blank=True, null=True, max_length=255)
    path = models.CharField(blank=True, null=True, max_length=255)
    cover = models.CharField(blank=True, null=True, max_length=255)
    created_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        verbose_name = "Альбомы"
        verbose_name_plural = "Альбом"