import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Guide.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Guide() {
  const data = [
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://img.freepik.com/premium-photo/two-girls-having-fun-before-music-festival-dancing-bridge_109710-4586.jpg',
      desc: 'Lucky Year',
    },
    {
      hrefImage:
        'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/04/Feature-image-Revisit-new2.jpg',
      desc: 'Beautiful Hotels Around The World',
    },
    {
      hrefImage: 'https://mymodernmet.com/wp/wp-content/uploads/2019/08/decorative-art-6.jpg',
      desc: 'Decorative Art',
    },
    {
      hrefImage:
        'https://media.architecturaldigest.com/photos/585ab4ae1f906f61574e6088/master/pass/art-nouveau-paris-04.jpg',
      desc: 'Art Nouveau',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/1252210017/vi/anh/c%C3%B4-g%C3%A1i-m%E1%BB%89m-c%C6%B0%E1%BB%9Di-ch%C6%A1i-tr%C3%AAn-x%C3%ADch-%C4%91u.jpg?s=612x612&w=0&k=20&c=TnE8yoaLU47MvhAnnJ2kX0JBE64cigAleO8Ll16QeZM=',
      desc: 'Pure Images',
    },
    {
      hrefImage: 'https://img.freepik.com/free-photo/woman-working-while-sitting-sofa_23-2148854143.jpg',
      desc: 'Xiaoman Wins Wanquan',
    },
    {
      hrefImage: 'https://cdn.tgdd.vn/Files/2020/10/28/1302780/1_800x450.jpg',
      desc: 'Coffee Addict',
    },
    {
      hrefImage: 'https://keytokids.com.au/wp-content/uploads/2017/01/parenting-perfection.jpg',
      desc: 'The Joy of Reading',
    },
    {
      hrefImage: 'https://worth.com/wp-content/uploads/2024/08/zalfa-imani-1xp5VxvyKL0-unsplash-420x280.jpeg',
      desc: 'Joy Suddenly Appears',
    },
    {
      hrefImage:
        'https://media.gettyimages.com/id/639361480/photo/little-girl-enjoying-winter-with-her-dog.jpg?s=612x612&w=0&k=20&c=pLf1ispWhbSyuGiACWL1SZJL5nDYm1xu0rz3fzhM3xs=',
      desc: 'Pet Healing Therapy',
    },
    {
      hrefImage:
        'https://media.assettype.com/analyticsinsight%2F2024-07%2F7c8b7c7a-d544-46f2-8be7-5fa519c01a8f%2FLooking_for_Metaverse_Virtual_Worlds_Here_are_Top_10_to_Explore.jpg',
      desc: 'Metaverse',
    },
    {
      hrefImage:
        'https://images.unsplash.com/photo-1580654712603-eb43273aff33?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D',
      desc: 'Black And Blue Cool',
    },
    {
      hrefImage: 'https://i.ebayimg.com/images/g/-GUAAOSwGzpfmNzT/s-l400.jpg',
      desc: 'Lilac Dream ',
    },
    {
      hrefImage:
        'https://www.munichdaytrips.com/daytrips/blog/899/image-thumb__899__image-bar-col3/salzburg-hohensalzburg-im-winter.0e42b882.jpg',
      desc: 'Leisurely Winter Days',
    },
    {
      hrefImage: 'https://i.pinimg.com/originals/33/d4/f9/33d4f9ab31daec271bcfac71ee9e7d24.jpg',
      desc: '2024 Year of The Dragon',
    },
    {
      hrefImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyotsU5euFv4P04jTijHaJ87XPsv0j-mhAySiTQioGk2f9tWGbIs6yL4ZBmw8n-60294&usqp=CAU',
      desc: 'Penton 2024 Color of The Year ',
    },
    {
      hrefImage: 'https://thumbs.dreamstime.com/b/girl-rainbow-9895758.jpg',
      desc: 'Rainbow Colors ',
    },
    {
      hrefImage:
        'https://www.menswearr.com/cdn/shop/files/Rekortmen-dizi-Peaky-Blinders-YazarC4B1-Cillian-MurphyE28099nin-Tommy-Shelby-PlanC4B1nC4B1-AC3A7C4B1kladC4B1-1200x900.webp',
      desc: 'old Money Aesthetics',
    },
    {
      hrefImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86MXG_TIibp6yOrEXlQ6hpvyf1aXqhf77eA&s',
      desc: 'Built-in Childlike Innocence',
    },
    {
      hrefImage: 'https://www.vietnambooking.com/wp-content/uploads/2024/06/du-lich-dai-loan-mua-dong-1.jpg',
      desc: '2024 Winter Color Trends',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/1186775601/vi/anh/nh%E1%BB%AFng-mi%E1%BA%BFng-s%C3%B4-c%C3%B4-la-nghi%E1%BB%81n-n%C3%A1t-bay.jpg?s=612x612&w=0&k=20&c=vaNOVAObibMxbtU_-_q4_GnvdpY3ZNl-VshzAQen7pk=',
      desc: 'The World of Chocolate',
    },
    {
      hrefImage:
        'https://lh6.googleusercontent.com/n5p3MaEFBRlz3Y-BmNaq0q-WN1aGleMdLt_SO_tZqpS9-1gkf3giyLHJiR0wrGONBQj1XgWdR8zGoQfCCV8TH59LbSyF4cMUQcU0xBW8x1D_y6jJ_-PlEs-gxu_PYMYnBYvDFQo_',
      desc: 'Photos of Old Age',
    },
    {
      hrefImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWsR9suc-1uCZDWgdEjnD76ncybZ7qWDK9g&s',
      desc: 'Winter Color Trend Mockups',
    },
    {
      hrefImage: 'https://wallpapersok.com/images/hd/optical-illusion-street-urban-art-pyqtm322md4xd1l6.jpg',
      desc: 'Optical illusion Art',
    },
  ];

  return (
    <div className={cx('wrapper')}>
      <div className={cx('guide')}>
        <h3 className={cx('title')}>- Image selection -</h3>
        <p className={cx('description')}>
          Hand-selected hundreds of selected collections to help you efficiently inject inspiration and creativity into
          your projects
        </p>

        <div className={cx('category')}>
          <Button
            to={`${config.routes.search}?query=${encodeURIComponent('Latest Recommendations')}?type=all`}
            square
            className={cx('category-item')}
          >
            Latest Recommendations
          </Button>

          <Button
            to={`${config.routes.search}?query=${encodeURIComponent('Oriental Characters')}?type=all`}
            square
            className={cx('category-item')}
          >
            Oriental Characters
          </Button>

          <Button
            to={`${config.routes.search}?query=${encodeURIComponent('Popular Topics')}?type=all`}
            square
            className={cx('category-item')}
          >
            Popular Topics
          </Button>

          <Button
            to={`${config.routes.search}?query=${encodeURIComponent('Illustration')}?type=all`}
            square
            className={cx('category-item')}
          >
            Illustration
          </Button>

          <Button
            to={`${config.routes.search}?query=${encodeURIComponent('Design Elements')}?type=all`}
            square
            className={cx('category-item')}
          >
            Design Elements
          </Button>

          <Button
            to={`${config.routes.search}?query=${encodeURIComponent('Visual Inspiration')}?type=all`}
            square
            className={cx('category-item')}
          >
            Visual Inspiration
          </Button>

          <Button
            to={`${config.routes.search}?query=${encodeURIComponent('More')}?type=all`}
            square
            className={cx('category-item')}
          >
            More
          </Button>
        </div>

        <div className={cx('galleries')}>
          <div className={cx('row')}>
            {data.map((item, index) => (
              <div key={index} className={cx('col')}>
                <div className={cx('galleries-item')}>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent(item.desc)}?type=all`}
                    className={cx('item-link')}
                  >
                    <Image className={cx('item-img')} alt={item.desc} src={item.hrefImage} />
                    <span className={cx('item-icon')}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <p className={cx('item-desc')}>{item.desc}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
