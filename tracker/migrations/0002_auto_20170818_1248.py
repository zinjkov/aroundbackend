# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-18 02:48
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='boardinfo',
            name='id_path',
        ),
        migrations.RemoveField(
            model_name='boardinfo',
            name='image',
        ),
        migrations.DeleteModel(
            name='CommandJSON',
        ),
        migrations.DeleteModel(
            name='Waypoint',
        ),
        migrations.DeleteModel(
            name='BoardInfo',
        ),
        migrations.DeleteModel(
            name='Image',
        ),
        migrations.DeleteModel(
            name='Path',
        ),
    ]
