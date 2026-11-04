ALTER TABLE nine_line
    ADD ambulatory_patient INTEGER;

ALTER TABLE nine_line
    ADD contamination VARCHAR(255);

ALTER TABLE nine_line
    ADD litter_patient INTEGER;

ALTER TABLE nine_line
    ADD markings VARCHAR(255);

ALTER TABLE nine_line
    ADD patient_status VARCHAR(255);

ALTER TABLE nine_line
    ADD precedence_counters JSONB;

ALTER TABLE nine_line
    ADD security VARCHAR(255);

ALTER TABLE nine_line
    ADD special_equipment VARCHAR(255);
