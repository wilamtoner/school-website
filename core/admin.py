from django.contrib import admin

from .models import Activity, Highlight, HomeHero, SiteSetting


@admin.register(Highlight)
class HighlightAdmin(admin.ModelAdmin):
    list_display = ("title", "is_active", "order", "created_at")
    list_filter = ("is_active",)
    search_fields = ("title",)
    ordering = ("order", "-created_at")


@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "is_active", "order", "created_at")
    list_filter = ("category", "is_active")
    search_fields = ("title", "summary")
    prepopulated_fields = {"slug": ("title",)}
    ordering = ("category", "order", "-created_at")


@admin.register(HomeHero)
class HomeHeroAdmin(admin.ModelAdmin):
    list_display = ("alt_text", "is_active", "updated_at", "created_at")
    list_filter = ("is_active",)
    search_fields = ("alt_text",)
    ordering = ("-updated_at", "-created_at")


@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
    list_display = ("scroll_text_size", "is_active", "updated_at", "created_at")
    list_filter = ("is_active",)
    ordering = ("-updated_at", "-created_at")
