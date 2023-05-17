/*
AS

SERVE PARA RENOMEAR OU APELIDAR AS COLUNAS

SELECT <nome da coluna> AS <nome que deseja colocar na coluna> FROM <nome da tabela> 
*/

SELECT TOP 10 ListPrice AS 'LISTA DE PRE�O' FROM Production.Product

SELECT TOP 10 AVG(ListPrice) AS 'PRE�O M�DIO' FROM Production.Product

-- Desafio 1
SELECT * FROM Person.Person
SELECT FirstName AS 'PRIMEIRO NOME', LastName AS '�LITMO SOBRENOME' FROM Person.Person

-- Desafio 2
SELECT * FROM Production.Product
SELECT ProductNumber AS 'N�MERO DO PRODUTO' FROM Production.Product

-- Desafio 3
SELECT * FROM Sales.SalesOrderDetail
SELECT UnitPrice AS 'PRE�O UNIT�RIO' FROM Sales.SalesOrderDetail