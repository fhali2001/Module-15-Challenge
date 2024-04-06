# USGS Earthquake Visualization

## Background
The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of ecosystems and the environment, and the impacts of climate and land-use change. They collect a massive amount of earthquake data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS earthquake data that will allow them to better educate the public and other government organizations on issues facing our planet.

## Before You Begin
Create a new repository for this project called leaflet-challenge. Do not add this Challenge to an existing repository.

Clone the new repository to your computer.

Inside your local git repository, create a directory for the Leaflet challenge. Use the folder names to correspond to the challenges: Leaflet-Part-1 and Leaflet-Part-2.

This Challenge uses both HTML and JavaScript, so be sure to add all the necessary files. These will be the main files to run for analysis.

Push the above changes to GitHub.

## Files
Download the following files to help you get started:
- [Module 15 Challenge files](https://static.bc-edx.com/data/dl-1-2/m15/lms/starter/Starter_Code.zip)

## Instructions
The instructions for this activity are broken into two parts:

### Part 1: Create the Earthquake Visualization
Your first task is to visualize an earthquake dataset. Complete the following steps:

1. **Get your dataset**: Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualize.

2. **Import and visualize the data**: Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude. Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Include popups that provide additional information about the earthquake when its associated marker is clicked. Create a legend that will provide context for your map data.

### Part 2: Gather and Plot More Data (Optional with no extra points earning)
Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found [here](https://github.com/fraxen/tectonicplates).

## Requirements
These requirements apply only to "Part 1: Create the Earthquake Visualization" as "Part 2" is optional with no extra points earning.

### Map (60 points)
- TileLayer loads without error
- Connects to geojson API using D3 without error
- Markers with size corresponding to earthquake magnitude
- A legend showing the depth and their corresponding color

### Data Points (40 points)
- Data points scale with magnitude level
- Data points colors change with depth level
- Each point has a tooltip with the Magnitude, the location, and depth
- All data points load in the correct locations

## Grading
This assignment will be evaluated against the requirements and assigned a grade according to the following table:

Grade	Points
A (+/-)	90+
B (+/-)	80–89
C (+/-)	70–79
D (+/-)	60–69
F (+/-)	< 60

## Submission
To submit your Challenge assignment, click Submit, and then provide the URL of your GitHub repository for grading.
