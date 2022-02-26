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
]
