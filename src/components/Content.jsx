import Card from '../components/Card.jsx';

function Content() {
    return(
        <section className='content-section'>
            <Card title='Gaming accessories' img='https://images.unsplash.com/photo-1618339220157-daa2cd9ade56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjBjYXNlfGVufDB8fDB8fHww'/>
            <Card title='Creating business solutions' img='https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/cc_359_laptop_us_v1._SY304_CB576754001_.jpg' />
            <Card title='Toys under $25' img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg' />
            <Card title='Laptops for every need' img='https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/XCM_CUTTLE_1622894_3373440_379x304_1X_en_size1_US._SY304_CB597469214_.jpg' />
            <Card title='Deals on shoes' img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v8._SY304_CB573698005_.jpg' />
        </section>
    );
}

export default Content;