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
insert into address (country, city, street) values ('Serbia', 'Novi Sad', 'Vuka Karadzica 2');
insert into address (country, city, street) values ('Serbia', 'Beograd', 'Nikole Tesle 22');
insert into address (country, city, street) values ('Serbia', 'Novi Sad', 'Dunavska 59');



insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (8.8, 10);
insert into rating (average, num_of_votes) values (7.7, 5);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (0, 0);
insert into rating (average, num_of_votes) values (9, 2);
insert into rating (average, num_of_votes) values (6.5, 5);
insert into rating (average, num_of_votes) values (9.2, 4);


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

insert into offer (cancellation_fee, capacity, deleted, description, name, regulations, address_id, rating_id, offer_owner_id, price)
    values (40, 5, false, 'desc of boat', 'brodic', 'no regulations', 3, 5, 1, 50);
insert into property (id) values (1);
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

insert into offer (cancellation_fee, capacity, deleted, description, name, regulations, address_id, rating_id, offer_owner_id, price)
    values (40, 3, false, 'desc of cottage', 'Cozy Cottage', 'no party', 4, 6, 2, 90);
insert into property (id) values (2);
insert into cottage (id, num_of_rooms) values (2, 2);
insert into additional_service (description, price, title, offer_id) values ('desc of free additional service', 0, 'Additional Service 1 for cottage 1', 2);
insert into additional_service (description, price, title, offer_id) values ('desc of additional service2', 15, 'Additional Service 2 for cottage 1', 2);
insert into offer_images (offer_id, images) values (2, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1');
insert into offer_images (offer_id, images) values (2, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1');
insert into offer_images (offer_id, images) values (2, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1');
insert into offer_images (offer_id, images) values (2, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1');

insert into offer (cancellation_fee, capacity, deleted, description, name, regulations, address_id, rating_id, offer_owner_id, price)
values (50, 5, false, 'desc of cottage', 'Cool Cottage', 'No regulations', 11, 11, 2, 90);
insert into property (id) values (3);
insert into cottage (id, num_of_rooms) values (3, 3);
insert into additional_service (description, price, title, offer_id) values ('desc of free additional service', 0, 'Additional Service 1 for cottage 1', 3);
insert into additional_service (description, price, title, offer_id) values ('desc of additional service2', 15, 'Additional Service 2 for cottage 1', 3);
insert into offer_images (offer_id, images) values (3, 'https://res.cloudinary.com/bookerapp/image/upload/v1653823038/upload/udqs0yyg526owhvec7c7.webp');
insert into offer_images (offer_id, images) values (3, 'https://res.cloudinary.com/bookerapp/image/upload/v1653823038/upload/nmxqc40qef08gjmfpj83.webp');
insert into offer_images (offer_id, images) values (3, 'https://res.cloudinary.com/bookerapp/image/upload/v1653823038/upload/al93g5pqb0sjclqktvsn.webp');
insert into offer_images (offer_id, images) values (3, 'https://res.cloudinary.com/bookerapp/image/upload/v1653823038/upload/vqyxovcjdodvaz6hjplg.webp');

insert into offer (cancellation_fee, capacity, deleted, description, name, regulations, address_id, rating_id, offer_owner_id, price)
values (50, 5, false, 'desc of cottage', 'Test Cottage', 'No regulations', 12, 12, 2, 76);
insert into property (id) values (4);
insert into cottage (id, num_of_rooms) values (4, 2);
insert into additional_service (description, price, title, offer_id) values ('desc of free additional service', 0, 'Additional Service 1 for cottage 1', 4);
insert into additional_service (description, price, title, offer_id) values ('desc of additional service2', 15, 'Additional Service 2 for cottage 1', 4);
insert into offer_images (offer_id, images) values (4, 'https://res.cloudinary.com/bookerapp/image/upload/v1653780050/upload/q9aoizc8aoa0otemhupl.webp');
insert into offer_images (offer_id, images) values (4, 'https://res.cloudinary.com/bookerapp/image/upload/v1653780050/upload/iokfie8ojypk7pnb2rea.webp');
insert into offer_images (offer_id, images) values (4, 'https://res.cloudinary.com/bookerapp/image/upload/v1653780050/upload/mupd6jescw6zdltsqbd4.webp');
insert into offer_images (offer_id, images) values (4, 'https://res.cloudinary.com/bookerapp/image/upload/v1653780051/upload/qzctnbn3owzrawm1qfbd.webp');

insert into offer (cancellation_fee, capacity, deleted, description, name, regulations, address_id, rating_id, offer_owner_id, price)
values (50, 5, false, 'desc of cottage', 'Nova Cottage', 'No regulations', 13, 13, 2, 95);
insert into property (id) values (5);
insert into cottage (id, num_of_rooms) values (5, 2);
insert into additional_service (description, price, title, offer_id) values ('desc of free additional service', 0, 'Additional Service 1 for cottage 1', 5);
insert into additional_service (description, price, title, offer_id) values ('desc of additional service2', 15, 'Additional Service 2 for cottage 1', 5);
insert into offer_images (offer_id, images) values (5, 'https://res.cloudinary.com/bookerapp/image/upload/v1653780232/upload/olerxyei1nh0cgyyzhnw.webp');
insert into offer_images (offer_id, images) values (5, 'https://res.cloudinary.com/bookerapp/image/upload/v1653780024/upload/clrbiphmmfpsgbt0kdug.webp');
insert into offer_images (offer_id, images) values (5, 'https://res.cloudinary.com/bookerapp/image/upload/v1653780023/upload/y18ebutbtdvmxvoblpwk.webp');
insert into offer_images (offer_id, images) values (5, 'https://res.cloudinary.com/bookerapp/image/upload/v1653780023/upload/cqflt2cx8s55n2p5ekru.webp');


insert into users (
    is_deleted, email, enabled, first_name, last_name, last_password_reset_date, password, phone_number, address_id, rating_id)
    VALUES (false, 'pera@gmail.com', true, 'Pera', 'Peric', '2021-12-11 18:57:58.508-07', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '0656222126', 6, 3);
insert into user_role (user_id, role_id) values (3, 3);
insert into service_provider (id, loyalty_id) values (3, 3);
insert into fishing_instructor (biography, id) values ('Short biography', 3);

insert into offer (cancellation_fee, capacity, deleted, description, name, regulations, address_id, rating_id, offer_owner_id, price)
    values (80, 2, false, 'desc of lesson', 'Casovi pecanja', '18+', 5, 7, 3, 100);
insert into fishing_lesson (id) values (6);
insert into additional_service (description, price, title, offer_id) values ('desc of free additional service', 0, 'Additional Service 1 for lesson 1', 6);
insert into additional_service (description, price, title, offer_id) values ('desc of additional service2', 29, 'Additional Service 2 for lesson', 6);
insert into fishing_lesson_fishing_equipment (fishing_lesson_id, fishing_equipment) values (6, ' stap');
insert into fishing_lesson_fishing_equipment (fishing_lesson_id, fishing_equipment) values (6, ' mamac');
insert into fishing_lesson_fishing_equipment (fishing_lesson_id, fishing_equipment) values (6, ' masinica');
insert into offer_images (offer_id, images) values (6, 'http://res.cloudinary.com/bookerapp/image/upload/v1654207558/upload/hatycpo2fbzvyjwrhyrn.jpg');
insert into offer_images (offer_id, images) values (6, 'http://res.cloudinary.com/bookerapp/image/upload/v1654207558/upload/gaffi6jy3sxkkcis8low.jpg');
insert into offer_images (offer_id, images) values (6, 'http://res.cloudinary.com/bookerapp/image/upload/v1654207559/upload/yhnsffkpf9hjzomol0vx.jpg');


insert into offer (cancellation_fee, capacity, deleted, description, name, regulations, address_id, rating_id, offer_owner_id, price)
values (80, 2, false, 'desc of lesson', 'Catfish fishing', '18+', 5, 7, 3, 100);
insert into fishing_lesson (id) values (7);
insert into additional_service (description, price, title, offer_id) values ('desc of free additional service', 0, 'Additional Service 1 for lesson 1', 6);
insert into additional_service (description, price, title, offer_id) values ('desc of additional service2', 29, 'Additional Service 2 for lesson', 6);
insert into fishing_lesson_fishing_equipment (fishing_lesson_id, fishing_equipment) values (7, ' stap');
insert into fishing_lesson_fishing_equipment (fishing_lesson_id, fishing_equipment) values (7, ' mamac');
insert into fishing_lesson_fishing_equipment (fishing_lesson_id, fishing_equipment) values (7, ' masinica');
insert into offer_images (offer_id, images) values (7, 'http://res.cloudinary.com/bookerapp/image/upload/v1654207212/upload/ligzj6z6r8zgu0pvartj.jpg');
insert into offer_images (offer_id, images) values (7, 'http://res.cloudinary.com/bookerapp/image/upload/v1654207212/upload/moc6hektueywjn7ewmgn.jpg');
insert into offer_images (offer_id, images) values (7, 'http://res.cloudinary.com/bookerapp/image/upload/v1654207213/upload/obdgznczhsoq64tjb4ip.jpg');




insert into users (
    is_deleted, email, enabled, first_name, last_name, last_password_reset_date, password, phone_number, address_id, rating_id)
    VALUES (false, 'admin@gmail.com', true, 'Admin', 'Adminic', '2021-12-10 18:57:58.508-07', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '0632333236', 7, 4);
insert into administrator (id, password_changed) values (4, true);
insert into super_admin (id) values (4);
insert into user_role (user_id, role_id) values (4, 6);



insert into users (
    is_deleted, email, enabled, first_name, last_name, last_password_reset_date, password, phone_number, address_id, rating_id)
VALUES (false, 'obicanadmin@gmail.com', true, 'Admin', 'Adminic', '2021-12-10 18:57:58.508-07', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '0632333236', 7, 4);
insert into administrator (id, password_changed) values (5, true);
insert into user_role (user_id, role_id) values (5, 5);


insert into users (
    is_deleted, email, enabled, first_name, last_name, last_password_reset_date, password, phone_number, address_id, rating_id)
VALUES (false, 'mrsisa2022@gmail.com', true, 'Milenko', 'Savic', '2021-12-10 18:57:58.508-07', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '0632313236', 7, 4);
insert into client (id, num_of_penalties, loyalty_id) values (6, 0, 1);
insert into user_role (user_id, role_id) values (6, 4);
insert into offer_subscribed_clients (offer_id, client_id) values (2, 6);


insert into users (
    is_deleted, email, enabled, first_name, last_name, last_password_reset_date, password, phone_number, address_id, rating_id)
VALUES (false, 'klijent2@gmail.com', true, 'Isidor', 'Stefanovski', '2021-12-10 18:57:58.508-07', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '0612313236', 7, 4);
insert into client (id, num_of_penalties, loyalty_id) values (7, 0, 2);
insert into user_role (user_id, role_id) values (7, 4);


insert into period (
    date_from, date_to, offer_id)
VALUES ('2022-05-21', '2022-05-26', 2);

insert into reservation (
    has_client_rated, has_owner_rated, num_of_attendants, price, period_id, client_id, offer_id)
VALUES (false, false, 2, 304, 1, 6, 2);

insert into period (
    date_from, date_to, offer_id)
VALUES ('2022-06-12', '2022-06-22', 2);

insert into reservation (
    has_client_rated, has_owner_rated, num_of_attendants, price, period_id, client_id, offer_id)
VALUES (false, false, 4, 740, 2, 6, 2);

insert into period (
    date_from, date_to, offer_id)
VALUES ('2022-06-27', '2022-06-30', 2);

insert into reservation (
    has_client_rated, has_owner_rated, num_of_attendants, price, period_id, client_id, offer_id)
VALUES (false, false, 4, 222, 3, 6, 2);


insert into reservation (
    has_client_rated, has_owner_rated, num_of_attendants, price, period_id, client_id, offer_id)
VALUES (false, false, 4, 300, 3, 6, 6);

insert into reservation (
    has_client_rated, has_owner_rated, num_of_attendants, price, period_id, client_id, offer_id)
VALUES (false, false, 4, 200, 2, 6, 6);

insert into reservation (
    has_client_rated, has_owner_rated, num_of_attendants, price, period_id, client_id, offer_id)
VALUES (false, false, 4, 250, 1, 6, 6);

insert into profit_percentage (id, profit_percentage_value) values (1, 0.3);    --postojace samo jedan profit_percentage u sistemu koji se menja i vazi za sve rezervacije
