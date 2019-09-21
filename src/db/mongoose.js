const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/discipline-record", {
  useNewUrlParser: true
});

const Student = mongoose.model("Student", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    }
  },
  email: {
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    }
  }
});

const student1 = new Student({
  name: "Kevin Freeman",
  age: 40
});

student1
  .save()
  .then(() => {
    console.log(student1);
  })
  .catch(error => {
    console.log("Error", error);
  });
