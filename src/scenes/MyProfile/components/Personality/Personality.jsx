import React from "react";

/**@mui */
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

/**@styles */
const useStyles = makeStyles({
  card: {
    padding: 25,
    borderRadius: "8px",
    boxShadow: "none",
    marginBottom: "20px",
  },
  cardHeader: {
    padding: 0,
    paddingBottom: "20px",
  },
  title: {
    color: "#030F09",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: "22px",
  },
  subheader: {
    color: "#606060",
    fontSize: 14,
    lineHeight: "22px",
  },
  avatar: {
    marginRight: "15px",
  },
  avatarImage: {
    width: "70px",
    height: "70px",
  },
  cardContent: {
    padding: 0,
    paddingTop: "15px",
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  tableHeadCell: {
    color: "#030F09",
    padding: 0,
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "27px",
    textAlign: "center",
    border: "none",
  },
  tableBodyCell: {
    color: "#030f09b8",
    fontSize: "16px",
    lineHeight: "32px",
    padding: 0,
    textAlign: "center",
    border: "none",
  },
});

const Personality = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        classes={{
          title: classes.title,
          avatar: classes.avatar,
          subheader: classes.subheader,
        }}
        avatar={
          <Avatar
            className={classes.avatarImage}
            aria-label="recipe"
            src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"
          />
        }
        title="Nick Evans"
        subheader="Potato Master"
      />
      <Divider />
      <CardContent className={classes.cardContent}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeadCell}>20</TableCell>
              <TableCell className={classes.tableHeadCell}>75</TableCell>
              <TableCell className={classes.tableHeadCell}>248</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableBodyCell}>Recipes</TableCell>
              <TableCell className={classes.tableBodyCell}>Saved</TableCell>
              <TableCell className={classes.tableBodyCell}>Following</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Personality;
