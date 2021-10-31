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
ORDER BY totalsales DESC
`,
    title: `
Get Max
`,
  },

]
