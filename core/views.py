from django.http import Http404
from django.shortcuts import render

from .models import Activity, HomeHero


def home(request):
    hero = (
        HomeHero.objects.filter(is_active=True)
        .order_by("-updated_at", "-created_at")
        .first()
    )
    hero_image_url = hero.image.url if hero and hero.image else None
    hero_alt_text = hero.alt_text if hero else "School Building"
    return render(
        request,
        "home.html",
        {
            "hero_image_url": hero_image_url,
            "hero_alt_text": hero_alt_text,
        },
    )


def about(request):
    return render(request, "about.html")


def admissions(request):
    return render(request, "admissions.html")


def contact(request):
    return render(request, "contact.html")


def activity_detail(request, slug):
    try:
        activity = Activity.objects.get(slug=slug, is_active=True)
    except Activity.DoesNotExist as exc:
        raise Http404("Activity not found") from exc
    return render(
        request,
        "activity_detail.html",
        {
            "title": activity.title,
            "summary": activity.summary,
            "image_url": activity.image_url,
        },
    )
