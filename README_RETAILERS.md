# Tera Energy - Retailers Page Integration Guide

## Overview
This package includes a complete "Retailers" page with an interactive world map showing all your distributors worldwide.

## Files Included
- `retailers.html` - The complete retailers page with interactive map

## Features
✅ Interactive World Map (Leaflet.js - dark themed)
✅ Custom markers for each distributor
✅ Search by country, city, or company name
✅ Filter by region (Europe, Americas, Asia, Africa, Middle East)
✅ Filter by status (Active/Available)
✅ Sidebar with scrollable retailer list
✅ Click on retailer card to zoom to location
✅ Popup with full distributor details
✅ "Become a Distributor" application form
✅ Region overview cards with statistics
✅ Animated counters
✅ Fully responsive design
✅ Matches your existing Tera Energy website style

## Installation

### Step 1: Add the retailers.html file
Place the `retailers.html` file in the same directory as your `index.html`

### Step 2: Update Navigation in index.html
Find your navigation section (around line 2926-2933) and add the Retailers link:

**BEFORE:**
```html
<ul class="nav-links">
    <li><a href="index.html#home">Home</a></li>
    <li><a href="drinks.html">Drinks</a></li>
    <li><a href="biscuits.html">Snacks</a></li>
    <li><a href="index.html#logo-display">About Us</a></li>
    <li><a href="index.html#locations">Locations</a></li>
    <li><a href="index.html#contact">Contact</a></li>
</ul>
```

**AFTER:**
```html
<ul class="nav-links">
    <li><a href="index.html#home">Home</a></li>
    <li><a href="drinks.html">Drinks</a></li>
    <li><a href="biscuits.html">Snacks</a></li>
    <li><a href="retailers.html">Retailers</a></li>
    <li><a href="index.html#logo-display">About Us</a></li>
    <li><a href="index.html#locations">Locations</a></li>
    <li><a href="index.html#contact">Contact</a></li>
</ul>
```

### Step 3: Also update navigation in other pages
Do the same for `drinks.html` and `biscuits.html` if they have their own navigation.

## Customizing Retailers Data

The retailers data is stored in the JavaScript section of `retailers.html`. Look for the `retailersData` array around line 1050:

```javascript
const retailersData = [
    {
        id: 1,                                    // Unique ID
        company: "Austrian Alps Beverages GmbH", // Company name
        country: "Austria",                      // Country name
        countryCode: "AT",                       // ISO country code
        flag: "🇦🇹",                             // Flag emoji
        city: "Vienna",                          // City
        address: "Stephansplatz 12, 1010 Vienna", // Full address
        phone: "+43 1 234 5678",                 // Phone number
        email: "contact@austrianalps.at",        // Email
        region: "europe",                        // Region (europe, africa, middle-east, north-america, south-america, asia, oceania)
        status: "active",                        // Status (active or pending)
        lat: 48.2082,                            // Latitude
        lng: 16.3738,                            // Longitude
        since: "2018"                            // Year partnership started
    },
    // Add more retailers...
];
```

### To Add a New Retailer:
1. Copy an existing retailer object
2. Change the `id` to a unique number
3. Fill in all the details
4. Get the latitude/longitude from Google Maps (right-click on location)

### Region Options:
- `europe`
- `africa`
- `middle-east`
- `north-america`
- `south-america`
- `asia`
- `oceania`

## Form Submissions

The distributor application form currently logs to console. To make it functional:

1. **Option A - Email Service:**
   Replace the form handler with a service like Formspree, EmailJS, or Netlify Forms

2. **Option B - Backend Integration:**
   Send form data to your server via fetch/AJAX

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

## Map Customization

### Change Map Style:
The map uses CartoDB dark tiles. You can change to other styles:

```javascript
// Light theme
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {...})

// Standard OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {...})
```

### Change Default View:
```javascript
map = L.map('retailersMap', {
    center: [30, 10],  // Change these coordinates
    zoom: 2,           // Change zoom level (1-18)
    // ...
});
```

## Troubleshooting

### Map not loading?
- Check internet connection (Leaflet loads from CDN)
- Ensure Leaflet CSS and JS are loading properly

### Markers not appearing?
- Verify latitude/longitude values are correct
- Check browser console for JavaScript errors

### Form not submitting?
- Check console for errors
- Verify form field `name` attributes

## Support
For questions or issues, contact Tera Energy development team.

---
© 2025 Tera Energy. Made in Austria.
