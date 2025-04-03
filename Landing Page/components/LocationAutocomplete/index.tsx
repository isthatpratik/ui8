import { useState, useEffect, useRef } from 'react';
import styles from './LocationAutocomplete.module.sass';

interface LocationAutocompleteProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    isJurisdiction?: boolean;
}

declare global {
    interface Window {
        google: any;
    }
}

const LocationAutocomplete = ({ value, onChange, placeholder = 'Enter location', isJurisdiction = false }: LocationAutocompleteProps) => {
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const autocompleteService = useRef<any>(null);
    const placesService = useRef<any>(null);

    useEffect(() => {
        // Initialize Google Maps services
        if (window.google) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
            placesService.current = new window.google.maps.places.PlacesService(document.createElement('div'));
        }
    }, []);

    const handleInputChange = async (inputValue: string) => {
        if (!inputValue || !autocompleteService.current) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }

        try {
            const response = await autocompleteService.current.getPlacePredictions({
                input: inputValue,
                types: isJurisdiction ? ['(cities)'] : ['address'],
            });

            setSuggestions(response.predictions);
            setShowSuggestions(true);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleSuggestionClick = (suggestion: any) => {
        if (!placesService.current) return;

        placesService.current.getDetails(
            {
                placeId: suggestion.place_id,
                fields: ['formatted_address', 'address_components'],
            },
            (place: any, status: string) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    let displayValue = '';
                    
                    if (isJurisdiction) {
                        // Extract city, state, and country for jurisdiction
                        const addressComponents = place.address_components;
                        const city = addressComponents.find((component: any) => 
                            component.types.includes('locality'))?.long_name;
                        const state = addressComponents.find((component: any) => 
                            component.types.includes('administrative_area_level_1'))?.long_name;
                        const country = addressComponents.find((component: any) => 
                            component.types.includes('country'))?.long_name;
                        
                        displayValue = [city, state, country].filter(Boolean).join(', ');
                    } else {
                        displayValue = place.formatted_address;
                    }

                    onChange(displayValue);
                    setShowSuggestions(false);
                    setSuggestions([]);
                }
            }
        );
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={styles.container} ref={inputRef}>
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                    handleInputChange(e.target.value);
                }}
                onFocus={() => value && setShowSuggestions(true)}
                placeholder={placeholder}
                className={styles.input}
            />
            {showSuggestions && suggestions.length > 0 && (
                <ul className={styles.suggestionsList}>
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.place_id}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className={styles.suggestionItem}
                        >
                            {suggestion.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationAutocomplete; 