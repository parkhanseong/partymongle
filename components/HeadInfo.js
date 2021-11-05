import Head from 'next/head'

const HeadInfo = ({title, keyword, contents}) => {
    return (
        <Head>
            <title>
                {title}
            </title>
            <meta keyword={keyword} />
            <meta keyword={contents} />
        </Head>
    );
};

HeadInfo.defaultProps = {
    title: '파티룸 몽글',
    keyword: '대구파티룸, 대구 파티룸, 대구스튜디오, 대구브라이덜샤워, 대구생일파티',
    content: '대구파티룸 대구루프탑파티룸 대구브라이덜샤워'
}

export default HeadInfo;