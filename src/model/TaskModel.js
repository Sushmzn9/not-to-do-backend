// model does the queries

import TaskSchema from "./TaskSchema.js";

// C Create data indb
export const createTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

//Read data from db
export const readTasks = () => {
  return TaskSchema.find();
};

//update the date base switch

export const switchTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type });
};

// delete one task
export const deleteTaskById = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};

// delete many task
//@ids should be an array
export const deleteManyTasks = (ids) => {
  return TaskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
