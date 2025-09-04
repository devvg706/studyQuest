import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router-dom'
import { apiConnector } from '../services/apiconnector'
import { categories } from '../services/apis'
import { getCatalogPageData } from '../services/operations/pageAndComponentDetails'
import Course_Card from '../components/core/Catalog/Course_Card'
import CourseSlider from '../components/core/Catalog/CourseSlider'

const Catalog = () => {
    const { catalogName } = useParams()
    const [catalogPageData, setCatalogPageData] = useState(null)
    const [categoryId, setCategoryId] = useState("")

    useEffect(() => {
        const getCategories = async () => {
            const res = await apiConnector('GET', categories.CATEGORIES_API)
            const category_id = res?.data?.data.find(
                (ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName
            )?._id
            setCategoryId(category_id)
        }
        getCategories()
    }, [catalogName])

    useEffect(() => {
        if (!categoryId) return
        const getCategoryDetails = async () => {
            try {
                const res = await getCatalogPageData(categoryId)
                setCatalogPageData(res)
            } catch (error) {
                console.log(error)
            }
        }
        getCategoryDetails()
    }, [categoryId])

    const selectedCategory = catalogPageData?.data?.selectedCategory
    const differentCategory = catalogPageData?.data?.differentCategory
    const mostSellingCourses = catalogPageData?.data?.mostSellingCourses

    return (
        <div className='text-white bg-richblack-900 min-h-screen'>
            {/* Breadcrumb */}
            <div className='w-11/12 max-w-[1200px] mx-auto py-6 text-sm text-richblack-300'>
                Home / Catalog / <span className='text-yellow-50'>{selectedCategory?.name}</span>
            </div>

            {/* Category Header */}
            <div className='w-11/12 max-w-[1200px] mx-auto'>
                <h1 className='text-3xl font-bold text-richblack-5 mb-2'>{selectedCategory?.name}</h1>
                <p className='text-richblack-200 mb-8'>{selectedCategory?.description}</p>
            </div>

            {/* Section 1: Courses to get you started */}
            <div className='w-11/12 max-w-[1200px] mx-auto mb-12'>
                <h2 className='text-2xl font-semibold text-richblack-5 mb-4'>Courses to get you started</h2>

                <div className='flex gap-4 mb-4'>
                    <button className='px-4 py-2 rounded-full border border-richblack-600 text-richblack-200 hover:bg-richblack-700 transition-all'>Most Popular</button>
                    <button className='px-4 py-2 rounded-full border border-richblack-600 text-richblack-200 hover:bg-richblack-700 transition-all'>New</button>
                </div>

                <CourseSlider Courses={selectedCategory?.courses} />
            </div>

            {/* Section 2: Top Courses in other categories */}
            <div className='w-11/12 max-w-[1200px] mx-auto mb-12'>
                <h2 className='text-2xl font-semibold text-richblack-5 mb-4'>Top Courses in {differentCategory?.name}</h2>
                <CourseSlider Courses={differentCategory?.courses} />
            </div>

            {/* Section 3: Frequently Bought */}
            <div className='w-11/12 max-w-[1200px] mx-auto mb-16'>
                <h2 className='text-2xl font-semibold text-richblack-5 mb-6'>Frequently Bought</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        mostSellingCourses?.slice(0, 4).map((course, index) => (
                            <Course_Card course={course} key={index} Height="h-[400px]" />
                        ))
                    }
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Catalog
