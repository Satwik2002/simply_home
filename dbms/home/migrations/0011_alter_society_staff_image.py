# Generated by Django 3.2.7 on 2021-10-20 07:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0010_auto_20211020_1226'),
    ]

    operations = [
        migrations.AlterField(
            model_name='society_staff',
            name='image',
            field=models.ImageField(blank=True, default=django.utils.timezone.now, upload_to=''),
            preserve_default=False,
        ),
    ]