const examples = [
  {
    sql: `
SELECT * 
FROM Artist
`,
    title: "Select All",
  },

  {
    sql: `
SELECT * 
FROM Artist
LIMIT 10
`,
    title: `
Select a maximum of 10 records
`,
  },

  {
    sql: `
SELECT i.billingcountry, sum(total) as 'TotalSales'
FROM invoice AS i
GROUP BY billingcountry
ORDER BY totalsales DESC
`,
    title: `
Aggregate using Sum
`,
  },

  {
    sql: `
-- Filter an aggregate results using the 'HAVING' clause.
SELECT BillingCountry, sum(Total) as TotalSales
FROM Invoice AS i
GROUP BY BillingCountry
HAVING TotalSales > 100
ORDER BY totalsales DESC

`,
    title: `
Filter an Aggregate Value
`,
  },

  {
    sql: `
SELECT i.billingcountry, max(total) as 'Largest Sale'
FROM invoice AS i
GROUP BY billingcountry
ORDER BY 'Largest Sale' DESC
`,
    title: `
Get Max
`,
  },

  {
    sql: `
SELECT Name, Title
FROM Artist AS A
JOIN Album as I
   ON A.ArtistID = I.ArtistID
`,
    title: `
Join Two Tables - Where the Same ID is Present in Both
`,
  },

  {
    sql: `
SELECT Name, Title
FROM Artist AS A
LEFT JOIN Album as I
   ON A.ArtistID = I.ArtistID
`,
    title: `
Join Two Tables - Taking All Entries from First Table and Any Matching Entries from Second Table
`,
  },
  {
    sql: `
SELECT DISTINCT Name
FROM Artist AS A
LEFT JOIN Album as I
   ON A.ArtistID = I.ArtistID
WHERE
I.ArtistID IS NULL
`,
    title: `
Find ID in One Table But Not the Other
`,
  },
  {
    sql: `
-- Join a table to itself and select the latest date per CustomerID.
SELECT I1.*  
FROM Invoice I1
LEFT JOIN Invoice I2
    ON 
    (
	 I1.CustomerID = I2.CustomerID
	 AND
	 I1.InvoiceDate < I2.InvoiceDate
	)
WHERE
I2.CustomerID IS NULL
`,
    title: `
Get the Entry with the Most Recent Date for an Entity
`,
  },
  {
    sql: `
-- Order by Customer ID and Invoice Date and pull in the invoice date from the
-- previous row.
SELECT CustomerID
    , InvoiceDate
  , MIN(InvoiceDate) OVER (PARTITION BY CustomerID ORDER BY CustomerID,  InvoiceDate
                ROWS BETWEEN 1 PRECEDING and 1 PRECEDING) as PreviousInvoiceDate
FROM Invoice
ORDER BY CustomerID,  InvoiceDate`,
    title: `
Pull in a Value from the Previous Row of the Results
`,
  },
  {
    sql: `
-- In the subquery we order by Customer ID and Invoice Date and pull in the invoice date from the
-- previous row. Then we count the instances for each DaysBetweenInvoice.
SELECT 
    (InvoiceDate - PreviousInvoiceDate) DaysBetweenInvoice
  , COUNT(*) Invoices
FROM
(
    SELECT CustomerID
        , InvoiceDate
        , MIN(InvoiceDate) OVER (PARTITION BY CustomerID ORDER BY CustomerID,  InvoiceDate
                    ROWS BETWEEN 1 PRECEDING and 1 PRECEDING) as PreviousInvoiceDate
    FROM Invoice
    ORDER BY CustomerID,  InvoiceDate
) A
WHERE
PreviousInvoiceDate IS NOT NULL
GROUP BY 1
`,
title: `
Get the Number of Days Between Two Dates
`,
  },
]
