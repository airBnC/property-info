-- Table: public.general
-- SCHEMA: public

DROP SCHEMA public ;

CREATE SCHEMA public
    AUTHORIZATION humanity;

COMMENT ON SCHEMA public
    IS 'standard public schema';

GRANT ALL ON SCHEMA public TO PUBLIC;

GRANT ALL ON SCHEMA public TO humanity;

DROP TABLE public.general;

CREATE TABLE public.general
(
    title text COLLATE pg_catalog."default",
    location text COLLATE pg_catalog."default",
    home_type text COLLATE pg_catalog."default",
    short_description text COLLATE pg_catalog."default",
    more_description text[] COLLATE pg_catalog."default",
    highlights text[] COLLATE pg_catalog."default",
    owner text[] COLLATE pg_catalog."default" NOT NULL,
    property_features smallint[] NOT NULL,
    id integer NOT NULL DEFAULT nextval('general_id_seq'::regclass)
) PARTITION BY RANGE (id);
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.general
    OWNER to humanity;

DROP INDEX public.general_id;

CREATE UNIQUE INDEX general_id
    ON public.general USING btree
    (id)
    TABLESPACE pg_default;

CREATE TABLE generalOne PARTITION OF public.general
FOR VALUES FROM (1) TO (2500000);

CREATE TABLE generalTwo PARTITION OF public.general
FOR VALUES FROM (2500000) TO (5000000);

CREATE TABLE generalThree PARTITION OF public.general
FOR VALUES FROM (5000001) TO (7500000);

CREATE TABLE generalFour PARTITION OF public.general
FOR VALUES FROM (7500001) TO (10000000);

CREATE INDEX ON generalOne (id);
CREATE INDEX ON generalTwo (id);
CREATE INDEX ON generalThree (id);
CREATE INDEX ON generalFour (id);

