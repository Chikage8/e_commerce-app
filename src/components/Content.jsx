import Card from '../components/Card.jsx';
import imgUrls from '../imgUrls/imgUrls.js';

function Content() {
    return(
        <section className='content-section'>
            <Card className='desktop' title='High performance desktops' img='https://images.unsplash.com/photo-1618339220157-daa2cd9ade56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjBjYXNlfGVufDB8fDB8fHww'/>
            <Card className='other' title='Creating business solutions' img='https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/cc_359_laptop_us_v1._SY304_CB576754001_.jpg' />
            <Card className='other' title='Toys under $25' img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg' />
            <Card className='laptop' title='Laptops for every need' img='https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/XCM_CUTTLE_1622894_3373440_379x304_1X_en_size1_US._SY304_CB597469214_.jpg' />
            <Card className='other' title='Deals on shoes' img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v8._SY304_CB573698005_.jpg' />
            <Card className='other' title='Personal care under $25' img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v10._SY304_CB573698005_.jpg' />
            <Card className='other' title='A whole new way to work' img ='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_379x304_1X_en_US._SY304_CB597161294_.jpg' />
            <Card className='tablet' title='Samsung A8 tablets' img='https://m.media-amazon.com/images/I/41q00wcgGJL._AC_UF226,226_FMjpg_.jpg' />
            <Card className='mouse' title='High tech mouse' img={imgUrls.mouse_url} />
            <Card className='router' title='Latest tech routers' img={imgUrls.router_url} />
            <Card className='smartwatch' title='Trending smart watches' img={imgUrls.smartwatch_url} />
            <Card className='desktop' title='High resoulution monitors' img={imgUrls.monitor_url} />
        </section>
    );
}

export default Content;