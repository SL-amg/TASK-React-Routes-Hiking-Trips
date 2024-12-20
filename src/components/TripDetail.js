import React from 'react';
import tripsData from '../tripsData';
import { Navigate, useParams } from 'react-router';
import { useNavigate } from 'react-router';

function TripDetail() {
const {tripId} = useParams (); // to take what is in the link and add it in tripId

const trip = tripsData.find((trip)=>trip.id === +tripId);

//this function will send us to home if link enterend not avaible .. therefor
//we define a navigate = usenavigate
// IMPOrtant dont forget to import at top !! 
//then if statment and if not equal to trip (!trip) excucte the function which is navigate to home
const navigate = useNavigate();
if (!trip){
 return <Navigate to="/tripList" />;
 }

// const trip = tripsData[0];

  return (
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {trip.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={trip.img}
                  alt="..."
                />
                <p className="mb-4">
                  City : {trip.city}
                  <br />
                  Length : {trip.length1}Km
                  <br />
                  Rating : {trip.rating}
                  <br />
                  Difficulty : {trip.difficulty}
                  <br />
                  Details : {trip.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
