
SELECT JOB FROM IBMUSER.EMP;

select LASTNAME, EMPNO, PHONENO from ibmuser.emp;


SELECT IBMUSER.DEPT.DEPTNAME,
 IBMUSER.DEPT.DEPTNO
 FROM IBMUSER.DEPT;

 -- ####################################################################
 -- # Basic SELECT statement
 -- # See https://www.ibm.com/docs/en/db2-for-zos/13?topic=statements-select for complete syntax.
 -- ####################################################################
 SELECT FIRSTNME
    FROM IBMUSER.EMP    
    WHERE JOB='MANAGER';

SELECT COUNT (*) FROM IBMUSER.EMP;    
SELECT AVG (EMPNO) FROM IBMUSER.EMP;    
SELECT * FROM IBMUSER.EMP;    

SELECT COUNT (*) AS NUM_EMPLOYEES FROM IBMUSER.EMP;

SELECT DEPTNAME, COUNT(EMPNO)
    FROM 
        IBMUSER.DEPT    D,
        IBMUSER.EMP     E
    WHERE
        D.DEPTNO = E.WORKDEPT
    GROUP BY DEPTNAME
    ORDER BY DEPTNAME;


SELECT * FROM IBMUSER.EMP;
SELECT * FROM IBMUSER.DEPT;

SELECT 
   WORKDEPT AS DEPTCODE, 
--    SUM(E.SALARY + E.BONUS + E.COMM) AS COMPENSATION
   MAX(E.SALARY + E.BONUS + E.COMM) AS COMPENSATION
--    MAX(E.SALARY) AS COMPENSATION
--    SUM(E.SALARY) AS COMPENSATION
    FROM 
        IBMUSER.EMP     E
    GROUP BY WORKDEPT;

SELECT 
    COMPANY,
    STOCK_NUM,
    MENU_CODE
    FROM
        CUSTOMER    C,
        ORDERS      O,
        ITEMS       I
    WHERE
        C.CUSTOMER_NUM = O.CUSTOMER_NUM
        AND O.ORDER_NUM = I.ORDER_NUM;

SELECT         
    DEPTNAME   AS DEPTNAME,
    MAX_COMPENSATION   AS MAX_COMPENSATION
    FROM
        IBMUSER.DEPT
    WHERE
        MAX_COMPENSATION IS NOT NULL
        AND MAX_COMPENSATION <> 500
    ORDER BY DEPTNAME;

------------------------------------------------------------------------
-- DESAFIO 02

SELECT 
    D.DEPTNAME, 
    -- MAX(SUM(E.SALARY, E.BONUS, E.COMM)) AS MAX_COMPENSATION
    -- MAX(E.SALARY) AS MAX_COMPENSATION
    MAX(E.SALARY + E.BONUS + E.COMM) AS COMPENSATION
    FROM 
        IBMUSER.DEPT    D,
        IBMUSER.EMP     E
    WHERE
        D.DEPTNO = E.WORKDEPT
    GROUP BY DEPTNAME
    ORDER BY DEPTNAME;