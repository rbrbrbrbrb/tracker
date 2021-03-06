import mysql from 'mysql';

//sql database connection
const dbconnection = mysql.createConnection({
  host: process.env.ENDPOINT_URL,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

//query config
const tracking_query = 'SELECT * from Device LEFT JOIN Report ON Device.ID = Report.Device_ID';

//tracking function
const track = () => {
  const con = dbconnection;
  con.connect((err) => {
    if (err) console.log('Error connecting to the database.');
    else {
      con.query(tracking_query, (err, result) => {
        if (err) console.log('Error querying the database.');
        else {
          //display to screen
          console.log(result);
          console.log('Query successful.');
          con.end();
        }
      });
    }
  });
}

//run the function
track();