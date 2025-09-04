const Category   = require('../models/Category');
//create a Category
exports.createCategory = async(req,res) => {
    try{
        const {name,description} = req.body;
        //validation of data
        if(!name || !description){
            return res.status(401).json({
                message:"Please enter all the details",
                success:false,
            })
        }
        //create a entry in db
        const category = await Category.create({name:name,description:description}); //both syntax are equivalent the one written and this one down below
        // const Category = await Category.create({ name, description });

        return res.status(200).json({
            message:"Category created success",
            success:true,
        })
    }
    catch(error){
        console.log("this error occured while createing Category",error)
        return res.status(500).json({
            message:"failed to create Category",
            success:false,
        })
    }
}

//get all Category

exports.showAllCategory = async (req,res) => {
    try{
        const data = await Category.find({},{name:true, description:true});
        return res.status(200).json({
            message:"all Category fetched success",
            success:true,
            data,
        });
    }
    catch(error){
        console.log("this error occured while fetching all Category",error)
        return res.status(500).json({
            message:"failed to show all Category",
            success:false,
        })
    }
}
// exports.categoryPageDetails = async (req,res) => {
//     try{
//         const {categoryId} = req.body;
//         const selectedCategory = await Category.findById(categoryId).populate("courses").exec();
//         if(!selectedCategory){
//             return res.status(404).json({
//                 message:"category not found",
//                 success:false,
//             })
//         }
//         const differentCategories = await Category.find({_id:{$ne:categoryId}}).populate("courses").exec();
        
//         return res.status(200).json({
//             message:"category details fetched success",
//             success:true,
//             data:{
//                 selectedCategory,
//                 differentCategories,
//             }
            
//         })
//     }
//     catch(error){
//         return res.status(500).json({
//             message:"unable to fetch category details",
//             success:false,
//         })
//     }
// }
exports.categoryPageDetails = async (req, res) => {
  try {
    const { categoryId } = req.body;
    //console.log("PRINTING CATEGORY ID: ", categoryId);

    if (!categoryId) {
      return res.status(400).json({ success: false, message: "categoryId is required" });
    }

    const selectedCategory = await Category.findById(categoryId)
      .populate({
        path: "courses",
        match: { status: "Published" },
        populate: "ratingAndReviews",
      })
      .exec();

    if (!selectedCategory) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }
    console.log("PRINTING SELECTED CATEGORY: ", selectedCategory);
    if (!selectedCategory.courses || selectedCategory.courses.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No courses found for the selected category.",
      });
    }

    // Handle different category
    const categoriesExceptSelected = await Category.find({ _id: { $ne: categoryId } });

    let differentCategory = null;
    if (categoriesExceptSelected.length > 0) {
      const randomIndex = Math.floor(Math.random() * categoriesExceptSelected.length);
      differentCategory = await Category.findById(categoriesExceptSelected[randomIndex]._id)
        .populate({
          path: "courses",
          match: { status: "Published" },
        })
        .exec();
    }

    // Get top-selling courses
    const allCategories = await Category.find()
      .populate({
        path: "courses",
        match: { status: "Published" },
        populate: {
          path: "instructor",
        },
      })
      .exec();

    const allCourses = allCategories.flatMap((category) => category.courses);
    const mostSellingCourses = allCourses
      .sort((a, b) => b.sold - a.sold)
      .slice(0, 10);

    return res.status(200).json({
      success: true,
      data: {
        selectedCategory,
        differentCategory,
        mostSellingCourses,
      },
    });

  } catch (error) {
    console.error("CATEGORY PAGE ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
