import response from './response.json';
import { expect, describe, it } from '@jest/globals';
describe('ImageInfo Model', () => {
  it('should have portrait, landscape and thumbnail properties with correct structure', () => {
    const firstImageInfo = response.containers[0].items[0].posters;
    
    expect(firstImageInfo).toHaveProperty('portrait');
    expect(firstImageInfo).toHaveProperty('landscape'); 
    expect(firstImageInfo).toHaveProperty('thumbnail');

    expect(firstImageInfo.portrait).toEqual({
      url: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2023/06/01153825/aqZ75oN6yd7UTShYIMNlpSdDbbH-2-scaled.jpg',
      aspectRatio: '2/3'
    });

    expect(firstImageInfo.landscape).toEqual({
      url: 'https://www.akureyri.is/static/news/lg/1711553284_oppenheimer02.jpg',
      aspectRatio: '16/9'
    });

    expect(firstImageInfo.thumbnail).toEqual({
      url: 'https://media.wired.com/photos/64bae9eedaed59ebbf460ca6/4:3/w_2132,h_1599,c_limit/Oppenheimer-and-the-Dharma-of-Death-Culture.jpg',
      aspectRatio: '4/3'
    });
  });
});



