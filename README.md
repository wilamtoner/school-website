# Bright Future Academy — Official School Website 🏫

A modern, responsive, feature-rich web application and Django backend portal for **Bright Future Academy** (K-12 Educational Institution).

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Fully%20Functional-brightgreen.svg)
![Tech Stack](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20JS%20%7C%20Django-darkblue.svg)

---

## 🌟 Key Features

- 🎓 **Interactive Academic Programs Catalog**: Explore Primary (K-5), Middle School (6-8), High School (9-12), and Advanced STEM/AP curriculums.
- 📝 **Online Admissions Application**: Interactive inquiry and registration form with unique reference ID generation (`#BFA-ADM-XXXXXX`) and local storage tracking.
- 🔒 **Student & Parent Portal Login**: Authenticated modal access for Students, Parents, and Faculty members to view grades, schedules, and tuition statements.
- 👨‍🏫 **Faculty & Leadership Directory**: Showcase cards for Principal, Deans, and Department Heads.
- 🖼️ **Interactive Campus Photo Gallery**: Filter gallery by category (*STEM & Science Labs, Athletics, Fine Arts*) with popup image lightboxes.
- 📰 **News & Upcoming Events Calendar**: Live campus notices and event schedules.
- 📬 **Contact Us & Campus Inquiry Form**: Inquiry form with instant validation, confirmation alerts, and local persistence.
- 📱 **Mobile-First Glassmorphic Design**: Responsive navigation, sticky navbar, hero carousel, and custom design tokens.

---

## 📂 Repository Structure

```text
school-website/
├── index.html         # Main standalone HTML portal
├── style.css          # Core CSS design system & responsive styling
├── script.js         # Interactive application engine (modals, gallery, forms, carousel)
├── static/            # Static assets (CSS, JS, images for Django deployment)
│   ├── style.css
│   └── script.js
├── templates/         # Django HTML template files
├── manage.py          # Django backend entry point
└── README.md          # Project documentation
```

---

## 💻 How to Run

### Option 1: Static Web Portal (Zero Config)
1. Open [`index.html`](file:///home/nepal/Documents/school-website/index.html) directly in any web browser.
2. Alternatively, serve the directory using Python:
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.

### Option 2: Run with Django Backend
```bash
# Clone the repository
git clone git@github.com:wilamtoner/school-website.git
cd school-website

# Install Python requirements (if needed)
pip install -r requirements.txt

# Run migrations and start server
python manage.py migrate
python manage.py runserver
```

---

## 📄 License

This project is licensed under the [MIT License](lisense.txt).
