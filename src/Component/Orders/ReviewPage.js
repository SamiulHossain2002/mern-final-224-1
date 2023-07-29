import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ReviewPage.css";
function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a fantastic product!",
      image: require("../../Assets/images/logo-img/honor.jpg"),
    },
    {
      id: 2,
      name: "Product 2",
      description: "Another amazing product!",
      image: require("../../Assets/images/logo-img/titan.jpg"),
    },
    {
      id: 2,
      name: "Product 3",
      description: "Another amazing product!",
      image: require("../../Assets/images/logo-img/xiaomi.jpg"),
    },
    // Add more products as needed
  ];

  const handleDeleteReview = (index) => {
    setReviews((prevReviews) => prevReviews.filter((_, i) => i !== index));
  };

  return (
    <div className="img-set">
      <div className="blog-container">
        <header>
          <h1>Shopping Blog</h1>
        </header>

        <main>
          {products.map((product) => (
            <>
              <div className="blog-post" key={product.id}>
                <h2>Products</h2>
                <div className="blog-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="blog-content">
                  <p>{product.description}</p>
                </div>
              </div>
            </>
          ))}
        </main>

        <footer>
          <p className="text-white">
            &copy; {new Date().getFullYear()} Shopping Blog. All rights
            reserved.
          </p>
        </footer>
      </div>

      <div className="App mb-3">
        <h1>Review Us</h1>
        <Formik
          initialValues={{ name: "", comment: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            comment: Yup.string().required("Review is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            setReviews([...reviews, values]);
            resetForm();
          }}
        >
          <Form className="form-main ">
            <div className="form-group ">
              <label htmlFor="name">Your Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment"> Your Review:</label>
              <br />
              <Field as="textarea" id="comment" name="comment" />
              <ErrorMessage
                name="comment"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit">Add Review</button>
          </Form>
        </Formik>
        <div className="reviews">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <h3>{review.name}</h3>
              <p>{review.comment}</p>
              <button onClick={() => handleDeleteReview(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
