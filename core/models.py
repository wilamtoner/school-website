from django.db import models


class SiteSetting(models.Model):
    scroll_text_size = models.PositiveSmallIntegerField(default=16)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-updated_at", "-created_at"]

    def __str__(self):
        return f"Site Setting ({self.scroll_text_size}px)"


class Highlight(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField(blank=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self):
        return self.title


class Activity(models.Model):
    CATEGORY_CHOICES = [
        ("sports", "Sports"),
        ("cultural", "Cultural"),
        ("academic_events", "Academic Events"),
        ("clubs", "Clubs"),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    summary = models.TextField(blank=True)
    image_url = models.URLField(blank=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self):
        return self.title


class HomeHero(models.Model):
    image = models.FileField(upload_to="hero/", blank=True, null=True)
    alt_text = models.CharField(max_length=200, default="School Building")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-updated_at", "-created_at"]

    def __str__(self):
        return self.alt_text
