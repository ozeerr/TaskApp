import * as Yup from 'yup';
const taskSchema=Yup.object().shape({
    title:Yup.string().required('Title is required'),
    description:Yup.string().required('Description is required'),
    startDate:Yup.date().required('Start Date is required'),
    endDate:Yup.date().required('End Date is required'),
    category:Yup.number().required('Category is required'),
});


export default taskSchema;
