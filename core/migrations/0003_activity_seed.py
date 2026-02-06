from django.db import migrations


def seed_activities(apps, schema_editor):
    Activity = apps.get_model('core', 'Activity')
    items = [
        {
            'title': 'Annual Sports Day',
            'slug': 'sports-day',
            'summary': 'Inter-house competitions in athletics and games.',
            'image_url': 'https://images.unsplash.com/photo-Ot7xFCchXh4?auto=format&fit=crop&w=1200&q=80',
            'category': 'sports',
            'order': 1,
        },
        {
            'title': 'Basketball Team',
            'slug': 'basketball-team',
            'summary': 'State-level championship winners 2023.',
            'image_url': 'https://imgs.search.brave.com/-MLZGvKRAY4snHOCtaWgFykhrccGmQ1lgyBHHy43HE8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by90ZWFtLXVuaXR5/LWJhc2tldGJhbGwt/aHVkZGxlXzUzODc2/LTEwNjEzMTkuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw',
            'category': 'sports',
            'order': 2,
        },
        {
            'title': 'Swimming Program',
            'slug': 'swimming-program',
            'summary': 'Certified training for all age groups.',
            'image_url': 'https://images.unsplash.com/photo-TRLkrxytGNI?auto=format&fit=crop&w=1200&q=80',
            'category': 'sports',
            'order': 3,
        },
        {
            'title': 'Annual Cultural Fest',
            'slug': 'cultural-fest',
            'summary': 'Music, dance, and drama performances.',
            'image_url': 'https://images.unsplash.com/photo-IDGcXIeiC98?auto=format&fit=crop&w=1200&q=80',
            'category': 'cultural',
            'order': 1,
        },
        {
            'title': 'Art Exhibition',
            'slug': 'art-exhibition',
            'summary': "Showcasing students' creative talents.",
            'image_url': 'https://images.unsplash.com/photo-7AWmuxwqWoI?auto=format&fit=crop&w=1200&q=80',
            'category': 'cultural',
            'order': 2,
        },
        {
            'title': 'Music Concert',
            'slug': 'music-concert',
            'summary': 'Annual music and orchestra performance.',
            'image_url': 'https://images.unsplash.com/photo-_aGkMcQL0c0?auto=format&fit=crop&w=1200&q=80',
            'category': 'cultural',
            'order': 3,
        },
        {
            'title': 'Science Fair',
            'slug': 'science-fair',
            'summary': 'Student-led experiments and project showcases.',
            'image_url': 'https://cdn.pixabay.com/photo/2015/02/25/14/40/science-fair-648905_1280.jpg',
            'category': 'academic_events',
            'order': 1,
        },
        {
            'title': 'Academic Symposium',
            'slug': 'academic-symposium',
            'summary': 'Talks, presentations, and academic exhibitions.',
            'image_url': 'https://images.unsplash.com/photo-DCAtBn5o1bA?auto=format&fit=crop&w=1200&q=80',
            'category': 'academic_events',
            'order': 2,
        },
        {
            'title': 'Robotics Club',
            'slug': 'robotics-club',
            'summary': 'Build, code, and compete with student-made robots.',
            'image_url': 'https://images.unsplash.com/photo-0VQLND8OKQo?auto=format&fit=crop&w=1200&q=80',
            'category': 'clubs',
            'order': 1,
        },
        {
            'title': 'Chess Club',
            'slug': 'chess-club',
            'summary': 'Weekly practice, strategy workshops, and tournaments.',
            'image_url': 'https://images.unsplash.com/photo-j8X6MQBiY_4?auto=format&fit=crop&w=1200&q=80',
            'category': 'clubs',
            'order': 2,
        },
    ]

    for item in items:
        Activity.objects.update_or_create(slug=item['slug'], defaults=item)


def unseed_activities(apps, schema_editor):
    Activity = apps.get_model('core', 'Activity')
    Activity.objects.filter(slug__in=[
        'sports-day',
        'basketball-team',
        'swimming-program',
        'cultural-fest',
        'art-exhibition',
        'music-concert',
        'science-fair',
        'academic-symposium',
        'robotics-club',
        'chess-club',
    ]).delete()


class Migration(migrations.Migration):
    dependencies = [
        ('core', '0002_activity'),
    ]

    operations = [
        migrations.RunPython(seed_activities, unseed_activities),
    ]
