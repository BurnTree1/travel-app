import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import { useIntl } from 'react-intl';
import styles from './MapSection.module.scss';
import './mapboxgl-canvas.css';
import { AppRootReducer } from '../../../store';

type Params = {
  id: string
};

const MapSection = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiaGVydGFzIiwiYSI6ImNrbTkzNmNiaDFlMW8ycGtubjE0cWN6bGUifQ.2Kv0W8Q7Q3l7ZR0Uu5Zjtg';
  const capitalCoordinates = useSelector<AppRootReducer, [number, number]>((state) => state.countries.country.mapPoint.coordinates);
  const mapContainerRef = useRef(null);
  const { id: countryISO3 } = useParams<Params>();
  const intl = useIntl();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: capitalCoordinates,
      zoom: 7,
    });

    new mapboxgl.Marker()
      .setLngLat(capitalCoordinates)
      .addTo(map);

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('styledata', () => {
      const layers = [
        'country-label', 'water-point-label',
        'state-label', 'settlement-label',
        'settlement-subdivision-label',
        'airport-label', 'road-label',
        'water-line-label', 'natural-point-label',
        'natural-line-label', 'waterway-label',
      ];

      layers.forEach((layer) => map.setLayoutProperty(layer, 'text-field', [
        'get',
        `name_${intl.locale.toLowerCase()}`,
      ]));
    });

    map.on('load', () => {
      map.addLayer(
        {
          id: 'country-boundaries',
          source: {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1',
          },
          'source-layer': 'country_boundaries',
          type: 'fill',
          paint: {
            'fill-color': '#d2361e',
            'fill-opacity': 0.3,
          },
        },
        'country-label',
      );

      map.setFilter('country-boundaries', [
        'in',
        'iso_3166_1_alpha_3',
        `${countryISO3}`,
      ]);
    });

    map.addControl(new mapboxgl.FullscreenControl());

    return () => map.remove();
  }, []);

  return (
      <section>
          <div className={styles.mapContainer} ref={mapContainerRef} />
      </section>
  );
};

export default MapSection;
