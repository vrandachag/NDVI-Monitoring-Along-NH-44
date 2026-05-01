# 🌱 NDVI-Based Vegetation Health Monitoring using Satellite Imagery

## 📌 Overview

This project analyzes vegetation health over time using **NDVI (Normalized Difference Vegetation Index)** derived from satellite imagery. It enables detection of vegetation stress, seasonal trends, and land-use changes—useful for agriculture, environmental monitoring, and decision-making.

---

## 🚀 Key Highlights

* Processed multi-temporal satellite imagery to track vegetation changes
* Automated NDVI computation pipeline using geospatial tools
* Generated visual insights (NDVI maps + time series trends)
* Built a scalable workflow adaptable to different regions

---

## 🛰️ Data Sources

* Sentinel-2 (primary dataset)
* Landsat (optional comparison)

> Note: Raw satellite imagery is not included due to size. Data can be accessed via Google Earth Engine.

---

## 🧠 Methodology

1. Data acquisition from satellite sources
2. Preprocessing (cloud masking, band selection)
3. NDVI calculation
4. Temporal analysis for vegetation trends
5. Visualization of NDVI maps and change detection

---

## 📊 NDVI Formula

NDVI = \frac{NIR - Red}{NIR + Red}

---

## 🛠️ Tech Stack

* Google Earth Engine (GEE)
* Python (NumPy, Rasterio, Matplotlib)
* Jupyter Notebook
* GIS concepts & remote sensing workflows

---

## 📂 Project Structure

```
ndvi-monitoring/
│
├── scripts/           # NDVI computation + preprocessing
├── notebooks/         # Analysis and visualization
├── outputs/           # Generated NDVI maps (ignored in git)
├── data/              # Raw data (ignored in git)
├── README.md
├── LICENSE
├── .gitignore
```

---

## 📈 Sample Outputs

* NDVI maps showing vegetation density
* Time-series graphs highlighting seasonal variation
* Change detection visuals for identifying stressed regions

---

## 💡 Use Cases

* Crop health monitoring
* Drought detection
* Forest cover analysis
* Environmental change tracking

---

## ⚡ What Makes This Project Valuable

* Demonstrates **end-to-end geospatial pipeline**
* Combines **remote sensing + data analysis + visualization**
* Easily extensible to **AI/ML models (e.g., UNet for segmentation)**
* Real-world applicability in agriculture and climate domains

---

## 🔮 Future Improvements

* Integrate deep learning (UNet) for land classification
* Add real-time monitoring dashboard
* Expand to multi-index analysis (EVI, NDWI)

---

## 👤 Author

**Vranda Chag**
Project Scientist | Geospatial + AI Enthusiast

---

## 📬 Contact

Open to roles in **Geospatial Analytics / Remote Sensing / AI applications**
Feel free to connect or reach out!

---
