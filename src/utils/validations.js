import * as Yup from 'yup';
const taskSchema = Yup.object().shape({
    title: Yup.string().required('Zorunlu Alan'),
    description: Yup.string().required('Zorunlu Alan'),
    startDate: Yup.string().required('Zorunlu Alan'),
    endDate: Yup.string().required('Zorunlu Alan'),
});


export { taskSchema }