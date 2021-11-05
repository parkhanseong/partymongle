import Nav from './Nav'
import Head from 'next/head'
import layoutStyles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={layoutStyles.wrap}>
            <Head>
                <title>
                    파티룸 몽글
                </title>
                <meta keyword={'대구파티룸, 대구 파티룸, 대구스튜디오, 대구브라이덜샤워, 대구생일파티'} />
                <meta keyword={'대구파티룸 대구루프탑파티룸 대구브라이덜샤워'} />
            </Head>
            <Nav />
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;