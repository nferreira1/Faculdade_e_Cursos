/*
HAVING

O HAVING � BASICAMENTE USADO EM JUN��O COM O GROUP BY PARA FILTRAR RESULTADOS DE UM AGRUPAMENTO

� COMO SE FOSSE UM WHERE PARA DADOS AGRUPADOS

SELECT <nome da coluna>, <FUN��O DE AGREGA��O>(<nome da coluna>) FROM <nome da tabela> GROUP BY <nome da coluna> HAVING <condi��o>
*/


-- VAMOS DIZER QUE QUEREMOS SABER QUAIS NOMES NO SISTEMA TEM UMA OCORR�NCIA MAIOR DO QUE 10 VEZES
SELECT FirstName, COUNT(FirstName) AS QUANTIDADE FROM Person.Person GROUP BY FirstName HAVING COUNT(FirstName) = 10  ORDER BY COUNT(FirstName)