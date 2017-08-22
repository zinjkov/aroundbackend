# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-16 02:54
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CommandJSON',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('JSON', models.TextField()),
                ('sended', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now=True, null=True)),
            ],
            options={
                'verbose_name': 'Command json',
                'verbose_name_plural': 'Commands json',
            },
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('path', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now=True, null=True)),
            ],
            options={
                'verbose_name': 'фото',
                'verbose_name_plural': 'фоты',
            },
        ),
        migrations.CreateModel(
            name='Path',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now=True, null=True)),
            ],
            options={
                'verbose_name': 'Путь',
                'verbose_name_plural': 'Пути',
            },
        ),
        migrations.CreateModel(
            name='Waypoint',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
                ('sended', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now=True, null=True)),
            ],
            options={
                'verbose_name': 'Waypoint',
                'verbose_name_plural': 'Waypoints',
            },
        ),
        migrations.CreateModel(
            name='BoardInfo',
            fields=[
                ('image', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='tracker.Image')),
                ('longitude_gps', models.FloatField()),
                ('latitude_gps', models.FloatField()),
                ('vcc', models.FloatField(blank=True, null=True)),
                ('yaw_compass', models.FloatField(blank=True, null=True)),
                ('altitude_gps', models.FloatField(blank=True, null=True)),
                ('yaw_gps', models.FloatField(blank=True, null=True)),
                ('speed_gps', models.FloatField(blank=True, null=True)),
                ('satellites_gps', models.FloatField(blank=True, null=True)),
                ('hdop_gps', models.FloatField(blank=True, null=True)),
                ('latitude_point', models.FloatField(blank=True, null=True)),
                ('longitude_point', models.FloatField(blank=True, null=True)),
                ('ip_client', models.CharField(blank=True, max_length=255, null=True)),
                ('created_at', models.DateTimeField(auto_now=True, null=True)),
                ('id_path', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tracker.Path')),
            ],
            options={
                'verbose_name': 'информация с лодкки',
                'verbose_name_plural': 'информация с лодкки',
            },
        ),
    ]
