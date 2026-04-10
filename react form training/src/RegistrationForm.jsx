import React, { useState } from 'react'

const RegistrationForm = () => {
    const [formData,setFormData] =useState({
        username:'',
        email:'',
        isLoading:false
    });
    const [error,setError] = useState('');

    const handleChange = (e)=> {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();
        if(!formData.username||!formData.email){
            setError('All fields are required');
            return;
        }

        setError('');
        setFormData(prev=>({...prev,isLoading:true}));

        setTimeout(()=> {
            console.log('Form Submitted: ',formData);
            setFormData(prev=>({...prev,isLoading:false}));
            alert('success');
        },1500);
        setFormData({
            username:'',
            email:'',
            isLoading:false
        })
    }
  return (
   <form onSubmit={handleSubmit} style={({display:'flex',flexDirection:'column',width:'250px'})} >
    <input name='username' placeholder='Username' value={formData.username} onChange={handleChange} />
    <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />

    {error && <p style={{color:'red'}}>{error}</p>}

    <button type='submit' disabled={formData.isLoading}>{formData.isLoading ? 'Submitting...':'Register'}</button>

   </form>
  )
}

export default RegistrationForm
