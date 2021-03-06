const express = require("express");
const cvController = require("../controllers/cvController");
const router = express.Router();

//CV CRUD
router
  .route("/")
  .get(cvController.getAllCvs) // get all Cvs
  .post(cvController.createCv); // need to update with to add user id

router
  .route("/:user_id")
  .get(cvController.getCvByUserID)
  .post(cvController.createCv);
router
  .route("/:id_Cv")
  .get(cvController.getOneCv) // get one Cv using the id of Cv
  .delete(cvController.deleteCv);

//Experience CRUD
router.route("/:id_Cv/addExperience").post(cvController.addExperience); // Add one Experience
router
  .route("/:id_Cv/experiences")
  .get(cvController.getAllExperiences)
  .patch(cvController.updateAllExperiences);
router
  .route("/:id_Cv/experience/:id_experience")
  .delete(cvController.deleteExperience)
  .patch(cvController.updateOneExperience)
  .post(cvController.addExperiences); // Add many Experiences

//Education CRUD
router.route("/:id_Cv/addEducation").post(cvController.addEducation); // add One Education
router
  .route("/:id_Cv/educations")
  .get(cvController.getAllEducations)
  .patch(cvController.updateAllEducations)
  .post(cvController.addEducations); // add MANY Education
router
  .route("/:id_Cv/education/:id_education")
  .delete(cvController.deleteEducation)
  .patch(cvController.updateOneEducation);

//Skill CRUD
router.route("/:id_Cv/addSkill").post(cvController.addSkill); // add One skill
router
  .route("/:id_Cv/skills")
  .get(cvController.getAllSkills)
  .patch(cvController.updateAllSKills)
  .post(cvController.addSkills); //// add MANY skills
router
  .route("/:id_Cv/skill/:id_skill")
  .delete(cvController.deleteSkill)
  .patch(cvController.updateOneSkill);

//Language CRUD
router.route("/:id_Cv/addLanguage").post(cvController.addLanguage); // add One language
router
  .route("/:id_Cv/languages")
  .get(cvController.getAllLanguages)
  .patch(cvController.updateAllLanguages)
  .post(cvController.addLanguages); // add MANY Education
router
  .route("/:id_Cv/language/:id_language")
  .delete(cvController.deleteLanguage)
  .patch(cvController.updateOneLanguage);

module.exports = router;
