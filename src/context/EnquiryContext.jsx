import { createContext, useContext, useState } from 'react';
import emailjs from '@emailjs/browser';

const EnquiryContext = createContext();

export const PRODUCT_STYLES = {
  default: [
    { value: 'Modern', label: 'Modern' },
    { value: 'Contemporary', label: 'Contemporary' },
    { value: 'Traditional', label: 'Traditional' },
    { value: 'Transitional', label: 'Transitional' },
    { value: 'Other', label: 'Other' }
  ],
  'Kitchen Cabinets': [
    { value: 'Modern', label: 'Modern' },
    { value: 'Contemporary', label: 'Contemporary' },
    { value: 'Traditional', label: 'Traditional' },
    { value: 'Shaker', label: 'Shaker Style' },
    { value: 'Minimalist', label: 'Minimalist' },
    { value: 'Industrial', label: 'Industrial' },
    { value: 'Rustic', label: 'Rustic' },
    { value: 'Other', label: 'Other' }
  ],
  'Bathroom Vanities': [
    { value: 'Modern', label: 'Modern' },
    { value: 'Contemporary', label: 'Contemporary' },
    { value: 'Traditional', label: 'Traditional' },
    { value: 'Floating', label: 'Floating/Wall-Mounted' },
    { value: 'Vintage', label: 'Vintage' },
    { value: 'Minimalist', label: 'Minimalist' },
    { value: 'Other', label: 'Other' }
  ],
  'Closets & Wardrobes': [
    { value: 'Walk-in', label: 'Walk-in Closet' },
    { value: 'Reach-in', label: 'Reach-in Wardrobe' },
    { value: 'Modern', label: 'Modern' },
    { value: 'Contemporary', label: 'Contemporary' },
    { value: 'Minimalist', label: 'Minimalist' },
    { value: 'Classic', label: 'Classic' },
    { value: 'Other', label: 'Other' }
  ],
  'TV Units': [
    { value: 'Floating', label: 'Floating/Wall-Mounted' },
    { value: 'Modern', label: 'Modern' },
    { value: 'Contemporary', label: 'Contemporary' },
    { value: 'Entertainment Center', label: 'Full Entertainment Center' },
    { value: 'Minimalist', label: 'Minimalist' },
    { value: 'Other', label: 'Other' }
  ]
};

export function EnquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    country: '',
    phone_number: '',
    from_email: '',
    product_category: '',
    product_style: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const openEnquiryForm = () => {
    setIsOpen(true);
  };

  const closeEnquiryForm = () => {
    setIsOpen(false);
    setSubmitStatus(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'product_category') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        product_style: '' // Reset product style when category changes
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const getAvailableStyles = () => {
    return PRODUCT_STYLES[formData.product_category] || PRODUCT_STYLES.default;
  };

  const resetForm = () => {
    setFormData({
      from_name: '',
      country: '',
      phone_number: '',
      from_email: '',
      product_category: '',
      product_style: '',
      message: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_fkhzjf9',
        'template_kgjsa3j',
        formData,
        '7XJkTEQBlpj8CTJrq'
      );

      setSubmitStatus('success');
      resetForm();
      
      // Close the form after successful submission
      setTimeout(() => {
        closeEnquiryForm();
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const value = {
    isOpen,
    formData,
    isSubmitting,
    submitStatus,
    openEnquiryForm,
    closeEnquiryForm,
    handleChange,
    handleSubmit,
    getAvailableStyles
  };

  return (
    <EnquiryContext.Provider value={value}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (context === undefined) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
} 