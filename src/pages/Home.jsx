import React from 'react'
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, {SectionBody, SectionTilte} from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import policy from '../assets/fake-data/policy'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

import heroSliderData from '../assets/fake-data/hero-slider'
import productData from '../assets/fake-data/products';

import banner from '../assets/images/banner.jpg';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  return (
    <Helmet title="Home">
      {/* Hero Slider*/}
        <HeroSlider
          data = {heroSliderData}
          control = {true}
          auto = {false}
          timeOut = {5000}
        />
      {/*End Hero Slider*/}
      <ScrollToTop />
      {/*/policy section*/}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {
              policy.map((item, index) => <Link key={index} to="/policy">
                  <PolicyCard
                    name={item.name}
                    description = {item.description}
                    icon={item.icon}
                  />
              </Link>)
            }
          </Grid>
        </SectionBody>
      </Section>
      {/*/ end policy section*/}

      {/*best selling section*/}
      <Section>
        <SectionTilte>
                Top sản phẩm bán chạy
        </SectionTilte>
        <SectionBody>
              <Grid col={4} mdCol={2} smCol={2} gap={20}>
                  {
                    productData.getProducts(4).map((item, index) => (
                      <ProductCard
                        key={index}
                        img01={item.image01}
                        img02={item.image02}
                        name={item.title}
                        price={Number(item.price)}
                        slug={item.slug}
                      />
                    ))
                  }
              </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section*/}

      {/* new arrival section*/}
      <Section>
        <SectionTilte>
            Những sản phẩm mới
        </SectionTilte>
        <SectionBody>
              <Grid col={4} mdCol={2} smCol={2} gap={20}>
                  {
                    productData.getProducts(8).map((item, index) => (
                      <ProductCard
                        key={index}
                        img01={item.image01}
                        img02={item.image02}
                        name={item.title}
                        price={Number(item.price)}
                        slug={item.slug}
                      />
                    ))
                  }
              </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section*/}
      {/* banner*/}
          <Section>
            <SectionBody>
              <Link to="/catalog">
                <img src={banner} alt="banner"/>
              </Link>
            </SectionBody>
          </Section>
      {/* end banner*/}
      
      {/*Popular Product*/}
      <Section>
        <SectionTilte>
            Sẩn phẩm phổ biến
        </SectionTilte>
        <SectionBody>
              <Grid col={4} mdCol={2} smCol={2} gap={20}>
                  {
                    productData.getProducts(12).map((item, index) => (
                      <ProductCard
                        key={index}
                        img01={item.image01}
                        img02={item.image02}
                        name={item.title}
                        price={Number(item.price)}
                        slug={item.slug}
                      />
                    ))
                  }
              </Grid>
        </SectionBody>
      </Section>
      {/* End Popular Product*/}
    </Helmet>
  )
}

export default Home
