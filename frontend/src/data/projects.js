// 1. Import all images at the top
// Make sure these file names match EXACTLY what is in your assets folder
import agroImg from '../assets/agro-care.png';
import brainTumorImg from '../assets/images.png';
import retinaImg from '../assets/retina.png';
import waterQualityImg from '../assets/8382828.png';
import ragPrepareIQImg from '../assets/download.png';


export default [
  {
    id: 'agrocare',
    title: 'AgroCare',
    summary: 'AI Farming Assistant — disease detection & irrigation scheduler',
    tech: ['Python','Flask','TensorFlow','React'],
    details: 'Built crop disease detection, pest ID, and weather-driven suggestions. Collaborators: Manas, Vinay Krishna Reddy.',
    img: agroImg, // <--- Use the variable (no quotes)
    code: '#'
  },
  {
    id: 'brain-tumor',
    title: 'Brain Tumor Detection',
    summary: 'UNet segmentation + classification pipeline',
    tech: ['Keras','UNet','TensorFlow'],
    details: 'Segmentation pipeline for MRI scans; preprocessing & augmentation workflows.',
    img: brainTumorImg, // <--- Use the variable (no quotes)
    code: '#'
  },
  {
    id:'retina',
    title:'Retina Disease Classification',
    summary:'Retina image classification for diabetic retinopathy & glaucoma',
    tech:['PyTorch','Transfer Learning'],
    details:'Transfer learning pipeline for retina disease classification.',
    img: retinaImg,
    code:'#'
  },
  {
    id:'water-quality',
    title:'Water Quality Monitoring',
    summary:'Real-time metrics dashboard for pH, TDS, turbidity',
    tech:['Flask','React'],
    details:'Sensors integration and dashboard for water quality monitoring.',
    img: waterQualityImg,
    code:'#'
  },
  {
    id:'rag-prepareiq',
    title:'RAG PrepareIQ',
    summary:'Retrieval-Augmented Generation study assistant',
    tech:['Flask','FAISS','HuggingFace'],
    details:'RAG system with vector DB and LLM summarization.',
    img: ragPrepareIQImg,
    code:'#'
  }
];