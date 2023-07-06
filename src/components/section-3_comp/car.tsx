import React from 'react';
import Product360View from './Product360View';
import './car.css'

const App1: React.FC = () => {
  const productImages = [
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/51vGHX7h_1550068705.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/lRFrCEeo_1550068706.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/oRYt9c0T_1550068707.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/GWMDjstL_1550068709.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/4w8L5JrD_1550068710.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/gmC1u4ow_1550068711.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/Pj08YFNw_1550068712.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/vJPFCzTS_1550068713.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/zc9k0CB7_1550068680.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/3bQ7FeBv_1550068682.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/EWbwnsik_1550068685.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/pkdjX7Ol_1550068687.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/e8FqrOUY_1550068689.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/7HqfQWZG_1550068691.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/km3FYzMe_1550068693.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/BFQxwE0r_1550068695.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/r5Dq8Udh_1550068696.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/tw0bJF9z_1550068697.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/dUFchjE4_1550068698.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/SmklFc63_1550068700.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/pcEbOyVH_1550068701.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/Rcd5YEiK_1550068702.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/IgRbVKoU_1550068703.jpg',
    'https://tours.motorstreet360.com/uploads/panos/motorstreetcarstudioexampledslr2080/exterior/SVTKyFIm_1550068704.jpg',
    // Add more image URLs here for other angles
  ];

  return (
    <div>
      <h1 id='Our-new'>TRY OUR NEW <span id='View-Text' >360 VIEW</span> TECHNOLOGY</h1>
      <Product360View images={productImages} />
    </div>
  );
};

export default App1;
