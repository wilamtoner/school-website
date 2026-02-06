from .models import Highlight, SiteSetting


def highlights(request):
    items = Highlight.objects.filter(is_active=True).order_by("order", "-created_at")
    return {"highlights": items}


def site_settings(request):
    settings = (
        SiteSetting.objects.filter(is_active=True)
        .order_by("-updated_at", "-created_at")
        .first()
    )
    return {"site_settings": settings}


def activities_by_category(request):
    from .models import Activity

    items = Activity.objects.filter(is_active=True).order_by("order", "-created_at")
    grouped = {
        "sports": [],
        "cultural": [],
        "academic_events": [],
        "clubs": [],
    }
    for item in items:
        grouped.setdefault(item.category, []).append(item)
    return {"activities_by_category": grouped}
