import { useState } from 'react';
import axios from 'axios';
import { TripDescriptionHeader } from '../../components/index.js';
// import TripDescriptionHeader from '../../components/TripCard/DescriptionHeader/TripDescriptionHeader.js';
import styles from './planTrip.module.css';
import Title from '../../components/ui/Title/Title';
import Form from '../../components/ui/Form/Form.tsx';
import Card from '../../components/ui/Card/Card.js';
import { IMAGE_URL, LOCAL_URL } from '../../data/constants.js';

export default function PlanTripPage() {
  const [showCard, setShowCard] = useState(false);
  const [dateParams, setDatesParams] = useState({
    startDate: '',
    endDate: '',
  });
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchParamsChange = (name, value) => {
    setDatesParams((prevSearchParams) => ({
      ...prevSearchParams,
      [name]: value,
    }));
  };
  const handleSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const { startDate, endDate, location, numOfTravelers: numberOfTravelers } = data;
      const reqBody = {
        startDate,
        endDate,
        location,
        numberOfTravelers: Number(numberOfTravelers),
      };
      const { data: tripsRes } = await axios.post(LOCAL_URL, reqBody);
      setSearchResults(tripsRes);
      setShowCard(true);
    } catch (error) {
      console.log({ msg: error });
    }
  };
  const inputsArray = [
    {
      label: 'Location',
      name: 'location',
      placeholder: 'Enter location',
      type: 'text',
      className: styles.form_item,
      labelClassName: styles.label_wrapper,
      validationFunc: (value) => value.length > 0,
      errorMsg: 'Location is required',
    },
    {
      label: 'Start Date',
      name: 'startDate',
      onChange: (value) => handleSearchParamsChange('startDate', value),
      value: dateParams.startDate,
      max: dateParams.endDate,
      type: 'date',
      className: styles.form_item,
      labelClassName: styles.label_wrapper,
      validationFunc: (value) => {
        const startDate = new Date(value);
        const today = new Date();
        return startDate > today && startDate.getFullYear() < 2100;
      },
      errorMsg: 'Start date must be in the future and before end date',
    },
    {
      label: 'End Date',
      name: 'endDate',
      onChange: (value) => handleSearchParamsChange('endDate', value),
      value: dateParams.endDate,
      min: dateParams.startDate,
      type: 'date',
      className: styles.form_item,
      labelClassName: styles.label_wrapper,
      validationFunc: () => {
        return dateParams.endDate > dateParams.startDate;
      },
      errorMsg: 'End date must be in the future and after start date',
    },
    {
      label: 'Number of Travelers',
      name: 'numOfTravelers',
      placeholder: 'Enter number of travelers',
      type: 'number',
      className: styles.form_item,
      labelClassName: styles.label_wrapper,
      validationFunc: (value) => parseInt(value, 10) > 0,
      errorMsg: 'Number of travelers must be greater than 0',
    },
  ];

  function padZero(number) {
    return number.toString().padStart(2, '0');
  }
  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${padZero(date.getDate())}/${padZero(date.getMonth() + 1)}/${date.getFullYear()}`;
    const formattedTime = `${padZero(date.getHours())}:${padZero(date.getMinutes())}`;
    return `${formattedDate} ${formattedTime}`;
  }

  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <div className={styles.bg_image}>
          <Title className={styles.title} variant='h2' title='Plan a Trip' />
          <header>
            <div className={styles.searchTrip}>
              <Form
                onSubmit={handleSubmit}
                inputs={inputsArray}
                className={styles.form}
                primaryButtonText='Search'
                buttonsClassName={styles.button_wrapper}
              />
            </div>
          </header>
          <div className={styles.restOfThePage}>
            <div className={styles.trip_Cards}>
              {searchResults && searchResults?.flights?.length === 0 && showCard && (
                <div>Temporary there are no results, please try again later</div>
              )}
              {searchResults &&
                searchResults.flights &&
                searchResults?.flights?.map((flight) => {
                  return (
                    <Card
                      key={flight.flightID}
                      title={searchResults?.destination}
                      DescriptionHeader={
                        <TripDescriptionHeader
                          price={`$${flight.flightPrice}`}
                          startDate={formatDate(flight.flightStartDate)}
                          endDate={formatDate(flight.flightEndDate)}
                          deepLink={flight.deepLink}
                        />
                      }
                      image={IMAGE_URL}
                      size='m'
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
