import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { createSubSection, updateSubSection } from "../../../../../services/operations/courseDetailsAPI";
import { setCourse } from "../../../../../slices/courseSlice";
import { MdOutlineCancel } from "react-icons/md";
import Upload from "../Upload";
import IconBtn from "../../../../common/IconBtn";

const SubSectionModal = ({ modalData, setModalData, add = false, view = false, edit = false }) => {
  const { register, handleSubmit, setValue, formState: { errors }, getValues } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { course } = useSelector((state) => state.course);

  useEffect(() => {
    if (view || edit) {
      setValue("lectureTitle", modalData.title);
      setValue("lectureDesc", modalData.description);
      setValue("lectureVideo", modalData.videoUrl);
    }
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues();
    return (
      currentValues.lectureTitle !== modalData.title ||
      currentValues.lectureDesc !== modalData.description ||
      currentValues.lectureVideo !== modalData.videoUrl
    );
  };

  const handleEditSubSection = async () => {
    const currentValues = getValues();
    const formData = new FormData();
    formData.append("sectionId", modalData.sectionId);
    formData.append("subSectionId", modalData._id);
    formData.append("courseid", course._id);

    if (currentValues.lectureTitle !== modalData.title)
      formData.append("title", currentValues.lectureTitle);
    if (currentValues.lectureDesc !== modalData.description)
      formData.append("description", currentValues.lectureDesc);
    if (currentValues.lectureVideo !== modalData.videoUrl)
      formData.append("video", currentValues.lectureVideo);

    setLoading(true);
    const result = await updateSubSection(formData, token);
    if (result) dispatch(setCourse(result));
    setModalData(null);
    setLoading(false);
  };

  const onSubmit = async (data) => {
    if (view) return;
    if (edit) {
      if (!isFormUpdated()) {
        toast.error("No changes made");
      } else {
        handleEditSubSection();
      }
      return;
    }
    if (add) {
      const formData = new FormData();
      formData.append("courseid", course._id);
      formData.append("sectionId", modalData);
      formData.append("title", data.lectureTitle);
      formData.append("description", data.lectureDesc);
      formData.append("video", data.lectureVideo);

      setLoading(true);
      const result = await createSubSection(formData, token);
      if (result) dispatch(setCourse(result));
    }
    setModalData(null);
    setLoading(false);
  };

 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
    <div className="w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-richblack-800 p-6 text-richblack-5 shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between border-b border-richblack-600 pb-3 mb-6">
        <h2 className="text-xl font-semibold tracking-wide">
          {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture
        </h2>
        <button
          onClick={() => (!loading ? setModalData(null) : {})}
          className="text-richblack-200 hover:text-pink-400 transition"
        >
          <MdOutlineCancel size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Upload Section */}
        <Upload
          name="lectureVideo"
          label="Lecture Video"
          register={register}
          setValue={setValue}
          errors={errors}
          video={true}
          viewData={view ? modalData.videoUrl : null}
          editData={edit ? modalData.videoUrl : null}
        />

        {/* Lecture Title */}
        <div>
          <label htmlFor="lectureTitle" className="mb-1 block text-sm font-medium">
            Lecture Title<span className="text-pink-200"> *</span>
          </label>
          <input
            id="lectureTitle"
            placeholder="Enter Lecture Title"
            {...register("lectureTitle", { required: true })}
            className="w-full rounded-md bg-richblack-700 px-4 py-2 text-richblack-5 placeholder:text-richblack-400 focus:border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-200"
          />
          {errors.lectureTitle && (
            <span className="text-sm text-pink-200">Lecture Title is required</span>
          )}
        </div>

        {/* Lecture Description */}
        <div>
          <label htmlFor="lectureDesc" className="mb-1 block text-sm font-medium">
            Lecture Description<span className="text-pink-200"> *</span>
          </label>
          <textarea
            id="lectureDesc"
            placeholder="Enter Lecture Description Here"
            {...register("lectureDesc", { required: true })}
            className="w-full min-h-[120px] rounded-md bg-richblack-700 px-4 py-2 text-richblack-5 placeholder:text-richblack-400 focus:border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-200 resize-none"
          ></textarea>
          {errors.lectureDesc && (
            <span className="text-sm text-pink-200">Enter Lecture Description</span>
          )}
        </div>

        {/* Submit Button */}
        {!view && (
          <div className="flex justify-end">
            <IconBtn
              text={loading ? "Loading..." : edit ? "Save Changes" : "Save"}
              disabled={loading}
            />
          </div>
        )}
      </form>
    </div>
  </div>
);

};

export default SubSectionModal;
