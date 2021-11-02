# Generated by Django 3.2.7 on 2021-11-02 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('s_no', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50, verbose_name='Title')),
                ('question', models.TextField(verbose_name='Decision')),
                ('options', models.TextField(verbose_name='Options')),
            ],
        ),
        migrations.CreateModel(
            name='Voting',
            fields=[
                ('s_no', models.AutoField(primary_key=True, serialize=False)),
                ('decision', models.CharField(max_length=500, verbose_name='Decision')),
            ],
            options={
                'verbose_name_plural': 'Voting',
            },
        ),
    ]
