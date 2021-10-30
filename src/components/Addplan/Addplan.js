import React from "react";
import { useForm } from "react-hook-form";

const Addplan = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
      console.log(data)
    fetch("https://secret-plateau-40724.herokuapp.com/addplan", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.insertedId) {
        alert("Dear Admin ! Your Plan Added !");
        reset();
      }
    });
  };
  
  return (
    <div className="pt-5 login-form">
      <h1 className="mb-4">Dear Admin, Now You can add a Plan to This Website</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <input
            {...register("name")}
            placeholder="Enter the Planed city NAME"
           
          />
          <textarea
            {...register("description")}
            placeholder="Write DETAILS about the city"
          />
          <input {...register("summary")} placeholder="Write a SUMMATY about the city" />
          <input
            type="number"
            {...register("id")}
            placeholder="Your plan ID"
          />
          
          <input
            {...register("img")}
            placeholder="City image URL"
          />
          
        </div>

        <input className="login-btn" type="submit" />
      </form>
    </div>
  );
};

export default Addplan;
