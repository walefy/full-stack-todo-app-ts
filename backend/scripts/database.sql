drop table if exists tasks;
create table tasks (
	task_id serial primary key,
	task_name varchar(50) not null,
	completed bool not null,
	created_on timestamp not null
);
