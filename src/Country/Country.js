import './Country.css'
import React, {useState} from 'react';

function Country({ setCountry }) {
    const [country, updateCountry] = useState('')

    const countryOptions = [
        { code: 'ae', country: 'United Arab Emirates' },
        { code: 'ar', country: 'Argentina' },
        { code: 'at', country: 'Austria' },
        { code: 'au', country: 'Australia' },
        { code: 'be', country: 'Belgium' },
        { code: 'bg', country: 'Bulgaria' },
        { code: 'br', country: 'Brazil' },
        { code: 'ca', country: 'Canada' },
        { code: 'ch', country: 'Switzerland' },
        { code: 'cn', country: 'China' },
        { code: 'co', country: 'Colombia' },
        { code: 'cu', country: 'Cuba' },
        { code: 'cz', country: 'Czech Republic' },
        { code: 'de', country: 'Germany' },
        { code: 'eg', country: 'Egypt' },
        { code: 'fr', country: 'France' },
        { code: 'gb', country: 'United Kingdom' },
        { code: 'gr', country: 'Greece' },
        { code: 'hk', country: 'Hong Kong' },
        { code: 'hu', country: 'Hungary' },
        { code: 'id', country: 'Indonesia' },
        { code: 'ie', country: 'Ireland' },
        { code: 'il', country: 'Israel' },
        { code: 'in', country: 'India' },
        { code: 'it', country: 'Italy' },
        { code: 'jp', country: 'Japan' },
        { code: 'kr', country: 'South Korea' },
        { code: 'lt', country: 'Lithuania' },
        { code: 'lv', country: 'Latvia' },
        { code: 'ma', country: 'Morocco' },
        { code: 'mx', country: 'Mexico' },
        { code: 'my', country: 'Malaysia' },
        { code: 'ng', country: 'Nigeria' },
        { code: 'nl', country: 'Netherlands' },
        { code: 'no', country: 'Norway' },
        { code: 'nz', country: 'New Zealand' },
        { code: 'ph', country: 'Philippines' },
        { code: 'pl', country: 'Poland' },
        { code: 'pt', country: 'Portugal' },
        { code: 'ro', country: 'Romania' },
        { code: 'rs', country: 'Serbia' },
        { code: 'sa', country: 'Saudi Arabia' },
        { code: 'se', country: 'Sweden' },
        { code: 'sg', country: 'Singapore' },
        { code: 'si', country: 'Slovenia' },
        { code: 'sk', country: 'Slovakia' },
        { code: 'th', country: 'Thailand' },
        { code: 'tr', country: 'Turkey' },
        { code: 'tw', country: 'Taiwan' },
        { code: 'ua', country: 'Ukraine' },
        { code: 'us', country: 'United States' },
        { code: 've', country: 'Venezuela' },
        { code: 'za', country: 'South Africa' }
    ];

    const options = countryOptions.map(option => {
        return (
            <option value={option.code}>{option.country}</option>
        )
    })

    const submitCountry = (event) => {
        event.preventDefault()
        setCountry(country)
    }

    return (
        <section className="change-country">
            <select name="choose-country" value={country} onChange={event => updateCountry(event.target.value)}>
                <option>Choose Country</option>
                {options}
            </select>
            <button className="update-country" onClick={event => submitCountry(event)}>View Country</button>
        </section>
    )
}

export default Country;