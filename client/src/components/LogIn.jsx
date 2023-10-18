import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogIn=()=>{
    return(

        <div className="container-register  d-flex justify-content-center w-50 mx-auto mb-20">
      <form>
        <h2> <em>Log In  to save properties <br/>and much more</em></h2>
    

        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-5 col-form-label">
            {" "}
            Email{" "}
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-5 col-form-label ">
            {" "}
            Password{" "}
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-info">
            Log In  {" "}
          </button>
        </div>
        
        </form>
        </div>
    )
}
export default LogIn