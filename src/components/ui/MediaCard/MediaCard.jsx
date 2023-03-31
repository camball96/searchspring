import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ product }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} style={{ margin: "2%" }}>
        <CardMedia
          sx={{ height: 350 }}
          image={product.thumbnailImageUrl}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.msrp > product.price ? (
              <span style={{ textDecoration: "line-through" }}>
                ${product.msrp}
              </span>
            ) : (
              ""
            )}{" "}
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add To Cart</Button>
        </CardActions>
      </Card>
    </div>
  );
}
