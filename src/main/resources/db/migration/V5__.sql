ALTER TABLE nine_line
    ADD special_equipment SMALLINT;

ALTER TABLE nine_line
    DROP COLUMN precedence;

ALTER TABLE nine_line
    ADD precedence SMALLINT;