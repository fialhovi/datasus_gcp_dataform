const municipality_code = `Code of the municipality associated with the data record`;
const date = `The specific date of the hospital admission or procedure`;
const year = `The year when the event occurred`;
const month = `The month when the event occurred`;
const specialty_bed = `AIH specialty, according to the Specialty Table`;
const aih = `Authorization for Hospital Admission (AIH) identifier`;
const type_aih = `Type of the AIH`;
const patient_municipality = `The municipality where the patient resides`;
const gender = `The gender of the patient`;
const type_uti = `Type of intensive care unit (ICU) the patient used`;
const days_hospitalized = `The total number of days the patient was hospitalized`;
const procedure = `The medical procedure performed during hospitalization`;
const total_value = `The total cost associated with the hospitalization`;
const death = `Indicates if the patient passed away during the hospitalization`;
const risk_pregnant = `Specifies if the patient was at risk during pregnancy`;
const race_color = `The race or color category of the patient`;
const birth_date = `The birth date of the patient`;
const age = `The age of the patient at the time of the event`;
const date_loading = `Timestamp indicating when the data was loaded into the database`;

module.exports = {
    municipality_code,
    date,
    year,
    month,
    specialty_bed,
    aih,
    type_aih,
    patient_municipality,
    gender,
    type_uti,
    days_hospitalized,
    procedure,
    total_value,
    death,
    risk_pregnant,
    race_color,
    birth_date,
    age,
    date_loading,
};
