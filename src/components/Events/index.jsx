import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import styles from './Events.module.scss'

const Events = () => {
	return (
		<a name='events'>
			<main className={styles.main}>
				<img
					src='src/assets/icons/events/blob1.svg'
					alt='blob'
					className={styles.blob1}
				/>
				<img
					src='src/assets/icons/events/blob2.svg'
					alt='blob'
					className={styles.blob2}
				/>
				<img
					src='src/assets/icons/events/blob3.svg'
					alt='blob'
					className={styles.blob3}
				/>
				<div className={styles.titleBlock}>
					<h1>МЕРОПРИЯТИЯ КОММЬЮНИТИ</h1>
					<h2>мэтч активного отдыха и классного офиса</h2>
				</div>

				<Splide
					hasTrack={false}
					options={{
						type: 'loop',
						// perPage: '5',
						focus: 'center',
						gap: '2vw',
						autoWidth: 'true',
					}}
				>
					<SplideTrack>
						<SplideSlide>
							<div className={styles.sliderText}>Творческий вечер</div>
							<img
								className={styles.sliderImg}
								src='src/assets/photos/eventsPageSlider/image1.jpg'
								alt='Image 1'
							/>
						</SplideSlide>
						<SplideSlide>
							<div className={styles.sliderText}>Походы</div>
							<img
								className={styles.sliderImg}
								src='src/assets/photos/eventsPageSlider/image2.jpg'
								alt='Image 2'
							/>
						</SplideSlide>
						<SplideSlide>
							<div className={styles.sliderText}>Киновечер</div>
							<img
								className={styles.sliderImg}
								src='src/assets/photos/eventsPageSlider/image3.jpg'
								alt='Image 3'
							/>
						</SplideSlide>
						<SplideSlide>
							<div className={styles.sliderText}>Творческий вечер</div>
							<img
								className={styles.sliderImg}
								src='src/assets/photos/eventsPageSlider/image4.jpg'
								alt='Image 4'
							/>
						</SplideSlide>
						<SplideSlide>
							<div className={styles.sliderText}>Регаты</div>
							<img
								className={styles.sliderImg}
								src='src/assets/photos/eventsPageSlider/image5.jpg'
								alt='Image 5'
							/>
						</SplideSlide>
					</SplideTrack>
				</Splide>
			</main>
		</a>
	)
}

export default Events
