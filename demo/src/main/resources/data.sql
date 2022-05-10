insert into address (country, city, street) values ('Serbia', 'Novi Sad', 'Jevrejska 2');
insert into address (country, city, street) values ('Serbia', 'Novi Sad', 'Kosovska 1');
insert into address (country, city, street) values ('Montenegro', 'Herceg Novi', 'Jadranska 21');
insert into address (country, city, street) values ('Montenegro', 'Herceg Novi', 'Jadranska 11');
insert into address (country, city, street) values ('Montenegro', 'Herceg Novi', 'Jadranska 52');
insert into address (country, city, street) values ('Serbia', 'Novi Sad', 'Futoska 1');
insert into address (country, city, street) values ('Serbia', 'Belgrade', 'Kneza Milosa 19a');
insert into address (country, city, street) values ('Serbia', 'Zrenjanin', 'VUka Karadzica 11');
insert into address (country, city, street) values ('Serbia', 'Sabac', 'Nikole Pasica 21');
insert into address (country, city, street) values ('Serbia', 'Loznica', 'Vuka Karadzica 62');

insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);

insert into role (name) values ('ROLE_BOAT_OWNER');
insert into role (name) values ('ROLE_COTTAGE_OWNER');
insert into role (name) values ('ROLE_INSTRUCTOR');
insert into role (name) values ('ROLE_CLIENT');
insert into role (name) values ('ROLE_ADMIN');
insert into role (name) values ('ROLE_SUPER_ADMIN');

insert into loyalty_program (points, rank) values (0, 0);
insert into loyalty_program (points, rank) values (0, 0);
insert into loyalty_program (points, rank) values (0, 0);
insert into loyalty_program (points, rank) values (0, 0);
insert into loyalty_program (points, rank) values (0, 0);
insert into loyalty_program (points, rank) values (0, 0);
insert into loyalty_program (points, rank) values (0, 0);
insert into loyalty_program (points, rank) values (0, 0);
insert into loyalty_program (points, rank) values (0, 0);
insert into loyalty_program (points, rank) values (0, 0);

-- Lozinke su hesovane pomocu BCrypt algoritma https://www.dailycred.com/article/bcrypt-calculator
-- Lozinka za sve user-e je 123

insert into users (
   is_deleted, email, enabled, first_name, last_name, last_password_reset_date, password, phone_number, address_id, rating_id)
   VALUES (false, 'misa@gmail.com', true, 'Misa', 'Misic', '2021-10-01 18:57:58.508-07', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '0662322321', 1, 1);
insert into user_role (user_id, role_id) values (1, 1);
insert into service_provider (id, loyalty_id) values (1, 1);
insert into property_owner (id) values (1);
insert into boat_owner (id) values (1);

insert into offer (cancellation_fee, capacity, deleted, description, name, regulations, address_id, rating_id, offer_owner_id)
    values (40, 5, false, 'desc of boat', 'brodic', 'no regulations', 3, 5, 1);
insert into property (daily_price,  id) values (50, 1);
insert into boat (engine_num, engine_pow, length, max_speed, type, id)
    values ('241241', 100, 9, 60, 1, 1);
insert into additional_service (description, price, title, offer_id) values ('desc of free additional service', 0, 'Additional Service 1 for boat 1', 1);
insert into additional_service (description, price, title, offer_id) values ('desc of additional service2', 12, 'Additional Service 2 for boat 1', 1);
insert into boat_fishing_equipment (boat_id, fishing_equipment) values (1, 'stap');
insert into boat_fishing_equipment (boat_id, fishing_equipment) values (1, 'mamac');
insert into boat_fishing_equipment (boat_id, fishing_equipment) values (1, 'masinica');
insert into boat_nav_equipment (boat_id, nav_equipment) values (1, 'gps');




insert into users (
    is_deleted, email, enabled, first_name, last_name, last_password_reset_date, password, phone_number, address_id, rating_id)
    VALUES (false, 'djura@gmail.com', true, 'Djura', 'Djuric', '2021-10-11 18:57:58.508-07', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '0612522125', 2, 2);
insert into user_role (user_id, role_id) values (2, 2);
insert into service_provider (id, loyalty_id) values (2, 2);
insert into property_owner (id) values (2);
insert into cottage_owner (id) values (2);

insert into offer (cancellation_fee, capacity, deleted, description, name, regulations, address_id, rating_id, offer_owner_id)
    values (40, 3, false, 'desc of cottage', 'vikendica naziv', 'no party', 4, 6, 2);
insert into property (daily_price, id) values (90, 2);
insert into cottage (id, num_of_rooms) values (2, 2);
insert into additional_service (description, price, title, offer_id) values ('desc of free additional service', 0, 'Additional Service 1 for cottage 1', 2);
insert into additional_service (description, price, title, offer_id) values ('desc of additional service2', 15, 'Additional Service 2 for cottage 1', 2);




insert into users (
    is_deleted, email, enabled, first_name, last_name, last_password_reset_date, password, phone_number, address_id, rating_id)
    VALUES (false, 'pera@gmail.com', true, 'Pera', 'Peric', '2021-12-11 18:57:58.508-07', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '0656222126', 6, 3);
insert into user_role (user_id, role_id) values (3, 3);
insert into service_provider (id, loyalty_id) values (3, 3);
insert into fishing_instructor (biography, id) values ('Short biography', 3);

insert into offer (cancellation_fee, capacity, deleted, description, name, regulations, address_id, rating_id, offer_owner_id)
    values (80, 2, false, 'desc of lesson', 'casovi pecanja', '18+', 5, 7, 3);
insert into fishing_lesson (lesson_price, id) values (100, 3);
insert into additional_service (description, price, title, offer_id) values ('desc of free additional service', 0, 'Additional Service 1 for lesson 1', 3);
insert into additional_service (description, price, title, offer_id) values ('desc of additional service2', 29, 'Additional Service 2 for lesson', 3);
insert into fishing_lesson_fishing_equipment (fishing_lesson_id, fishing_equipment) values (3, 'stap');
insert into fishing_lesson_fishing_equipment (fishing_lesson_id, fishing_equipment) values (3, 'mamac');
insert into fishing_lesson_fishing_equipment (fishing_lesson_id, fishing_equipment) values (3, 'masinica');




insert into users (
    is_deleted, email, enabled, first_name, last_name, last_password_reset_date, password, phone_number, address_id, rating_id)
    VALUES (false, 'admin@gmail.com', true, 'Admin', 'Adminic', '2021-12-10 18:57:58.508-07', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '0632333236', 7, 4);
insert into administrator (id) values (4);
insert into super_admin (id) values (4);
insert into user_role (user_id, role_id) values (4, 6);


