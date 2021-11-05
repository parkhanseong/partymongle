import Link from 'next/link'
import styles from '../styles/Home.module.css'
import storyStyles from '../styles/Story.module.css'
import Image from 'next/image'
import Gallery from 'react-grid-gallery';
import SimpleSlick from '../components/SimpleSlider';

const IMAGES =
[{
        src: "/image/gallery/halloween.JPG",
        thumbnail: "/image/gallery/halloween.JPG",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "/image/gallery/bbq.JPG",
        thumbnail: "/image/gallery/bbq.JPG",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "/image/gallery/bbq.JPG",
        thumbnail: "/image/gallery/table_setting.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "/image/gallery/terrace_table.jpg",
        thumbnail: "/image/gallery/terrace_table.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

export default function Home() {
    return (
    <div>
        {/* slider section */}
        <SimpleSlick>
        </SimpleSlick>

        {/* story section */}
        <section className={storyStyles.section}>
            <ul className={storyStyles.wrap}>
                {/* 스토리 */}
                <li>
                    <div className={storyStyles.imgWrap}>
                        <Image
                            src="/image/rooftop_sunshine.JPG"
                            alt="main logo"
                            width="400"
                            height="400"
                        />
                    </div>
                    <div className={storyStyles.storyArticle}>
                        <h2>
                            파티룸 몽글 스토리
                        </h2>
                        <p>
                            몽글은 1인 크리에이터의 사무실에서 시작되었습니다.
                            <br/>
                            예쁘고 아늑한 공간에서 일도 하고 지인들과 요리, 영화, 음악, 술을 즐기고자 탄생하였습니다
                        </p>
                    </div>
                </li>

                {/* 액티비티 */}
                <li>
                    <div className={storyStyles.activityArticle}>
                        <h2>
                            몽글에서 할 수 있는 것!!
                        </h2>
                        <ul>
                            <li>1. 도심속에서 캠핑 감성으로 테라스에서 지인들과 바베큐 파티</li> 
                            <li>2. 영화관처럼 4K 빔프로젝터로 영화 감상하기</li> 
                            <li>3. 소음 걱정없이 마음껏 노래 부르기</li> 
                            <li>4. 우리만의 프라이빗한 공간에서 사진 찍기</li> 
                            <li>5. 그 밖에도 생일, 모임, 브라이덜샤워, 과제 등 다양하게 이용 가능합니다</li> 
                        </ul>
                        
                    </div>
                    <div className={storyStyles.imgWrap}>
                        <Image
                            src="/image/rooftop_camping.JPG"
                            alt="main logo"
                            width="400"
                            height="400"
                        />
                    </div>
                </li>
            </ul>
        </section>

        {/* gallery section */}
        <section>
            <h2>
                몽글 image
            </h2>
            <Gallery images={IMAGES}
                enableLightbox={false}
                enableImageSelection={false}
            />
        </section>
        {/*  */}
        <footer>
            <h5>
                footer
            </h5>
        </footer>
    </div>
  )
}