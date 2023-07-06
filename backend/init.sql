drop table if exists department cascade;
drop table if exists employer cascade;
drop table if exists hobby cascade;
drop table if exists events cascade;


create table department (
    name text primary key,
    floor int
);

create table employer (
    id int generated always as identity primary key,
    dep_name text,
    foreign key (dep_name) references department (name),
    full_name text
);

create table hobby (
    id int generated always as identity primary key,
    name text
);

create table events (
    int int generated always as identity primary key,
    name text
);

insert into department
values ('TIB', 1),
       ('ДТБ', 1),
       ('ККСБ', 1),
       ('КК', 1),
       ('ДГР', 2),
       ('ДЗО', 2),
       ('ДКПП', 2);

insert into employer (dep_name, full_name)
values ('TIB', 'Хабибуллин Камиль'),
       ('ДТБ', 'Алиса Симонова'),
       ('ККСБ', 'Глеб Новиков'),
       ('ДГР', 'Александр Софронов'),
       ('ДЗО', 'Алина Панова'),
       ('ДКПП', 'Валерия Никитина');

insert into hobby (name)
values ('КУЛИНАРИЯ'),
       ('ВОКАЛ'),
       ('БЕГ'),
       ('КРОССФИТ'),
       ('СЕРФИНГ'),
       ('ТУРИЗМ'),
       ('АВТО'),
       ('ПАРУСНЫЙ СПОРТ'),
       ('МОТОЦИКЛЫ');

insert into events (name)
values ('походы в горы'),
       ('IT-шашлыки'),
       ('турниры в настольный теннис'),
       ('турниры по кикеру'),
       ('киновечера'),
       ('настольные игры'),
       ('спортивные тренировки'),
       ('выступления на мероприятиях в качестве спикера');
