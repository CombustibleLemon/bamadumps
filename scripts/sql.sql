
CREATE TYPE building_type AS ENUM ('university', 'housing', 'greek', 'academic', 'restaurants');

CREATE TABLE buildings(
	ID	INT PRIMARY KEY	NOT NULL,
	NAME	TEXT	NOT NULL,
	TYPE	building_type	NOT NULL
);
