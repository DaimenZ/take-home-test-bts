import Joi from "joi";

const noteSchemas = {
  createChecklist: Joi.object({
    name: Joi.string().required(),
  }),

  checklistId: Joi.object({
    checklistId: Joi.string().required(),
  }),
};

export default noteSchemas;
