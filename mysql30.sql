use student;
create table personal(
id int,
name varchar(12),
phone varchar(25)
);
select * from personal;
show databases;
use assignment;

show tables;

select * from orders;

insert into orders(order_id, amount) values(100,250);

select * from orders where order_date is null;

select * from orders where order_date is not null;

select * from orders;
select * from orders where amount limit 3;

select * from orders;
select * from orders where amount limit 3, 3;

select * from orders;

select * from orders where amount limit 0, 2;

select count(amount) from orders;

select count(amount) from orders where customer_id=1;

select sum(amount) from orders;

select * from orders;

select min(amount) from orders;

select * from orders;

select max(amount) from orders;

select * from orders;

select avg(amount) from orders;

select * from orders;

update orders set amount=200 where order_id=101;

select * from orders;

update orders set order_date="2021-02-24" where order_id=100;

select * from orders;

rollback;

select * from orders;

update orders set order_date=null where order_id=100;

update orders set customer_id="6" where order_id=100;

commit;

update orders set customer_id="6" where order_id=100;

update orders set order_date="2021-02-24" where order_id=100;

select * from orders;

rollback;

commit;

update orders set order_date="2021-02-24" where order_id=102;