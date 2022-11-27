import ReachedItem from '../../moleculs/ReachedItem';


export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
    <div className="container-fluid">
      <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
        <div className="me-lg-35">
            <ReachedItem title='290M+' desk='Players Top Up'/>
        </div>
        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
        <div className="me-lg-35 ms-lg-35">
            <ReachedItem title='12.500' desk='Games Available' />
        </div>
        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
        <div className="me-lg-35 ms-lg-35">
            <ReachedItem title='99,9%' desk='Happy Players' />
        </div>
        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
        <div className="me-lg-35 ms-lg-35">
        <ReachedItem title='4.7' desk='Rating Worldwide' />
        </div>
      </div>
    </div>
  </section>
  )
}
